
function testDocument(testString){
    //deconstruct
    const indexes = []
    const matchingValues = [ 'Question', 'A.', 'B.', 'C.', 'D.' , 'Correct']
    let alteredString =  testString.split('\n').filter((s) => s !== '').join(' ').split(' ')
    for(let i = 0; i < alteredString.length; i++){
        if(matchingValues.includes(alteredString[i])){
            indexes.pus
        }
    }
    //testing
    let indices = [ 37, 64, 97, 133 ]
    for(let i = 0; i < indices.length; i++){
        console.log(alteredString[indices[i]])
    }
    //reconstruct
    let formattedValues = []
    for(let u = 0; u <= indexes.length-1; u++){
        formattedValues.push(alteredString.slice(indexes[u], indexes[u+1]).filter((x) => x !== '').join(' ').trim())
    }
    return formattedValues
}

console.log(testDocument(`

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Topic 1 - Single Topic

Question #1

Topic 1

Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine.

Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials

is operationally e cient and must be able to determine who accessed a given instance. What should you do?

A. Generate a new SSH key pair. Give the private key to each member of your team. Con gure the public key in the metadata of each instance.

B. Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a con guration management tool to

deploy those keys on each instance.

C. Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the

ג€compute.osAdminLoginג€ role to the Google group corresponding to this team.

D. Generate a new SSH key pair. Give the private key to each member of your team. Con gure the public key as a project-wide public SSH key

in your Cloud Platform project and allow project-wide public SSH keys on each instance.

Correct Answer: C

Community vote distribution

C (93%)

5%

Question #2

Topic 1

You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?

A. 0.0.0.0/0

B. 10.0.0.0/8

C. 172.16.0.0/12

D. 192.168.0.0/16

Correct Answer: B

Community vote distribution

B (94%)

6%

https://www.examtopics.com/exams/google/associate-cloud-engineer/custom-view/

1/112

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Question #3

Topic 1

You want to select and con gure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of

operational data in one geographic location. You need to support point-in-time recovery. What should you do?

A. Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.

B. Select Cloud SQL (MySQL). Select the create failover replicas option.

C. Select Cloud Spanner. Set up your instance with 2 nodes.

D. Select Cloud Spanner. Set up your instance as multi-regional.

Correct Answer: A

Community vote distribution

A (100%)

Question #4

Topic 1

You want to con gure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the

fewest possible steps.

You need to con gure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?

A. Create an HTTP load balancer with a backend con guration that references an existing instance group. Set the health check to healthy

(HTTP)

B. Create an HTTP load balancer with a backend con guration that references an existing instance group. De ne a balancing mode and set

the maximum RPS to 10.

C. Create a managed instance group. Set the Autohealing health check to healthy (HTTP)

D. Create a managed instance group. Verify that the autoscaling setting is on.

Correct Answer: C

Community vote distribution

C (96%)

4%

Question #5

Topic 1

You are using multiple con gurations for gcloud. You want to review the con gured Kubernetes Engine cluster of an inactive con guration using

the fewest possible steps. What should you do?

A. Use gcloud con g con gurations describe to review the output.

B. Use gcloud con g con gurations activate and gcloud con g list to review the output.

C. Use kubectl con g get-contexts to review the output.

D. Use kubectl con g use-context and kubectl con g view to review the output.

Correct Answer: D

Community vote distribution

D (65%)

C (24%)

11%

https://www.examtopics.com/exams/google/associate-cloud-engineer/custom-view/

2/112

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Question #6

Topic 1

Your company uses Cloud Storage to store application backup  les for disaster recovery purposes. You want to follow Google's recommended

practices. Which storage option should you use?

A. Multi-Regional Storage

B. Regional Storage

C. Nearline Storage

D. Coldline Storage

Correct Answer: D

Community vote distribution

D (54%)

A (37%)

7%

Question #7

Topic 1

Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the

company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?

A. Contact cloud-billing@google.com with your bank account details and request a corporate billing account for your company.

B. Create a ticket with Google Support and wait for their call to share your credit card details over the phone.

C. In the Google Platform Console, go to the Resource Manage and move all projects to the root Organizarion.

D. In the Google Cloud Platform Console, create a new billing account and set up a payment method.

Correct Answer: D

Community vote distribution

D (73%)

C (27%)

Question #8

Topic 1

You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do

not want to change the con guration of the application and want the application to be able to reach the licensing server. What should you do?

A. Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.

B. Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.

C. Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.

D. Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address.

Correct Answer: A

Community vote distribution

A (100%)

https://www.examtopics.com/exams/google/associate-cloud-engineer/custom-view/

3/112

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Question #9

Topic 1

You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied

instances at all times. Which scaling type should you use?

A. Manual Scaling with 3 instances.

B. Basic Scaling with min_instances set to 3.

C. Basic Scaling with max_instances set to 3.

D. Automatic Scaling with min_idle_instances set to 3.

Correct Answer: D

Community vote distribution

D (88%)

13%

Question #10

Topic 1

You have a development project with appropriate IAM roles de ned. You are creating a production project and want to have the same IAM roles on

the new project, using the fewest possible steps. What should you do?

A. Use gcloud iam roles copy and specify the production project as the destination project.

B. Use gcloud iam roles copy and specify your organization as the destination organization.

C. In the Google Cloud Platform Console, use the 'create role from role' functionality.

D. In the Google Cloud Platform Console, use the 'create role' functionality and select all applicable permissions.

Correct Answer: A

Community vote distribution

A (100%)

Question #11

Topic 1

You need a dynamic way of provisioning VMs on Compute Engine. The exact speci cations will be in a dedicated con guration  le. You want to

follow Google's recommended practices. Which method should you use?

A. Deployment Manager

B. Cloud Composer

C. Managed Instance Group

D. Unmanaged Instance Group

Correct Answer: A

Community vote distribution

A (92%)

8%

https://www.examtopics.com/exams/google/associate-cloud-engineer/custom-view/

4/112

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Question #12

Topic 1

You have a Docker le that you need to deploy on Kubernetes Engine. What should you do?

A. Use kubectl app deploy <docker lename>.

B. Use gcloud app deploy <docker lename>.

C. Create a docker image from the Docker le and upload it to Container Registry. Create a Deployment YAML  le to point to that image. Use

kubectl to create the deployment with that  le.

D. Create a docker image from the Docker le and upload it to Cloud Storage. Create a Deployment YAML  le to point to that image. Use

kubectl to create the deployment with that  le.

Correct Answer: C

Community vote distribution

C (98%)

Question #13

Topic 1

Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should

you do?

A. Download and deploy the Jenkins Java WAR to App Engine Standard.

B. Create a new Compute Engine instance and install Jenkins through the command line interface.

C. Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.

D. Use GCP Marketplace to launch the Jenkins solution.

Correct Answer: D

Community vote distribution

D (97%)

Question #14

Topic 1

You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?

A. gcloud deployment-manager deployments create --con g <deployment-con g-path>

B. gcloud deployment-manager deployments update --con g <deployment-con g-path>

C. gcloud deployment-manager resources create --con g <deployment-con g-path>

D. gcloud deployment-manager resources update --con g <deployment-con g-path>

Correct Answer: B

Community vote distribution

B (100%)

https://www.examtopics.com/exams/google/associate-cloud-engineer/custom-view/

5/112

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Question #15

Topic 1

You need to run an important query in BigQuery but expect it to return a lot of records. You want to  nd out how much it will cost to run the query.

You are using on-demand pricing. What should you do?

A. Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand.

B. Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the

Pricing Calculator.

C. Use the command line to run a dry run query to estimate the number of bytes returned. Then convert that bytes estimate to dollars using

the Pricing Calculator.

D. Run a select count (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using

the Pricing Calculator.

Correct Answer: B

Community vote distribution

B (100%)

Question #16

Topic 1

You have a single binary application that you want to run on Google Cloud Platform. You decided to automatically scale the application based on

underlying infrastructure CPU usage. Your organizational policies require you to use virtual machines directly. You need to ensure that the

application scaling is operationally e cient and completed as quickly as possible. What should you do?

A. Create a Google Kubernetes Engine cluster, and use horizontal pod autoscaling to scale the application.

B. Create an instance template, and use the template in a managed instance group with autoscaling con gured.

C. Create an instance template, and use the template in a managed instance group that scales up and down based on the time of day.

D. Use a set of third-party tools to build automation around scaling the application up and down, based on Stackdriver CPU usage monitoring.

Correct Answer: B

Community vote distribution

B (100%)

Question #17

Topic 1

You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost

estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?

A. Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis.

B. Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis.

C. Export your transactions to a local  le, and perform analysis with a desktop tool.

D. Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis.

Correct Answer: D

Community vote distribution

D (100%)

https://www.examtopics.com/exams/google/associate-cloud-engineer/custom-view/

6/112

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Question #18

Topic 1

You need to set up a policy so that videos stored in a speci c Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted

after one year from their creation. How should you set up the policy?

A. Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass

action to 90 days and the Delete action to 275 days (365 90 "€ג)

B. Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass

action to 90 days and the Delete action to 365 days.

C. Use gsutil rewrite and set the Delete action to 275 days (365-90).

D. Use gsutil rewrite and set the Delete action to 365 days.

Correct Answer: B

Community vote distribution

B (75%)

A (24%)

Question #19

Topic 1

You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure

that the VM uses this service account instead of the default Compute Engine service account. What should you do?

A. When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.

B. Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-

service- account.

C. Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-

engine- service-account.

D. Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-

engine-service- account.json.

Correct Answer: A

Community vote distribution

A (60%)

C (34%)

6%

https://www.examtopics.com/exams/google/associate-cloud-engineer/custom-view/

7/112

1/24/25, 12:53 PM

Associate Cloud Engineer Exam - Free Actual Q&As, Page 1 | ExamTopics

Question #20

Topic 1

You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the

fewest number of steps. What should you do?

A. Install a RDP client on your desktop. Verify that a  rewall rule for port 3389 exists.

B. Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the

instance.

C. Set a Windows password in the GCP Console. Verify that a  rewall rule for port 22 exists. Click the RDP button in the GCP Console and

supply the credentials to log in.

D. Set a Windows username and password in the GCP Console. Verify that a  rewall rule for port 3389 exists. Click the RDP button in the GCP

Console, and supply the credentials to log in.

Correct Answer: D

`))

