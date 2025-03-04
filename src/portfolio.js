/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shubham Jain's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shubham Jain Portfolio",
    type: "website",
    url: "http://shubhamjain.com/",
  },
};

//Home Page
const greeting = {
  title: "Shubham Jain",
  logo_name: "ShubhamJain",
  // nickname: "shubhamjain",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/19sVuakYCrF5rw1a-02R21LdKzwXCAzds/view?usp=drivesdk",
  githubProfile: "https://github.com/shubhamjainkcity",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/shubhamjainkcity",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shubhamjainkcity/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shubhamjainkcity@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Imsubmjn",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shubhamkala___/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];



const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/shubhamjainkcity/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MBM Engineering College Jodhpur",
      subtitle: "B.E. in Information Technology",
      logo_path: "mbm-logo.jpg",
      alt_name: "UNCC",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Graduated with a Bachelor of Science in Information and Communication Technology, with a strong foundation in core computer science courses.",
        "⚡ Studied advanced topics in Java, Data Structures and Algorithms, Operating Systems, Database Management Systems, Software Engineering, and Cryptography and Network Security.",
        "⚡ Developed an image steganography script using Python, and hosted it on GitHub.",
        '⚡ Implemented content-aware partial compression using Hadoop, based on the IEEE paper "Content-Aware Partial Compression for Textual Big Data Analysis in Hadoop".',
      ],
      website_link: "https://www.mbm.ac.in/",
    },
  ],
};



const certifications = {
  certifications: [
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XZUQHLT8CFP7",
      alt_name: "upGrad",
      color_code: "#1F70C199",
    },
    {
      title: "Full-Stack Web Development with React Specialization",
      subtitle: "- The Hong Kong University of Science and Technology",
      logo_path: "ustLogo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/RRPB87SN5N32",
      alt_name: "DSC",
      color_code: "#00000000",
    },
    {
      title: "Multiplatform Mobile App Development with React Native",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PCBY6A3SW8S7",
      alt_name: "relevel",
      color_code: "#1F70C199",
    },
    {
      title: "Front-End Web Development with React",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H8HTNPYFRJLT",
      alt_name: "hackerrank",
      color_code: "#1F70C199",
    },
    {
      title: "Security Certified Network Specialist (SCNS)",
      subtitle: "- icsi",
      logo_path: "icsi-logo.png",
      certificate_link: "https://www.icsi.co.uk/certificates/5j1ldgp4t0",
      alt_name: "icsi",
      color_code: "#00000000",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/G7PTAVM3MRZL",
      alt_name: "internshala",
      color_code: "#1F70C199",
    },
    {
      title: "The Complete Front-End Web Development Course!",
      subtitle: "- udemy",
      logo_path: "logo-udemy.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-0IKTDKB7/?utm_medium=email&utm_campaign=email&utm_source=sendgrid.com",
      alt_name: "udemy",
      color_code: "#0C9D5899",
    },

    {
      title: "HTML & CSS - Certification Course for Beginners",
      subtitle: "- udemy",
      logo_path: "logo-udemy.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-0IKTDKB7/?utm_medium=email&utm_campaign=email&utm_source=sendgrid.com",
      alt_name: "udemy",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship's",
  description:
    "I have worked with couple of evolving startups as a Frontend Developer. I have also worked with some well established companies mostly as Software Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Softare Engineer (UI)",
          company: "Bottomline",
          company_url: "https://www.bottomline.com/uk",
          logo_path: "bottomline-logo.jpeg",
          duration: "Oct 2021 - Present",
          location: "Bangalore, Karnataka",
          description:
            "Worked on the Online Account Opening Platform, designing and implementing user-friendly interfaces for applicant workflows supporting 150+ banks and credit unions, including top 25 US banks; reduced app update frequency by 40% by transforming the legacy homepage into a fully server-driven UI; developed reusable server-driven UI components in ReactJS, reducing bundle size by 14%; optimized JavaScript logic for dynamic behaviors and efficient DOM manipulation; designed a D3-powered customer single view dashboard, enabling banks to visualize engagement, anticipate churn, and identify upsell opportunities; contributed to TDD using Jest and Cypress, achieving 100% code coverage; collaborated with product managers and designers to enhance user interactions. Tech Stack: ReactJS, Redux, TypeScript, ES6, HTML5, CSS3, Bootstrap, REST API, Jest, Cypress, Git.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Nymo.ai",
          company_url: "https://www.nymo.ai/",
          logo_path: "nymo-logo.png",
          duration: "May 2020 - July 2020",
          location: "Remote",
          description:
           "Built dynamic, feature-rich front-end applications with ReactJS, ES6, and TypeScript, ensuring maintainability and performance.",
          color: "#000000",
        },
        {
          title: "Research Intern",
          company: "DRDO",
          company_url: "https://www.drdo.gov.in/drdo/",
          logo_path: "DRDO-logo.png",
          duration: "May 2019 - July 2019",
          location: "Jodhpur",
          description:
            "Independently implemented the Decimation in Frequency Split-Radix FFT Algorithm using C++ under the mentorship of Senior Scientist at the Ministry of Defence, Government of India.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology in Web Development.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shubham-profile.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Kuchaman city, Rajasthan 341508, India",
    locality: "Kuchaman city",
    country: "India",
    region: "Rajasthan",
    postalCode: "341508",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Kuchaman+City,+Rajasthan+341508/@27.1479377,74.8149839,13z/data=!3m1!4b1!4m6!3m5!1s0x396b7995501f34b7:0x88832078bd56e61!8m2!3d27.1470339!4d74.8565613!16zL20vMGY1Yjl3?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
  phoneSection: {
    title: "Mobile",
    subtitle: "+91 9694819545",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
