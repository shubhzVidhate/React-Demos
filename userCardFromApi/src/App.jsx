import Card from './components/Card.jsx'

const data = [
  {
    "name": "Wade Wilson",
    "role": "UI/UX Designer",
    "company": "Epic Coders",
    "skills": ["UI", "UX", "Photoshop", "Figma", "Wireframing", "Prototyping", "Illustrator"],
    "rate_per_hour": 55,
    "age": 32,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "description": "Wade is a 32-year-old UI/UX designer with an impressive portfolio behind him."
  },
  {
    "name": "Sarah Johnson",
    "role": "Frontend Developer",
    "company": "CodeWave",
    "skills": ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Redux"],
    "rate_per_hour": 45,
    "age": 29,
    "availability": false,
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
    "description": "Sarah is a creative frontend developer specializing in building responsive web applications."
  },
  {
    "name": "David Lee",
    "role": "Backend Developer",
    "company": "Techify",
    "skills": ["Node.js", "Express", "MongoDB", "REST APIs", "Docker"],
    "rate_per_hour": 60,
    "age": 34,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
    "description": "David is an experienced backend developer focusing on scalable and secure systems."
  },
  {
    "name": "Emily Carter",
    "role": "Graphic Designer",
    "company": "Pixel Arts",
    "skills": ["Illustrator", "Photoshop", "InDesign", "Branding"],
    "rate_per_hour": 40,
    "age": 27,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/women/4.jpg",
    "description": "Emily creates stunning designs and brand identities for digital and print media."
  },
  {
    "name": "Michael Brown",
    "role": "Full Stack Developer",
    "company": "DevMatrix",
    "skills": ["React", "Node.js", "MySQL", "Next.js", "TypeScript"],
    "rate_per_hour": 65,
    "age": 31,
    "availability": false,
    "image": "https://randomuser.me/api/portraits/men/5.jpg",
    "description": "Michael is a full stack developer with a strong background in modern web technologies."
  },
  {
    "name": "Olivia Martinez",
    "role": "Product Designer",
    "company": "Creative Studio",
    "skills": ["UI", "UX", "Figma", "Sketch", "Usability Testing"],
    "rate_per_hour": 58,
    "age": 30,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/women/6.jpg",
    "description": "Olivia focuses on crafting intuitive product experiences through user-centered design."
  },
  {
    "name": "Ethan Walker",
    "role": "Mobile App Developer",
    "company": "AppCore",
    "skills": ["Flutter", "Dart", "Firebase", "API Integration"],
    "rate_per_hour": 50,
    "age": 28,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/men/7.jpg",
    "description": "Ethan develops cross-platform mobile applications with seamless performance."
  },
  {
    "name": "Sophia Green",
    "role": "Web Designer",
    "company": "Designify",
    "skills": ["HTML", "CSS", "Figma", "Bootstrap", "SEO"],
    "rate_per_hour": 38,
    "age": 26,
    "availability": false,
    "image": "https://randomuser.me/api/portraits/women/8.jpg",
    "description": "Sophia creates visually appealing and SEO-friendly website designs."
  },
  {
    "name": "Liam Davis",
    "role": "Data Analyst",
    "company": "DataGen",
    "skills": ["Python", "SQL", "Power BI", "Excel", "Machine Learning"],
    "rate_per_hour": 70,
    "age": 35,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/men/9.jpg",
    "description": "Liam analyzes complex datasets to extract actionable business insights."
  },
  {
    "name": "Ava Thompson",
    "role": "Content Writer",
    "company": "WriteHub",
    "skills": ["SEO Writing", "Copywriting", "Editing", "Research"],
    "rate_per_hour": 30,
    "age": 25,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/women/10.jpg",
    "description": "Ava crafts compelling and SEO-optimized content for diverse industries."
  },
  {
    "name": "Noah Clark",
    "role": "DevOps Engineer",
    "company": "CloudSync",
    "skills": ["AWS", "Kubernetes", "CI/CD", "Docker", "Terraform"],
    "rate_per_hour": 75,
    "age": 33,
    "availability": false,
    "image": "https://randomuser.me/api/portraits/men/11.jpg",
    "description": "Noah manages infrastructure automation and cloud deployments efficiently."
  },
  {
    "name": "Isabella Lopez",
    "role": "UI Designer",
    "company": "DesignSpark",
    "skills": ["Figma", "Sketch", "Illustrator", "Typography", "Color Theory"],
    "rate_per_hour": 52,
    "age": 29,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/women/12.jpg",
    "description": "Isabella specializes in creating beautiful, user-friendly interface designs."
  },
  {
    "name": "James Turner",
    "role": "QA Engineer",
    "company": "TestPro",
    "skills": ["Selenium", "JUnit", "Postman", "Manual Testing", "Automation"],
    "rate_per_hour": 48,
    "age": 32,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/men/13.jpg",
    "description": "James ensures high-quality software by implementing thorough testing processes."
  },
  {
    "name": "Mia Patel",
    "role": "Frontend Developer",
    "company": "CodeLabs",
    "skills": ["React", "Redux", "Tailwind CSS", "Next.js"],
    "rate_per_hour": 54,
    "age": 27,
    "availability": false,
    "image": "https://randomuser.me/api/portraits/women/14.jpg",
    "description": "Mia is passionate about building dynamic and user-friendly interfaces."
  },
  {
    "name": "Benjamin Scott",
    "role": "Software Engineer",
    "company": "InnovateTech",
    "skills": ["Java", "Spring Boot", "MySQL", "REST APIs", "Microservices"],
    "rate_per_hour": 68,
    "age": 36,
    "availability": true,
    "image": "https://randomuser.me/api/portraits/men/15.jpg",
    "description": "Benjamin develops reliable backend systems and scalable microservices."
  }
]


const App = () => {
  return (
    <div className="  bg-black min-h-screen">
      <h3 className='w-full text-white text-center text-4xl font-bold '>All USERS</h3>
      <div className='flex flex-wrap justify-center gap-6 p-10'>
        {
          data.map((data, index) => (
            <div key={index}>
              <Card data={data} />
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default App
