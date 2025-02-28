pipeline {
    options {
        skipDefaultCheckout()  // Prevents Jenkins from checking out the repo outside the container
    }
    agent any   
    stages {
        stage('Install Dependencies & Build') {
            steps {
                sh 'npm install --cache .npm --prefer-offline'
                sh 'npm run build'
            }
        }


    post {
        always {
            cleanWs()  
        }
        }
    }
}
