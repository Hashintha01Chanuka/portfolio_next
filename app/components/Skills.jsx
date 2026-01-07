import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 sm:px-10 md:px-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-800 dark:text-white">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I've worked with a variety of technologies and tools throughout my career. Here are some of my key skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 sm:gap-8">
          {/* Frontend Skills */}
          <SkillCard
            icon="fas fa-code"
            title="Development"
            iconBg="bg-indigo-500"
            iconColor="text-indigo-700 dark:text-indigo-400"
            gradient="from-indigo-500 to-purple-500"
            skills={[
              { name: "HTML/CSS", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "React", level: 85 },
              { name: "Next js", level: 80 },
            ]}
          />

          {/* UI/UX */}
          <SkillCard
            icon="fas fa-palette"
            title="UI/UX"
            iconBg="bg-purple-500"
            iconColor="text-purple-700 dark:text-purple-400"
            gradient="from-purple-500 to-pink-500"
            skills={[
              { name: "Figma", level: 90 },
              { name: "Canva", level: 90 },
              { name: "Photoshop", level: 80 },
              { name: "Draw.io", level: 85 },
            ]}
          />

          {/* Tools */}
          <SkillCard
            icon="fas fa-screwdriver-wrench"
            title="Toolset"
            iconBg="bg-indigo-500"
            iconColor="text-indigo-700 dark:text-indigo-400"
            gradient="from-indigo-500 to-purple-500"
            skills={[
              { name: "VS Code", level: 95 },
              { name: "Git", level: 80 },
              { name: "GitHub", level: 85 },
              { name: "Postman", level: 75 },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, iconBg, iconColor, skills, gradient }) => (
  <div className="bg-gray-300 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
    <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-700 dark:text-white">
      <span className={`w-10 h-10 rounded-full ${iconBg} bg-opacity-20 flex items-center justify-center mr-3`}>
        <i className={`${icon} ${iconColor}`}></i>
      </span>
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <div cl key={skill.name}>
          <div className="flex justify-between mb-1 ">
            <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
            <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-500 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${gradient} h-2 rounded-full`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
