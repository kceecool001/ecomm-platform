pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/kceecool001/ecomm-platform.git'
      }
    }

    stage('Build Services') {
      steps {
        sh 'docker build -t kceecool/user-service ./user-service'
        sh 'docker build -t kceecool/product-service ./product-service'
        sh 'docker build -t kceecool/cart-service ./cart-service'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        sh 'docker push kceecool/user-service'
        sh 'docker push kceecool/product-service'
        sh 'docker push kceecool/cart-service'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Trigger deployment to cloud platform here'
        // You can use SSH, API calls, or CLI tools depending on your target
      }
    }
  }
}