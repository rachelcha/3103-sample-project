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
        stage('SonarQube Analysis') {
                steps {
                    script {
                        def scannerHome = tool 'SonarQube';
                        withSonarQubeEnv('SonarQube') {
                            sh """
                                ${scannerHome}/bin/sonar-scanner \
                                -Dsonar.projectKey=OWASP \
                                -Dsonar.sources=. \
                                -Dsonar.host.url=http:172.18.0.3:9000 \
                                -Dsonar.token=sqp_107d7d87eb3eb3711f233e07a7713ab2fee6abe6
                            """
                        }
                    }
                }
            }
    }
}
