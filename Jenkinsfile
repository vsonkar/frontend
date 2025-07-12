pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning frontend repo and preparing environment...'
            }
        }

        stage('Run App') {
            steps {
                echo 'Simulating Express app start...'
                // You can later replace this with:
                // sh 'node server.js' or bat 'node server.js'
            }
        }
    }
}
