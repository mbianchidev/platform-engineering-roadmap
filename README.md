# Plaform Engineering Roadmap

An opinionated roadmap to become a Platform Engineer.

The roadmap is inspired by [Teivah's SRE roadmap](https://github.com/teivah/sre-roadmap), but my idea is a bit different.
In time, I want to create something similar to [roadmap.sh](https://roadmap.sh/) but for Platform Engineers.

![A picture from mbianchidev's Platform's Engineering Inferno talk from DevOps Days Amsterdam](platform-engineering-inferno.jpg)

This picture is from my DevOpsDay Amsterdam 2024 talk - Platform Engineering's Inferno - you can find a video [here](https://www.youtube.com/watch?v=dWn48x4v34Q).

I want this roadmap to be useful to the largest amount of people and if you want to help you are very welcome. Any contribution matters, may that be an input, a feedback or a PR.

_Note: This repo also contains a [Platform Engineering Manifesto](platform-engineering-manifesto.md) which is playfully inspired by the Agile Manifesto._

## Individual 

### YAML

* YAML (not even kidding you have to learn YAML. It's everywhere and it is the first thing to learn)

### Programming

* Programming languages (Python, Golang, Typescript) - _you don't necessarily need to be a master at these but it helps a ton_
* Version control (Git)
* SDKs

### Linux

* Bash scripting
* Navigating the filesystem
* Understand and manipulate both RAM and disk
* Understand and manipulate processes
* Understand cgroups and resource utilization
* Security (SELinux)
* Package management
  * rip
  * yum
  * dnf

### Network

* Protocols
  * TCP/IP vs UDP
  * HTTP (http1 vs http2)
  * TLS/SSL
  * HTTPS
  * DNS
  * SSH
* Navigate and troubleshoot network 
 * DNS
 * DHCP
 * Firewall (Iptables)
* ISO-OSI model
* Network topologies
* Discoverability
* Load Balacing
* Proxy and reverse-proxy

### Distributed systems and datastores

* _Queues_
  * Kafka
  * RabbitMQ
  * SQS
  * ActiveMQ
  * Event Log vs. Message Queue
  * _Load balancer_
    * Load distribution concepts
    * Layer 4 vs. layer 7 load balancer
* _APIs_
    * Stateful vs. stateless
    * REST
    * Microservices: pros and cons
    * GraphQL
    * gRPC
* Caching and key-value stores
  * etcd
  * Valkey / Redis
  * Memcached
  * In-memory databases
* CDN (Content Delivery Network)
  * Cloudflare
  * Akamai
  * Fastly
* _Databases_
  * _Types of databases_
    * NoSQL vs. Relational databases
      * MongoDB
    * Relational vs. Document-based
    * Column-oriented databases (OLAP)
      * ClickHouse
    * Graph databases
    * Vector databases
    * Objects-based storage
  * ACID principles
  * CAP Theorem
  * Indexing
  * Transaction
  * Storage

### DevOps

* _DevOps Concepts_
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
    * Temporal.io
* IaC (Infrastructure as Code)
  * Configuration management
    * Ansible
    * Puppet
    * Chef
  * Provisioning and management
   * Open-Tofu
   * Terraform
   * Pulumi
   * CloudFormation (AWS proprietary)
   * Bicep (Azure proprietary)
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

* Encryption
  * Algorithms
  * Certificates
  * TLS
  * PKI
  * Signatures
* Authentication
* Authorization
* IAM (Identity Access Management)
  * OPA (Open Policy Agent)
* DevSecOps
  * SAST
  * DAST
* Container scanning
* Threat detection
* CNAPP (Cloud Native Application Protection Platform)
* CDR

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
  * eBPF and Kernel-level software
  * StatefulSets
  * Storage classes
  * Persistent volumes and claims
  * CSI (Container Storage Interface)
  * CNI (Container Network Interface)
    * Cilium
  * ClusterIP vs. NodePort vs. LoadBalancer
  * Service Meshes
    * Linkerd
    * Istio
  * Network policies
  * Service accounts
  * RBAC (Role-based access control)
  * Jobs & CronJobs
  * HPA (Horizontal Pod Autoscaler)
  * VPA (Vertical Pod Autoscaler)
  * Cluster Autoscaler
  * Node scaling
    * Karpenter
  * Pod Disruption Budgets
  * Resource quotas
  * Limit ranges
  * Taints and tolerations
  * Node affinity
  * Pod affinity vs pod anti-affinity
  * Pod security policies
  * Admission controllers
  * Operators
  * CRDs (Custom Resource Definitions)
* CNCF Landscape

### Platform Engineering

* _Concepts_
  * Internal Development Platform
  * Platform Capability
  * Platform Catalog
  * Golden Paths
  * Self-service Platforms
  * Platform as a Product
  * DevEx (Developer Experience or UX for developers)
  * PMF (Platform Market Fit)
  * Platform ROI (Return On Investment)
* Internal Developer Platforms
  * Backstage _the OSS version is a builder of IDPs, not a complete IDP per se_
  * Mia Platform
  * Humanitec
  * Port
  * Portainer
  * Upbound
  * Northflank
  * Qovery

### Soft skills

* Being a nice person to work with (no, really it's important)
* _Communication_
  * Written
  * Oral
  * Presentation skills
* Collaboration
* Problem solving
* Curiosity
* Navigating ambiguity
* Blameless retrospectives

## Company

For a company to be successful in the long run, it needs to have a strong engineering culture. This is a list of things that can help to build such a culture.

### Coming soon
