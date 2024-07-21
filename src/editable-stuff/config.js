// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dhananjay",
  middleName: "Chandrashekhar",
  lastName: "Kajale",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/dhananjaykajale751",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/dc.kajale.9",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/dhananjay.kajale751/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dhananjay-chandrashekhar-kajale-252904223/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/KajaleDhan59948",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/dhananjay.jpg"),
  imageSize: 375,
  message:
    "My name is Dhananjay Kajale. I’m a graduate of 2024 from RTM Nagpur University with a degree in Computer Science Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1LVdD7mK0qodkQTB6U_8U9mHSk00ZSmxQ/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "dhananjaykajale751", //i.e."johnDoe12Gh"
  reposLength: 1,
  specificRepos: [],
};

// Leadership SECTION


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 60 },
    { name: "SQL", value: 30 },
    { name: "Data Structures", value: 60 },
    { name: "C/C++", value: 50 },
    { name: "JavaScript", value: 90 },
    { name: "Node.js", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "C", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Web Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "dhanukajale7@gmail.com",
};

// const experiences = {
//   show: false,
//   heading: "Experiences",
//   data: [
//     {
//       role: 'Software Engineer',// Here Add Company Name
//       companylogo: require('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
//     {
//       role: 'Front-End Developer',
//       companylogo: require('../assets/img/boeing.png'),
//       date: 'May 2017 – May 2018',
//     },
//   ]
// }

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch};
