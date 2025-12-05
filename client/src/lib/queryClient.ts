import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * Helper function to check if a response is successful (status 200-299).
 * Throws an error with status and text if not ok.
 *
 * @param {Response} res - The response object to check.
 * @throws {Error} If the response status is not ok.
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * Performs an API request using the Fetch API.
 * Automatically sets Content-Type header for JSON data and handles credentials.
 *
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE, etc.).
 * @param {string} url - The URL to request.
 * @param {unknown} [data] - The data to send in the request body (optional).
 * @returns {Promise<Response>} A promise that resolves to the Response object.
 * @throws {Error} If the response status is not ok (via throwIfResNotOk).
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";

/**
 * Creates a default QueryFunction for React Query.
 * Fetches data from a URL constructed by joining the queryKey parts.
 *
 * @template T - The expected return type of the query.
 * @param {Object} options - Configuration options.
 * @param {UnauthorizedBehavior} options.on401 - Behavior when a 401 Unauthorized response is received.
 * @returns {QueryFunction<T>} A function compatible with React Query's queryFn.
 */
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

/**
 * Global QueryClient instance for React Query.
 * Configured with default options for queries and mutations.
 *
 * Defaults:
 * - refetchInterval: false
 * - refetchOnWindowFocus: false
 * - staleTime: Infinity
 * - retry: false
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
