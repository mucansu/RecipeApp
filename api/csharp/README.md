### Option 1, build the application first then copy
>docker build . -f .\Dockerfile -t pattzor/myweb  

### Option 2, copy the code and build on the run
>docker build . -f .\Dockerfile2 -t pattzor/mywebnet

### Run the application
>docker run -d -p 8080:8080 --name myWebNet pattzor/mywebnet
