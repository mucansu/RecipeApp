# Mock server

Mock server is a great tool for quickly setting up an API for test or during early development.

Basically you tell mock server which input you want, and what the output (respone) should be.

And you can easily run it in Docker, take a look at the Dockerfile in this folder.
To run your mock server, first edit the initializerJson.json file then build your image:
```
docker build . -f .\Dockerfile -t academy/api-mock
```

Then run your server, in this case we keep it in the same network as the rest of our containers:
```
docker run -d -p 1080:1080 --network --name mock-api academy/api-mock
```

Read more here: https://www.mock-server.com/