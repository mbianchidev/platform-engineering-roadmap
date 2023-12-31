# Plaform Engineering Roadmap

An opinionated roadmap to become an Platform Engineer
Inspired by https://github.com/teivah/sre-roadmap 

## Individual 

### YAML

* YAML (not even kidding you have to learn YAML. It's everywhere and it is the first thing to learn)

### Programming

* Programming languages (Python, Golang)
* Version control
* SDKs

### Linux

* Scripting
* Filesystem
* Memory
* Processes
* Resource utilization
* Network
* Security
* Package management

### Network

* Protocols
  * TCP/IP vs UDP
  * HTTP (http1 vs http2)
  * TLS/SSL
  * HTTPS
  * DNS
  * SSH
* ISO-OSI model
* Network topologies
* Discoverability
* Load Balacing
* Service Mesh
  * Istio
  * Consul
  * Linkerd
* Firewall
* Proxy
* Reverse-proxy

### Distributed systems

* _Queues_
  * Kafka
  * RabbitMQ
  * SQS
  * ActiveMQ
  * Event log vs. message queue
  * _Load balancer_
    * Concepts
    * Layer 4 vs. layer 7 load balancer
  * _APIs_
    * Stateful vs. stateless
    * REST
    * Microservices: pros and cons
    * GraphQL
    * gRPC
* Caching
  * Redis
  * Memcached
  * In-memory databases
* CDN (Content Delivery Network)
  * Cloudflare
  * Akamai
  * Fastly
* _Databases_
  * _Types of databases_
    * NoSQL vs. SQL databases
    * Relational vs. document
    * Column-oriented databases
    * Graph databases
    * Vector database
    * Objects-based storage
  * ACID principles
  * Indexing
  * Transaction
  * Storage

### DevOps

* _Concepts_
  * Culture over tools
  * Feedback loops
  * Effective communication
  * Continuous improvement
  * Toolchain
  * Pipelines
  * Automated testing
  * Everything as -Ops (NetOps, DBOps, DocOps...)
* _Cloud_
  * SaaS
  * PaaS
  * IaaS
  * Serverless
    * Knative
    * Vendor-specific services to deploy serverless apps
* Environments
  * Purpose of environments
  * Isolation
  * Multitenancy vs single tenancy
* CI/CD
  * Vendor-specific services offering CI/CD capabilities
  * SOPS
    * Cloud Specific tools
    * Hashicorp Vault
  * GitOps
    * ArgoCD
    * FluxCD
* Infrastructure as Code
  * Configuration management
    * Ansible
    * Puppet
    * Chef
  * Provisioning
  * Open-Tofu
  * Terraform
  * Pulumi
  * CloudFormation
* Cloud Providers
  * AWS
  * GCP
  * Azure
* Version Control Products
  * GitHub
  * GitLab
  * Bitbucket

### Rollout
 
* _Concepts_ 
  * Bake time
  * Feature flag
  * Feature freeze
  * Rollout supervision
* _Rollout types_
  * Blue green rollout
  * Canary rollout
  * Progressive rollout
  * Shadow rollout

### Observability
 
* _Concepts_
  * Difference between telemetry, monitoring and observability
  * Trace vs. metric vs. log
  * APM (Application Performance Monitoring)
  * Percentiles
* _Alerting_
  * ChatOps
  * Slow vs. fast burn alert
* _Log Management_
  * Levels
  * Rotation
  * Aggregation
  * Retention
* _Tools_
  * Prometheus
  * Grafana
  * OpenTelemetry
  * Datadog
  * New Relic
  * Jaeger
  * Sumo Logic
  * Fluentd
  * OpsGenie
  * PagerDuty

### Security

* DevSecOps
  * SAST
  * DAST
* Authentication
* Authorization
* IAM
* RBAC
  * OPA (Open Policy Agent)
* Container scanning
* Threat detection
* CNAPP
* CDR
* Certificates
* Encryption
* TLS
* PKI
* Signature

### Site Reliability

* _Concepts_
  * Hard vs. soft dependencies in a system
  * _Scalability_
    * Concepts
* _Requests_
  * Rate limiting
  * Throughput
* _Practices_
  * Chaos engineering 

### Cloud Native

* Containers
  * Docker
  * Tags
  * OCI (Open Container Initiative)
  * Container registry
  * Container runtime
  * Containerd
  * CRI-O (Container Runtime Interface - Orchestrator)
* CNCF Landscape
* Container orchestration
* Kubernetes
  * Nodes
  * Control plane
  * etcd
  * kubectl
  * Namespaces
  * Pods
  * Scheduler
  * Health checks
  * Liveness probes vs readiness probes
  * Replica sets
  * Deployments
  * Services
  * Ingress
  * ConfigMaps
  * Helm vs Kustomize
  * Secrets
  * DaemonSets
  * Init containers & sidecar pattern
  * StatefulSets
  * Storage classes
  * Persistent volumes and claims
  * CSI (Container Storage Interface)
  * CNI (Container Network Interface)
  * ClusterIP vs. NodePort vs. LoadBalancer
  * Network policies
  * Service accounts
  * Container runtime
  * Jobs
  * CronJobs
  * Horizontal Pod Autoscaler
  * Vertical Pod Autoscaler
  * Cluster Autoscaler
  * Pod Disruption Budgets
  * Resource quotas
  * Limit ranges
  * Taints and tolerations
  * Node affinity
  * Pod affinity vs pod anti-affinity
  * Pod security policies
  * Role-based access control
  * Admission controllers
  * Operators
  * Custom Resource Definitions

### Platform Engineering

* _Concepts_
  * Catalogs
  * Self-service
  * Automation
  * Platform as a Product
  * DevEx (Developer Experience)
  * UX
* Internal Developer Platform

### Soft skills

* Being a nice person (no, really it's important)
* _Communication_
  * Writing
  * Oral
  * Presentation
* Collaboration
* Problem solving
* Curiosity
* Navigating ambiguity

## Company

For a company to be successful in the long run, it needs to have a strong engineering culture. This is a list of things that can help to build such a culture.

### Coming soon