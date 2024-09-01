# Multi-stage Dockerfile: Build and run a Java application

# Stage 1: Use Maven to build the application, skipping tests.
FROM maven:3.9.8-eclipse-temurin-21-jammy AS build

# Set the working directory
WORKDIR /app

# Copy the POM file first
COPY pom.xml ./

# Cache Maven dependencies
RUN mvn dependency:go-offline -B

# Copy the source code only if dependencies are resolved
COPY src ./src

# Build the application, skipping tests
RUN mvn package -DskipTests -B

# Stage 2: Run the application using a non-root user
FROM eclipse-temurin:21-jre-jammy

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Create a non-root user
RUN useradd -m myuser

# Set the user
USER myuser

# Set the entrypoint
ENTRYPOINT ["java", "-jar", "app.jar"]
