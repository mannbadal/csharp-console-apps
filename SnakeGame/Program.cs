Random random = new Random();
int height = Console.WindowHeight - 1;
int width = Console.WindowWidth - 5;
bool shouldExit = false;

List<(int x, int y)> snake = new List<(int x, int y)>();
(int x, int y) food = default;

int direction = 0; // 0: right, 1: down, 2: left, 3: up

Console.CursorVisible = false;

InitializeGame();
while (!shouldExit)
{
    if (TerminalResized())
    {
        Console.Clear();
        Console.Write("Console was resized. Program exiting.");
        shouldExit = true;
    }
    else
    {
        Move();
        if (GotFood())
        {
            GrowSnake();
            ShowFood();
        }
        Thread.Sleep(100); // Control game speed
    }
}

void InitializeGame()
{
    Console.Clear();
    snake.Add((width / 2, height / 2));
    ShowFood();
    DrawSnake();
}

bool TerminalResized()
{
    return height != Console.WindowHeight - 1 || width != Console.WindowWidth - 5;
}

void ShowFood()
{
    food = (random.Next(0, width), random.Next(0, height));
    Console.SetCursorPosition(food.x, food.y);
    Console.Write("@");
}

void Move()
{
    var head = snake.First();
    var newHead = head;

    switch (Console.ReadKey(true).Key)
    {
        case ConsoleKey.UpArrow:
            direction = 3;
            break;
        case ConsoleKey.DownArrow:
            direction = 1;
            break;
        case ConsoleKey.LeftArrow:
            direction = 2;
            break;
        case ConsoleKey.RightArrow:
            direction = 0;
            break;
        case ConsoleKey.Escape:
            shouldExit = true;
            return;
    }

    switch (direction)
    {
        case 0:
            newHead.x++;
            break;
        case 1:
            newHead.y++;
            break;
        case 2:
            newHead.x--;
            break;
        case 3:
            newHead.y--;
            break;
    }

    if (newHead.x < 0 || newHead.x >= width || newHead.y < 0 || newHead.y >= height || snake.Contains(newHead))
    {
        shouldExit = true;
        return;
    }

    snake.Insert(0, newHead);
    var tail = snake.Last();
    snake.RemoveAt(snake.Count - 1);

    Console.SetCursorPosition(tail.x, tail.y);
    Console.Write(" ");
    DrawSnake();
}

void DrawSnake()
{
    foreach (var segment in snake)
    {
        Console.SetCursorPosition(segment.x, segment.y);
        Console.Write("#");
    }
}

bool GotFood()
{
    return snake.First().Equals(food);
}

void GrowSnake()
{
    snake.Add(snake.Last());
}
