const express = require('express');
const path = require('path');
const app = express();
const port = 3004; // Ensure this is the correct port

// Sample questions
const questions = [
    {
        text: 'What does S3 stand for?',
        options: ['Simple Storage Service', 'Secure Storage Service', 'Simple Secure Storage', 'None of the above'],
        correctAnswer: 'Simple Storage Service'
    },
    {
        text: 'Which AWS service is used for compute capacity?',
        options: ['Amazon RDS', 'Amazon EC2', 'Amazon S3', 'Amazon CloudFront'],
        correctAnswer: 'Amazon EC2'
    },
    {
        text: 'What is the main benefit of Amazon RDS?',
        options: ['Automated scaling', 'File storage service', 'Content delivery network','AWS Batch'],
        correctAnswer: 'Managed relational database service'
    },
    {
        text: 'Which AWS service can be used for object storage?',
        options: ['Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Amazon VPC'],
        correctAnswer: 'Amazon S3'
    },
    {
        text: 'What is the primary purpose of Amazon CloudFront?',
        options: ['Compute service', 'Database service', 'Content delivery network', 'Networking service'],
        correctAnswer: 'Content delivery network'
    },
    {
        text: 'What is AWS Lambda used for?',
        options: ['Running serverless applications', 'Object storage', 'Relational database service', 'Virtual private cloud'],
        correctAnswer: 'Running serverless applications'
    },
    {
        text: 'Which service is used for scalable data warehousing?',
        options: ['Amazon DynamoDB', 'Amazon RDS','Amazon Redshift','Amazon S3'],
        correctAnswer: 'Amazon Redshift'
    },
    {
        text: 'Which AWS service offers a fully managed NoSQL database?',
        options: ['Amazon RDS', 'Amazon Redshift', 'Amazon DynamoDB', 'Amazon Aurora'],
        correctAnswer: 'Amazon DynamoDB'
    },
    {
        text: 'What is the primary function of Amazon Route 53?',
        options: ['Compute service', 'Domain Name System (DNS) web service', 'Data warehousing', 'Content delivery'],
        correctAnswer: 'Domain Name System (DNS) web service'
    },
    {
        text: 'Which AWS service is used for monitoring and observability?',
        options: ['Amazon CloudWatch', 'AWS X-Ray', 'Amazon SNS', 'Amazon SQS'],
        correctAnswer: 'Amazon CloudWatch'
    },
    {
        text: 'Which AWS service is designed to migrate databases to AWS easily and securely?',
        options: ['AWS Database Migration Service (DMS)', 'Amazon RDS', 'Amazon Aurora', 'AWS Data Pipeline'],
        correctAnswer: 'AWS Database Migration Service (DMS)'
    },
    {
        text: 'Which AWS service can be used to deploy and manage infrastructure using code?',
        options: ['AWS CloudFormation', 'AWS OpsWorks', 'AWS Elastic Beanstalk', 'AWS CodeDeploy'],
        correctAnswer: 'AWS CloudFormation'
    },
    {
        text: 'What is the purpose of Amazon S3 Glacier?',
        options: ['File storage', 'Object storage', 'In-memory caching', 'Long-term data archiving'],
        correctAnswer: 'Long-term data archiving'
    },
    {
        text: 'Which AWS service provides a fully managed container orchestration service?',
        options: ['Amazon ECS', 'Amazon EKS', 'AWS Fargate', 'All of the above'],
        correctAnswer: 'All of the above'
    },
    {
        text: 'Which AWS service allows you to run Kubernetes on AWS?',
        options: ['Amazon ECS', 'Amazon EKS', 'AWS Lambda', 'Amazon EMR'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which service is used for real-time data processing of streaming data?',
        options: ['Amazon Kinesis', 'AWS Data Pipeline', 'Amazon EMR', 'Amazon Athena'],
        correctAnswer: 'Amazon Kinesis'
    },
    {
        text: 'What does AWS WAF stand for?',
        options: ['Web Application Firewall', 'Wide Area Firewall', 'Web Application Framework', 'Wide Area Framework'],
        correctAnswer: 'Web Application Firewall'
    },
    {
        text: 'Which AWS service can be used to send notifications to multiple destinations?',
        options: ['Amazon SNS', 'Amazon SQS', 'AWS Lambda', 'Amazon SES'],
        correctAnswer: 'Amazon SNS'
    },
    {
        text: 'Which AWS service can be used for creating and running virtual servers?',
        options: ['Amazon EC2', 'Amazon RDS', 'Amazon Lightsail', 'AWS Lambda'],
        correctAnswer: 'Amazon EC2'
    },
    {
        text: 'Which AWS service offers managed, scalable, and durable block storage?',
        options: ['Amazon EBS', 'Amazon S3', 'Amazon Glacier', 'Amazon EFS'],
        correctAnswer: 'Amazon EBS'
    },
    {
        text: 'Which AWS service can be used to accelerate the delivery of content?',
        options: ['Amazon CloudFront', 'Amazon Route 53', 'AWS Direct Connect','AWS Transit Gateway'],
        correctAnswer: 'Amazon CloudFront'
    },
    {
        text: 'Which AWS service is used to manage encryption keys?',
        options: ['AWS CloudHSM','AWS Shield', 'AWS IAM','AWS KMS'],
        correctAnswer: 'AWS KMS'
    },
    {
        text: 'Which AWS service can be used to automate the deployment of applications?',
        options: ['AWS CodeDeploy', 'AWS CodeBuild', 'AWS CodePipeline', 'AWS CodeCommit'],
        correctAnswer: 'AWS CodeDeploy'
    },
    {
        text: 'What does AWS IAM stand for?',
        options: ['Identity and Access Management', 'Internal Application Management', 'Infrastructure and Access Management', 'Identity and Application Management'],
        correctAnswer: 'Identity and Access Management'
    },
    {
        text: 'Which AWS service provides a petabyte-scale data warehouse solution?',
        options: ['Amazon Redshift', 'Amazon RDS', 'Amazon DynamoDB', 'Amazon Aurora'],
        correctAnswer: 'Amazon Redshift'
    },
    {
        text: 'Which service allows you to transfer large amounts of data via physical devices?',
        options: ['AWS Snowball', 'AWS Data Pipeline', 'AWS Direct Connect', 'AWS VPN'],
        correctAnswer: 'AWS Snowball'
    },
    {
        text: 'Which AWS service is used for batch processing?',
        options: ['AWS Lambda','AWS Batch', 'Amazon EC2', 'Amazon EMR'],
        correctAnswer: 'AWS Batch'
    },
    {
        text: 'Which service can be used to store and retrieve any amount of data, at any time, from anywhere on the web?',
        options: ['Amazon S3', 'Amazon RDS', 'Amazon Glacier', 'Amazon EBS'],
        correctAnswer: 'Amazon S3'
    },
    {
        text: 'Which service is used for managed, scalable MySQL-compatible databases?',
        options: ['Amazon Aurora', 'Amazon RDS', 'Amazon Redshift', 'Amazon DynamoDB'],
        correctAnswer: 'Amazon Aurora'
    },
    {
        text: 'Which service provides a simple and cost-effective way to launch and manage virtual private servers?',
        options: ['Amazon Lightsail', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda'],
        correctAnswer: 'Amazon Lightsail'
    },
    {
        text: 'Which service provides a fully managed file storage service for use with AWS Cloud services and on-premises resources?',
        options: ['Amazon EFS', 'Amazon S3', 'Amazon EBS', 'Amazon Glacier'],
        correctAnswer: 'Amazon EFS'
    },
    {
        text: 'Which service provides secure, resizable compute capacity in the cloud as EC2 instances?',
        options: ['Amazon EC2', 'AWS Lambda', 'Amazon RDS', 'Amazon Redshift'],
        correctAnswer: 'Amazon EC2'
    },
    {
        text: 'Which service offers a managed distributed ledger that makes it easy to create and manage scalable blockchain networks?',
        options: ['Amazon Managed Blockchain', 'Amazon QLDB', 'AWS Blockchain Templates', 'Amazon DynamoDB'],
        correctAnswer: 'Amazon Managed Blockchain'
    },
    {
        text: 'Which AWS service provides a fully managed graph database service?',
        options: ['Amazon Neptune', 'Amazon DynamoDB', 'Amazon RDS', 'Amazon Redshift'],
        correctAnswer: 'Amazon Neptune'
    },
    {
        text: 'Which service provides on-demand, scalable, serverless data processing service that enables you to analyze large volumes of streaming data in real time?',
        options: ['Amazon Kinesis', 'AWS Glue', 'AWS Data Pipeline', 'Amazon EMR'],
        correctAnswer: 'Amazon Kinesis'
    },
    {
        text: 'Which service helps you build conversational interfaces for applications using voice and text?',
        options: ['Amazon Lex', 'Amazon Polly', 'Amazon Transcribe', 'Amazon Rekognition'],
        correctAnswer: 'Amazon Lex'
    },
    {
        text: 'Which AWS service provides a way to quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications?',
        options: ['AWS Elastic Beanstalk', 'AWS CloudFormation', 'AWS CodeDeploy', 'AWS OpsWorks'],
        correctAnswer: 'AWS Elastic Beanstalk'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service is used for running large-scale parallel and high-performance computing (HPC) applications?',
        options: ['AWS ParallelCluster', 'Amazon EC2', 'AWS Lambda', 'AWS Fargate'],
        correctAnswer: 'AWS ParallelCluster'
    },
    {
        text: 'Which service can be used for building, deploying, and running machine learning models?',
        options: ['Amazon SageMaker', 'Amazon Comprehend', 'Amazon Rekognition', 'Amazon Polly'],
        correctAnswer: 'Amazon SageMaker'
    },
    {
        text: 'Which service can be used for event-driven compute service that lets you run code in response to events?',
        options: ['AWS Lambda', 'AWS Step Functions', 'Amazon EC2', 'Amazon EKS'],
        correctAnswer: 'AWS Lambda'
    },
    {
        text: 'Which service is used for simple, scalable, reliable, and cost-effective data pipeline for data-driven workflows?',
        options: ['AWS Data Pipeline', 'AWS Glue', 'Amazon Kinesis', 'Amazon EMR'],
        correctAnswer: 'AWS Data Pipeline'
    },
    {
        text: 'Which service can be used to add facial recognition and analysis to your applications?',
        options: ['Amazon Rekognition', 'Amazon Polly', 'Amazon Comprehend', 'Amazon Lex'],
        correctAnswer: 'Amazon Rekognition'
    },
    {
        text: 'Which AWS service provides a way to create, deploy, and manage microservices using Docker containers?',
        options: ['Amazon ECS', 'AWS Lambda', 'AWS Fargate', 'AWS Step Functions'],
        correctAnswer: 'Amazon ECS'
    },
    {
        text: 'Which service is designed for fast, consistent, and predictable performance with seamless scalability?',
        options: ['Amazon DynamoDB', 'Amazon RDS', 'Amazon Redshift', 'Amazon Aurora'],
        correctAnswer: 'Amazon DynamoDB'
    },
    {
        text: 'Which service provides fully managed service to help you run Apache Hadoop and Spark workloads?',
        options: ['Amazon EMR', 'AWS Glue', 'AWS Data Pipeline', 'Amazon Kinesis'],
        correctAnswer: 'Amazon EMR'
    },
    {
        text: 'Which service is designed to provide a high-performance, scalable file storage solution for use with AWS and on-premises resources?',
        options: ['Amazon FSx', 'Amazon S3', 'Amazon EFS', 'Amazon EBS'],
        correctAnswer: 'Amazon FSx'
    },
    {
        text: 'Which AWS service provides highly scalable DNS service designed to route end users to Internet applications by translating names into the numeric IP addresses?',
        options: ['Direct connect','Amazon Route 53', 'Amazon CloudFront', 'AWS Transit Gateway'],
        correctAnswer: 'Amazon Route 53'
    },
    {
        text: 'Which AWS service provides a managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud?',
        options: ['Amazon SQS','Amazon MQ', 'Amazon SNS', 'AWS Lambda'],
        correctAnswer: 'Amazon MQ'
    },
    {
        text: 'Which AWS service is used to quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications?',
        options: ['AWS Elastic Beanstalk', 'AWS CloudFormation', 'AWS CodeDeploy', 'AWS OpsWorks'],
        correctAnswer: 'AWS Elastic Beanstalk'
    },
    {
        text: 'Which AWS service allows you to automate the deployment of applications?',
        options: ['AWS CodeDeploy', 'AWS CodeBuild', 'AWS CodePipeline', 'AWS CodeCommit'],
        correctAnswer: 'AWS CodeDeploy'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service allows you to create and manage a collection of related AWS resources that can be provisioned and updated in an orderly and predictable fashion?',
        options: ['AWS CloudFormation', 'AWS OpsWorks', 'AWS Elastic Beanstalk', 'AWS CodePipeline'],
        correctAnswer: 'AWS CloudFormation'
    },
    {
        text: 'Which AWS service is used to transfer large amounts of data into and out of the AWS Cloud using physical storage appliances?',
        options: ['AWS Snowball', 'AWS Data Pipeline', 'AWS Direct Connect', 'AWS VPN'],
        correctAnswer: 'AWS Snowball'
    },
    {
        text: 'Which AWS service helps you build and deploy applications that provide highly secure and scalable access to AWS services?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service can be used to send email, SMS, and push notifications to multiple destinations?',
        options: ['Amazon SNS', 'Amazon SQS', 'AWS Lambda', 'Amazon SES'],
        correctAnswer: 'Amazon SNS'
    },
    {
        text: 'Which AWS service provides real-time, on-demand analytics for structured and semi-structured data using standard SQL queries?',
        options: ['Amazon Redshift', 'Amazon Athena', 'AWS Glue', 'Amazon QuickSight'],
        correctAnswer: 'Amazon Athena'
    },
    {
        text: 'Which AWS service provides on-demand, scalable, and serverless ETL (extract, transform, load) service?',
        options: ['AWS Glue', 'AWS Data Pipeline', 'Amazon Kinesis', 'Amazon EMR'],
        correctAnswer: 'AWS Glue'
    },
    {
        text: 'Which AWS service can be used to manage encryption keys and control their use across a wide range of AWS services and applications?',
        options: ['AWS KMS', 'AWS CloudHSM', 'AWS Shield', 'AWS IAM'],
        correctAnswer: 'AWS KMS'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service provides a managed service for Apache Hadoop and Apache Spark that makes it easy to process large amounts of data?',
        options: ['Amazon EMR', 'AWS Glue', 'AWS Data Pipeline', 'Amazon Kinesis'],
        correctAnswer: 'Amazon EMR'
    },
    {
        text: 'Which AWS service is designed to provide a highly scalable, highly available, and managed Apache Kafka service?',
        options: ['Amazon SQS','Amazon Kinesis','Amazon MSK','Amazon SNS'],
        correctAnswer: 'Amazon MSK'
    },
    {
        text: 'Which AWS service provides a highly scalable, managed, and secure Redis or Memcached service?',
        options: ['Amazon ElastiCache', 'Amazon RDS', 'Amazon DynamoDB', 'Amazon Aurora'],
        correctAnswer: 'Amazon ElastiCache'
    },
    {
        text: 'Which AWS service helps you build and deploy machine learning models quickly and efficiently?',
        options: ['Amazon SageMaker', 'Amazon Comprehend', 'Amazon Rekognition', 'Amazon Polly'],
        correctAnswer: 'Amazon SageMaker'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service provides a highly scalable and cost-effective solution for backing up and archiving data?',
        options: ['Amazon S3 Glacier', 'Amazon EBS', 'Amazon EFS', 'Amazon RDS'],
        correctAnswer: 'Amazon S3 Glacier'
    },
    {
        text: 'Which AWS service is used to manage and scale containerized applications using Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides a fully managed service for Apache Kafka that makes it easy to set up and operate message brokers in the cloud?',
        options: ['Amazon MSK', 'Amazon SQS', 'Amazon SNS', 'AWS Lambda'],
        correctAnswer: 'Amazon MSK'
    },
    {
        text: 'Which AWS service is used to automate the deployment of applications?',
        options: ['AWS CodeDeploy', 'AWS CodeBuild', 'AWS CodePipeline', 'AWS CodeCommit'],
        correctAnswer: 'AWS CodeDeploy'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service is used to provide managed, scalable MySQL-compatible databases?',
        options: ['Amazon Aurora', 'Amazon RDS', 'Amazon Redshift', 'Amazon DynamoDB'],
        correctAnswer: 'Amazon Aurora'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service provides a fully managed service for Apache Hadoop and Apache Spark that makes it easy to process large amounts of data?',
        options: ['Amazon EMR', 'AWS Glue', 'AWS Data Pipeline', 'Amazon Kinesis'],
        correctAnswer: 'Amazon EMR'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service can be used to run and scale containerized applications on Kubernetes?',
        options: ['Amazon EKS', 'Amazon ECS', 'AWS Fargate', 'AWS Batch'],
        correctAnswer: 'Amazon EKS'
    },
    {
        text: 'Which AWS service provides managed DDoS protection for your web applications?',
        options: ['AWS Shield', 'AWS WAF', 'AWS Firewall Manager', 'Amazon GuardDuty'],
        correctAnswer: 'AWS Shield'
    },
    {
        text: 'Which AWS service helps you build and deploy highly secure and scalable APIs?',
        options: ['AWS API Gateway', 'AWS Lambda', 'AWS Step Functions', 'AWS Amplify'],
        correctAnswer: 'AWS API Gateway'
    },
    {
        text: 'Which AWS service provides a managed service for Apache Hadoop and Apache Spark that makes it easy to process large amounts of data?',
        options: ['Amazon EMR', 'AWS Glue', 'AWS Data Pipeline', 'Amazon Kinesis'],
        correctAnswer: 'Amazon EMR'
    },
    {
        text: 'Which of the following Load Balancers uses Listeners, Targets, and Target Groups?',
        options: ['Classic Load Balancer', 'Application Load Balancer'],
        correctAnswer: 'Application Load Balancer'
    },
    {
        text: 'For Basic Support, what Trusted Advisor checks are available to the AWS customer?',
        options: ['Service Limits','Amazon EBS Snapshots','MFA on Root Account','Low Utilization Amazon EC2 Instances'],
        correctAnswer: 'MFA on Root Account'
    },
    {
        text: 'Which of the following services can provide a complete audit trail of all AWS services used within an account?',
        options: ['AWS CloudTrail logs','Amazon CloudWatch','AWS Trusted Advisor','Amazon EC2 instance usage report'],
        correctAnswer: 'AWS CloudTrail logs'
    },
    {
        text: 'Which of the below can be used to import data into Amazon Glacier?',
        options: ['AWS S3 Lifecycle policies','AWS Console','You cannot use the Console to import data into Glacier.','AWS Glacier SDK','AWS Glacier API'],
        correctAnswer: 'AWS Glacier API'
    },
    {
        text: 'An enterprise is evaluating whether to adopt AWS to offload most of their on-premise Virtual Machines to Ec2. The enterprise does not have much domain expertise, and they need a point of contact that will help proactively manage their account and connect them with AWS experts. Which Enterprise offering does this best describe?',
        options: ['TAM','Werner Hans Peter Vogels','Concierge Support Team','AWS Technical Support'],
        correctAnswer: 'TAM'
    },
    {
        text: 'There is a requirement to move a 10 TB data warehouse to the AWS cloud. Which of the following is an ideal service which can be used to move this amount of data to the AWS Cloud?',
        options: ['AWS Snowcone HDD','Amazon S3 Connector','Amazon Direct Connect','Amazon S3 MultiPart Upload'],
        correctAnswer: 'Amazon S3 MultiPart Upload'
    },
    {
        text: 'You want to monitor the CPU utilization of an EC2 resource in AWS. Which of the below services can help in this regard?',
        options: ['AWS Cloudwatch','AWS Trusted Advisor','AWS Cloudtrail','AWS Inspector'],
        correctAnswer: 'AWS Cloudwatch'
    },
    {
        text: 'A company currently has an application which consists of a .Net layer which connects to a MySQL database. They now want to move this application onto AWS. They want to make use of all AWS features such as high availability and automated backups. Which of the following would be an ideal database in AWS to migrate to for this requirement?',
        options: ['Aurora','An EC2 instance with Aurora installed','DynamoDB','An EC2 instance with MySQL installed'],
        correctAnswer: 'Aurora'
    },
    {
        text: 'A company wants to utilize AWS storage. For them, low storage cost is paramount, the data is rarely retrieved, and data retrieval times of several hours are acceptable for them. What is the best storage option to use?',
        options: ['AWS Glacier','AWS CloudFront','AWS S3 Reduced Redundancy Storage','EBS-backed storage connected to EC2'],
        correctAnswer: 'AWS Glacier'
    },
    {
        text: 'According to the AWS shared responsibility model, which of the following is the responsibility of the customer?',
        options: ['Updating and patching the firmware and software of the AWS hardware','Managing security configurations for operating systems, platforms, and network traffic','Monitoring the underlying infrastructure of AWS services','Configuring physical security for the data center'],
        correctAnswer: 'Managing security configurations for operating systems, platforms, and network traffic'
    },
    {
        text: 'True or False: Security in the cloud is the responsibility of AWS.',
        options: ['True', 'False' ],           
        correctAnswer: 'False'
    },
    {
        text: 'Which of the following is the secure way of using AWS API to call AWS services from EC2 Instances?',
        options: ['IAM Roles','IAM policies','IAM Users','IAM Groups'],
        correctAnswer: 'IAM Roles'
    },
    {
        text: 'You plan to deploy an application on the AWS. This application needs to be PCI Compliant. Which of the below steps are needed to ensure the compliance? Choose 2 answers from the below:',
        options: ['Ensure the right steps are taken during application development for PCI Compliance','Do an audit after the deployment of the application for PCI Compliance','Choose AWS services which are PCI Compliant', 'Ensure the AWS Services are made PCI Compliant'],
        correctAnswer: 'Ensure the right steps are taken during application development for PCI Compliance, Choose AWS services which are PCI Compliant'
    },
    {
        text: 'The customer is responsible for security in the cloud.',
        options: ['False','True'],
        correctAnswer: 'True'
    },
    {
        text: 'Which of the following EC2 instance types will realize a savings over time in exchange for a contracted term-of-service?',
        options: ['Reserved instances','On-demand instances','Discount instances','Spot instances'],
        correctAnswer: 'Reserved instances'
    },
    {
        text: 'A company is exploring the AWS services and wants a tool or method to estimate the cost that fits their business use case. Which of the following would help them model their solutions and estimate the calculated cost for the services needed?',
        options: ['AWS Pricing Calculator', 'AWS Consolidating billing','AWS Config','AWS Cost Explorer'],
        correctAnswer: 'AWS Pricing Calculator'
    },
    {
        text: 'What is the key difference between an availability zone and an edge location?',
        options: [  'An availability zone is an isolated location within an AWS region, whereas an edge location will deliver cached content to the closest location to reduce latency','None of the above','An availability zone is a grouping of AWS resources in a specific region; an edge location is a specific resource within the AWS region','Edge locations are used as control stations for AWS resources'],
        correctAnswer: 'An availability zone is an isolated location within an AWS region, whereas an edge location will deliver cached content to the closest location to reduce latency'
    },
    {
        text: 'What is the role of OpEx in a TCO proposal for moving to the cloud?',
        options: ['It represents the upfront costs of acquiring and maintaining hardware and software','It represents the ongoing costs associated with using and managing cloud services','It represents the cost of licensing proprietary software','It is not relevant to a TCO proposal for moving to the cloud'],    
        correctAnswer: 'It represents the ongoing costs associated with using and managing cloud services'
    },
    {
        text: 'What strategy can be implemented to reduce compliance scope, such as reporting? Choose 3 answers from the below:',
        options: ['Adjusting the existing compliance strategy with automation','Shifting existing compliance efforts elsewhere','Reducing customer data stored','Growing the team responsible for compliance','Reducing the business area covered by compliance policies'],
        correctAnswer: 'Adjusting the existing compliance strategy with automation, Reducing customer data stored, Reducing the business area covered by compliance policies'
    },
    {
        text: 'You want to take a snapshot of an EC2 Instance and create a new instance out of it. In AWS what is this snapshot equivalent to?',
        options: ['AMI', 'EBS Snapshot','EBS Volumes','EC2 Snapshot'],
        correctAnswer: 'AMI'
    },
    {
        text: 'Which of the following disaster recovery deployment mechanisms has the highest downtime?',
        options: [ 'Backup and Restore','Multi Site','Pilot light','Warm standby'],
        correctAnswer: 'Backup and Restore'
    },
    {
        text: 'Which of the following are characteristics of cloud computing? Choose 3 answers from the below:',
        options:['On-demand delivery','Cloud charges are capital expenditures', 'Services are delivered via the Internet','Pay-as-you-go pricing'],
        correctAnswer: 'On-demand delivery, Services are delivered via the Internet, Pay-as-you-go pricing'
    }
    // Add more questions as needed
];
module.exports = questions;