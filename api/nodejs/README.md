### Build the Docker image
>docker build . -t pattzor/node-web-app

### Run the container in terminal
>docker run -p 8080:8080 --name node-web-app pattzor/node-web-app

### Run the container as a deamon (service)
>docker run -d -p 8080:8080 --name node-web-app pattzor/node-web-app