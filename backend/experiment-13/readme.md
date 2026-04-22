# Experiment 20 – CI/CD Pipeline using Docker & GitHub Actions

## Objective

To implement a Continuous Deployment (CD) pipeline for a Flask application using Docker and GitHub Actions.

---

## Technologies Used

* Python (Flask)
* MySQL
* Docker & Docker Compose
* GitHub Actions

---

## Project Structure

```
FSD2/
│── backend/
│   └── experiment-13/
│       ├── app.py
│       ├── Dockerfile
│       ├── docker-compose.yml
│       ├── requirements.txt
│       ├── test_app.py
│
│── .github/
│   └── workflows/
│       └── cicd.yml
```

---

### Dockerfile

* Used Python base image
* Installed dependencies from `requirements.txt`
* Executed application using `python app.py`

### docker-compose.yml

* Defined two services:

  * `db` (MySQL)
  * `backend` (Flask app)
* Enabled service dependency using healthcheck

---

## Step 3: Run Application Locally

```
docker compose up --build
```

Access:

```
http://localhost:8000
```

---

## Step 4: CI/CD Pipeline (GitHub Actions)

Workflow file:

```
.github/workflows/cicd.yml
```

### Steps:

1. Checkout repository
2. Setup Docker
3. Build Docker image
4. Run container

```
docker build -t my-backend-app ./backend/experiment-13
docker run -d -p 5000:5000 my-backend-app
```

---

## Step 5: Trigger Pipeline

```
git add .
git commit -m "Added CI/CD pipeline"
git push origin main
```

Pipeline automatically builds and deploys the application on each push.

---

## Output Screenshots
<img width="2879" height="1799" alt="Screenshot From 2026-04-22 14-04-40" src="https://github.com/user-attachments/assets/5e37b266-d8ce-4920-9571-ecf1a19c1d11" />
<img width="1414" height="1683" alt="Screenshot From 2026-04-22 14-18-24" src="https://github.com/user-attachments/assets/6e86a4de-68a0-4afe-8cf7-917eec059edf" />
<img width="2879" height="1799" alt="Screenshot From 2026-04-22 14-42-35" src="https://github.com/user-attachments/assets/00b55b7c-a896-44e5-a6a4-3563f02c9ee0" />
<img width="2879" height="1799" alt="Screenshot From 2026-04-22 14-17-33" src="https://github.com/user-attachments/assets/264a73d9-7774-43fe-8952-d19b6d48b0e5" />


* Docker containers running
* GitHub Actions workflow success

---

## Important Notes

* Docker build path must match project location:

  ```
  ./backend/experiment-13
  ```
* MySQL host inside Docker:

  ```
  db
  ```
* SSL disabled for local MySQL connection

---

## Conclusion

A CD pipeline was implemented where code push triggers automated Docker build and deployment using GitHub Actions.

---

## Summary

Push → Build Docker Image → Run Container
