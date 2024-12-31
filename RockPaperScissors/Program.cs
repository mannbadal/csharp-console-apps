// Purpose: A simple Rock, Paper, Scissors game.

namespace RockPaperScissors;

internal static class Program
{
    static string GetComputerMove()
    {
        Random random = new Random();
        int randomNumber = random.Next(3);

        if (randomNumber == 0)
        {
            return "rock";
        }
        else if (randomNumber == 1)
        {
            return "paper";
        }
        else
        {
            return "scissors";
        }
    }

    static string DetermineWinner(string userMove, string computerMove)
    {
        if (userMove == computerMove)
        {
            return "It's a tie!";
        }
        else if (userMove == "rock" && computerMove == "scissors" ||
                 userMove == "paper" && computerMove == "rock" ||
                 userMove == "scissors" && computerMove == "paper")
        {
            return "You win!";
        }
        else
        {
            return "You lose!";
        }
    }

    static void Main()
    {
        Console.WriteLine("Welcome to Rock, Paper, Scissors!");
        string userMove;
        while (true)
        {
            Console.WriteLine("Enter your move (rock, paper, scissors):");
            userMove = Console.ReadLine()?.ToLower() ?? throw new InvalidOperationException();
    
            if (userMove == "rock" || userMove == "paper" || userMove == "scissors")
            {
                break;
            }

            Console.WriteLine("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        }

        Console.WriteLine("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        string computerMove = GetComputerMove();

        Console.WriteLine($"The computer chose: {computerMove}");

        string result = DetermineWinner(userMove, computerMove);

        Console.WriteLine(result);

        Console.WriteLine("Thanks for playing!");
        
        Console.WriteLine("Would you like to play again? (yes/no)");
        string playAgain = Console.ReadLine() ?? "no";
        
        if (playAgain == "yes")
        {
            Main();
        }
    }
}