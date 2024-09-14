# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2024-09-14

### Added
- **Redis Cache for Company and Employee Services**: Redis caching was added for the company and employee services to enhance performance.
    - Redis configurations applied for development, production, and test environments.
    - Implemented caching using `@Cacheable` and `@CacheEvict` for company and employee lists, paginated results, and search by name.
    - Added `spring-boot-starter-data-redis` dependency in the `pom.xml` file.
    - Updated Docker Compose to include the Redis service in both local and production setups.

### Changed
- **Dockerfile and Docker Compose Improvements**: The Docker setup has been optimized for performance and better resource usage.
    - Updated to use a more recent base image for Maven and Eclipse Temurin.
    - Resource limits and reservations for CPU and memory adjusted in Docker Compose for the app, database, and Redis.

- **Global Style Overhaul**: A new theme system has been implemented with support for both light and dark modes.
    - A toggle button was added to switch between light and dark themes, with the preference stored in `localStorage`.
    - CSS updated to ensure better styling across all themes, including adjustments to tables and pagination elements.

### Fixed
- **Cache Expiration Issues**: Fixed problems with Redis cache expiration, ensuring that the cache now expires correctly in all environments.

### Pull Requests
- [#10](https://github.com/gabrizord/gzgestao/pull/10) - Add Redis caching to company and employee services.
- [#9](https://github.com/gabrizord/gzgestao/pull/9) - Implement light/dark theme toggle and global style revisions.

## [0.2.0] - 2024-09-07

### Added
- **Search functionality**: Added search functionality for `Company` and `Employee` modules, allowing users to search by name through the `/search` endpoint.
- **Front-end search bar**: Implemented search bars in both the company and employee management views, enabling real-time search and dynamic table updates.

### Changed
- **DTO updates**: Renamed the `phone` field to `phoneNumber` in `CompanyDTO` and `EmployeeDTO`.
- **Update endpoints**: Introduced `PUT` endpoints for updating company and employee details using new DTOs.

### Fixed
- **Unique constraint removal**: Removed the unique constraint on the `name` field in `Employee` to avoid conflicts with duplicate names.
- **Validation improvements**: Enhanced validation for CNPJ in company updates and improved email validation for employees.

### Pull Requests
- [#8](https://github.com/gabrizord/gzgestao/pull/8) - Add search functionality for companies and employees.
- [#6](https://github.com/gabrizord/gzgestao/pull/6) - Implement update functionality for companies and employees.

## [0.1.1] - 2024-09-01

### Added

- Triggered GitHub Actions workflow on release events.
- Extracted version from `pom.xml` for Docker image tagging.
- Created `CHANGELOG.md` file.

### Changed

- Optimized Dockerfile with cached dependencies and multi-stage build.
- Updated workflow to use the extracted version as the Docker image tag.
- Renamed build step in the workflow to "Build and push to Docker Hub."

### Fixed

- Improved deploy script with better environment variable handling and removed redundant comments.

## [0.1.0] - 2024-09-01

### Added

* Implemented the Company Management UI.
* Enhanced company management features, including pagination and sorting in the company listing.
* Added styles and functionality for company registration in the system.

### Changed

* Removed `employee-styles.css` and consolidated styles into existing table and form files.
* Removed redundant comments in `company-script.js` and `employee-script.js`.
* Extracted common form submission and delete action logic into `form-util.js`.

### Fixed

* Corrected the selector for the delete confirmation button in `form-util.js`.

## [Unreleased]

* Coming soon...