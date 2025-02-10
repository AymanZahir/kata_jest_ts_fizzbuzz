export class FizzBuzz {
    static compute(n: number): string {
        const contains3 = n.toString().includes("3");
        const contains5 = n.toString().includes("5");
        const isMultipleOf3 = n % 3 === 0;
        const isMultipleOf5 = n % 5 === 0;

        if ((isMultipleOf3 && isMultipleOf5) || (contains3 && contains5)) {
            return "FizzBuzz";
        }
        if (isMultipleOf3 || contains3) {
            return "Fizz";
        }
        if (isMultipleOf5 || contains5) {
            return "Buzz";
        }
        return n.toString();
    }
}
