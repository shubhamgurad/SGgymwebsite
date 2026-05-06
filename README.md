# 🏋️ Gym Website - DevOps Project

🚀 **End-to-End DevOps Implementation using Docker, Terraform, AWS, and CI/CD**

---

## 📌 Project Overview

This project demonstrates how a static web application (Gym Website) can be containerized, deployed on AWS infrastructure, and automated using a CI/CD pipeline.

The goal is to showcase real-world DevOps practices including Infrastructure as Code (IaC), containerization, and continuous deployment.

---

## 🏗️ Architecture

```
GitHub → GitHub Actions → Docker Build → DockerHub → AWS EC2 → Nginx Container
                         ↓
                    Terraform (Infra Provisioning)
```

---

## 🛠️ Tech Stack

* ☁️ AWS (EC2)
* 🐳 Docker
* ⚙️ Terraform (Infrastructure as Code)
* 🔁 GitHub Actions (CI/CD)
* 🌐 Nginx (Web Server)
* 💻 HTML, CSS, JavaScript

---

## 🚀 Features

* Containerized application using Docker
* Automated infrastructure provisioning using Terraform
* CI/CD pipeline for build and deployment
* Deployment on AWS EC2
* Scalable and repeatable infrastructure setup

---

## 📂 Project Structure

```
SGgymwebsite/
│
├── Dockerfile
├── terraform/
│   └── main.tf
├── .github/workflows/
│   └── deploy.yml
├── index.html
├── css/
├── js/
```

---

## 🐳 Docker Setup

### Build Image

```
docker build -t gym-website .
```

### Run Container

```
docker run -d -p 8080:80 gym-website
```

👉 Access app at: http://localhost:8080

---

## ☁️ AWS Infrastructure (Terraform)

### Initialize Terraform

```
terraform init
```

### Apply Configuration

```
terraform apply
```

👉 This will:

* Create EC2 instance
* Install Docker
* Prepare environment for deployment

---

## 🔁 CI/CD Pipeline

This project uses **GitHub Actions** to automate:

* Build Docker image
* Push image to DockerHub
* Deploy container on AWS EC2

### Trigger

* Runs automatically on `git push` to `main` branch

---

## 🔐 GitHub Secrets Required

Add the following secrets in GitHub:

* `DOCKER_USERNAME`
* `DOCKER_PASSWORD`
* `EC2_IP`
* `SSH_KEY`

---

## 🚀 Deployment Steps

1. Push code to GitHub
2. CI/CD pipeline builds Docker image
3. Image pushed to DockerHub
4. SSH into EC2 instance
5. Pull latest image
6. Run container using Docker

---

## 📸 Screenshots (Add Here)

* Jenkins / GitHub Actions pipeline
* Running application on AWS
* Docker container logs

---

## 📈 Future Improvements

* Deploy using Kubernetes (EKS)
* Add Load Balancer (ALB)
* Implement monitoring (Prometheus + Grafana)
* Use AWS ECR instead of DockerHub

---

## 👨‍💻 Author

**Shubham Gurad**
DevOps Engineer

📧 Email: [guradshubham96@gmail.com](mailto:guradshubham96@gmail.com)
🔗 LinkedIn: https://www.linkedin.com/in/shubhgurad

---

## ⭐ Conclusion

This project demonstrates practical implementation of DevOps tools and practices including containerization, infrastructure automation, and CI/CD pipelines for efficient and scalable deployments.
