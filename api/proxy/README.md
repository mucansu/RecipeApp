## nginx 

nginx is a small and (very!) versatile web server that do most things with http/https traffic.  

In this case we use the reverse proxy functionality to send requests to the correct container.  

It is important that all containers run in the same network, in our case we call it skynet.  

### Build the proxy container  

Make sure that you are in the same folder as the Dockerfile:
>docker build . -t pattzor/api-proxy

### Start the api backend  

Create the docker network:
>docker network create skynet

Start the C#/.NET api container:
>docker run -d --network skynet --name api-net pattzor/api-net

Start the Java api container:
>docker run -d --network skynet --name api-java pattzor/api-java

Start the NodeJS api container:
>docker run -d --network skynet --name api-node pattzor/api-node

Start the api proxy and expose the 8080 port:
>docker run -d -p 8080:80 --network skynet --name api-proxy pattzor/api-proxy

Now you should be able to access all api:s through the proxy.  
Note that you can not access any api directly, since we haven't exposed any ports.  
