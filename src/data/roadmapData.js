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
          content: "YAML (not even kidding you have to learn YAML. It's everywhere and it is the first thing to learn). From Kubernetes manifests to CI/CD pipelines, YAML is the de facto configuration language in cloud-native environments.",
          links: [
            { title: "YAML Official Spec", url: "https://yaml.org/spec/" },
            { title: "YAML Tutorial", url: "https://www.tutorialspoint.com/yaml/index.htm" },
            { title: "Learn YAML in Y minutes", url: "https://learnxinyminutes.com/docs/yaml/" },
            { title: "YAML Lint - Online Validator", url: "https://www.yamllint.com/" }
          ],
          subtopics: [
            { name: "YAML Syntax & Structure", description: "Understanding indentation, lists, maps, and anchors" },
            { name: "Multi-document YAML", description: "Working with multiple documents in a single file" },
            { name: "YAML vs JSON vs TOML", description: "Comparing configuration formats" }
          ]
        },
        {
          id: "programming",
          title: "Programming",
          description: "Programming languages and development skills",
          content: "Programming languages (Python, Golang, Typescript) - you don't necessarily need to be a master at these but it helps a ton. These languages are commonly used for automation, tooling, and building platform services.",
          links: [
            { title: "Python.org", url: "https://python.org" },
            { title: "Go Documentation", url: "https://golang.org/doc/" },
            { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" },
            { title: "Exercism - Practice Coding", url: "https://exercism.org/" },
            { title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
            { title: "Git Branching Tutorial", url: "https://learngitbranching.js.org/" },
            { title: "Rust for Platform Engineering", url: "https://www.rust-lang.org/learn" }
          ],
          subtopics: [
            { name: "Python", description: "Automation, scripting, and tooling - most common for DevOps/Platform" },
            { name: "Golang", description: "Building CLIs, operators, and high-performance tools (Kubernetes ecosystem)" },
            { name: "TypeScript/JavaScript", description: "Frontend for developer portals and internal tooling" },
            { name: "Rust", description: "Systems programming and high-performance infrastructure tools" },
            { name: "Version control (Git)", description: "Essential for code management and collaboration" },
            { name: "SDKs and APIs", description: "Software Development Kits for cloud providers and platforms" },
            { name: "Code review practices", description: "Reviewing code effectively and providing constructive feedback" }
          ]
        },
        {
          id: "linux",
          title: "Linux",
          description: "Linux system administration and scripting",
          content: "Essential Linux skills for managing infrastructure and automation. Understanding the operating system that powers most cloud infrastructure is fundamental.",
          links: [
            { title: "Linux Documentation", url: "https://www.kernel.org/doc/html/latest/" },
            { title: "Bash Guide", url: "https://mywiki.wooledge.org/BashGuide" },
            { title: "Linux Journey", url: "https://linuxjourney.com/" },
            { title: "The Linux Command Line Book", url: "https://linuxcommand.org/tlcl.php" },
            { title: "OverTheWire Bandit - Linux Practice", url: "https://overthewire.org/wargames/bandit/" },
            { title: "Systemd Documentation", url: "https://systemd.io/" },
            { title: "Linux Foundation Training", url: "https://training.linuxfoundation.org/" }
          ],
          subtopics: [
            { name: "Bash scripting", description: "Automation and task scripting" },
            { name: "Navigating the filesystem", description: "File system operations and navigation" },
            { name: "Memory & disk management", description: "Understanding and manipulating RAM and storage" },
            { name: "Process management", description: "ps, top, htop, kill, and process lifecycle" },
            { name: "cgroups and namespaces", description: "Foundation of containerization and resource isolation" },
            { name: "systemd", description: "Service management and init system" },
            { name: "Security (SELinux/AppArmor)", description: "Mandatory Access Control systems" },
            { name: "Package management", description: "apt, yum, dnf, rpm - managing software packages" },
            { name: "Networking tools", description: "netstat, ss, tcpdump, iptables, nftables" }
          ]
        },
        {
          id: "network",
          title: "Network",
          description: "Networking protocols and infrastructure",
          content: "Network fundamentals, protocols, and troubleshooting for distributed systems. Networking knowledge is crucial for designing and debugging cloud-native applications.",
          links: [
            { title: "HTTP/2 Specification", url: "https://tools.ietf.org/html/rfc7540" },
            { title: "HTTP/3 Explained", url: "https://http3-explained.haxx.se/" },
            { title: "Computer Networking Course (Free)", url: "https://www.youtube.com/playlist?list=PLEbnTDJUr_IegfoqO4iPnPYQui46QqT0j" },
            { title: "DNS for Developers", url: "https://www.nslookup.io/learning/" },
            { title: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/" },
            { title: "High Performance Browser Networking", url: "https://hpbn.co/" }
          ],
          subtopics: [
            { name: "TCP/IP vs UDP", description: "Transport layer protocols and use cases" },
            { name: "HTTP/1.1 vs HTTP/2 vs HTTP/3", description: "Web protocols evolution and performance" },
            { name: "TLS/SSL & mTLS", description: "Transport Layer Security and mutual TLS" },
            { name: "DNS", description: "Domain Name System - resolution, records, and troubleshooting" },
            { name: "SSH", description: "Secure Shell protocol and key management" },
            { name: "DHCP & IPAM", description: "IP address management" },
            { name: "Firewalls (iptables, nftables)", description: "Network security and filtering" },
            { name: "OSI & TCP/IP models", description: "Network layer models" },
            { name: "Network topologies", description: "Network design patterns" },
            { name: "Load Balancing (L4 vs L7)", description: "Traffic distribution strategies" },
            { name: "Proxy and reverse-proxy", description: "Traffic intermediaries and use cases" },
            { name: "VPN & Network tunneling", description: "Secure network connectivity" },
            { name: "Service discovery", description: "Finding services in distributed systems" }
          ]
        },
        {
          id: "distributed-systems",
          title: "Distributed Systems",
          description: "Distributed systems architecture and data stores",
          content: "Understanding distributed systems, queues, APIs, caching, and databases. These concepts are fundamental for building scalable and reliable platforms.",
          links: [
            { title: "Apache Kafka", url: "https://kafka.apache.org/" },
            { title: "Valkey (Redis fork)", url: "https://valkey.io/" },
            { title: "Designing Data-Intensive Applications", url: "https://dataintensive.net/" },
            { title: "CAP Theorem Explained", url: "https://www.ibm.com/topics/cap-theorem" },
            { title: "Martin Kleppmann's Blog", url: "https://martin.kleppmann.com/" },
            { title: "Distributed Systems Course (MIT)", url: "https://pdos.csail.mit.edu/6.824/" },
            { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
            { title: "gRPC Documentation", url: "https://grpc.io/docs/" }
          ],
          subtopics: [
            { name: "Message Queues & Event Streaming", description: "Kafka, RabbitMQ, NATS, Pulsar" },
            { name: "Event Log vs Message Queue", description: "Understanding the architectural differences" },
            { name: "Load Balancers (Layer 4 vs Layer 7)", description: "Traffic distribution strategies" },
            { name: "REST APIs", description: "RESTful service architecture and best practices" },
            { name: "Microservices architecture", description: "Distributed service design patterns, pros and cons" },
            { name: "GraphQL", description: "Query language for APIs" },
            { name: "gRPC & Protocol Buffers", description: "High-performance RPC framework" },
            { name: "Caching strategies", description: "Redis, Memcached, Valkey, and caching patterns" },
            { name: "CDN concepts", description: "Content delivery networks and edge computing" },
            { name: "Database types", description: "NoSQL, Relational, Graph, Vector, Column-oriented" },
            { name: "ACID principles", description: "Atomicity, Consistency, Isolation, Durability" },
            { name: "CAP Theorem", description: "Consistency, Availability, Partition tolerance trade-offs" },
            { name: "Consensus algorithms", description: "Raft, Paxos - distributed agreement" },
            { name: "Eventual consistency", description: "Understanding distributed data patterns" }
          ]
        },
        {
          id: "devops",
          title: "DevOps",
          description: "DevOps practices, cloud platforms, and automation",
          content: "DevOps culture, cloud services, CI/CD, and Infrastructure as Code. Platform Engineering evolved from DevOps, understanding these foundations is essential.",
          links: [
            { title: "DevOps Handbook", url: "https://itrevolution.com/product/the-devops-handbook-second-edition/" },
            { title: "OpenTofu Documentation", url: "https://opentofu.org/docs/" },
            { title: "Terraform Documentation", url: "https://www.terraform.io/docs/" },
            { title: "Ansible Documentation", url: "https://docs.ansible.com/" },
            { title: "GitOps Principles", url: "https://opengitops.dev/" },
            { title: "ArgoCD Documentation", url: "https://argo-cd.readthedocs.io/" },
            { title: "FluxCD Documentation", url: "https://fluxcd.io/docs/" },
            { title: "Continuous Delivery Book", url: "https://continuousdelivery.com/" },
            { title: "Pulumi Documentation", url: "https://www.pulumi.com/docs/" }
          ],
          subtopics: [
            { name: "DevOps Culture", description: "Culture over tools, feedback loops, continuous improvement" },
            { name: "Cloud Service Models", description: "SaaS, PaaS, IaaS, FaaS - understanding the stack" },
            { name: "Serverless", description: "Knative, OpenFaaS, and serverless patterns" },
            { name: "CI/CD Pipelines", description: "Continuous integration and deployment principles" },
            { name: "GitOps", description: "Git-based operations with ArgoCD, FluxCD" },
            { name: "Infrastructure as Code", description: "OpenTofu, Terraform, Pulumi, Crossplane" },
            { name: "Configuration Management", description: "Ansible, Puppet, Chef - system automation" },
            { name: "Cloud Providers", description: "AWS, GCP, Azure, and multi-cloud strategies" },
            { name: "Version Control Platforms", description: "GitHub, GitLab, Bitbucket" },
            { name: "Secrets Management", description: "HashiCorp Vault, SOPS, Sealed Secrets" },
            { name: "Environment Management", description: "Dev, staging, production - isolation and promotion" },
            { name: "Multitenancy", description: "Single vs multi-tenant architectures" }
          ]
        },
        {
          id: "rollout",
          title: "Rollout Strategies",
          description: "Deployment patterns and release management",
          content: "Various deployment strategies for safe and reliable software releases. Understanding these patterns is crucial for reducing deployment risk and enabling continuous delivery.",
          links: [
            { title: "Blue-Green Deployment", url: "https://martinfowler.com/bliki/BlueGreenDeployment.html" },
            { title: "Canary Releases", url: "https://martinfowler.com/bliki/CanaryRelease.html" },
            { title: "Feature Flags Best Practices", url: "https://launchdarkly.com/blog/feature-flag-best-practices/" },
            { title: "Progressive Delivery", url: "https://www.split.io/glossary/progressive-delivery/" },
            { title: "Argo Rollouts", url: "https://argoproj.github.io/rollouts/" },
            { title: "Flagger", url: "https://flagger.app/" }
          ],
          subtopics: [
            { name: "Blue-Green Deployment", description: "Two identical production environments" },
            { name: "Canary Releases", description: "Gradual rollout to subset of users" },
            { name: "Progressive Delivery", description: "Incremental feature rollout with automated analysis" },
            { name: "Shadow/Dark Launches", description: "Testing with production traffic without user impact" },
            { name: "Feature Flags", description: "Runtime feature toggling and experimentation" },
            { name: "A/B Testing", description: "Comparing different versions with user segments" },
            { name: "Bake Time", description: "Monitoring period after deployment" },
            { name: "Rollback strategies", description: "Fast and safe rollback mechanisms" },
            { name: "Traffic shifting", description: "Weighted routing between versions" }
          ]
        },
        {
          id: "observability",
          title: "Observability",
          description: "Monitoring, logging, and observability practices",
          content: "Comprehensive observability including metrics, logs, traces, and alerting. Platform engineers must ensure platforms are observable and issues are quickly diagnosed.",
          links: [
            { title: "OpenTelemetry", url: "https://opentelemetry.io/" },
            { title: "Prometheus", url: "https://prometheus.io/" },
            { title: "Grafana", url: "https://grafana.com/docs/" },
            { title: "Observability Engineering Book", url: "https://www.oreilly.com/library/view/observability-engineering/9781492076438/" },
            { title: "SLO Guide", url: "https://sre.google/workbook/implementing-slos/" },
            { title: "Jaeger Tracing", url: "https://www.jaegertracing.io/" },
            { title: "Loki Log Aggregation", url: "https://grafana.com/oss/loki/" },
            { title: "DORA Metrics", url: "https://dora.dev/guides/dora-metrics-four-keys/" }
          ],
          subtopics: [
            { name: "Telemetry vs Monitoring vs Observability", description: "Understanding the differences and evolution" },
            { name: "Three Pillars: Metrics, Logs, Traces", description: "Foundation of observability" },
            { name: "OpenTelemetry (OTEL)", description: "Vendor-neutral observability framework" },
            { name: "Prometheus & PromQL", description: "Metrics collection and querying" },
            { name: "Grafana", description: "Visualization and dashboarding" },
            { name: "Distributed Tracing", description: "Jaeger, Zipkin, Tempo" },
            { name: "Log Management", description: "Aggregation, retention, analysis" },
            { name: "APM concepts", description: "Application Performance Monitoring" },
            { name: "SLIs, SLOs, SLAs", description: "Service level indicators, objectives, agreements" },
            { name: "Alerting strategies", description: "ChatOps, on-call, slow vs fast burn alerts" },
            { name: "DORA Metrics", description: "Deployment frequency, lead time, MTTR, change failure rate" },
            { name: "Error budgets", description: "Balancing reliability and velocity" }
          ]
        },
        {
          id: "security",
          title: "Security",
          description: "Security practices and tools for platform engineering",
          content: "Security fundamentals including encryption, authentication, and DevSecOps. Security must be embedded into platform design from the start.",
          links: [
            { title: "OWASP", url: "https://owasp.org/" },
            { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks" },
            { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
            { title: "Open Policy Agent", url: "https://www.openpolicyagent.org/" },
            { title: "Kyverno", url: "https://kyverno.io/" },
            { title: "Falco", url: "https://falco.org/" },
            { title: "Trivy Container Scanner", url: "https://trivy.dev/" },
            { title: "Supply Chain Security (SLSA)", url: "https://slsa.dev/" },
            { title: "Sigstore", url: "https://www.sigstore.dev/" }
          ],
          subtopics: [
            { name: "Encryption", description: "Algorithms, certificates, TLS, PKI" },
            { name: "Authentication & Authorization", description: "AuthN vs AuthZ, OAuth, OIDC, SAML" },
            { name: "Zero Trust Architecture", description: "Never trust, always verify" },
            { name: "IAM", description: "Identity and Access Management principles" },
            { name: "RBAC & ABAC", description: "Role and Attribute-based access control" },
            { name: "DevSecOps", description: "Security in development lifecycle (Shift Left)" },
            { name: "SAST & DAST", description: "Static and Dynamic Application Security Testing" },
            { name: "Container & Image Scanning", description: "Trivy, Grype, vulnerability detection" },
            { name: "Policy as Code", description: "OPA, Kyverno, Gatekeeper" },
            { name: "Runtime Security", description: "Falco, threat detection" },
            { name: "Supply Chain Security", description: "SBOM, SLSA, Sigstore, image signing" },
            { name: "Secrets Management", description: "Vault, External Secrets, Sealed Secrets" },
            { name: "Network Security", description: "Network policies, mTLS, service mesh security" },
            { name: "CNAPP", description: "Cloud Native Application Protection Platform" }
          ]
        },
        {
          id: "site-reliability",
          title: "Site Reliability",
          description: "Site reliability engineering practices",
          content: "SRE practices including scalability, rate limiting, and chaos engineering. Platform engineers often work closely with SRE teams or adopt SRE principles.",
          links: [
            { title: "SRE Book (Google)", url: "https://sre.google/books/" },
            { title: "SRE Workbook", url: "https://sre.google/workbook/table-of-contents/" },
            { title: "Chaos Engineering Principles", url: "https://principlesofchaos.org/" },
            { title: "Chaos Monkey (Netflix)", url: "https://netflix.github.io/chaosmonkey/" },
            { title: "LitmusChaos", url: "https://litmuschaos.io/" },
            { title: "Gremlin", url: "https://www.gremlin.com/community/tutorials/" },
            { title: "Availability Calculator", url: "https://availability.sre.xyz/" }
          ],
          subtopics: [
            { name: "SRE vs DevOps", description: "Understanding the relationship and differences" },
            { name: "Hard vs Soft Dependencies", description: "System dependency classification" },
            { name: "Scalability patterns", description: "Horizontal vs vertical scaling" },
            { name: "Rate Limiting", description: "Traffic flow control and protection" },
            { name: "Circuit Breakers", description: "Preventing cascade failures" },
            { name: "Bulkhead pattern", description: "Isolating failures" },
            { name: "Throughput & Latency", description: "System performance metrics" },
            { name: "Chaos Engineering", description: "Resilience testing practices" },
            { name: "Game Days", description: "Structured chaos experiments" },
            { name: "Incident Management", description: "Response, communication, post-mortems" },
            { name: "On-call practices", description: "Effective on-call rotations and runbooks" },
            { name: "Toil reduction", description: "Automating repetitive operational work" }
          ]
        },
        {
          id: "cloud-native",
          title: "Cloud Native",
          description: "Containers, Kubernetes, and cloud-native technologies",
          content: "Comprehensive cloud-native ecosystem including containers, orchestration, and service mesh. This is the technology foundation for modern platforms.",
          links: [
            { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/" },
            { title: "CNCF Landscape", url: "https://landscape.cncf.io/" },
            { title: "CNCF Projects", url: "https://www.cncf.io/projects/" },
            { title: "OCI Specifications", url: "https://opencontainers.org/" },
            { title: "Containerd", url: "https://containerd.io/" },
            { title: "Helm Documentation", url: "https://helm.sh/docs/" },
            { title: "Kustomize", url: "https://kustomize.io/" },
            { title: "Cilium", url: "https://cilium.io/" },
            { title: "Istio", url: "https://istio.io/" },
            { title: "Linkerd", url: "https://linkerd.io/" },
            { title: "Crossplane", url: "https://www.crossplane.io/" }
          ],
          subtopics: [
            { name: "Containers & OCI", description: "Container images, registries, OCI spec" },
            { name: "Container Runtimes", description: "containerd, CRI-O, gVisor" },
            { name: "Kubernetes Architecture", description: "Control plane, nodes, etcd" },
            { name: "Core Resources", description: "Pods, Services, Deployments, StatefulSets" },
            { name: "Configuration", description: "ConfigMaps, Secrets, environment management" },
            { name: "Package Management", description: "Helm, Kustomize, Carvel" },
            { name: "Storage", description: "PV, PVC, Storage Classes, CSI drivers" },
            { name: "Networking", description: "CNI, ingress controllers, Gateway API" },
            { name: "Service Mesh", description: "Istio, Linkerd, Cilium Service Mesh" },
            { name: "Security", description: "RBAC, Network Policies, Pod Security Standards" },
            { name: "Autoscaling", description: "HPA, VPA, Karpenter, Cluster Autoscaler" },
            { name: "Operators & CRDs", description: "Extending Kubernetes with custom resources" },
            { name: "Multi-cluster", description: "Federation, multi-cluster management" },
            { name: "eBPF", description: "Kernel-level observability and networking" }
          ]
        },
        {
          id: "platform-engineering",
          title: "Platform Engineering",
          description: "Platform engineering concepts and internal developer platforms",
          content: "Platform engineering practices, Internal Developer Platforms, and developer experience. This is the culmination of all skills, applying product thinking to infrastructure.",
          links: [
            { title: "CNCF Platform White Paper", url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/" },
            { title: "Platform Engineering Maturity Model", url: "https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/" },
            { title: "Backstage", url: "https://backstage.io/" },
            { title: "Team Topologies", url: "https://teamtopologies.com/" },
            { title: "Internal Developer Portal Guide", url: "https://internaldeveloperplatform.org/" },
            { title: "DevEx Paper (DX)", url: "https://queue.acm.org/detail.cfm?id=3595878" }
          ],
          subtopics: [
            { name: "Internal Developer Platform (IDP)", description: "Self-service developer platforms" },
            { name: "Platform Capabilities", description: "Feature offerings and service catalog" },
            { name: "Golden Paths", description: "Recommended, paved roads for development" },
            { name: "Platform as a Product", description: "Product thinking applied to platforms" },
            { name: "Developer Experience (DevEx)", description: "User experience for developers" },
            { name: "Cognitive Load", description: "Reducing complexity for development teams" },
            { name: "Platform APIs", description: "API-first platform design" },
            { name: "Self-service", description: "Enabling autonomy with guardrails" },
            { name: "Platform ROI & Metrics", description: "Measuring platform success" },
            { name: "Developer Portals", description: "Backstage, Port, and internal tools" },
            { name: "Service Catalog", description: "Discoverable services and APIs" },
            { name: "Platform Team Structure", description: "Organizing platform teams effectively" }
          ]
        },
        {
          id: "soft-skills",
          title: "Soft Skills",
          description: "Essential interpersonal and communication skills",
          content: "Critical soft skills for effective platform engineering and team collaboration. Technical skills alone are not enough - communication and collaboration are essential.",
          links: [
            { title: "Effective Communication", url: "https://www.skillsyouneed.com/ips/communication-skills.html" },
            { title: "Blameless Postmortems", url: "https://sre.google/sre-book/postmortem-culture/" },
            { title: "Technical Writing Guide", url: "https://developers.google.com/tech-writing" },
            { title: "The Manager's Path (for aspiring engineering managers / platform leads)", url: "https://www.oreilly.com/library/view/the-managers-path/9781491973882/" },
            { title: "So Good They Can't Ignore You (Cal Newport)", url: "https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124" }
          ],
          subtopics: [
            { name: "Being a nice person to work with", description: "Interpersonal relationships matter" },
            { name: "Technical Writing", description: "Clear documentation and RFCs" },
            { name: "Oral Communication", description: "Speaking, listening, and presenting" },
            { name: "Stakeholder Management", description: "Working with different teams and leadership" },
            { name: "Collaboration", description: "Working effectively across teams" },
            { name: "Problem Solving", description: "Analytical and creative thinking" },
            { name: "Curiosity", description: "Continuous learning mindset" },
            { name: "Navigating Ambiguity", description: "Working with unclear requirements" },
            { name: "Blameless Retrospectives", description: "Learning-focused incident reviews" },
            { name: "Mentoring", description: "Helping others grow technically" },
            { name: "Influencing without Authority", description: "Leading through expertise and relationships" }
          ]
        }
      ]
    },
    {
      id: "certifications",
      title: "Certifications",
      description: "Industry certifications to validate and advance your platform engineering skills",
      topics: [
        {
          id: "cnpa",
          title: "CNPA - Cloud Native Platform Engineering Associate",
          description: "CNCF's certification for platform engineering professionals",
          content: "The Certified Cloud Native Platform Engineering Associate (CNPA) is CNCF's newest certification, specifically designed for platform engineers. It validates foundational skills in designing, building, and operating modern developer platforms in cloud-native environments. This vendor-neutral certification covers automation, security, observability, continuous delivery, platform APIs, and developer experience.",
          links: [
            { title: "CNCF CNPA Official Page", url: "https://www.cncf.io/training/certification/cnpa/" },
            { title: "CNPA Curriculum", url: "https://github.com/cncf/curriculum/tree/master/cnpa" },
            { title: "Linux Foundation CNPA", url: "https://training.linuxfoundation.org/certification/certified-cloud-native-platform-engineering-associate-cnpa/" },
            { title: "Platform Engineering Resources (CNCF)", url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/" }
          ],
          subtopics: [
            { name: "Platform Engineering Core Fundamentals", description: "Core concepts, platform thinking, and architecture" },
            { name: "Observability, Security & Conformance", description: "Monitoring, security practices, and compliance" },
            { name: "Continuous Delivery & Platform Engineering", description: "CI/CD, GitOps, and deployment strategies" },
            { name: "Platform APIs & Infrastructure Provisioning", description: "API design and IaC practices" },
            { name: "IDPs & Developer Experience", description: "Internal Developer Platforms and DevEx" },
            { name: "Measuring Your Platform", description: "DORA metrics and platform success metrics" }
          ]
        },
        {
          id: "kubernetes-certs",
          title: "Kubernetes Certifications",
          description: "CNCF Kubernetes certifications for cloud-native expertise",
          content: "The CNCF offers several Kubernetes certifications that are highly valuable for platform engineers. These certifications validate hands-on skills with Kubernetes and are widely recognized in the industry.",
          links: [
            { title: "CKA - Kubernetes Administrator", url: "https://www.cncf.io/training/certification/cka/" },
            { title: "CKAD - Kubernetes Application Developer", url: "https://www.cncf.io/training/certification/ckad/" },
            { title: "CKS - Kubernetes Security Specialist", url: "https://www.cncf.io/training/certification/cks/" },
            { title: "KCNA - Kubernetes and Cloud Native Associate", url: "https://www.cncf.io/training/certification/kcna/" },
            { title: "KCSA - Kubernetes and Cloud Native Security Associate", url: "https://www.cncf.io/training/certification/kcsa/" },
            { title: "Kubernetes Tutorials", url: "https://kubernetes.io/docs/tutorials/" },
            { title: "Killer.sh Practice", url: "https://killer.sh/" }
          ],
          subtopics: [
            { name: "KCNA", description: "Entry-level cloud native knowledge certification" },
            { name: "CKA", description: "Certified Kubernetes Administrator - cluster management" },
            { name: "CKAD", description: "Certified Kubernetes Application Developer - app deployment" },
            { name: "CKS", description: "Certified Kubernetes Security Specialist - security hardening" },
            { name: "KCSA", description: "Kubernetes and Cloud Native Security Associate" }
          ]
        },
        {
          id: "other-certs",
          title: "Other Relevant Certifications",
          description: "Additional certifications valuable for platform engineers",
          content: "Beyond CNCF certifications, several other industry certifications can strengthen your platform engineering credentials. These cover cloud providers, GitOps, and related technologies.",
          links: [
            { title: "HashiCorp Certifications", url: "https://www.hashicorp.com/certifications" },
            { title: "AWS Certifications", url: "https://aws.amazon.com/certification/" },
            { title: "Google Cloud Certifications", url: "https://cloud.google.com/learn/certification" },
            { title: "Azure Certifications", url: "https://learn.microsoft.com/en-us/certifications/" },
            { title: "GitOps Certification (Codefresh)", url: "https://codefresh.io/gitops-certification/" },
            { title: "Linux Foundation Certifications", url: "https://training.linuxfoundation.org/certification-catalog/" }
          ],
          subtopics: [
            { name: "HashiCorp Terraform Associate", description: "Infrastructure as Code with Terraform" },
            { name: "HashiCorp Vault Associate", description: "Secrets management certification" },
            { name: "AWS Solutions Architect", description: "AWS architecture and services" },
            { name: "Google Professional Cloud Architect", description: "GCP architecture certification" },
            { name: "Azure Solutions Architect", description: "Azure architecture certification" },
            { name: "GitOps Fundamentals", description: "GitOps practices certification" },
            { name: "Linux System Administrator", description: "LFCS/LFCE Linux certifications" },
            { name: "Prometheus Certified Associate", description: "PCA - Prometheus monitoring certification" }
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
          id: "engineering-culture",
          title: "Engineering Culture",
          description: "Building a strong platform engineering culture",
          content: "For a company to be successful in the long run, it needs to have a strong engineering culture. This includes fostering collaboration, continuous learning, and a product mindset for platform development.",
          links: [
            { title: "Team Topologies", url: "https://teamtopologies.com/" },
            { title: "Accelerate Book", url: "https://itrevolution.com/product/accelerate/" },
            { title: "Engineering Culture at Spotify", url: "https://engineering.atspotify.com/" },
            { title: "Google Engineering Practices", url: "https://google.github.io/eng-practices/" }
          ],
          subtopics: [
            { name: "Engineering Culture", description: "Building strong engineering practices" },
            { name: "Platform Strategy", description: "Organizational platform approach" },
            { name: "Team Topologies", description: "Stream-aligned, platform, enabling, and complicated subsystem teams" },
            { name: "Conway's Law", description: "Understanding how organization shapes architecture" },
            { name: "Psychological Safety", description: "Creating an environment for innovation" },
            { name: "Continuous Improvement", description: "Kaizen and retrospective culture" }
          ]
        },
        {
          id: "platform-adoption",
          title: "Platform Adoption",
          description: "Strategies for successful platform adoption",
          content: "Building a great platform is only half the battle - getting developers to adopt and love it requires product thinking, marketing, and continuous feedback.",
          links: [
            { title: "Platform as a Product (CNCF)", url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/#platform-as-a-product" },
            { title: "Platform Engineering's Inferno (DevEx Talk)", url: "https://www.youtube.com/watch?v=y0VLubJKT5U" }
          ],
          subtopics: [
            { name: "Platform Marketing", description: "Internal communication and evangelism" },
            { name: "User Research", description: "Understanding developer needs" },
            { name: "Feedback Loops", description: "Gathering and acting on feedback" },
            { name: "Documentation", description: "Self-serve docs and guides" },
            { name: "Onboarding", description: "Smooth developer onboarding" },
            { name: "Champion Programs", description: "Building platform advocates" }
          ]
        },
        {
          id: "measuring-success",
          title: "Measuring Platform Success",
          description: "Metrics and KPIs for platform engineering",
          content: "Measuring the success of platform initiatives is crucial for justifying investment and driving continuous improvement. DORA metrics, developer productivity, and platform adoption rates are key indicators.",
          links: [
            { title: "DORA Metrics", url: "https://dora.dev/" },
            { title: "SPACE Framework", url: "https://queue.acm.org/detail.cfm?id=3454124" },
            { title: "Developer Productivity", url: "https://martinfowler.com/bliki/CannotMeasureProductivity.html" },
            { title: "CNCF Platform Maturity Model", url: "https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/" }
          ],
          subtopics: [
            { name: "DORA Metrics", description: "Deployment frequency, lead time, MTTR, change failure rate" },
            { name: "SPACE Framework", description: "Satisfaction, Performance, Activity, Communication, Efficiency" },
            { name: "Platform Adoption Rate", description: "Tracking platform usage growth" },
            { name: "Developer Satisfaction", description: "NPS and developer surveys" },
            { name: "Time to First Deploy", description: "Onboarding efficiency metric" },
            { name: "Self-Service Ratio", description: "Automation vs manual requests" }
          ]
        }
      ]
    }
  ]
};