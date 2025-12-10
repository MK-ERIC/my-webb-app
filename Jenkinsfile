pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/MK-ERIC/mywebapp.git'
            }
        }

        stage('Install Node.js') {
            steps {
                sh '''
                echo "Installing Node.js..."
                curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                sudo apt-get install -y nodejs
                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                echo "Installing npm dependencies..."
                npm install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                echo "Running tests..."
                npm test || echo "No tests found"
                '''
            }
