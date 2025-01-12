const string input = "<div><h2>Widgets &trade;</h2><span>5000</span></div>";

const string openSpan = "<span>";
const string closeSpan = "</span>";
const string openDiv = "<div>";
const string closeDiv = "</div>";

int startingSpan = input.IndexOf(openSpan);
int endingSpan = input.IndexOf(closeSpan, startingSpan);
int startingDiv = input.IndexOf(openDiv);
int endingDiv = input.IndexOf(closeDiv, startingDiv);

startingSpan += openSpan.Length;
startingDiv += openDiv.Length;

string quantity = input.Substring(startingSpan, endingSpan - startingSpan);
string output = input.Substring(startingDiv, endingDiv - startingDiv).Replace("&trade;", "&reg;");

Console.WriteLine($"Quantity: {quantity}");
Console.WriteLine($"Output: {output}");