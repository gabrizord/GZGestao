# Multi-stage Dockerfile: Build and run a Java application
# - Stage 1: Use Maven to build the application, skipping tests.
# - Stage 2: Run the application using a non-root user.

# Build stage
FROM maven:3.9.8-eclipse-temurin-21-jammy AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Execution stage
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
RUN useradd -m myuser
USER myuser
ENTRYPOINT ["java", "-jar", "app.jar"]
