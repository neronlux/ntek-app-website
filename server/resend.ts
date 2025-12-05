import { Resend } from 'resend';

/**
 * Initializes and returns a Resend client instance.
 *
 * Retrieves the API key from the `RESEND_API_KEY` environment variable.
 *
 * @throws {Error} If `RESEND_API_KEY` is not set in the environment variables.
 * @returns {Resend} A configured Resend client instance.
 */
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  
  return new Resend(apiKey);
}
