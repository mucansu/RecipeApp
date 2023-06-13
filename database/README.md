install docker hub on your desktop.  https://www.docker.com/products/docker-desktop/
create a directory( folder) and open cmd in that directorty.
create a yml file using the following command in cmd : echo > docker-compose.yml

once the file is created. add the code in the yml file. code is in the uploaded yml file.
Replace the following values in the code with your own values:

your_root_password: The root password for your database.
your_database_name: The name of your database. tip: (add the same database name in voloumes)
your_username: Your username for the database.
your_password: Your password for the database.

3307:3306 (3307 port is the local host port and 3306 is the containers port. you can have 3306:3306 also).

save the yml file.


once yml file is saved, create a docker container with the help of the command: docker-compose up -d
now the container is up and running.

you can access the database in the container with the help of the command: mysql -h <host IP> -P 3306 -u your_username -p
Replace host IP with the IP address/ hostname of the machine running the container and your_username with the username you specified in the docker-compose.yml file

You can now create tables, insert data, and perform other operations on the database just as you would with a local database.


### TO RUN DATABASE IN DOCKER (Skip steps above)
Write code below to run database in a container in docker

docker run -d -p 3307:3306 --network skynet --env MARIADB_ROOT_PASSWORD=password1234 
--env MARIADB_DATABASE=academyrecepie --env MARIADB_USER=foodzilla 
--env MARIADB_PASSWORD=foodzilla --name myMaria mariadb:latest
