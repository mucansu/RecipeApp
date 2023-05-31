FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR /app

# This REQUIRES that we have built the project BEFORE we build the image: dotnet build
COPY ./bin/Debug/net6.0/ ./

ENTRYPOINT ["dotnet", "dockerfile_demo.dll"]
