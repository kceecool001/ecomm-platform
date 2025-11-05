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
        sh 'docker build -t kceecool1/user-service ./user-service'
        sh 'docker build -t kceecool1/product-service ./product-service'
        sh 'docker build -t kceecool1/cart-service ./cart-service'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        sh 'docker push kceecool1/user-service'
        sh 'docker push kceecool1/product-service'
        sh 'docker push kceecool1/cart-service'
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
