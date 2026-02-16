import { contactFormSchema } from "../routes";

// Test cases
const tests = [
    {
        name: "Valid Input",
        input: { name: "Test User", email: "test@example.com", message: "This is a valid message." },
        shouldPass: true
    },
    {
        name: "Name too long",
        input: { name: "a".repeat(101), email: "test@example.com", message: "This is a valid message." },
        shouldPass: false
    },
    {
        name: "Email too long",
        input: { name: "Test User", email: "a".repeat(300) + "@example.com", message: "This is a valid message." },
        shouldPass: false
    },
    {
        name: "Message too long",
        input: { name: "Test User", email: "test@example.com", message: "a".repeat(5001) },
        shouldPass: false
    }
];

let allPassed = true;
let passedCount = 0;

for (const test of tests) {
    const result = contactFormSchema.safeParse(test.input);
    const passed = result.success === test.shouldPass;

    if (passed) {
        console.log(`PASS: ${test.name}`);
        passedCount++;
    } else {
        console.log(`FAIL: ${test.name}`);
        console.log(`Expected success: ${test.shouldPass}, got: ${result.success}`);
        if (!result.success) console.log(result.error);
        allPassed = false;
    }
}

if (allPassed) {
    console.log(`\nSECURE: All ${tests.length} tests passed.`);
} else {
    console.log(`\nINSECURE: Only ${passedCount}/${tests.length} tests passed.`);
    process.exit(1);
}
