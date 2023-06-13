### Welcome to the Java API documentation
>This is where some documentation on how to get started would be nice

### Docker 

### !!!! For the API to run you need the database to be running in docker !!!!
###   ** See instructions in the bottom of the readme file located in the database folder **

To run your api in a Docker container:

First to generate a .jar file of the API, go to the "Maven" tab on the right
side of the screen in intelliJ, in the "api" folder open the "Lifecycle" folder
and double-click the "install" command.

Open up a terminal and make sure you are in the folder the dockerfile is located
(/api/java)

Then follow the instructions below.

Build your container:  
>docker build . -t api-java

Run your container (as a service):  
>docker run -d -p 8080:8080 --network skynet --name javaapi api-java:latest  

This will run the container in the background with the name javaapi.  
You can start/stop your container from Docker desktop.

You can test your API using Postman on port 8080 on localhost:
>http://localhost:8080/java

Or you could test using curl:
>curl -v http://localhost:8080/java
