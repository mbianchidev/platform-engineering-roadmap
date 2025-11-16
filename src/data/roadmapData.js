export const roadmapData = {
  title: "Platform Engineering Roadmap",
  description: "An opinionated roadmap to become a Platform Engineer",
  image: "platform-engineering-inferno.jpg",
  sections: [
    {
      id: "individual",
      title: "Individual Skills",
      description: "Core technical skills every Platform Engineer should master",
      topics: [
        {
          id: "yaml",
          title: "YAML",
          description: "YAML fundamentals - it's everywhere in platform engineering",
          content: "YAML (not even kidding you have to learn YAML. It's everywhere and it is the first thing to learn)",
          links: [
            { title: "YAML Official Spec", url: "https://yaml.org/spec/" },
            { title: "YAML Tutorial", url: "https://www.tutorialspoint.com/yaml/index.htm" }
          ],
          subtopics: []
        },
        {
          id: "programming",
          title: "Programming",
          description: "Programming languages and development skills",
          content: "Programming languages (Python, Golang, Typescript) - you don't necessarily need to be a master at these but it helps a ton",
          links: [
            { title: "Python.org", url: "https://python.org" },
            { title: "Go Documentation", url: "https://golang.org/doc/" },
            { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" }
          ],
          subtopics: [
            { name: "Programming languages (Python, Golang, Typescript)", description: "Core languages for platform engineering" },
            { name: "Version control (Git)", description: "Essential for code management" },
            { name: "SDKs", description: "Software Development Kits for various platforms" }
          ]
        },
        {
          id: "linux",
          title: "Linux",
          description: "Linux system administration and scripting",
          content: "Essential Linux skills for managing infrastructure and automation",
          links: [
            { title: "Linux Documentation", url: "https://www.kernel.org/doc/html/latest/" },
            { title: "Bash Guide", url: "https://mywiki.wooledge.org/BashGuide" }
          ],
          subtopics: [
            { name: "Bash scripting", description: "Automation and task scripting" },
            { name: "Navigating the filesystem", description: "File system operations and navigation" },
            { name: "Understand and manipulate both RAM and disk", description: "Memory and storage management" },
            { name: "Understand and manipulate processes", description: "Process management and monitoring" },
            { name: "Understand cgroups and resource utilization", description: "Control groups for resource management" },
            { name: "Security (SELinux)", description: "Security-Enhanced Linux" },
            { name: "Package management (rip, yum, dnf)", description: "Software package management systems" }
          ]
        },
        {
          id: "network",
          title: "Network",
          description: "Networking protocols and infrastructure",
          content: "Network fundamentals, protocols, and troubleshooting for distributed systems",
          links: [
            { title: "TCP/IP Guide", url: "https://www.tcpipguide.com/" },
            { title: "HTTP/2 Specification", url: "https://tools.ietf.org/html/rfc7540" }
          ],
          subtopics: [
            { name: "TCP/IP vs UDP", description: "Transport layer protocols" },
            { name: "HTTP (http1 vs http2)", description: "Web protocols and performance" },
            { name: "TLS/SSL", description: "Transport Layer Security" },
            { name: "HTTPS", description: "Secure HTTP communication" },
            { name: "DNS", description: "Domain Name System" },
            { name: "SSH", description: "Secure Shell protocol" },
            { name: "DNS, DHCP, Firewall (Iptables)", description: "Network troubleshooting tools" },
            { name: "ISO-OSI model", description: "Network layer model" },
            { name: "Network topologies", description: "Network design patterns" },
            { name: "Load Balancing", description: "Traffic distribution" },
            { name: "Proxy and reverse-proxy", description: "Traffic intermediaries" }
          ]
        },
        {
          id: "distributed-systems",
          title: "Distributed Systems",
          description: "Distributed systems architecture and data stores",
          content: "Understanding distributed systems, queues, APIs, caching, and databases",
          links: [
            { title: "Apache Kafka", url: "https://kafka.apache.org/" },
            { title: "Redis Documentation", url: "https://redis.io/docs/" }
          ],
          subtopics: [
            { name: "Message Queues (Kafka, RabbitMQ, SQS)", description: "Asynchronous messaging systems" },
            { name: "Load Balancers (Layer 4 vs Layer 7)", description: "Traffic distribution strategies" },
            { name: "REST APIs", description: "RESTful service architecture" },
            { name: "Microservices", description: "Distributed service architecture" },
            { name: "GraphQL", description: "Query language for APIs" },
            { name: "gRPC", description: "High-performance RPC framework" },
            { name: "Caching (Redis, Memcached)", description: "In-memory data stores" },
            { name: "CDN (Cloudflare, Akamai)", description: "Content delivery networks" },
            { name: "Databases (NoSQL, Relational, Graph)", description: "Data storage solutions" },
            { name: "ACID principles", description: "Database transaction properties" },
            { name: "CAP Theorem", description: "Distributed systems trade-offs" }
          ]
        },
        {
          id: "devops",
          title: "DevOps",
          description: "DevOps practices, cloud platforms, and automation",
          content: "DevOps culture, cloud services, CI/CD, and Infrastructure as Code",
          links: [
            { title: "DevOps Culture", url: "https://aws.amazon.com/devops/what-is-devops/" },
            { title: "Terraform Documentation", url: "https://www.terraform.io/docs/" }
          ],
          subtopics: [
            { name: "DevOps Culture", description: "Culture over tools, feedback loops" },
            { name: "Cloud Services (SaaS, PaaS, IaaS)", description: "Cloud service models" },
            { name: "Serverless (Knative)", description: "Function-as-a-Service platforms" },
            { name: "CI/CD Pipelines", description: "Continuous integration and deployment" },
            { name: "GitOps (ArgoCD, FluxCD)", description: "Git-based operations" },
            { name: "Infrastructure as Code (Terraform, Pulumi)", description: "Declarative infrastructure" },
            { name: "Configuration Management (Ansible, Puppet)", description: "System configuration automation" },
            { name: "Cloud Providers (AWS, GCP, Azure)", description: "Major cloud platforms" },
            { name: "Version Control (GitHub, GitLab)", description: "Source code management" }
          ]
        },
        {
          id: "rollout",
          title: "Rollout Strategies",
          description: "Deployment patterns and release management",
          content: "Various deployment strategies for safe and reliable software releases",
          links: [
            { title: "Blue-Green Deployment", url: "https://martinfowler.com/bliki/BlueGreenDeployment.html" },
            { title: "Canary Releases", url: "https://martinfowler.com/bliki/CanaryRelease.html" }
          ],
          subtopics: [
            { name: "Blue Green Rollout", description: "Two identical production environments" },
            { name: "Canary Rollout", description: "Gradual rollout to subset of users" },
            { name: "Progressive Rollout", description: "Incremental feature rollout" },
            { name: "Shadow Rollout", description: "Testing with production traffic" },
            { name: "Feature Flags", description: "Runtime feature toggling" },
            { name: "Bake Time", description: "Monitoring period after deployment" }
          ]
        },
        {
          id: "observability",
          title: "Observability",
          description: "Monitoring, logging, and observability practices",
          content: "Comprehensive observability including metrics, logs, traces, and alerting",
          links: [
            { title: "Prometheus", url: "https://prometheus.io/" },
            { title: "OpenTelemetry", url: "https://opentelemetry.io/" }
          ],
          subtopics: [
            { name: "Telemetry vs Monitoring vs Observability", description: "Understanding the differences" },
            { name: "Traces vs Metrics vs Logs", description: "Three pillars of observability" },
            { name: "APM (Application Performance Monitoring)", description: "Application monitoring tools" },
            { name: "Alerting (ChatOps, Slow vs Fast burn)", description: "Notification strategies" },
            { name: "Log Management", description: "Log aggregation and analysis" },
            { name: "Prometheus & Grafana", description: "Metrics collection and visualization" },
            { name: "OpenTelemetry", description: "Observability framework" },
            { name: "Datadog, New Relic", description: "Commercial observability platforms" }
          ]
        },
        {
          id: "security",
          title: "Security",
          description: "Security practices and tools for platform engineering",
          content: "Security fundamentals including encryption, authentication, and DevSecOps",
          links: [
            { title: "OWASP", url: "https://owasp.org/" },
            { title: "DevSecOps", url: "https://www.devsecops.org/" }
          ],
          subtopics: [
            { name: "Encryption (Algorithms, Certificates, TLS, PKI)", description: "Data protection and cryptography" },
            { name: "Authentication & Authorization", description: "Identity and access control" },
            { name: "IAM (Identity Access Management)", description: "User and service identity management" },
            { name: "DevSecOps (SAST, DAST)", description: "Security in development lifecycle" },
            { name: "Container Scanning", description: "Container security assessment" },
            { name: "Threat Detection", description: "Security monitoring and response" },
            { name: "OPA (Open Policy Agent)", description: "Policy-based access control" }
          ]
        },
        {
          id: "site-reliability",
          title: "Site Reliability",
          description: "Site reliability engineering practices",
          content: "SRE practices including scalability, rate limiting, and chaos engineering",
          links: [
            { title: "SRE Book", url: "https://sre.google/books/" },
            { title: "Chaos Engineering", url: "https://principlesofchaos.org/" }
          ],
          subtopics: [
            { name: "Hard vs Soft Dependencies", description: "System dependency classification" },
            { name: "Scalability Concepts", description: "System scaling strategies" },
            { name: "Rate Limiting", description: "Traffic flow control" },
            { name: "Throughput", description: "System performance metrics" },
            { name: "Chaos Engineering", description: "Resilience testing practices" }
          ]
        },
        {
          id: "cloud-native",
          title: "Cloud Native",
          description: "Containers, Kubernetes, and cloud-native technologies",
          content: "Comprehensive cloud-native ecosystem including containers, orchestration, and service mesh",
          links: [
            { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/" },
            { title: "CNCF Landscape", url: "https://landscape.cncf.io/" }
          ],
          subtopics: [
            { name: "Containers (Docker, OCI)", description: "Containerization fundamentals" },
            { name: "Container Runtime (Containerd, CRI-O)", description: "Container execution engines" },
            { name: "Kubernetes Fundamentals", description: "Container orchestration basics" },
            { name: "Pods, Services, Deployments", description: "Core Kubernetes resources" },
            { name: "ConfigMaps & Secrets", description: "Configuration management" },
            { name: "Helm vs Kustomize", description: "Kubernetes package management" },
            { name: "Storage (PV, PVC, Storage Classes)", description: "Persistent storage in Kubernetes" },
            { name: "Networking (CNI, Service Mesh)", description: "Kubernetes networking" },
            { name: "Security (RBAC, Network Policies)", description: "Kubernetes security" },
            { name: "Autoscaling (HPA, VPA, Cluster Autoscaler)", description: "Dynamic resource scaling" },
            { name: "Operators & CRDs", description: "Kubernetes extensibility" }
          ]
        },
        {
          id: "platform-engineering",
          title: "Platform Engineering",
          description: "Platform engineering concepts and internal developer platforms",
          content: "Platform engineering practices, Internal Developer Platforms, and developer experience",
          links: [
            { title: "Platform Engineering", url: "https://platformengineering.org/" },
            { title: "Backstage", url: "https://backstage.io/" }
          ],
          subtopics: [
            { name: "Internal Development Platform", description: "Self-service developer platforms" },
            { name: "Platform Capabilities", description: "Platform feature offerings" },
            { name: "Golden Paths", description: "Recommended development workflows" },
            { name: "Platform as a Product", description: "Product thinking for platforms" },
            { name: "DevEx (Developer Experience)", description: "User experience for developers" },
            { name: "Platform ROI", description: "Return on investment metrics" },
            { name: "Backstage", description: "Open source developer portal" },
            { name: "Commercial IDPs (Humanitec, Port)", description: "Platform-as-a-Service solutions" }
          ]
        },
        {
          id: "soft-skills",
          title: "Soft Skills",
          description: "Essential interpersonal and communication skills",
          content: "Critical soft skills for effective platform engineering and team collaboration",
          links: [
            { title: "Effective Communication", url: "https://www.skillsyouneed.com/ips/communication-skills.html" },
            { title: "Blameless Postmortems", url: "https://sre.google/sre-book/postmortem-culture/" }
          ],
          subtopics: [
            { name: "Being a nice person to work with", description: "Interpersonal relationships matter" },
            { name: "Written Communication", description: "Clear and effective writing" },
            { name: "Oral Communication", description: "Speaking and listening skills" },
            { name: "Presentation Skills", description: "Effective knowledge sharing" },
            { name: "Collaboration", description: "Working effectively in teams" },
            { name: "Problem Solving", description: "Analytical and creative thinking" },
            { name: "Curiosity", description: "Continuous learning mindset" },
            { name: "Navigating Ambiguity", description: "Working with unclear requirements" },
            { name: "Blameless Retrospectives", description: "Learning-focused incident reviews" }
          ]
        }
      ]
    },
    {
      id: "company",
      title: "Company Level",
      description: "Organizational practices for successful platform engineering",
      topics: [
        {
          id: "coming-soon",
          title: "Coming Soon",
          description: "Company-level platform engineering practices",
          content: "For a company to be successful in the long run, it needs to have a strong engineering culture. This section will cover organizational practices and culture building.",
          links: [],
          subtopics: [
            { name: "Engineering Culture", description: "Building strong engineering practices" },
            { name: "Platform Strategy", description: "Organizational platform approach" },
            { name: "Team Structure", description: "Organizing platform teams" }
          ]
        }
      ]
    }
  ]
};