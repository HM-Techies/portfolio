pipeline {
    options {
        skipDefaultCheckout()  // Prevents Jenkins from checking out the repo outside the container
        }
    agent any   
    stages {
        stage('Install Dependencies & Build') {
            steps {
                
                sh 'node -v'
            }
        }
    }


    post {
        always {
            cleanWs()  
        }
        }
}
