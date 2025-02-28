pipeline {
     options {
        skipDefaultCheckout()  
    }
    agent {
        docker {
            image 'kahanhm/hm-tech-custom-nodejs-aws-cli'  // Pre-built image for the pipline you can build your one using the Dockerfile
            reuseNode true
        }
    }

    environment {
        AWS_REGION = 'ap-south-1'
        S3_BUCKET = 'kahan-portfolio.com'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/HM-Techies/portfolio.git'
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm ci --cache .npm --prefer-offline'
                sh 'npm run build'
                sh "ls -la"
            }
        }

        
    post {
        always {
            cleanWs()
            script {
                sh 'rm -f policy.json || true'  
            }
        }
    }
}