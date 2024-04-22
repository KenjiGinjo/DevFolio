type Detail = {
  fileName: string;
  date: string;
}[];
type Project = {
  title: string;
  titleEn?: string;
  startAt: string;
  description: string;
  descriptionEn?: string;
  endAt: string;
  thumb: any[];
  detail: Detail;
}[];
export const projectsData: Project = [
  {
    title: "哈尔滨箭龙舞蹈学校官方网站",
    titleEn: "Harbin Jianlong Dance School Official Website",
    description: `
    该项目的主要目标是为一家之前没有网站的舞蹈学校设计和开发一个全新的官网。
    网站的核心功能包括提供学校信息、课程展示、教师介绍，以及一个在线报名系统，
    以便学生可以方便地注册课程。网站旨在提高学校的在线可见性，吸引更多的学生，并提供一个用户友好的在线报名体验。`,
    descriptionEn: `The main goal of this project is to design and develop a brand new official website for a dance school that previously had no website. The core features of the website include providing school information, course display, teacher introduction, and an online registration system so that students can easily register for courses. The website aims to increase the online visibility of the school, attract more students, and provide a user-friendly online registration experience.`,
    startAt: "2014-03",
    endAt: "2015-11",
    thumb: [],
    detail: [
      {
        fileName: "哈尔滨箭龙舞蹈学校官方网站",
        date: "2015-11",
      },
    ],
  },
  {
    title: "哈尔滨超龙整形医院官方网站",
    titleEn: "Harbin Chaolong Plastic Surgery Hospital Official Website",
    description: `本项目的主要目标是对该整形医院的官网进行全面改版，以提高网站的转化率。
    重点在于优化用户体验，确保医院的每项服务和促销活动都有吸引人的专题页面。
    此外，项目还旨在通过改进网站的设计和功能，使其更加符合现代网站的标准，同时提高潜在客户的参与度和响应率。`,
    descriptionEn: `The main goal of this project is to completely redesign the official website of the plastic surgery hospital to improve the conversion rate of the website. The focus is on optimizing the user experience to ensure that every service and promotion of the hospital has an attractive landing page. In addition, the project aims to improve the design and functionality of the website to make it more in line with modern website standards, while increasing the participation and responsiveness of potential customers.`,
    startAt: "2016-01",
    endAt: "2018-02",
    thumb: [],
    detail: [
      {
        fileName: "哈尔滨超龙整形医院官方网站",
        date: "2018-02",
      },
    ],
  },
  {
    title: "哈尔滨市香坊区昆派网络工作室官网",
    titleEn: "Harbin Xiangfang District Kunpai Network Studio Official Website",
    description: ` 该项目的主要目标是为我的网络工作室开发一个全新的官方网站。这个网站的核心目的是展示工作室的主要业务——Web开发外包。网站包含了前台展示部分和后台管理系统，目的是为潜在客户提供详细的服务信息，并为工作室的日常运营提供便利。`,
    descriptionEn: `The main goal of this project is to develop a brand new official website for my web studio. The core purpose of this website is to showcase the studio's main business - web development outsourcing. The website contains a front-end display section and a back-end management system, which aims to provide detailed service information for potential customers and facilitate the daily operation of the studio.`,
    startAt: "2019-05",
    endAt: "2019-06",
    thumb: ["/1591200395986.jpg", "/1591200372949.jpg"],
    detail: [
      {
        fileName: "哈尔滨市香坊区昆派网络工作室官网",
        date: "2019-06",
      },
    ],
  },
  {
    title: "宁波久利拍卖商城",
    titleEn: "Ningbo Jiuli Auction Mall",
    description: `在线竞拍平台，这个网站允许用户浏览拍品，参与竞拍并出价。项目的核心是创建一个既安全又用户友好的在线竞拍系统，同时包含一个全面的后台管理系统，用于监控拍卖活动并管理拍品信息。`,
    descriptionEn: `Online auction platform, this website allows users to browse lots, participate in auctions and bid. The core of the project is to create a secure and user-friendly online auction system, as well as a comprehensive back-end management system for monitoring auction activities and managing lot information.`,
    startAt: "2020-01",
    endAt: "2020-05",
    thumb: ["/1591176313810.jpg", "/1591176295671.jpg"],
    detail: [
      {
        fileName: "宁波久利拍卖商城",
        date: "2020-05",
      },
    ],
  },
  {
    title: "创智恒业（北京）技术开发有限公司官网",
    titleEn:
      "Chuangzhihengye (Beijing) Technology Development Co., Ltd. Official Website",
    description: `旨在展示公司的业务范围、服务项目、团队信息以及最新动态。重点在于创建一个既具有专业感又易于用户浏览的在线平台，同时包含一个功能全面的后台管理系统，用于网站内容的更新和维护。`,
    descriptionEn: `The purpose is to showcase the company's business scope, service projects, team information and latest developments. The focus is on creating an online platform that is both professional and easy for users to browse, as well as a comprehensive back-end management system for updating and maintaining website content.`,
    startAt: "2020-02",
    endAt: "2020-03",
    thumb: [],
    detail: [
      {
        fileName: "创智恒业技术开发有限公司官网",
        date: "2020-03",
      },
    ],
  },
  {
    title: "千惠商城",
    titleEn: "Qianhui Mall",
    description: `本项目的目标是为千惠商城开发一个全新的电子商务平台。这个网站的主要功能是提供一个在线购物平台，让用户能够浏览商品、进行购物和处理订单。项目的重点是创建一个用户友好、功能齐全的网站，包括一个强大的后台管理系统，以便有效管理商品、订单和用户信息。`,
    descriptionEn: `The goal of this project is to develop a brand new e-commerce platform for Qianhui Mall. The main function of this website is to provide an online shopping platform for users to browse products, shop and process orders. The focus of the project is to create a user-friendly and fully functional website, including a powerful back-end management system for effective management of products, orders and user information.`,
    startAt: "2020-04",
    endAt: "2020-08",
    thumb: ["/1591199165331.jpg"],
    detail: [
      {
        fileName: "千惠商城",
        date: "2020-08",
      },
    ],
  },
  {
    title: "信用信息共享平台项目",
    titleEn: "Credit Information Sharing Platform Project",
    description: `信用信息共享平台是一个由政府主导的大型信息系统项目。其主要目的是集中管理和共享不同政府部门之间的信用信息，以提高数据处理的效率和准确性。该项目着重于确保数据的安全性、完整性和可访问性，同时为相关政府机构提供了一个强大的工具，以便更好地管理和利用信用信息。`,
    descriptionEn: `The Credit Information Sharing Platform is a large-scale information system project led by the government. Its main purpose is to centrally manage and share credit information between different government departments to improve the efficiency and accuracy of data processing. The project focuses on ensuring the security, integrity and accessibility of data, while providing relevant government agencies with a powerful tool to better manage and use credit information.`,
    startAt: "2018-06",
    endAt: "2019-04",
    thumb: [],
    detail: [],
  },
  {
    title: "彩票中奖概率计算系统",
    titleEn: "Lottery Winning Probability Calculation System",

    description: `该系统是一个专为分析和预测彩票中奖概率而设计的软件系统。该系统通过分析用户提供的彩票号码，并将其与历史开奖数据进行对比，运用特定的算法来预测中奖概率。该系统旨在提供一个数据驱动的工具，帮助用户更加科学地理解和参与彩票购买。`,
    descriptionEn: `The system is a software system designed to analyze and predict the probability of winning the lottery. The system analyzes the lottery numbers provided by the user, compares them with historical lottery data, and uses specific algorithms to predict the probability of winning. The system aims to provide a data-driven tool to help users better understand and participate in lottery purchases.`,
    startAt: "2019-05",
    endAt: "2019-08",
    thumb: [],
    detail: [],
  },
  {
    title: "黑龙江比亚迪叉车官网",
    titleEn: "Heilongjiang BYD Forklift Official Website",
    description: `该项目的主要目标是为黑龙江比亚迪叉车公司开发一个全新的官方网站。网站的核心功能是展示公司的产品信息、企业新闻、服务支持及联系方式。项目的重点在于创建一个既具有专业感又易于用户浏览的在线展示平台，并包含一个后台管理系统，用于内容的更新和网站的维护。`,
    descriptionEn: `The main goal of this project is to develop a brand new official website for Heilongjiang BYD Forklift Co., Ltd. The core function of the website is to showcase the company's product information, corporate news, service support and contact information. The focus of the project is to create an online display platform that is both professional and easy for users to browse, and includes a back-end management system for updating content and maintaining the website.`,
    startAt: "2019-02",
    endAt: "2019-03",
    thumb: ["/1591201615835.jpg", "/1591201580373.jpg"],
    detail: [
      {
        fileName: "黑龙江比亚迪叉车官网",
        date: "2019-03",
      },
    ],
  },
  {
    title: "哈尔滨赛楠服饰有限公司官网",
    titleEn: "Harbin Sainan Clothing Co., Ltd. Official Website",
    description: `本项目的主要目标是为一家服饰公司开发一个能够支持在线交易的官方网站。该网站的核心功能包括展示产品目录、处理客户订单和支持在线支付。项目的重点在于使用一款低代码平台快速开发出一个功能全面、用户友好且安全可靠的电子商务平台。`,
    descriptionEn: `The main goal of this project is to develop an official website for a clothing company that supports online transactions. The core functions of the website include displaying product catalogs, processing customer orders, and supporting online payments. The focus of the project is to use a low-code platform to quickly develop a fully functional, user-friendly and secure e-commerce platform.`,
    startAt: "2019-05",
    endAt: "2022-04",
    thumb: ["/1591277336111.jpg", "/1591277301514.jpg"],
    detail: [
      {
        fileName: "哈尔滨赛楠服饰官网",
        date: "2022-04",
      },
    ],
  },
  {
    title: "华软电商官网",
    titleEn: "Huaruan E-commerce Official Website",
    description: `本项目的目标是开发华软电商的官方网站，该网站使用Node.js和Egg.js框架，并采用SSR渲染页面，特别注重搜索引擎优化（SEO）。主要功能包括展示产品信息、处理客户咨询。同时，后台管理系统是SPA，使用Egg.js提供API服务，前端则使用Vue 2.0进行开发。`,
    descriptionEn: `The goal of this project is to develop the official website of Huaruan E-commerce. The website uses the Node.js and Egg.js frameworks, and uses SSR to render pages, especially focusing on search engine optimization (SEO). The main functions include displaying product information and processing customer inquiries. At the same time, the back-end management system is SPA, using Egg.js to provide API services, and the front-end uses Vue 2.0 for development.`,
    startAt: "2019-05",
    endAt: "2022-04",
    thumb: [],
    detail: [
      {
        fileName: "华软电商官网",
        date: "2022-04",
      },
    ],
  },
  {
    title: "黑龙江大地律师事务所官网",
    titleEn: "Heilongjiang Dadi Law Firm Official Website",
    description: `该项目的目标是为大地律师事务所开发一个全新的官方网站和管理后台，均采用前后端分离的单页应用（SPA）架构。网站的主要功能是提供事务所的介绍、律师团队的展示、法律服务的详情以及客户咨询入口。项目的重点是实现一个现代化、用户友好且易于维护的网站，同时确保后台管理系统的高效和易用性。`,
    descriptionEn: `The goal of this project is to develop a brand new official website and management background for Dadi Law Firm, both of which use the front-end and back-end separation single-page application (SPA) architecture. The main function of the website is to provide an introduction to the law firm, display the lawyer team, provide details of legal services, and provide a customer consultation entrance. The focus of the project is to implement a modern, user-friendly and easy-to-maintain website, while ensuring the efficiency and ease of use of the back-end management system.`,
    startAt: "2021-01",
    endAt: "2021-04",
    thumb: ["/1591184837902.jpg", "/1591176295671.jpg"],
    detail: [
      {
        fileName: "黑龙江大地律师事务所官网",
        date: "2021-04",
      },
    ],
  },
  {
    title: "珠海御伽职业培训学校官网",
    titleEn: "Zhuhai Yujia Vocational Training School Official Website",
    description: `本项目的主要目标是为珠海御伽职业培训学校开发一个官方网站。该网站旨在提供学校介绍、课程信息、师资团队展示和联系方式。项目的重点是使用Nuxt.js框架创建一个高性能、SEO友好的网站，并通过MySQL数据库管理网站数据`,
    descriptionEn: `The main goal of this project is to develop an official website for Zhuhai Yujia Vocational Training School. The website aims to provide school introduction, course information, teacher team display and contact information. The focus of the project is to use the Nuxt.js framework to create a high-performance, SEO-friendly website, and manage website data through the MySQL database`,
    startAt: "2021-06",
    endAt: "2021-08",
    thumb: [],
    detail: [
      {
        fileName: "珠海御伽职业培训学校官网",
        date: "2021-08",
      },
    ],
  },
  {
    title: "珠海御伽直播课微信小程序",
    titleEn: "Zhuhai Yujia Live Course WeChat Mini Program",
    description: `该项目的主要目标是开发一个微信小程序，供珠海御伽职业培训学校的学生观看直播课和录播课程，并提供一个在线题库供学生答题练习。该小程序旨在提供便捷的学习平台，增强学生的互动体验和学习效果。`,
    descriptionEn: `The main goal of this project is to develop a WeChat mini-program for students of Zhuhai Yujia Vocational Training School to watch live and recorded courses, and provide an online question bank for students to practice answering questions. The mini-program aims to provide a convenient learning platform to enhance students' interactive experience and learning effect.`,
    startAt: "2021-06",
    endAt: "2021-10",
    thumb: [],
    detail: [
      {
        fileName: "珠海御伽直播课微信小程序",
        date: "2021-10",
      },
    ],
  },
  {
    title: "噼里啪啦漫画商城",
    titleEn: "Pilipala Comic Store",
    description: `本项目的主要目标是开发一个漫画阅读Web应用——噼里啪啦漫画，支持用户充值书币以及购买和阅读漫画。该应用旨在提供一个平台，让用户能够轻松地浏览、购买和享受漫画阅读体验。项目的重点是实现一个安全、稳定且用户友好的在线漫画商店。`,
    descriptionEn: `The main goal of this project is to develop a comic reading web application - Pilipala Comic, which supports users to recharge book coins and purchase and read comics. The application aims to provide a platform for users to easily browse, purchase and enjoy the comic reading experience. The focus of the project is to implement a secure, stable and user-friendly online comic store.`,
    startAt: "2019-06",
    endAt: "2019-11",
    thumb: [],
    detail: [
      {
        fileName: "噼里啪啦漫画商城",
        date: "2019-11",
      },
    ],
  },
  {
    title: "噼里啪啦漫画APP",
    titleEn: "Pilipala Comic APP",
    description: `该项目的主要目标是开发噼里啪啦漫画的移动应用，包括iOS和Android版本。该APP的功能与Web版本相同，允许用户浏览、购买和阅读漫画。项目的重点是提供一个跨平台的漫画阅读体验，同时确保应用在不同设备上的高性能和稳定性。`,
    descriptionEn: `The main goal of this project is to develop a mobile application for Pilipala Comics, including iOS and Android versions. The APP has the same functions as the web version, allowing users to browse, purchase and read comics. The focus of the project is to provide a cross-platform comic reading experience, while ensuring the high performance and stability of the application on different devices.`,
    startAt: "2021-08",
    endAt: "2021-12",
    thumb: [],
    detail: [
      {
        fileName: "噼里啪啦漫画APP",
        date: "2021-12",
      },
    ],
  },
  {
    title: "电商微信小程序",
    titleEn: "E-commerce WeChat Mini Program",
    description: `在这个项目中，我负责维护和更新一个已经存在的电商微信小程序。这个小程序为用户提供在线购物体验，包括商品浏览、下单、支付等功能。我的主要任务是确保小程序的稳定运行，同时引入新的功能和改进以提升用户体验。`,
    descriptionEn: `In this project, I am responsible for maintaining and updating an existing e-commerce WeChat mini-program. This mini-program provides users with an online shopping experience, including product browsing, ordering, payment and other functions. My main task is to ensure the stable operation of the mini-program, while introducing new functions and improvements to enhance the user experience.`,
    startAt: "2021-08",
    endAt: "2023-06",
    thumb: [],
    detail: [
      {
        fileName: "物联微信小程序",
        date: "2023-06",
      },
    ],
  },
  {
    title: "电商APP",
    titleEn: "E-commerce APP",
    description: `该项目旨在开发一个电商APP，为用户提供在线购物体验，包括商品浏览、下单、支付等功能。这个应用使用uni-app进行跨平台开发，其API由NestJS开发，而特定的活动页面则是使用SolidJS进行开发。项目的重点是实现一个高效能、易用且具有现代界面的应用，以提升用户体验。`,
    descriptionEn: `The purpose of this project is to develop an e-commerce APP to provide users with an online shopping experience, including product browsing, ordering, payment and other functions. This application uses uni-app for cross-platform development, its API is developed by NestJS, and specific activity pages are developed using SolidJS. The focus of the project is to implement an efficient, easy-to-use and modern interface application to enhance the user experience.`,
    startAt: "2022-05",
    endAt: "2023-06",
    thumb: [],
    detail: [
      {
        fileName: "物联APP",
        date: "2023-06",
      },
    ],
  },
  {
    title: "优译同传APP",
    titleEn: "UtranVox APP",
    description: `该项目的主要目标是开发一款多功能翻译APP，支持同声传译、文本翻译、文档翻译和音视频翻译。该应用旨在为用户提供一个全面的语言解决方案，无论是口语交流、书面文本还是多媒体内容。项目的重点是实现一个高准确度、易用性强和响应迅速的翻译平台。`,
    descriptionEn: `The main goal of this project is to develop a multi-functional translation APP that supports simultaneous interpretation, text translation, document translation and audio and video translation. The application aims to provide users with a comprehensive language solution, whether it is spoken communication, written text or multimedia content. The focus of the project is to implement a translation platform with high accuracy, strong usability and fast response.`,
    startAt: "2023-05",
    endAt: "2023-11",
    thumb: [],
    detail: [
      {
        fileName: "优译同传APP",
        date: "2023-11",
      },
      {
        fileName: "优译同传APP_01",
        date: "2023-11",
      },
      {
        fileName: "优译同传APP_02",
        date: "2023-11",
      },
    ],
  },
].reverse();
