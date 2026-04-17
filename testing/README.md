# Testing Suite

This folder contains the testing setup for the FSD2 project, demonstrating full-stack testing with CI/CD integration.

## Structure

- `experiment-6/`: Frontend testing with React and Vitest
- `experiment-8/`: Backend testing with Flask and pytest

## Backend Tests (experiment-8)

- **Framework**: Flask
- **Testing**: pytest
- **Routes Tested**: Student CRUD operations (create, read, update, get all, get one)
- **Local Run**: 
  ```bash
  cd experiment-8
  python -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
  pytest
  ```

## Frontend Tests (experiment-6)

- **Framework**: React with Vite
- **Testing**: Vitest
- **Local Run**:
  ```bash
  cd experiment-6
  npm install
  npm run test
  ```

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs backend tests automatically on:
- Push to `main` branch
- Pull requests

Frontend tests are prepared but commented out in the CI config. Uncomment the `frontend-test` job in `ci.yml` to enable them.

## What We Did

1. Set up Flask backend with student management API
2. Wrote pytest tests for backend endpoints
3. Configured GitHub Actions for automated testing
4. Prepared React frontend with Vitest setup
5. Ensured dependencies are properly managed

The CI ensures code quality by running tests on every change.

ScreenShots : 

