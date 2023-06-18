### Build the Docker image
>docker build . -t pattzor/api-node

### Run the container in terminal
>docker run -p 8080:8080 --name api-node pattzor/api-node

### Run the container as a deamon (service)
>docker run -d -p 8080:8080 --name api-node pattzor/api-node