
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Playwright project'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Chrome') {
            steps {
                bat 'npx playwright install chrome'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Automation Report'
            ])
        }
    }
}
