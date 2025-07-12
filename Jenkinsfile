pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Express App') {
            steps {
                sh 'pm2 restart express-app || pm2 start server.js --name express-app'
            }
        }
    }
}
