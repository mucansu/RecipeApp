### Welcome to the Java API documentation
>This is where some documentation on how to get started would be nice

### Docker 

To run your api in a Docker container, open up a terminal and make sure you are where the Dockerfile is located.

Build your container:  
>docker build . -t pattzor/api-java .  

Run your container (in terminal):  
>docker run -p 8080:8080 api-java:latest  

Note that your running container will get a random name.

Run your container (as a service):  
>docker run -d -p 8080:8080 --name myJavaApi api-java:latest  

This will run the container in the background with the name myJavaApi.  
You can start/stop your container from Docker desktop.

You can test your API using Postman on port 8080 on localhost:
>http://localhost:8080/java

Or you could test using curl:
>curl -v http://localhost:8080/java
