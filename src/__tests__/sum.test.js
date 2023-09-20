import { sum } from "../components/sum";

test("Sum function should calculate the sum of two numbers", () => {

    const result = sum(3,4);

    // Assertion
    expect(result).toBe(7);

    // now run using npm run test
})