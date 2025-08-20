import React from "react";
import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
 {
      id: 1,
      role: "Content Moderator Intern",
      company: "Innovitica Pvt. Ltd",
      duration: "January 2025 - August 2025",
      type: "Internship",
      points: [
        <>
          Filtered and moderated <span className="font-bold text-white">content on the internet</span> to maintain adherence to company policies and community guidelines.
        </>,
        <>
          Exhibited <span className="font-bold text-white">sound problem-solving skills</span> and concentration in day-to-day moderation work.
        </>,
        <>
          Cooperated with the team to provide a <span className="font-bold text-white">safe and constructive user experience</span>.
        </>,
        <>
          Maintained an unwavering commitment to providing <span className="font-bold text-white">high-quality output</span>.
        </>,
      ],
    },
        {
      id: 2,
      role: "Full-Stack Developer Intern",
      company: "Astraeus Next Gen",
      duration: "January 2025 - April 2025",
      type: "Internship",
      points: [
        <>
          Supported various <span className="font-bold text-white">web development projects</span> throughout the organization.
        </>,
        <>
          Helped create and develop <span className="font-bold text-white">responsive web applications</span>.
        </>,
        <>
          Developed and deployed <span className="font-bold text-white">web applications using HTML, Tailwind, and React.js</span>.
        </>,
        <>
          Gained hands-on experience in <span className="font-bold text-white">front-end and back-end development processes</span>.
        </>,
        <>
          Utilized <span className="font-bold text-white">AI tools</span> to streamline coding, debugging, and content generation tasks.
        </>,
      ],
    },
   
  ];

  return (
    <section id="experience" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-7 h-7 text-yellow-400" />
          <h2 className="text-3xl font-bold text-yellow-400">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline Dot */}
              <div
                className="absolute -left-[40px] top-1 w-4 h-4 rounded-full bg-yellow-400"
              ></div>

              {/* Left Side Info */}
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-md font-medium text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                {exp.type && <p className="text-sm text-gray-400">{exp.type}</p>}
              </div>

              {/* Right Side Content */}
              <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
