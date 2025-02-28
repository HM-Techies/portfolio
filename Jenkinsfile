pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
            reuseNode false  
        }
    }

    environment {
        AWS_REGION = 'ap-south-1'
        S3_BUCKET = 'kahan-portfolio.com'
        AWS_CLI_IMAGE = 'amazon/aws-cli'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/HM-Techies/portfolio.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'npm install --cache .npm --prefer-offline'
                sh 'npm run build'
            }
        }

        stage('Create S3 Bucket if Not Exists') {
            steps {
                script {
                    def bucketExists = sh(script: "aws s3api head-bucket --bucket $S3_BUCKET 2>/dev/null || echo 'false'", returnStdout: true).trim()
                    if (bucketExists == 'false') {
                        sh "aws s3api create-bucket --bucket $S3_BUCKET --region $AWS_REGION --create-bucket-configuration LocationConstraint=$AWS_REGION"
                    }
                }
            }
        }

        stage('Upload to S3') {
            steps {
                sh "aws s3 sync build/ s3://$S3_BUCKET --delete"
            }
        }

        stage('Enable S3 Static Hosting') {
            steps {
                sh "aws s3 website s3://$S3_BUCKET --index-document index.html"
            }
        }

        stage('Set Public Access Policy') {
            steps {
                sh """
                cat <<EOF > policy.json
                {
                  "Version": "2012-10-17",
                  "Statement": [
                    {
                      "Effect": "Allow",
                      "Principal": "*",
                      "Action": "s3:GetObject",
                      "Resource": "arn:aws:s3:::$S3_BUCKET/*"
                    }
                  ]
                }
                EOF
                aws s3api put-bucket-policy --bucket $S3_BUCKET --policy file://policy.json
                """
            }
        }

        stage('Show S3 Website URL') {
            steps {
                script {
                    def websiteUrl = "http://${S3_BUCKET}.s3-website-${AWS_REGION}.amazonaws.com"
                    echo "Your application is hosted at: ${websiteUrl}"
                }
            }
        }
    }

    post {
        always {
            cleanWs()  
        }
    }
}
