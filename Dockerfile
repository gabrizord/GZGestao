# Docker image build for GZGest o
#
# This Dockerfile creates the GZGest o image using the following steps:
#
# 1. Maven 3.9.8-eclipse-temurin-21-jammy base image
# 2. Copy pom.xml and install dependencies using offline mode
# 3. Copy source code and build the application
# 4. Copy the JAR file to the /app directory
# 5. Create a user and change to that user
# 6. Start the application with the JAR file

FROM maven:3.9.8-eclipse-temurin-21-jammy AS build

WORKDIR /app

COPY pom.xml ./

RUN mvn dependency:go-offline -B

COPY src ./src

RUN mvn package -DskipTests -B

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

RUN useradd -m myuser

USER myuser

ENTRYPOINT ["java", "-jar", "app.jar"]