FROM openjdk:19-jdk-alpine
COPY api/target/api-0.0.1-SNAPSHOT.jar api.jar
ENV spring.datasource.url="jdbc:mariadb://myMaria:3306/academyrecepie"
ENTRYPOINT ["java","-jar","/api.jar"]
