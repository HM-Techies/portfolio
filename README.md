# 🚀 Jenkins CI/CD Pipeline for Portfolio Deployment

This project sets up a Jenkins pipeline to automate the deployment of a Node.js-based portfolio website to AWS S3 using a custom Docker image.

---

## ✅ Prerequisites

- Jenkins installed and running
- AWS CLI access credentials (IAM user with S3 permissions)
- Docker installed on the Jenkins host
- GitHub repository (e.g. `https://github.com/HM-Techies/portfolio`)
- Jenkins has access to Docker and Git
- Custom Docker image pushed to Docker Hub (`kahanhm/hm-tech-custom-nodejs-aws-cli`)

---

## 📦 Required Jenkins Plugins

Make sure the following plugins are installed:

- **Docker Pipeline**
- **GitHub Integration**
- **Credentials Binding**
- **Pipeline**

---

## 🔐 Configure Jenkins Credentials

Go to:


Create the following credentials:

1. **AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY**
   - Type: Secret text or Username/Password
   - Scope: Global

2. **GitHub Personal Access Token**
   - Used for GitHub SCM access (if required)

---

## 🛠️ Jenkins Pipeline Setup

### 1. Create a New Pipeline Job

- Go to **Jenkins Dashboard > New Item**
- Enter name: `portfolio-pipeline`
- Select **Pipeline**, then click OK

### 2. Configure Pipeline

- In **Pipeline Definition**, choose: `Pipeline script from SCM`
- **SCM**: Git
- **Repository URL**: `https://github.com/HM-Techies/portfolio.git`
- **Branch**: `main`
- **Script Path**: `Jenkinsfile`

Save the job.

---

## 🐳 Custom Docker Image

Ensure the Docker image `kahanhm/hm-tech-custom-nodejs-aws-cli` is available on Docker Hub.

To build and push your own version:

```bash
docker build -t your-username/custom-nodejs-aws .
docker push your-username/custom-nodejs-aws
