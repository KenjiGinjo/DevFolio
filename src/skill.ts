type ExpirienceItems = {
  tip: string;
  date: string;
}[];
type Expirience = {
  [key: string]: {
    iconDimensions?: [number, number];
    alias: string;
    baseLevel: number;
    expierience: ExpirienceItems;
  };
};
export const frontEnd: Expirience = {
  Javascript: {
    baseLevel: 90,
    alias: "JavaScript",
    expierience: [
      {
        tip: "Most of my projects are built with JavaScript - it's become my go-to language for web development.",
        date: "2015-01-01",
      },
      {
        tip: "Took a JavaScript course on Bilibili and finally got a solid grasp on the tricky stuff like closures and async programming.",
        date: "2019-01-01",
      },
      {
        tip: "Dove deeper into JavaScript on Codecademy and learned about the call stack and execution context - the stuff that makes JS tick under the hood.",
        date: "2021-01-01",
      },
    ],
  },
  Typescript: {
    iconDimensions: [75, 75],
    baseLevel: 78,
    alias: "Typescript",
    expierience: [
      {
        tip: "Got curious about TypeScript but didn't really dive in at first - just poked around a bit.",
        date: "2018-01-01",
      },
      {
        tip: "Watched some TypeScript tutorials on Bilibili and started to get the hang of the basic syntax.",
        date: "2019-02-01",
      },
      {
        tip: "Started using TypeScript in most of my projects - it's become pretty much standard for me now.",
        date: "2020-03-01",
      },
      {
        tip: "Finished a proper TypeScript course on Codecademy - that really helped me understand the fundamentals.",
        date: "2021-01-01",
      },
      {
        tip: "Used TypeScript for our live streaming course project - it made the codebase much more maintainable.",
        date: "2022-03-01",
      },
      {
        tip: "Built the Taoye e-commerce app with Uniapp and TypeScript - the type safety really saved us from bugs.",
        date: "2022-05-01",
      },
      {
        tip: "Tried out SolidJS with TypeScript for the Taoye event page - interesting combo that worked really well.",
        date: "2022-07-01",
      },
      {
        tip: "Built our translation app with React Native and TypeScript - the mobile development experience was smooth with proper typing.",
        date: "2023-05-01",
      },
      {
        tip: "Created the admin panel for our translation app using Next.js and TypeScript - full-stack TypeScript is pretty nice.",
        date: "2023-05-01",
      },
    ],
  },
  Html: {
    baseLevel: 90,
    alias: "Html",
    expierience: [
      {
        tip: "HTML is the foundation of every web project I work on - can't build anything without it.",
        date: "2017-01-01",
      },
      {
        tip: "Took a proper HTML course on Codecademy and learned a lot of the semantic elements and best practices I was missing.",
        date: "2021-01-01",
      },
    ],
  },
  Css: {
    baseLevel: 85,
    alias: "Css",
    expierience: [
      {
        tip: "CSS is what makes everything look good - been styling websites for years now.",
        date: "2017-01-01",
      },
      {
        tip: "Finished a CSS course on Codecademy and picked up some cool tricks I didn't know before.",
        date: "2021-01-01",
      },
    ],
  },
  Less: {
    baseLevel: 20,
    alias: "Less",
    expierience: [
      {
        tip: "Checked out Less on their official site - pretty neat CSS preprocessor.",
        date: "2019-01-01",
      },
      {
        tip: "Used Less for our live streaming mini program - made the styling much more organized.",
        date: "2021-01-01",
      },
      {
        tip: "Also used Less for the Taoye e-commerce mini program - variables and nesting are super helpful.",
        date: "2021-08-01",
      },
    ],
  },
  Sass: {
    baseLevel: 20,
    alias: "Sass",
    expierience: [
      {
        tip: "Learned about Sass from their official docs - another great CSS preprocessor option.",
        date: "2019-01-01",
      },
      {
        tip: "Used Sass for our comic app project - the mixins and functions made styling much easier.",
        date: "2021-04-01",
      },
      {
        tip: "Chose Sass for the Taoye e-commerce app - really like how it handles complex styling logic.",
        date: "2022-06-01",
      },
    ],
  },
  TailwindCSS: {
    baseLevel: 10,
    alias: "TailwindCSS",
    expierience: [
      {
        tip: "Discovered TailwindCSS on their site - utility-first CSS sounded interesting.",
        date: "2019-01-01",
      },
      {
        tip: "Used TailwindCSS for the Taoye event page - super fast to prototype and build responsive designs.",
        date: "2022-06-01",
      },
    ],
  },
  WebPack: {
    baseLevel: 5,
    alias: "WebPack",
    expierience: [
      {
        tip: "Looked into Webpack on their official site - bundling is more complex than I thought.",
        date: "2019-01-01",
      },
      {
        tip: "Got to work with Webpack config in some projects - definitely learned a lot about build processes.",
        date: "2019-03-01",
      },
    ],
  },
};
export const frontEndFrameworksAndLibraries: Expirience = {
  React: {
    baseLevel: 50,
    alias: "React",
    expierience: [
      {
        tip: "Started learning React from their docs, but didn't dive too deep at first - just getting familiar.",
        date: "2021-01-01",
      },
      {
        tip: "Built my first React project using class components - felt a bit clunky but got the basics down.",
        date: "2021-02-01",
      },
      {
        tip: "Switched to learning function components from the official docs - much cleaner approach.",
        date: "2022-01-01",
      },
      {
        tip: "Took a proper React course on Codecademy and finally understood hooks and the component lifecycle.",
        date: "2022-01-01",
      },
      {
        tip: "Used React for the translation app admin panel - really enjoyed the component-based approach.",
        date: "2023-05-01",
      },
    ],
  },
  ReactNative: {
    baseLevel: 50,
    alias: "RN",
    expierience: [
      {
        tip: "Checked out React Native docs - mobile development with React sounded cool.",
        date: "2021-01-01",
      },
      {
        tip: "Built our translation app with React Native - write once, run on both platforms is pretty neat.",
        date: "2023-05-01",
      },
    ],
  },
  Redux: {
    baseLevel: 10,
    alias: "Redux",
    expierience: [
      {
        tip: "Looked into Redux from their official docs - state management seemed complex at first.",
        date: "2021-01-01",
      },
      {
        tip: "Took a Redux course on Codecademy - still wrapping my head around the whole action-reducer pattern.",
        date: "2021-01-01",
      },
    ],
  },
  Vue: {
    baseLevel: 65,
    alias: "Vue",
    expierience: [
      {
        tip: "Started learning Vue 2.0 from their docs - the template syntax felt intuitive.",
        date: "2018-01-01",
      },
      {
        tip: "Watched Vue 2.0 tutorials on Bilibili and got a much better grasp of the framework.",
        date: "2019-01-01",
      },
      {
        tip: "Built my first blog with Vue 2.0 - hands-on practice really helped me understand the framework better.",
        date: "2019-03-01",
      },
      {
        tip: "Created a law firm website and admin panel with Vue 2.0 - learned a lot about building real-world applications.",
        date: "2019-05-01",
      },
      {
        tip: "Built a comic app with Vue 2.0 - got pretty comfortable with the framework by this point.",
        date: "2019-05-01",
      },
      {
        tip: "Checked out Vue 3.0 from their docs - the Composition API looked interesting.",
        date: "2021-01-01",
      },
      {
        tip: "Built an e-commerce app with Vue 3 - the Composition API is really nice once you get used to it.",
        date: "2021-06-01",
      },
    ],
  },
  VueX: {
    baseLevel: 30,
    alias: "VueX",
    expierience: [
      {
        tip: "Learned about VueX from their docs - state management for Vue seemed necessary.",
        date: "2018-01-01",
      },
      {
        tip: "Used VueX in our law firm website project - helped keep the state organized.",
        date: "2019-05-01",
      },
      {
        tip: "Also used VueX in our comic app - got the hang of mutations and actions.",
        date: "2019-05-01",
      },
    ],
  },
  Pinia: {
    baseLevel: 40,
    alias: "Pinia",
    expierience: [
      {
        tip: "Discovered Pinia from their docs - the new state management for Vue 3 looked promising.",
        date: "2021-06-01",
      },
      {
        tip: "Used Pinia in our e-commerce app - much simpler than VueX and works great with Composition API.",
        date: "2021-06-01",
      },
    ],
  },
  NuxtJS: {
    baseLevel: 18,
    alias: "NuxtJS",
    expierience: [
      {
        tip: "Checked out Nuxt.js from their docs - SSR with Vue sounded useful.",
        date: "2019-04-01",
      },
      {
        tip: "Built a vocational training school website with Nuxt.js - the file-based routing was pretty neat.",
        date: "2019-05-01",
      },
    ],
  },
  Nextjs: {
    baseLevel: 50,
    alias: "Nextjs",
    expierience: [
      {
        tip: "Started learning Next.js from their docs - the page routing system looked interesting.",
        date: "2021-04-01",
      },
      {
        tip: "Built a demo project with Next.js to get familiar with the framework.",
        date: "2021-05-01",
      },
      {
        tip: "Learned about the new app router in Next.js - much cleaner than the old pages approach.",
        date: "2022-03-01",
      },
      {
        tip: "Used Next.js for the translation app admin panel - really like the full-stack capabilities.",
        date: "2023-05-01",
      },
      {
        tip: "Created my personal blog with Next.js - the developer experience is fantastic.",
        date: "2023-11-01",
      },
    ],
  },
  SolidJS: {
    baseLevel: 30,
    alias: "SolidJS",
    expierience: [
      {
        tip: "Discovered SolidJS from their docs - a reactive library that looked promising.",
        date: "2021-04-01",
      },
      {
        tip: "Built the Taoye event page with SolidJS - the fine-grained reactivity is really impressive.",
        date: "2022-04-01",
      },
    ],
  },
};
export const backEnd: Expirience = {
  Nodejs: {
    baseLevel: 60,
    alias: "Nodejs",
    expierience: [
      {
        tip: "Heard about Node.js but didn't really dive into it at first - just knew it existed.",
        date: "2019-01-01",
      },
      {
        tip: "Built APIs for a blog, law firm, and e-commerce site using Egg.js - this was my switch from PHP to Node.js backend development.",
        date: "2019-03-01",
      },
      {
        tip: "Working with build tools and package managers in frontend projects helped me understand Node.js better.",
        date: "2019-05-01",
      },
      {
        tip: "Finally took time to learn Node.js basics from their docs - much clearer understanding now.",
        date: "2021-01-01",
      },
      {
        tip: "Took a proper Node.js course on Codecademy - learned about modules, events, and async programming.",
        date: "2022-02-01",
      },
      {
        tip: "Dove deeper into Node.js docs and learned about streams, processes, debugging, and deployment - the advanced stuff.",
        date: "2022-08-01",
      },
      {
        tip: "Node.js has become my go-to for backend development - most of my recent projects use it.",
        date: "2023-01-01",
      },
    ],
  },
  Express: {
    baseLevel: 30,
    alias: "Express",
    expierience: [
      {
        tip: "Started learning Express from their docs - the minimal web framework approach looked interesting.",
        date: "2019-01-01",
      },
      {
        tip: "Took an Express course on Codecademy and learned about middleware, routing, and request handling.",
        date: "2022-01-01",
      },
      {
        tip: "Built a practice project with Express on Codecademy - hands-on experience really helped.",
        date: "2022-01-01",
      },
      {
        tip: "Used Express for the translation app API - simple and reliable for building REST endpoints.",
        date: "2023-01-01",
      },
    ],
  },
  Koa: {
    baseLevel: 10,
    alias: "Koa2",
    expierience: [
      {
        tip: "Checked out Koa2 from their docs - the async/await approach looked cleaner than Express.",
        date: "2019-01-01",
      },
      {
        tip: "Actually used Koa2 for a project - the middleware pattern is really nice.",
        date: "2019-02-01",
      },
    ],
  },
  NestJS: {
    baseLevel: 30,
    alias: "NestJS",
    expierience: [
      {
        tip: "Discovered NestJS from their docs - a TypeScript-first framework that looked enterprise-ready.",
        date: "2021-06-01",
      },
      {
        tip: "Used NestJS for the Taoye e-commerce app API - the decorators and dependency injection are really powerful.",
        date: "2022-06-01",
      },
    ],
  },
  MongoDB: {
    baseLevel: 20,
    alias: "MongoDB",
    expierience: [
      {
        tip: "Started learning MongoDB from their docs - NoSQL databases seemed more flexible than SQL.",
        date: "2019-01-01",
      },
      {
        tip: "Used MongoDB for the live streaming school website - the document structure worked well for our data.",
        date: "2020-01-01",
      },
      {
        tip: "Also used MongoDB for our live streaming mini program - consistent with the main website.",
        date: "2020-01-01",
      },
      {
        tip: "Signed up for MongoDB Atlas and explored their cloud services - pretty convenient for deployment.",
        date: "2021-01-01",
      },
    ],
  },
  MySQL: {
    baseLevel: 25,
    alias: "MySQL",
    expierience: [
      {
        tip: "First encountered MySQL with .ASP Dreamweaver - learned the basics of CRUD operations.",
        date: "2015-01-01",
      },
      {
        tip: "Used MySQL with ThinkPHP projects and got better at creating tables and writing SQL queries.",
        date: "2018-01-01",
      },
      {
        tip: "Did a lot of MySQL installation and deployment work in operations - learned the practical side of database management.",
        date: "2018-02-01",
      },
    ],
  },
  PostgreSQL: {
    baseLevel: 40,
    alias: "PostgreSQL",
    expierience: [
      {
        tip: "Started learning PostgreSQL from their docs - heard it was more advanced than MySQL.",
        date: "2022-02-01",
      },
      {
        tip: "Took a PostgreSQL course on Codecademy - learned about advanced features and performance optimization.",
        date: "2022-02-01",
      },
      {
        tip: "Used PostgreSQL for our translation app - the JSON support and advanced indexing really came in handy.",
        date: "2023-07-01",
      },
      {
        tip: "Used Prisma with PostgreSQL - the type-safe database client made working with the database much easier.",
        date: "2023-07-01",
      },
      {
        tip: "Deployed PostgreSQL for our translation app - learned a lot about production database management.",
        date: "2023-10-01",
      },
    ],
  },
  Python: {
    baseLevel: 10,
    alias: "Python",
    expierience: [
      {
        tip: "Took a Python course on Bilibili - the syntax looked clean and readable.",
        date: "2019-01-01",
      },
      {
        tip: "Wrote a simple Python script for task automation - pretty handy for repetitive work.",
        date: "2019-04-01",
      },
    ],
  },
  JAVA: {
    baseLevel: 20,
    alias: "JAVA",
    expierience: [
      {
        tip: "Took a Java course on Codecademy - object-oriented programming concepts started to make sense.",
        date: "2023-02-01",
      },
      {
        tip: "Learned Java from Android docs - needed it for mobile development.",
        date: "2023-03-01",
      },
      {
        tip: "Built an Android project with Java - hands-on experience really helped me understand the language.",
        date: "2023-03-01",
      },
      {
        tip: "Used Java for React Native native modules in our translation app - splash screen, bilingual support, and theme handling.",
        date: "2023-07-01",
      },
    ],
  },
  Kotlin: {
    baseLevel: 12,
    alias: "Kotlin",
    expierience: [
      {
        tip: "Took a Kotlin course on Codecademy - modern Java alternative that looked promising.",
        date: "2023-02-01",
      },
      {
        tip: "Learned Kotlin from Android docs - Google's preferred language for Android development.",
        date: "2023-03-01",
      },
      {
        tip: "Built an Android project with Kotlin - the concise syntax is really nice compared to Java.",
        date: "2023-03-01",
      },
    ],
  },
  PHP: {
    baseLevel: 35,
    alias: "PHP",
    expierience: [
      {
        tip: "Took over a PHP project for an outsourcing client - my first real experience with the language.",
        date: "2017-01-01",
      },
      {
        tip: "Discovered ThinkPHP framework - made PHP development much more structured and organized.",
        date: "2017-08-01",
      },
      {
        tip: "Built a blog, e-commerce site, and auction site with ThinkPHP - got pretty comfortable with PHP by this point.",
        date: "2018-01-01",
      },
      {
        tip: "Maintained a PHP e-commerce website - learned a lot about legacy code and debugging.",
        date: "2022-05-01",
      },
    ],
  },
};

export const devOpsAndCloud: Expirience = {
  Docker: {
    baseLevel: 5,
    alias: "Docker",
    expierience: [
      {
        tip: "Took a Docker course on Bilibili - containerization seemed like a game-changer for deployment.",
        date: "2019-01-01",
      },
      {
        tip: "Learned more about Docker from their official docs - images, containers, and orchestration concepts.",
        date: "2019-02-01",
      },
      {
        tip: "Built a demo project with Docker - hands-on experience really helped me understand the workflow.",
        date: "2019-03-01",
      },
    ],
  },
  GoogleCloudPlatform: {
    baseLevel: 10,
    alias: "Google Cloud",
    expierience: [
      {
        tip: "Signed up for Google Cloud and bought a VPS - my first experience with cloud infrastructure.",
        date: "2022-01-01",
      },
      {
        tip: "Bought a domain through Google Cloud and set up DNS - learned about domain management.",
        date: "2022-02-01",
      },
      {
        tip: "Took a Google Cloud course from their docs - learned about compute, storage, and networking services.",
        date: "2022-02-01",
      },
      {
        tip: "Used Google Cloud credentials and Firebase for Google login in our translation app - seamless integration.",
        date: "2023-10-01",
      },
    ],
  },
  AlibabaCloudPlatform: {
    baseLevel: 40,
    alias: "Aliyun",
    expierience: [
      {
        tip: "Got started with Alibaba Cloud - bought VPS, domain, and filing services for my first website.",
        date: "2015-01-01",
      },
      {
        tip: "Used various Alibaba Cloud services - OSS, cloud databases, monitoring, and storage. Pretty comprehensive platform.",
        date: "2018-01-01",
      },
      {
        tip: "Explored Alibaba Cloud's AI services - voice interaction, machine translation, and document translation APIs.",
        date: "2023-07-01",
      },
    ],
  },
  DevOps: {
    baseLevel: 30,
    alias: "DevOps",
    expierience: [
      {
        tip: "Used Coding platform for project management, code repos, and team collaboration - pretty solid DevOps tool.",
        date: "2019-01-01",
      },
      {
        tip: "Joined GitHub and started using their code repository features - the standard for open source development.",
        date: "2022-01-01",
      },
      {
        tip: "Tried out Vercel for deployment - super easy to deploy frontend projects, great developer experience.",
        date: "2022-01-01",
      },
    ],
  },
};
export const other: Expirience = {
  Git: {
    baseLevel: 45,
    alias: "Git",
    expierience: [
      {
        tip: "Learned the basics of Git - version control seemed essential for any serious development work.",
        date: "2019-01-01",
      },
      {
        tip: "Took a comprehensive Git course on Codecademy - learned branching, merging, conflict resolution, and advanced workflows.",
        date: "2022-01-01",
      },
    ],
  },
  Github: {
    baseLevel: 45,
    alias: "Github",
    expierience: [
      {
        tip: "Created my GitHub account and started using their repository features - the hub for open source development.",
        date: "2022-01-01",
      },
      {
        tip: "Got GitHub Copilot - AI pair programming is pretty amazing, helps with code suggestions.",
        date: "2022-01-01",
      },
      {
        tip: "Started hosting my own projects on GitHub - great way to showcase my work.",
        date: "2022-01-01",
      },
    ],
  },
  Figma: {
    baseLevel: 60,
    alias: "Figma",
    expierience: [
      {
        tip: "Signed up for Figma and started using their design tools - collaborative design is really powerful.",
        date: "2022-09-01",
      },
      {
        tip: "Took a Figma course on Codecademy - learned about components, prototyping, and design systems.",
        date: "2022-11-01",
      },
      {
        tip: "Designed wireframes and UI for our translation app - Figma made the design process smooth and collaborative.",
        date: "2022-05-01",
      },
    ],
  },
  Chrome: {
    baseLevel: 70,
    alias: "Chrome DevTools",
    expierience: [
      {
        tip: "Chrome DevTools is essential for web development - can't debug without it.",
        date: "2022-12-01",
      },
      {
        tip: "Took a Chrome DevTools course on Codecademy - learned about performance profiling, network analysis, and advanced debugging techniques.",
        date: "2022-12-01",
      },
    ],
  },
  GraphQL: {
    baseLevel: 25,
    alias: "GraphQL",
    expierience: [
      {
        tip: "Learned GraphQL basics from their docs - query language for APIs that looked more efficient than REST.",
        date: "2023-05-01",
      },
      {
        tip: "Used GraphQL in our translation app admin panel - the single endpoint approach is really clean.",
        date: "2023-05-01",
      },
    ],
  },
  ApolloGraphQL: {
    baseLevel: 15,
    alias: "ApolloGraphQL",
    expierience: [
      {
        tip: "Checked out Apollo GraphQL from their docs - the GraphQL client looked powerful for frontend integration.",
        date: "2023-05-01",
      },
      {
        tip: "Used Apollo GraphQL in our translation app admin panel - caching and state management made it really smooth.",
        date: "2023-05-01",
      },
    ],
  },
  TensorFlowJs: {
    baseLevel: 2,
    alias: "TensorFlowJs",
    expierience: [
      {
        tip: "Explored TensorFlow.js from their docs - machine learning in the browser sounded fascinating.",
        date: "2023-04-01",
      },
      {
        tip: "Watched TensorFlow.js tutorials on YouTube - visual learning helped me understand the concepts better.",
        date: "2023-04-01",
      },
    ],
  },
  Redis: {
    baseLevel: 10,
    alias: "Redis",
    expierience: [
      {
        tip: "First encountered Redis in a project - in-memory database for caching seemed really fast.",
        date: "2016-01-01",
      },
      {
        tip: "Set up Redis for a project and integrated it with PHP - learned about installation and configuration.",
        date: "2018-01-01",
      },
    ],
  },
  SocketIO: {
    baseLevel: 20,
    alias: "SocketIO",
    expierience: [
      {
        tip: "Learned Socket.IO basics from their docs - real-time communication looked useful for interactive features.",
        date: "2019-01-01",
      },
      {
        tip: "Used Socket.IO for our live streaming mini program's chat room - real-time messaging worked perfectly.",
        date: "2021-01-01",
      },
      {
        tip: "Used WebSocket for real-time voice translation in our translation app - low latency is crucial for voice features.",
        date: "2023-08-01",
      },
    ],
  },
  RESTAPI: {
    baseLevel: 90,
    alias: "REST API",
    expierience: [
      {
        tip: "First encountered REST APIs in some projects - the standard way to communicate between frontend and backend.",
        date: "2018-01-01",
      },
      {
        tip: "Took a REST API course on Codecademy - learned about HTTP methods, status codes, and API design principles.",
        date: "2022-01-01",
      },
      {
        tip: "REST APIs have become my go-to for building web services - reliable and well-understood by most developers.",
        date: "2022-01-01",
      },
    ],
  },
  BashShell: {
    baseLevel: 5,
    alias: "Bash & Shell",
    expierience: [
      {
        tip: "Found a deployment script online and learned some basic Bash commands - automation makes life easier.",
        date: "2021-01-01",
      },
    ],
  },
  Npm: {
    baseLevel: 30,
    alias: "Npm",
    expierience: [
      {
        tip: "Got comfortable with npm - finding and installing packages is essential for JavaScript development.",
        date: "2019-01-01",
      },
    ],
  },
  Rust: {
    baseLevel: 8,
    alias: "Rust",
    expierience: [
      {
        tip: "Checked out Rust from their docs - memory safety and performance looked promising for systems programming.",
        date: "2019-01-01",
      },
    ],
  },
  Terminal: {
    baseLevel: 50,
    alias: "Terminal",
    expierience: [
      {
        tip: "Use the terminal daily for development - command line is powerful once you get the hang of it.",
        date: "2019-01-01",
      },
    ],
  },
  universalAccessSolid: {
    baseLevel: 30,
    alias: "Universal Access",
    expierience: [
      {
        tip: "Took a Universal Access course on Codecademy - making websites accessible to everyone is important.",
        date: "2022-09-01",
      },
    ],
  },
  WebFrontBasics: {
    baseLevel: 95,
    alias: "Web Front Basics",
    expierience: [
      {
        tip: "Took a Web Front Basics course on Codecademy - reinforced my understanding of core web technologies.",
        date: "2023-01-01",
      },
    ],
  },
  OpenAi: {
    baseLevel: 55,
    alias: "Open Ai",
    expierience: [
      {
        tip: "Use OpenAI's GPT-4 regularly - AI assistance has become a valuable tool in my development workflow.",
        date: "2023-11-01",
      },
    ],
  },
  Regex: {
    baseLevel: 35,
    alias: "Regex",
    expierience: [
      {
        tip: "Been learning regular expressions on multiple platforms - powerful but tricky to master.",
        date: "2023-03-01",
      },
    ],
  },
  Linux: {
    baseLevel: 35,
    alias: "Linux",
    expierience: [
      {
        tip: "Use Linux regularly for project deployment - the command line and package management are really efficient.",
        date: "2020-01-01",
      },
      {
        tip: "Took a Linux course on Codecademy - learned about file permissions, process management, and shell scripting.",
        date: "2022-08-01",
      },
    ],
  },
};
