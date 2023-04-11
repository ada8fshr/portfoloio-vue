export const projects = [
  {
    id: 1,
    title: "E-Commerce System",
    description: `This is an E-commerce system that allows customers to register, view different products and also
    purchase different products`,
    featuredImageLink: "products.png",
    folder: "elgon-shop",
    screenshots: [
      "check-out.png",
      "shopping-cart.png",
      "product-details.png",
      "products.png",
      "login.png",
    ],
    technology: ["Angular", "Angular Material", "MySql", "NestJs"],
    repositoryLink: "https://github.com/maikofelix47/ng-ecommerce",
  },
  {
    id: 2,
    title: "Sacco System",
    description: `This is an investment system used by sacco groups to register members, make payments, track contributions
    generate system reports`,
    featuredImageLink: "login.png",
    folder: "sacco",
    screenshots: [
      "login.png",
      "member_home_page.png",
      "member_profile.png",
      "payments.png",
      "comprehensive_income.png",
    ],
    technology: ["PHP", "Laravel", "VueJs", "Jquery", "Materialize css"],
    repositoryLink: "https://bitbucket.org/maikofelix89/mombosacco/",
  },
  {
    id: 3,
    title: "Dev on Call Dashboard",
    description: `This is the frontend of the project used by the oncall person to monitor system queues as well as
        other tables such as logs, lab results etc..`,
    screenshots: ["doc3.png", "doc1.png", "doc2.png", "doc3.png"],
    folder: "doc",
    featuredImageLink: "doc3.png",
    technology: ["React", "Javascript", "Carbon Design"],
    repositoryLink: "https://github.com/maikofelix47/dev-on-call-dashboard",
  },
  {
    id: 4,
    title: "User Management",
    description: `This is the front-end for a user management tool. It allows admins to assign location rights to users`,
    screenshots: ["um2.png", "um3.png", "um4.png"],
    folder: "um",
    featuredImageLink: "um2.png",
    technology: ["VueJs", "Node", "Javascript", "Bootstrap"],
    repositoryLink: "https://github.com/maikofelix47/usr-management",
  },
  {
    id: 5,
    title: "Portfolio",
    description: `Personal website portfolio.`,
    screenshots: ["port2.png", "port1.png", "port3.png"],
    folder: "port-folio",
    featuredImageLink: "port2.png",
    technology: ["VueJs", "Javascript", "Bootstrap"],
    repositoryLink: "https://github.com/maikofelix47/portfoloio-vue",
  },
  {
    id: 6,
    title: "Blog",
    description: `Personal Blog.`,
    screenshots: ["blog1.png", "blog3.png", "blog3.png"],
    folder: "blog",
    featuredImageLink: "blog1.png",
    technology: ["PHP", "Wordpress"],
    repositoryLink: "",
  },
  {
    id: 7,
    title: "AMPATH POC",
    description: `This is the front-end of a Point of Care System that helps medical workers provide care to patients. 
    It includes patient registration, search, appointments, summmaries, vitals etc`,
    screenshots: ["poc-login.png", "poc.png", "poc-3.png", "poc-4.png"],
    folder: "poc",
    featuredImageLink: "poc-login.png",
    technology: ["Angular", "Node", "Javascript", "Bootstrap"],
    repositoryLink: "https://github.com/AMPATH/ng2-amrs",
  },
  {
    id: 8,
    title: "Formentry",
    description: `This is a project used to design forms based on json schema`,
    featuredImageLink: "form-builder-2.png",
    folder: "formentry",
    screenshots: [
      "form-builder-2.png",
      "form-builder.png",
      "form-builder-3.png",
    ],
    technology: ["HTML", "CSS", "Bootstrap", "NodeJs", "Angular"],
    repositoryLink: "https://github.com/AMPATH/ngx-openmrs-formbuilder",
  },
  {
    id: 9,
    title: "Flat Log Monitor",
    description: `Service for monitoring ETL Table updates. Checks hourly if a certain period has passed since the last table sync. If the period is more then specified it send a slack notification to alert the developer team `,
    featuredImageLink: "flat_log_monitor_read_me.png",
    folder: "flat-log-monitor",
    screenshots: [
      "flat_log_monitor_terminal.png",
      "flat_log_monitor_slack.png",
      "flat_log_monitor_read_me.png",
    ],
    technology: ["NodeJs", "Mysql", "SlackAPI" , "SQL"],
    repositoryLink: "https://github.com/maikofelix47/flat-log-monitor",
  },
  {
    id: 10,
    title: "EID Queue Processor",
    description: `It takes the patients from the eid queue one at a time and sends an api request to another service that fetches their lab results`,
    featuredImageLink: "eid_queue_processor_read_me.png",
    folder: "eid-queue-processor",
    screenshots: ["eid_queue_processor_read_me.png"],
    technology: ["NodeJs", "MySql", "SQL"],
    repositoryLink: "https://github.com/maikofelix47/eid-process-queue",
  },
];
