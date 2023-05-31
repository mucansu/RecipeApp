FROM mcr.microsoft.com/dotnet/sdk:7.0 AS sdk
WORKDIR /app

COPY ./ ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=sdk /app/out ./

ENV ConnectionStrings__Foodzilla="server=myMaria;port=3306;user=root;password=password1234;database=foodzilla"
ENV ASPNETCORE_URLS="http://+:5000"

ENTRYPOINT ["dotnet", "academy-docker-demo.dll"]