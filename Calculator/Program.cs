// A simple calculator that can perform basic operations like addition, subtraction, multiplication, and division.

namespace Calculator;

internal static class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first number:");
        double num1 = double.Parse(Console.ReadLine() ?? throw new InvalidOperationException());

        Console.WriteLine("Enter the second number:");
        double num2 = double.Parse(Console.ReadLine() ?? throw new InvalidOperationException());

        Console.WriteLine("Enter one of the operation:(+,-,*,/)");
        string operation = Console.ReadLine() ?? throw new InvalidOperationException();

        double result;

        switch (operation)
        {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                Console.WriteLine("Invalid operation");
                return;
        }

        Console.WriteLine($"The result is: {result}");

        Console.WriteLine("Do you want to perform another operation? (yes/no)");

        string answer = Console.ReadLine() ?? throw new InvalidOperationException();

        if (answer == "yes")
        {
            Main();
        }

        Console.WriteLine("Goodbye!");
    }
}