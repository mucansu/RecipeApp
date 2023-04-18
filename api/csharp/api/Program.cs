var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/csharp", () => "Hello from C# .Net Core!");

app.Run("http://*:8080");
