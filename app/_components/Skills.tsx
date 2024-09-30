import SectionWrapper from "./SectionWrapper";
import SkillItems from "./SkillItems";

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages:",
      skills: [
        {
          title: "TypeScript",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          title: "JavaScript",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          title: "Python",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      title: "Backend Frameworks:",
      skills: [
        {
          title: "Node.js",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          title: "Nest.js",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        },
        {
          title: "Express.js",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
    },
    {
      title: "Frontend Frameworks:",
      skills: [
        {
          title: "React.js",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          title: "Next.js",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          title: "Redux",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        },
        {
          title: "TailwindCss",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      title: "Mobile App:",
      skills: [
        {
          title: "React Native",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      ],
    },
    {
      title: "Microservices:",
      skills: [
        {
          title: "RabbitMQ",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg",
        },
        {
          title: "Redis",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
    {
      title: "DevOps:",
      skills: [
        {
          title: "Docker",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          title: "Kubernetes",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          title: "Nginx",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          title: "Linux",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          title: "Ubuntu",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
        },
      ],
    },
    {
      title: "Version Control:",
      skills: [
        {
          title: "Git",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          title: "GitHub",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          title: "GitLab",
          uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="mt-10 grid grid-cols-2 gap-10">
        {skillsData.map((item) => (
          <SkillItems
            key={item.title}
            title={item.title}
            skills={item.skills}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
