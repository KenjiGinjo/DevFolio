type ExpirienceItems = {
  tip: string;
  tipEn: string;
  date: string;
}[];
type Expirience = {
  [key: string]: {
    iconDimensions?: [number, number];
    alias: string;
    aliasInZh: string;
    baseLevel: number;
    expierience: ExpirienceItems;
  };
};
export const frontEnd: Expirience = {
  Javascript: {
    baseLevel: 90,
    alias: "JavaScript",
    aliasInZh: "JavaScript",
    expierience: [
      {
        tip: "在我参与的众多项目中，大部分都是用Javascript语言来开发的",
        tipEn:
          "In the many projects I have been involved in, most of them were developed using the JavaScript language.",
        date: "2015-01-01",
      },
      {
        tip: "我在Bilibili上学习了Javascript课程。通过这个课程，我加强了对数据类型、函数、对象、原型链、闭包和异步等基础概念的理解",
        tipEn:
          "I studied a JavaScript course on Bilibili. Through this course, I enhanced my understanding of fundamental concepts such as data types, functions, objects, prototype chains, closures, and asynchrony.",
        date: "2019-01-01",
      },
      {
        tip: "我在CodeCademy学习了更深入的Javascript课程。这次学习让我对堆栈、执行上下文等更复杂的概念有了更进一步的了解，从而更全面地掌握了Javascript语言",
        tipEn:
          "I studied a more advanced JavaScript course on Codecademy. This learning experience gave me a deeper understanding of more complex concepts like the call stack, execution context, and thereby a more comprehensive mastery of the JavaScript language.",
        date: "2021-01-01",
      },
    ],
  },
  Typescript: {
    iconDimensions: [75, 75],
    baseLevel: 78,
    alias: "Typescript",
    aliasInZh: "Typescript",
    expierience: [
      {
        tip: "我尝试了解过Typescript，但还没有机会进行深入学习",
        tipEn:
          "I have tried to learn TypeScript, but haven't yet had the opportunity to study it in depth",
        date: "2018-01-01",
      },
      {
        tip: "我在Bilibili上学习了Typescript的课程，通过这个课程，我对Typescript的基本语法有了初步的认识。",
        tipEn:
          "I studied a TypeScript course on Bilibili, and through this course, I gained a preliminary understanding of the basic syntax of TypeScript.",
        date: "2019-02-01",
      },
      {
        tip: "在我参与的多数项目中，我们都采用了这种语言进行开发",
        tipEn:
          "In most of the projects I have been involved in, we have used this language for development.",
        date: "2020-03-01",
      },
      {
        tip: "我在CodeCademy平台上完成了Typescript的学习课程",
        tipEn: "I completed a TypeScript course on the Codecademy platform.",
        date: "2021-01-01",
      },
      {
        tip: "在我们的直播课程项目中，我们选择了使用Typescript语言进行开发",
        tipEn:
          "In our live streaming course project, we chose to use the TypeScript language for development.",
        date: "2022-03-01",
      },
      {
        tip: "在桃叶电商APP项目中，我们使用了Uniapp和Typescript进行开发",
        tipEn:
          "In the Taoye e-commerce app project, we used Uniapp and TypeScript for development.",
        date: "2022-05-01",
      },
      {
        tip: "在桃叶电商活动项目中，我们采用了结合SolidJS和Typescript的技术进行开发",
        tipEn:
          "In the Taoye e-commerce event project, we adopted a combination of SolidJS and TypeScript for development.",
        date: "2022-07-01",
      },
      {
        tip: "在我们的翻译APP项目中，我们使用了React Native和Typescript作为开发技术。",
        tipEn:
          "In our translation app project, we used React Native and TypeScript as our development technologies.",
        date: "2023-05-01",
      },
      {
        tip: "在翻译APP的管理后台项目中，我们选用了Next.js结合Typescript进行开发。",
        tipEn:
          "In the admin panel project for the translation app, we chose to develop using Next.js combined with TypeScript.",
        date: "2023-05-01",
      },
    ],
  },
  Html: {
    baseLevel: 90,
    alias: "Html",
    aliasInZh: "Html",
    expierience: [
      {
        tip: "几乎所有我参与的Web项目都采用了这种语言进行开发。",
        tipEn:
          "Almost all of the web projects I have been involved in have been developed using this language.",
        date: "2017-01-01",
      },
      {
        tip: "我在CodeCademy平台上学习了Html的课程，通过这次学习，我对Html有了更深入和全面的认识。",
        tipEn:
          "I studied an HTML course on the Codecademy platform, and through this course, I gained a deeper and more comprehensive understanding of HTML.",
        date: "2021-01-01",
      },
    ],
  },
  Css: {
    baseLevel: 85,
    alias: "Css",
    aliasInZh: "Css",
    expierience: [
      {
        tip: "几乎所有我参与的Web项目都采用了这种语言进行开发。",
        tipEn:
          "Almost all of the web projects I have been involved in have been developed using this language.",
        date: "2017-01-01",
      },
      {
        tip: "我在CodeCademy上完成了Css课程，从而对Css的知识有了更加全面的理解。",
        tipEn:
          "I completed a CSS course on CodeCademy, which gave me a more comprehensive understanding of CSS.",
        date: "2021-01-01",
      },
    ],
  },
  Less: {
    baseLevel: 20,
    alias: "Less",
    aliasInZh: "Less",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2019-01-01",
      },
      {
        tip: "在我们的直播课程小程序项目中，我们采用了Less作为样式语言。",
        tipEn:
          "In our live streaming course mini program project, we used Less as the style language.",
        date: "2021-01-01",
      },
      {
        tip: "在桃叶电商的小程序项目中，我们使用了Less来编写样式。",
        tipEn:
          "In the Taoye e-commerce mini program project, we used Less to write the styles.",
        date: "2021-08-01",
      },
    ],
  },
  Sass: {
    baseLevel: 20,
    alias: "Sass",
    aliasInZh: "Sass",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2019-01-01",
      },
      {
        tip: "在我们的漫画APP项目中，我们采用了Sass作为样式处理语言。",
        tipEn:
          "In our comic app project, we used Sass as the style processing language.",
        date: "2021-04-01",
      },
      {
        tip: "在桃叶电商APP项目中，我们选用了Sass作为样式编写工具。",
        tipEn:
          "In the Taoye e-commerce app project, we chose Sass as the style writing tool.",
        date: "2022-06-01",
      },
    ],
  },
  TailwindCSS: {
    baseLevel: 10,
    alias: "TailwindCSS",
    aliasInZh: "TailwindCSS",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2019-01-01",
      },
      {
        tip: "在桃叶的活动页面中，我们采用了TailwindCSS来构建样式。",
        tipEn:
          "In the Taoye event page, we used TailwindCSS to build the styles.",
        date: "2022-06-01",
      },
    ],
  },
  WebPack: {
    baseLevel: 5,
    alias: "WebPack",
    aliasInZh: "WebPack",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2019-01-01",
      },
      {
        tip: "在一些项目中，我有机会了解并接触到Webpack的配置相关知识。",
        tipEn:
          "In some projects, I have had the opportunity to learn and work with Webpack configuration.",
        date: "2019-03-01",
      },
    ],
  },
};
export const frontEndFrameworksAndLibraries: Expirience = {
  React: {
    baseLevel: 50,
    alias: "React",
    aliasInZh: "React",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习，但并未进行深入的研究。",
        tipEn:
          "I studied on its official website, but did not do in-depth research.",
        date: "2021-01-01",
      },
      {
        tip: "我自己练习了React项目，其中主要使用了类组件（class component）。",
        tipEn:
          "I practiced a React project myself, mainly using class components.",
        date: "2021-02-01",
      },
      {
        tip: "我在官方网站上进行了学习，主要学习的是函数组件（function component）",
        tipEn:
          "I studied on its official website, mainly learning function components.",
        date: "2022-01-01",
      },
      {
        tip: "我在CodeCademy上完成了React的课程，通过这次学习，我对React有了更深入和全面的认识。",
        tipEn:
          "I completed a React course on CodeCademy, which gave me a deeper and more comprehensive understanding of React.",
        date: "2022-01-01",
      },
      {
        tip: "在翻译APP的管理后台项目中，我们使用了React作为开发框架。",
        tipEn:
          "In the admin panel project for the translation app, we used React as the development framework.",
        date: "2023-05-01",
      },
    ],
  },
  ReactNative: {
    baseLevel: 50,
    alias: "RN",
    aliasInZh: "RN",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2021-01-01",
      },
      {
        tip: "在我们的翻译APP项目中，我们采用了React Native作为开发技术。",
        tipEn:
          "In our translation app project, we used React Native as our development technology.",
        date: "2023-05-01",
      },
    ],
  },
  Redux: {
    baseLevel: 10,
    alias: "Redux",
    aliasInZh: "Redux",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2021-01-01",
      },
      {
        tip: "我在Codecademy平台上学习了Redux的课程，从而对Redux有了更加全面的理解。",
        tipEn:
          "I studied a Redux course on the Codecademy platform, which gave me a more comprehensive understanding of Redux.",
        date: "2021-01-01",
      },
    ],
  },
  Vue: {
    baseLevel: 65,
    alias: "Vue",
    aliasInZh: "Vue",
    expierience: [
      {
        tip: "我在官方网站上进行了Vue 2.0的学习。",
        tipEn: "I studied Vue 2.0 on the official website.",
        date: "2018-01-01",
      },
      {
        tip: "我在Bilibili上学习了Vue 2.0的课程，通过这个课程，我对Vue 2.0有了更深入和全面的认识。",
        tipEn:
          "I studied a Vue 2.0 course on Bilibili, and through this course, I gained a deeper and more comprehensive understanding of Vue 2.0.",
        date: "2019-01-01",
      },
      {
        tip: "我开发了一个基于Vue 2.0的博客项目，通过这个实践，我对Vue 2.0有了更深入的理解。",
        tipEn:
          "I developed a blog project based on Vue 2.0, and through this practice, I gained a deeper understanding of Vue 2.0.",
        date: "2019-03-01",
      },
      {
        tip: "我开发了一个Vue 2.0的律所网站和配套的后台管理系统，这个过程让我对Vue 2.0有了更深层次的理解。",
        tipEn:
          "I developed a law firm website and a matching admin panel system based on Vue 2.0, which gave me a deeper understanding of Vue 2.0.",
        date: "2019-05-01",
      },
      {
        tip: "我开发了一个基于Vue 2.0的漫画APP，通过这个项目，我对Vue 2.0的使用变得更加熟练。",
        tipEn:
          "I developed a comic app based on Vue 2.0, which made me more proficient in using Vue 2.0.",
        date: "2019-05-01",
      },
      {
        tip: "我在官方网站上进行了Vue 3.0的学习。",
        tipEn: "I studied Vue 3.0 on the official website.",
        date: "2021-01-01",
      },
      {
        tip: "我开发了一个基于Vue 3的电商APP，这个经历使我在使用Vue 3.0方面变得更加熟练。",
        tipEn:
          "I developed an e-commerce app based on Vue 3, which made me more proficient in using Vue 3.0.",
        date: "2021-06-01",
      },
    ],
  },
  VueX: {
    baseLevel: 30,
    alias: "VueX",
    aliasInZh: "VueX",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2018-01-01",
      },
      {
        tip: "在我们的律所网站项目中，我们使用了VueX。",
        tipEn: "In our law firm website project, we used VueX.",
        date: "2019-05-01",
      },
      {
        tip: "在我们的漫画APP项目中，我们采用了VueX。",
        tipEn: "In our comic app project, we used VueX.",
        date: "2019-05-01",
      },
    ],
  },
  Pinia: {
    baseLevel: 40,
    alias: "Pinia",
    aliasInZh: "Pinia",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2021-06-01",
      },
      {
        tip: "在我们的电商APP项目中，我们使用了Pinia。",
        tipEn: "In our e-commerce app project, we used Pinia.",
        date: "2021-06-01",
      },
    ],
  },
  NuxtJS: {
    baseLevel: 18,
    alias: "NuxtJS",
    aliasInZh: "NuxtJS",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2019-04-01",
      },
      {
        tip: "我为一家职业培训学校制作了官方网站，使用的技术框架是Nuxt.js。",
        tipEn:
          "I made an official website for a vocational training school, using the Nuxt.js technology framework.",
        date: "2019-05-01",
      },
    ],
  },
  Nextjs: {
    baseLevel: 50,
    alias: "Nextjs",
    aliasInZh: "Nextjs",
    expierience: [
      {
        tip: "我在官方网站上进行了学习，初步了解了页面路由（pages route）模式。",
        tipEn:
          "I studied on its official website and got a basic understanding of the page route mode.",
        date: "2021-04-01",
      },
      {
        tip: "我使用Next.js练习了一个演示项目。",
        tipEn: "I practiced a demo project using Next.js.",
        date: "2021-05-01",
      },
      {
        tip: "我在官方网站上进行了全面的学习，了解了新的应用程序路由（app route）模式。",
        tipEn:
          "I studied on its official website and got a comprehensive understanding of the new app route mode.",
        date: "2022-03-01",
      },
      {
        tip: "翻译APP的管理后台使用了Next.js框架。",
        tipEn:
          "The admin panel for the translation app uses the Next.js framework.",
        date: "2023-05-01",
      },
      {
        tip: "我创建了自己的新博客，使用了Next.js框架进行开发。",
        tipEn:
          "I created my own new blog and developed it using the Next.js framework.",
        date: "2023-11-01",
      },
    ],
  },
  SolidJS: {
    baseLevel: 30,
    alias: "SolidJS",
    aliasInZh: "SolidJS",
    expierience: [
      {
        tip: "我在其官方网站上进行了学习。",
        tipEn: "I studied on its official website.",
        date: "2021-04-01",
      },
      {
        tip: "桃叶公司的活动Web项目是使用SolidJS框架开发的。",
        tipEn:
          "The Taoye company's event web project was developed using the SolidJS framework.",
        date: "2022-04-01",
      },
    ],
  },
};
export const backEnd: Expirience = {
  Nodejs: {
    baseLevel: 60,
    alias: "Nodejs",
    aliasInZh: "Nodejs",
    expierience: [
      {
        tip: "我有了解过Node.js，但尚未进行深入学习。",
        tipEn:
          "I have learned about Node.js, but have not yet studied it in depth.",
        date: "2019-01-01",
      },
      {
        tip: "我使用Egg.js框架，开发了一个博客、律所官网和电商官网的API，这标志着我从之前的PHP后端转向了Node.js后端开发。",
        tipEn:
          "I used the Egg.js framework to develop APIs for a blog, a law firm website, and an e-commerce website, marking my transition from PHP backend development to Node.js backend development.",
        date: "2019-03-01",
      },
      {
        tip: "在前端项目中，我经常需要与Node.js打包工具Webpack互动，这使我对Node.js有了更深入的理解。",
        tipEn:
          "In front-end projects, I often need to interact with Node.js. This gave me a deeper understanding of Node.js.",
        date: "2019-05-01",
      },
      {
        tip: "我在官方网站学习了Node.js的基础知识，通过这次学习，我对Node.js有了更加全面的理解。",
        tipEn:
          "I studied the basics of Node.js on the official website, and through this study, I gained a more comprehensive understanding of Node.js.",
        date: "2021-01-01",
      },
      {
        tip: "我在Codecademy平台上学习了Node.js的课程，通过这个课程，我对Node.js有了更深入和全面的认识。",
        tipEn:
          "I studied a Node.js course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of Node.js.",
        date: "2022-02-01",
      },
      {
        tip: "我在官方网站学习了更多关于HTTP请求、执行Bash命令、文件系统、流、模块、事件、错误处理、进程、子进程、集群、调试、测试、性能、安全和部署等方面的知识。",
        tipEn:
          "I studied more about HTTP requests, executing Bash commands, file systems, streams, modules, events, error handling, processes, child processes, clusters, debugging, testing, performance, security, and deployment on the official website.",
        date: "2022-08-01",
      },
      {
        tip: "在最近的项目中，大多数都使用了Node.js。",
        tipEn: "In recent projects, most of them have used Node.js.",
        date: "2023-01-01",
      },
    ],
  },
  Express: {
    baseLevel: 30,
    alias: "Express",
    aliasInZh: "Express",
    expierience: [
      {
        tip: "我在官方网站学习了Express的基础知识，这让我对Express有了初步的理解。",
        tipEn:
          "I studied the basics of Express on the official website, which gave me a preliminary understanding of Express.",
        date: "2019-01-01",
      },
      {
        tip: "我在Codecademy平台上学习了Express的课程，通过这个课程，我对Express有了更深入和全面的认识。",
        tipEn:
          "I studied an Express course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of Express.",
        date: "2022-01-01",
      },
      {
        tip: "我在Codecademy上练习了一个Express项目，这使我对Express有了更深入和全面的了解。",
        tipEn:
          "I practiced an Express project on Codecademy, which gave me a deeper and more comprehensive understanding of Express.",
        date: "2022-01-01",
      },
      {
        tip: "在翻译App的API开发中，我们采用了Express框架。",
        tipEn:
          "In the API development of the translation app, we used the Express framework.",
        date: "2023-01-01",
      },
    ],
  },
  Koa: {
    baseLevel: 10,
    alias: "Koa2",
    aliasInZh: "Koa2",
    expierience: [
      {
        tip: "我在官方网站上学习了Koa2的基础知识，这使我对Koa2有了初步的理解。",
        tipEn:
          "I studied the basics of Koa2 on the official website, which gave me a preliminary understanding of Koa2.",
        date: "2019-01-01",
      },
      {
        tip: "我曾使用该框架开发过一个项目。",
        tipEn: "I have used this framework to develop a project.",
        date: "2019-02-01",
      },
    ],
  },
  NestJS: {
    baseLevel: 30,
    alias: "NestJS",
    aliasInZh: "NestJS",
    expierience: [
      {
        tip: "我在官方网站上学习了NestJS的基础知识，这使我对NestJS有了初步的理解。",
        tipEn:
          "I studied the basics of NestJS on the official website, which gave me a preliminary understanding of NestJS.",
        date: "2021-06-01",
      },
      {
        tip: "在桃叶电商APP的API开发中，我们采用了NestJS框架。",
        tipEn:
          "In the API development of the Taoye e-commerce app, we used the NestJS framework.",
        date: "2022-06-01",
      },
    ],
  },
  MongoDB: {
    baseLevel: 20,
    alias: "MongoDB",
    aliasInZh: "MongoDB",
    expierience: [
      {
        tip: "我在官方网站上学习了MongoDB的基础知识，这使我对MongoDB有了初步的理解。",
        tipEn:
          "I studied the basics of MongoDB on the official website, which gave me a preliminary understanding of MongoDB.",
        date: "2019-01-01",
      },
      {
        tip: "在直播学校的官方网站中，我们使用了MongoDB作为数据库。",
        tipEn:
          "In the official website of the live streaming school, we used MongoDB as the database.",
        date: "2020-01-01",
      },
      {
        tip: "在我们的直播小程序项目中，我们采用了MongoDB作为数据库。",
        tipEn:
          "In our live streaming mini program project, we used MongoDB as the database.",
        date: "2020-01-01",
      },
      {
        tip: "我在官方网站注册了开发者账号，并对其Cloud服务有了一定的了解。",
        tipEn:
          "I registered a developer account on the official website and gained some understanding of its Cloud service.",
        date: "2021-01-01",
      },
    ],
  },
  MySQL: {
    baseLevel: 25,
    alias: "MySQL",
    aliasInZh: "MySQL",
    expierience: [
      {
        tip: "我使用了.ASP织梦框架，开始接触了Mysql数据库，并学习了基本的增删改查操作。",
        tipEn:
          "I used the .ASP dreamweaver framework, started to learn the Mysql database, and learned the basic CRUD operations.",
        date: "2015-01-01",
      },
      {
        tip: "我在使用ThinkPHP框架的项目中，有接触Mysql数据库，进一步深入了解了数据表的创建以及SQL查询操作。",
        tipEn:
          "I had learned with the Mysql database in the project using the ThinkPHP framework, and further understood the creation of data tables and SQL query operations.",
        date: "2018-01-01",
      },
      {
        tip: "我在运维工作中接触了较多的任务，这让我对Mysql的安装和部署有了一定的了解。",
        tipEn:
          "I have encountered many tasks in my operations work, which has given me a certain understanding of the installation and deployment of Mysql.",
        date: "2018-02-01",
      },
    ],
  },
  PostgreSQL: {
    baseLevel: 40,
    alias: "PostgreSQL",
    aliasInZh: "PostgreSQL",
    expierience: [
      {
        tip: "我在官方网站上学习了PostgreSQL的基本知识，这让我对PostgreSQL有了初步的理解。 ",
        tipEn:
          "I studied the basics of PostgreSQL on the official website, which gave me a preliminary understanding of PostgreSQL.",
        date: "2022-02-01",
      },
      {
        tip: "我在Codecademy平台上学习了PostgreSQL的课程，通过这个课程，我对PostgreSQL有了更深入和全面的认识。",
        tipEn:
          "I studied a PostgreSQL course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of PostgreSQL.",
        date: "2022-02-01",
      },
      {
        tip: "在我们的翻译APP项目中，我们采用了PostgreSQL作为数据库，这使我对PostgreSQL有了更深入和全面的了解。",
        tipEn:
          "In our translation app project, we used PostgreSQL as the database, which gave me a deeper and more comprehensive understanding of PostgreSQL.",
        date: "2023-07-01",
      },
      {
        tip: "我使用了Prisma库，这让我对PostgreSQL有了更深入和全面的了解。",
        tipEn:
          "I used the Prisma library, which gave me a deeper and more comprehensive understanding of PostgreSQL.",
        date: "2023-07-01",
      },
      {
        tip: "在我们的翻译APP项目中，我们部署了PostgreSQL，这使我对PostgreSQL有了更深入和全面的了解。",
        tipEn:
          "In our translation app project, we deployed PostgreSQL, which gave me a deeper and more comprehensive understanding of PostgreSQL.",
        date: "2023-10-01",
      },
    ],
  },
  Python: {
    baseLevel: 10,
    alias: "Python",
    aliasInZh: "Python",
    expierience: [
      {
        tip: "我在Bilibili上学习了Python的课程，这让我对Python有了初步的理解。",
        tipEn:
          "I studied a Python course on Bilibili, which gave me a preliminary understanding of Python.",
        date: "2019-01-01",
      },
      {
        tip: "我尝试编写了一个用于获取任务的Python脚本。",
        tipEn: "I tried to write a Python script to get tasks.",
        date: "2019-04-01",
      },
    ],
  },
  JAVA: {
    baseLevel: 20,
    alias: "JAVA",
    aliasInZh: "JAVA",
    expierience: [
      {
        tip: "我在Codecademy平台上学习了Java的课程，通过这个课程，我对Java有了更深入和全面的了解。",
        tipEn:
          "I studied a Java course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of Java.",
        date: "2023-02-01",
      },
      {
        tip: "我在Android官方网站上学习了Java的课程，这让我对Java有了初步的理解。",
        tipEn:
          "I studied a Java course on the Android official website, which gave me a preliminary understanding of Java.",
        date: "2023-03-01",
      },
      {
        tip: "我练习了Android项目，这使我对Java有了更深入和全面的了解。",
        tipEn:
          "I practiced an Android project, which gave me a deeper and more comprehensive understanding of Java.",
        date: "2023-03-01",
      },
      {
        tip: "在翻译APP的开发中，我使用了React Native的原生模块，制作了启动页，实现了双语功能，并处理了主题和启动前协议等工作，这让我对Java有了更全面的了解。",
        tipEn:
          "In the development of the translation app, I used the React Native native module to make the splash screen, implement the bilingual function, and handle the theme and pre-launch agreement, which gave me a more comprehensive understanding of Java.",
        date: "2023-07-01",
      },
    ],
  },
  Kotlin: {
    baseLevel: 12,
    alias: "Kotlin",
    aliasInZh: "Kotlin",
    expierience: [
      {
        tip: "我在Codecademy平台上学习了Kotlin的课程，通过这个课程，我对Kotlin有了更深入和全面的了解。",
        tipEn:
          "I studied a Kotlin course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of Kotlin.",
        date: "2023-02-01",
      },
      {
        tip: "我在Android官方网站上学习了Kotlin的课程，这让我对Kotlin有了初步的理解。",
        tipEn:
          "I studied a Kotlin course on the Android official website, which gave me a preliminary understanding of Kotlin.",
        date: "2023-03-01",
      },
      {
        tip: "我练习了Android项目，这使我对Kotlin有了更深入和全面的了解。",
        tipEn:
          "I practiced an Android project, which gave me a deeper and more comprehensive understanding of Kotlin.",
        date: "2023-03-01",
      },
    ],
  },
  PHP: {
    baseLevel: 35,
    alias: "PHP",
    aliasInZh: "PHP",
    expierience: [
      {
        tip: "我在外包项目中接手了一个PHP项目，这让我对PHP有了初步的理解。",
        tipEn:
          "I took over a PHP project in an outsourcing project, which gave me a preliminary understanding of PHP.",
        date: "2017-01-01",
      },
      {
        tip: "我接触了ThinkPHP框架，这使我对PHP有了更深入和全面的了解。",
        tipEn:
          "I came into contact with the ThinkPHP framework, which gave me a deeper and more comprehensive understanding of PHP.",
        date: "2017-08-01",
      },
      {
        tip: "我使用ThinkPHP框架分别开发了一个博客、电商网站和拍卖网站，这个经验让我对PHP有了更深入和全面的了解。",
        tipEn:
          "I used the ThinkPHP framework to develop a blog, an e-commerce website, and an auction website, which gave me a deeper and more comprehensive understanding of PHP.",
        date: "2018-01-01",
      },
      {
        tip: "我维护了一个由PHP开发的电商网站，这让我对PHP有了更深入和全面的了解。",
        tipEn:
          "I maintained an e-commerce website developed by PHP, which gave me a deeper and more comprehensive understanding of PHP.",
        date: "2022-05-01",
      },
    ],
  },
};

export const devOpsAndCloud: Expirience = {
  Docker: {
    baseLevel: 5,
    alias: "Docker",
    aliasInZh: "Docker",
    expierience: [
      {
        tip: "我在Bilibili上学习了Docker的课程，这让我对Docker有了初步的理解。",
        tipEn:
          "I studied a Docker course on Bilibili, which gave me a preliminary understanding of Docker.",
        date: "2019-01-01",
      },
      {
        tip: "我在官方网站上学习了Docker的课程，通过这个课程，我对Docker有了更深入和全面的了解。",
        tipEn:
          "I studied a Docker course on the official website, which gave me a deeper and more comprehensive understanding of Docker.",
        date: "2019-02-01",
      },
      {
        tip: "我在一个Demo项目中练习了Docker，这使我对Docker有了更深入和全面的了解。",
        tipEn:
          "I practiced Docker in a demo project, which gave me a deeper and more comprehensive understanding of Docker.",
        date: "2019-03-01",
      },
    ],
  },
  GoogleCloudPlatform: {
    baseLevel: 10,
    alias: "Google Cloud",
    aliasInZh: "Google Cloud",
    expierience: [
      {
        tip: "我注册了自己的账号，并购买了VPS（虚拟专用服务器），这让我对Google Cloud有了初步的理解。",
        tipEn:
          "I registered my own account and purchased a VPS. This gave me a preliminary understanding of Google Cloud.",
        date: "2022-01-01",
      },
      {
        tip: "我在Google Cloud中购买了一个域名，并使用解析服务",
        tipEn:
          "I purchased a domain name in Google Cloud and used the parsing service.",
        date: "2022-02-01",
      },
      {
        tip: "我在官方网站上学习了Google Cloud的课程，通过这个课程，我对Google Cloud有了更深入和全面的了解。",
        tipEn:
          "I studied a Google Cloud course on the official website, which gave me a deeper and more comprehensive understanding of Google Cloud.",
        date: "2022-02-01",
      },
      {
        tip: "在翻译APP的开发中，我们使用了Credentials client和Firebase支持APP的Google登录功能。 ",
        tipEn:
          "In the development of the translation app, we used Credentials client and Firebase to support the Google login function of the app.",
        date: "2023-10-01",
      },
    ],
  },
  AlibabaCloudPlatform: {
    baseLevel: 40,
    alias: "Aliyun",
    aliasInZh: "Aliyun",
    expierience: [
      {
        tip: "我注册了账号，并购买了VPS（虚拟专用服务器）、域名以及备案服务。",
        tipEn:
          "I registered my account and purchased a VPS, domain name, and filing service.",
        date: "2015-01-01",
      },
      {
        tip: "我有经验使用了OSS（对象存储服务）、云数据库、云服务器、云监控、云解析以及云存储服务。",
        tipEn:
          "I have experience using OSS, cloud databases, cloud servers, cloud monitoring, cloud parsing, and cloud storage services.",
        date: "2018-01-01",
      },
      {
        tip: "我有经验接触了智能语音交互、机器翻译和文档翻译。",
        tipEn:
          "I have experience with intelligent voice interaction, machine translation, and document translation.",
        date: "2023-07-01",
      },
    ],
  },
  DevOps: {
    baseLevel: 30,
    alias: "DevOps",
    aliasInZh: "DevOps",
    expierience: [
      {
        tip: "我在Coding平台中使用了项目管理、代码仓库、Wiki、文档、协作、权限和安全功能。",
        tipEn:
          "I used project management, code repository, Wiki, documentation, collaboration, permissions, and security functions in the Coding platform.",
        date: "2019-01-01",
      },
      {
        tip: "我注册了GitHub账号，并开始使用代码仓库功能。",
        tipEn:
          "I registered a GitHub account and started using the code repository function.",
        date: "2022-01-01",
      },
      {
        tip: "我有经验接触了Vercel，并成功将测试项目部署到了Vercel平台。",
        tipEn:
          "I have experience with Vercel and successfully deployed the test project to the Vercel platform.",
        date: "2022-01-01",
      },
    ],
  },
};
export const other: Expirience = {
  Git: {
    baseLevel: 45,
    alias: "Git",
    aliasInZh: "Git",
    expierience: [
      {
        tip: "我有了解并掌握了Git的一些基本操作。",
        tipEn: "I have learned and mastered some basic operations of Git.",
        date: "2019-01-01",
      },
      {
        tip: "我在Codecademy平台上学习了Git的分支管理、合并、冲突解决、版本回退、标签、远程仓库等操作。",
        tipEn:
          "I studied Git branch management, merge, conflict resolution, version rollback, tag, remote repository, etc. on the Codecademy platform.",
        date: "2022-01-01",
      },
    ],
  },
  Github: {
    baseLevel: 45,
    alias: "Github",
    aliasInZh: "Github",
    expierience: [
      {
        tip: "我注册了GitHub账号，并开始使用代码仓库功能。",
        tipEn:
          "I registered a GitHub account and started using the code repository function.",
        date: "2022-01-01",
      },
      {
        tip: "我开通了GitHub Copilot服务。",
        tipEn: "I opened the GitHub Copilot service.",
        date: "2022-01-01",
      },
      {
        tip: "我有了自己的项目。",
        tipEn: "I have my own project.",
        date: "2022-01-01",
      },
    ],
  },
  Figma: {
    baseLevel: 60,
    alias: "Figma",
    aliasInZh: "Figma",
    expierience: [
      {
        tip: "我注册了Figma账号，并开始使用Figma的基本功能。",
        tipEn:
          "I registered a Figma account and started using Figma's basic functions.",
        date: "2022-09-01",
      },
      {
        tip: "我在Codecademy平台上学习了Figma的课程，通过这个课程，我对Figma有了更深入和全面的认识。",
        tipEn:
          "I studied a Figma course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of Figma.",
        date: "2022-11-01",
      },
      {
        tip: "我进行了翻译APP的线框图和UI设计工作。",
        tipEn:
          "I did the wireframe and UI design work for the translation app.",
        date: "2022-05-01",
      },
    ],
  },
  Chrome: {
    baseLevel: 70,
    alias: "Chrome DevTools",
    aliasInZh: "Chrome DevTools",
    expierience: [
      {
        tip: "大多数Web项目都需要使用Chrome DevTools进行调试。",
        tipEn:
          "Most Web projects require the use of Chrome DevTools for debugging.",
        date: "2022-12-01",
      },
      {
        tip: "我在Codecademy平台上学习了Chrome DevTools的课程，通过这个课程，我对Chrome DevTools有了更深入和全面的认识。",
        tipEn:
          "I studied a Chrome DevTools course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of Chrome DevTools.",
        date: "2022-12-01",
      },
    ],
  },
  GraphQL: {
    baseLevel: 25,
    alias: "GraphQL",
    aliasInZh: "GraphQL",
    expierience: [
      {
        tip: "我在官方网站上学习了GraphQL的基础知识，这让我对GraphQL有了初步的理解。",
        tipEn:
          "I studied the basics of GraphQL on the official website, which gave me a preliminary understanding of GraphQL.",
        date: "2023-05-01",
      },
      {
        tip: "在翻译App的管理后台中，我们使用了GraphQL。",
        tipEn: "In the admin panel of the translation app, we used GraphQL.",
        date: "2023-05-01",
      },
    ],
  },
  ApolloGraphQL: {
    baseLevel: 15,
    alias: "ApolloGraphQL",
    aliasInZh: "ApolloGraphQL",
    expierience: [
      {
        tip: "我在官方网站上学习了Apollo GraphQL的基础知识，这让我对Apollo GraphQL有了初步的理解。",
        tipEn:
          "I studied the basics of Apollo GraphQL on the official website, which gave me a preliminary understanding of Apollo GraphQL.",
        date: "2023-05-01",
      },
      {
        tip: "在翻译App的管理后台中，我们使用了Apollo GraphQL。",
        tipEn:
          "In the admin panel of the translation app, we used Apollo GraphQL.",
        date: "2023-05-01",
      },
    ],
  },
  TensorFlowJs: {
    baseLevel: 2,
    alias: "TensorFlowJs",
    aliasInZh: "TensorFlowJs",
    expierience: [
      {
        tip: "我在官方学习了TensorFlow.js的基础知识，这让我对TensorFlow.js有了初步的理解。",
        tipEn:
          "I studied the basics of TensorFlow.js on the official website, which gave me a preliminary understanding of TensorFlow.js.",
        date: "2023-04-01",
      },
      {
        tip: "我在YouTube上学习了TensorFlow.js的基础知识，这让我对TensorFlow.js有了初步的理解。",
        tipEn:
          "I studied the basics of TensorFlow.js on YouTube, which gave me a preliminary understanding of TensorFlow.js.",
        date: "2023-04-01",
      },
    ],
  },
  Redis: {
    baseLevel: 10,
    alias: "Redis",
    aliasInZh: "Redis",
    expierience: [
      {
        tip: "我在项目中有接触到Redis，这让我对Redis有了初步的理解。",
        tipEn:
          "I have encountered Redis in the project, which gave me a preliminary understanding of Redis.",
        date: "2016-01-01",
      },
      {
        tip: "项目中需要使用Redis，因此我对Redis的安装和与PHP插件的集成有了一定的了解。",
        tipEn:
          "Redis is needed in the project, so I have a certain understanding of the installation of Redis and its integration with the PHP plugin.",
        date: "2018-01-01",
      },
    ],
  },
  SocketIO: {
    baseLevel: 20,
    alias: "SocketIO",
    aliasInZh: "SocketIO",
    expierience: [
      {
        tip: "我在官方网站上学习了Socket.IO的基础知识，这让我对Socket.IO有了初步的理解。",
        tipEn:
          "I studied the basics of Socket.IO on the official website, which gave me a preliminary understanding of Socket.IO.",
        date: "2019-01-01",
      },
      {
        tip: "在直播小程序的开发中，我们使用了Socket.IO，成功建立了学员聊天室。",
        tipEn:
          "In the development of the live streaming mini program, we used Socket.IO to successfully establish a student chat room.",
        date: "2021-01-01",
      },
      {
        tip: "在翻译APP的开发中，我们使用了WebSocket，实现了实时语音翻译功能。",
        tipEn:
          "In the development of the translation app, we used WebSocket to achieve real-time voice translation function.",
        date: "2023-08-01",
      },
    ],
  },
  RESTAPI: {
    baseLevel: 90,
    alias: "REST API",
    aliasInZh: "REST API",
    expierience: [
      {
        tip: "在一些项目中，我接触到了REST API，这让我对REST API有了初步的认识。",
        tipEn:
          "In some projects, I encountered REST API, which gave me a preliminary understanding of REST API.",
        date: "2018-01-01",
      },
      {
        tip: "我在Codecademy平台上学习了REST API的课程，通过这个课程，我对REST API有了更深入和全面的认识。",
        tipEn:
          "I studied a REST API course on the Codecademy platform, which gave me a deeper and more comprehensive understanding of REST API.",
        date: "2022-01-01",
      },
      {
        tip: "在之后涉及到适用的项目中，我都会使用REST API。",
        tipEn: "In the projects that follow, I will use REST API.",
        date: "2022-01-01",
      },
    ],
  },
  BashShell: {
    baseLevel: 5,
    alias: "Bash & Shell",
    aliasInZh: "Bash & Shell",
    expierience: [
      {
        tip: "我通过搜索引擎找到了一个用于将本地代码打包并上传至服务器的脚本，并学习了一些基本的命令。",
        tipEn:
          "I found a script through a search engine to package local code and upload it to the server, and learned some basic commands.",
        date: "2021-01-01",
      },
    ],
  },
  Npm: {
    baseLevel: 30,
    alias: "Npm",
    aliasInZh: "Npm",
    expierience: [
      {
        tip: "我知道如何查找并安装我需要的软件包到我的项目中。",
        tipEn:
          "I know how to find and install the packages I need into my project.",
        date: "2019-01-01",
      },
    ],
  },
  Rust: {
    baseLevel: 8,
    alias: "Rust",
    aliasInZh: "Rust",
    expierience: [
      {
        tip: "我在官方网站上学习了Rust的基础知识，这让我对Rust有了初步的理解。",
        tipEn:
          "I studied the basics of Rust on the official website, which gave me a preliminary understanding of Rust.",
        date: "2019-01-01",
      },
    ],
  },
  Terminal: {
    baseLevel: 50,
    alias: "Terminal",
    aliasInZh: "Terminal",
    expierience: [
      {
        tip: "我经常使用终端，因此对终端有一定的了解。",
        tipEn:
          "I often use the terminal, so I have a certain understanding of the terminal.",
        date: "2019-01-01",
      },
    ],
  },
  universalAccessSolid: {
    baseLevel: 30,
    alias: "Universal Access",
    aliasInZh: "Universal Access",
    expierience: [
      {
        tip: "我在Codecademy平台上学习了Universal Access的课程，这让我对Universal Access有了初步的了解。",
        tipEn:
          "I studied a Universal Access course on the Codecademy platform, which gave me a preliminary understanding of Universal Access.",
        date: "2022-09-01",
      },
    ],
  },
  WebFrontBasics: {
    baseLevel: 95,
    alias: "Web Front Basics",
    aliasInZh: "Web Front Basics",
    expierience: [
      {
        tip: "我在Codecademy平台上学习了Web Front Basics的课程，通过这个课程，我对Web Front Basics有了更深入的了解。",
        tipEn:
          "I studied a Web Front Basics course on the Codecademy platform, which gave me a deeper understanding of Web Front Basics.",
        date: "2023-01-01",
      },
    ],
  },
  OpenAi: {
    baseLevel: 55,
    alias: "Open Ai",
    aliasInZh: "Open Ai",
    expierience: [
      {
        tip: "我经常使用OpenAI的GPT-4模型，因此对OpenAI有了初步的了解。",
        tipEn:
          "I often use OpenAI's GPT-4 model, so I have a preliminary understanding of OpenAI.",
        date: "2023-11-01",
      },
    ],
  },
  Regex: {
    baseLevel: 35,
    alias: "Regex",
    aliasInZh: "正则表达式",
    expierience: [
      {
        tip: "在这段时间里，我在多个平台上进行了正则表达式的强化学习。",
        tipEn:
          "During this period, I have been learning regular expressions on multiple platforms.",
        date: "2023-03-01",
      },
    ],
  },
  Linux: {
    baseLevel: 35,
    alias: "Linux",
    aliasInZh: "Linux",
    expierience: [
      {
        tip: "我经常使用Linux操作系统来进行项目部署，因此对Linux有一定的了解。",
        tipEn:
          "I often use the Linux operating system for project deployment, so I have a certain understanding of Linux.",
        date: "2020-01-01",
      },
      {
        tip: "我在Codecademy平台上学习了Linux课程，通过这个课程，我对Linux有了更深入的理解。",
        tipEn:
          "I studied a Linux course on the Codecademy platform, which gave me a deeper understanding of Linux.",
        date: "2022-08-01",
      },
    ],
  },
};
