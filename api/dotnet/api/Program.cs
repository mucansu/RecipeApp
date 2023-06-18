// Minimal C# api, small but useful in smaller projects
// This is just an example to get Docker up and running.

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/dotnet", () => "Hello from C# .Net Core!");

app.Run("http://*:8080");
