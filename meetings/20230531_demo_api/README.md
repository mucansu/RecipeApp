# Docker, MariaDB and C# WebAPI Demo

Some notes to get you by.

Create new project:  
```
dotnet new webapi
```

Add db context package for MySQL (MariaDB):  
```
dotnet add package Pomelo.EntityFrameworkCore.MySql
```

Set the connection string in appsettings*.json:
```
"AllowedHosts": "*",
  "ConnectionStrings": {
    "Foodzilla" : "server=localhost;port=3307;user=root;password=password1234;database=foodzilla"
  }
```

Set the connectionstring on the run:
```
set ConnectionStrings__Foodzilla=server="<someserver>"
```

Start MariaDB in Docker to match the connection string in appsetting.Development.json.
Note the ports! (...and the network!)
```
docker run -d -p 3307:3306 --network skynet --env MARIADB_ROOT_PASSWORD=password1234 --name myMaria mariadb:latest
```

Scaffold and create the database:
```
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet ef migrations add InitialCreate
dotnet ef database update
```

Build the image
```
docker build . -f .\Dockerfile -t academy/api-demo
```

Run the container
```
docker run -d -p 8080:5000 -p 443:5001 --network skynet --name api-demo academy/api-demo
```