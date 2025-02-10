import { FizzBuzz } from "../src/FizzBuzz";

describe("FizzBuzz Kata", () => {
    test.each([
        [1, "1"],
        [2, "2"],
        [3, "Fizz"],
        [5, "Buzz"],
        [6, "Fizz"],
        [10, "Buzz"],
        [15, "FizzBuzz"],
        [30, "FizzBuzz"],
        [13, "Fizz"],
        [59, "Buzz"],
        [53, "FizzBuzz"]
    ])("FizzBuzz.compute(%i) doit retourner %s", (input, expected) => {
        expect(FizzBuzz.compute(input)).toBe(expected);
    });
});
