/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Mousom's Portfolio",
  description:
    "A Full Stack Web Developer, Graphic Designer & UI/UX Designer. Skilled in designing, building & maintaining highly scalable and available software applications.",
  og: {
    title: "Mousom Sarkar Portfolio",
    type: "website",
    url: "https://github.com/Raincrypt/react-portfolio-website/",
  },
};

//Home Page
const greeting = {
  title: "Mousom Sarkar",
  logo_name: "Mousom",
  // nickname: "Raja",
  subTitle:
    "A Front-End Web Developer & Software Developer. Skilled in designing, building & maintaining highly scalable and available software applications.",
  resumeLink:
    "https://drive.google.com/drive/folders/1TzipaFuaR-VCeUJpo4_g22fdZRMp2ibH?usp=sharing",
  portfolio_repository: "https://github.com/Raincrypt",
  githubProfile: "https://github.com/Raincrypt",
};

const socialMediaLinks = [
  /* Social Media Link */

  {
    name: "Github",
    link: "https://github.com/Raincrypt",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mousom-sarkar-a38b21165/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mousoms2204@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MousomTG",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mousom_22/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front-End Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Well-Versed with HTML, CSS and Javascript",
        "⚡ Building responsive website front end using React",
        "⚡ Using Latest tools to build Websites for best user experiance",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:cplusplus",
          style: {
            backgroundColor: "transparent",
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
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
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
          skillName: "MySQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#2C8EBB",
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
          skillName: "BootStrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
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
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/samarth_g2001",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shauri2805",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@shourya91",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Thapar Institute Of Engineering & Technology",
      subtitle: "B.E. in Computer Science and Engineering",
      logo_path: "Thapar.png",
      alt_name: "Thapar Logo",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Current CGPA = 7.5 CGPA.",
        "⚡ I have studied basic software engineering subjects like C++, DSA, Algorithms, Computer Network, Operating System, DBMS, etc.",
        "⚡ Apart from this, I have done courses on Front End Development.",
      ],
      website_link: "https://thapar.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "C Programming For Beginners - Built Game Using C Language",
      subtitle: "- Learn Programming",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-aa2f5bf8-dff5-4e8b-8cd0-e61b87a4b10a/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "The Web Developer Bootcamp",
      subtitle: "- Colt Steele",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6964c142-a66a-4f33-8a7c-cf9c62084b04/",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "The Complete Full-Stack JavaScript Course",
      subtitle: "- Joseph Delgadillo",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7b4bf2e8-c4e9-42ca-8bcb-dc257427bfcc/",
      alt_name: "Udemy",
      color_code: "#2A73CC",
    },
    {
      title: "The Complete Ethical Hacking Course",
      subtitle: "- Joseph Delgadillo, Nick Germaine",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8ed4fab4-62f8-45c5-9172-62af10fcbed6/",
      alt_name: "Udemy",
      color_code: "#02447B",
    },
    {
      title: "Machine Learning",
      subtitle: "- Idan Gabrieli",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-bb653d04-8743-4d0c-96c2-aed46af65c3b/",
      alt_name: "Udemy",
      color_code: "#FFB6C1",
    },
    {
      title: "The Complete Python 3 Course - Beginner to Advanced",
      subtitle: "- Joseph Delgadillo, Nick Germaine",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-481d7ad3-f22b-46aa-9114-7ca406c56681/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "I love doing projects and also contributed as web developer for start-ups",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Chaos Doodles",
          company_url: "https://www.chaosdoodles.com/",
          logo_path: "Gradeffects logo.jfif",
          duration: "Dec 2021 - Feb 2022",
          location: "Work from Home",
          description:
            "I have helped building their website and designed front-end components for the same.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Joint & Finance Secretary & Web Developer, EDC",
          company: "Entrepreneurship Development Cell",
          company_url: "https://sites.google.com/thapar.edu/edctiet",
          logo_path: "EDC_logo.png",
          duration: "September 2019 - Present",
          location: "Thapar University, Patiala, Punjab",
          description:
            "EDC,TIET conceptualizes and executes brand integration strategies having a diverse target group of students, entrepreneurs, and corporates. Led a team of 120+ members (including 40 core members). Managed a fund of ₹ 3.5 Lakhs (including sponsorships).",
          color: "#4285F4",
        },
        {
          title: "OWASP Student Chapter Core Member",
          company: "OWASP",
          company_url: "https://main.owasp.co.in/",
          logo_path: "logo-owasp.png",
          duration: "September 2019 - May 2021",
          location: "Thapar University, Patiala, Punjab",
          description:
            "The team of OWASP Student Chapter, one of the gilt-edged coding society, involves ingenious mind solvers who are eager to make the world a better place to live in with their innovative techniques and discoveries. By successfully organizing many hackathons, tech-talks, workshops and coding nights, we have always strived hard to maintain the coding culture throughout the campus.",
          color: "#D83B01",
        },
        {
          title: "Microsoft Student Chapter Member",
          company: "MLSC TIET",
          company_url: "https://mlsctiet.co.in/",
          logo_path: "mlsc_logo.png",
          duration: "September 2019 - May 2020",
          location: "Thapar University, Patiala, Punjab",
          description:
            "Microsoft Learn Student Chapter is a technical society which is dedicated to elevate the coding culture of Thapar Institute of Engineering and Technology by mentoring and motivating its students to refine their critical thinking, logical reasoning and coding skills. One of the elite societies of TIET.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2021 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Microsoft, Uber, Facebook, Google, Python, etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Applications and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Shourya.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Front-End Web Development, Software Development and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lajpat Nagar, New Delhi - 110024",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@27.4958739,77.6760804,20z",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8902010101",
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
  contactPageData,
};
