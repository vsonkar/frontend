pipeline {
    agent any

    tools {
        nodejs 'Node18'  // name from Jenkins global config
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/vsonkar/frontend'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Restart Express App') {
            steps {
                sh 'pm2 restart express-app || pm2 start server.js --name express-app'
            }
        }
    }
}
