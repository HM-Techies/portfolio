pipeline {
    options {
        skipDefaultCheckout()  // Prevents Jenkins from checking out the repo outside the container
    }

    agent {
        docker {
            image 'node:18-alpine'
            args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
            reuseNode false
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
                sh "ls -la"
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'npm install --cache .npm --prefer-offline'
                sh 'npm run build'
            }
        }

        stage('Install AWS CLI') {
            steps {
                sh """
                apk add --no-cache aws-cli
                aws --version
                """
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
                sh "aws s3 sync app/build/ s3://$S3_BUCKET --delete"
            }
        }

        stage('Enable S3 Static Hosting') {
            steps {
                sh "aws s3 website s3://$S3_BUCKET --index-document index.html"
            }
        }

        stage('Set Public Access Policy') {
            steps {
                script {
                    def policy = """
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
                    """
                    writeFile file: 'policy.json', text: policy
                    sh "aws s3api put-bucket-policy --bucket $S3_BUCKET --policy file://policy.json"
                }
            }
        }

        stage('Show S3 Website URL') {
            steps {
                script {
                    def websiteUrl = "http://${S3_BUCKET}.s3-website-${AWS_REGION}.amazonaws.com"
                    echo " application is hosted at: ${websiteUrl}"
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
