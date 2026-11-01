const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    number: "02",
    title: "Frontend Development",
    skills: ["React", "React Router", "Tailwind CSS", "Responsive Design"],
  },
  {
    number: "03",
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT"],
  },
  {
    number: "04",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Mongoose"],
  },
  {
    number: "05",
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "npm", "Vite"],
  },
  {
    number: "06",
    title: "Integrations & Practices",
    skills: [
      "API Integration",
      "Authentication",
      "Cloudinary",
      "Debugging",
      "Deployment",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-eyebrow">SKILLS & TECHNOLOGIES</p>

          <h2>
            THE TOOLS
            <br />
            BEHIND THE <span>BUILD.</span>
          </h2>

          <p className="skills-description">
            From interfaces to databases, I work across the stack to build
            functional web applications. I choose tools based on the problem at
            hand, with a focus on practical solutions and maintainable code.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <article className="skills-group" key={group.number}>
              <span className="skills-group-number">{group.number}</span>

              <h3 className="skills-group-title">{group.title}</h3>

              <ul className="skills-group-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
