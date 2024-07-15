export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I idolize deep work and support fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Usually easy to reach out and flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack I worked on",
    description: "Always exploring",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI application ",
    description: "Knowlex",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PhotoGallery",
    des: "A cloud-storage web app for storing photos using Next.Js",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "sen.svg", "/c.svg"],
    link: "https://github.com/Dauntlesshokage/t3app",
  },
  {
    id: 2,
    title: "Knowlex",
    des: "An AI querying service for custom AI assitantance on custom data",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "conv.svg", "/c.svg"],
    link: "https://github.com/Dauntlesshokage/knowlex",
  },
  {
    id: 3,
    title: "Twitter Backend",
    des: "A Backend architecture to emulate Twitter style opeartions with auth.",
    img: "/p3.svg",
    iconLists: ["/node.svg", "/expr.svg", "/ts.svg", "/pris.svg"],
    link: "https://github.com/Dauntlesshokage/TwitterBackend",
  },
  {
    id: 4,
    title: "Sentimentor",
    des: "A sentiment-analysis based application to analyze face confidence score of students",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/py.svg", "expr.svg"],
    link: "https://github.com/Dauntlesshokage/Sentimentor",
  },
];

export const testimonials = [
  {
    quote:
      "He is always accountable if you ask him to do any task, he's a great team player, and he is never afraid to ask if he has any questions. overall a great person to work with!",
    name: "Team Member",
    title: "Associate",
  },
  {
    quote:
      "Ananth has been guiding me through this job since day 1, since I was a new employee with a lot of questions, I used to just be unsure of everything but Ananth helped me out a lot. I have observed that he is very polite with everyone and calmly handles all the situations. ",
    name: "Colleague",
    title: "Associate",
  },
  {
    quote:
      "Ananth is always fun to work with. He is great to have a conversation with at work, but he is always primarily focused on his duties and aiding customers in whatever facet they require help in.",
    name: "Team Member",
    title: "Associate",
  },
  {
    quote:
      "Ananth has been one of my favorite newer hires. In his short time, he has really stood out to me. He consistently works a lot of hours every week and we could benefit if he could work even more. While at work he is always very focused on enforcing his job duties while also being very pleasant to talk to. I rarely have him to complete tasks because he has already taken the initiative to start them. He is a great teammate and coworker and it is always nice seeing him at workplace",
    name: "Team Lead",
    title: "Supervisor",
  },
  {
    quote:
      "Ananth is a very enthusiastic and zealous candidate. His work ethic is commendable and he always takes the initiative to move forward and learn new things. He picks up on new challenges and easily manages to work around them. He is a great asset to have on any team",
    name: "Manager",
    title: "CTO",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern - TerraviewOS",
    desc: "Developed a Full stack cross-platform application in Flutter and Flask, improving performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer - TCS",
    desc: "Designed and developed mobile app for both iOS & Android platforms using Angular, enhancing user engagement for the client.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Dauntlesshokage",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/Dauntlesshokage",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ananthmeesala/",
  },
];
