pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('OWASP Dependency-Check Vulnerabilities') {
			steps {
                dependencyCheck additionalArguments: ''' 
                            -o './'
                            -s './'
                            -f 'ALL' 
                            --prettyPrint''', odcInstallation: 'OWASP Dependency-Check Vulnerabilities'
                
                dependencyCheckPublisher pattern: 'dependency-check-report.xml'
            }
		}
        // stage('UI Testing') {
        //     steps {
        //         // Run UI tests
        //         // Ensure that you have your UI testing tools and dependencies installed and configured
        //         // For example, if you are using Selenium with JUnit:
        //         sh 'mvn test'
        //     }
        // }
    }
}
