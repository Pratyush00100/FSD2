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

<img width="2879" height="1799" alt="Screenshot From 2026-04-17 09-54-45" src="https://github.com/user-attachments/assets/57aabd79-0157-419e-971e-8602d21db426" />

<img width="2876" height="1609" alt="Screenshot From 2026-04-17 21-09-23" src="https://github.com/user-attachments/assets/c2f83972-2e96-4336-8c8a-352642597d12" />

<img width="2869" height="1713" alt="Screenshot From 2026-04-17 21-02-53" src="https://github.com/user-attachments/assets/945662fe-3887-47bb-b65c-386caa8217ed" />

<img width="2879" height="1799" alt="Screenshot From 2026-04-17 10-41-11" src="https://github.com/user-attachments/assets/46f1322b-2786-4f3c-870a-e53b18cea683" />





