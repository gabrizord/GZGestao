# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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