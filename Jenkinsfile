pipeline {
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
            }
        }

        stage('Deploy to S3') {
            steps {
                script {
                    // Bucket creation 
                    sh '''
                        aws s3api head-bucket --bucket $S3_BUCKET || \
                        aws s3api create-bucket \
                            --bucket $S3_BUCKET \
                            --region $AWS_REGION \
                            --create-bucket-configuration LocationConstraint=$AWS_REGION
                    '''

                    // Deployment commands
                    sh 'aws s3 sync app/build/ s3://$S3_BUCKET --delete'
                    sh 'aws s3 website s3://$S3_BUCKET --index-document index.html'
                    
                    // Apply bucket policy
                    writeFile file: 'policy.json', text: """
                    {
                        "Version": "2012-10-17",
                        "Statement": [{
                            "Effect": "Allow",
                            "Principal": "*",
                            "Action": "s3:GetObject",
                            "Resource": "arn:aws:s3:::$S3_BUCKET/*"
                        }]
                    }
                    """
                    sh 'aws s3api put-bucket-policy --bucket $S3_BUCKET --policy file://policy.json'
                }
            }
        }

        stage('Show URL') {
            steps {
                echo "Application URL: http://${S3_BUCKET}.s3-website-${AWS_REGION}.amazonaws.com"
            }
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