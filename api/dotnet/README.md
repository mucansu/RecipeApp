### Build the proxy container  

Make sure that you are in the same folder as the Dockerfile.
>docker build . -t pattzor/api-net

This will build using the default Dockerfile

### Option 1, build the application first then copy
>docker build . -f .\Dockerfile -t pattzor/api-net  

### Option 2, copy the code and build on the run
>docker build . -f .\Dockerfile2 -t pattzor/api-net

### Run the application
>docker run -d -p 8080:8080 --name api-net pattzor/api-net

You should now be able to access http://localhost:8080/dotnet
