export default function Portfolio() {
  const skills = {
    "Programming": ["Python", "SQL"],
    "AI & ML": ["Scikit-learn", "YOLO", "NLP", "RAG", "Model Evaluation"],
    "Generative AI": ["LangChain", "OpenAI", "ChatGPT", "Prompt Engineering", "LLMs"],
    "Backend": ["FastAPI", "Flask", "Streamlit"],
    "Data Analytics": ["Pandas", "NumPy", "Power BI", "Tableau", "Excel"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools": ["Git", "GitHub", "Docker", "Jira", "AWS"]
  };

  const projects = [
    {
      title: "Sales CRM AI Chatbot",
      tech: "Python • OpenAI API • MongoDB • Flask • Streamlit",
      desc: "AI-powered CRM chatbot for lead qualification, intelligent responses, and automated customer interaction.",
    },
    {
      title: "Loan Prediction ML Model",
      tech: "Python • XGBoost • Scikit-learn • Streamlit",
      desc: "Real-time loan eligibility prediction system with feature engineering and model optimization.",
    },
    {
      title: "Vehicle Monitoring & License Plate Recognition",
      tech: "YOLOv8 • OCR • FastAPI • OpenCV • MySQL",
      desc: "Smart AI surveillance solution for vehicle tracking and OCR-based number plate recognition.",
    },
  ];

  const certifications = [
    "NSDC Certified Master in Data Science & Data Analysis",
    "ITVedant Certified Master in Data Science & Analytics with Artificial Intelligence",
    "IBM Data Analysis with Python",
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050816;
        }

        .glow {
          box-shadow: 0 0 30px rgba(0,255,255,0.25);
        }

        .gradient-text {
          background: linear-gradient(90deg,#00f5ff,#8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          transition: all 0.4s ease;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: cyan;
          opacity: 0.5;
          animation: float 8s infinite ease-in-out;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }

        .typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid cyan;
          width: 0;
          animation: typing 5s steps(60,end) infinite alternate;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>

      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 z-50"></div>

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="particle top-20 left-20"></div>
          <div className="particle top-60 left-1/2"></div>
          <div className="particle bottom-32 right-40"></div>
          <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
          <div className="absolute w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="uppercase tracking-[4px] text-cyan-400 mb-4">Future AI Engineer</p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Rushikesh <span className="gradient-text">Pravin Patil</span>
            </h1>

            <div className="h-12 mb-6 overflow-hidden">
              <h2 className="typing text-xl md:text-2xl text-purple-300 font-semibold">
                AI & Data Science Engineer | Generative AI Enthusiast | ML Developer
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
              Artificial Intelligence & Data Science student at SPPU with expertise in AI/ML,
              Data Science, Computer Vision, and Generative AI technologies.
              Passionate about building intelligent systems, AI-powered applications,
              and solving real-world problems using modern AI frameworks.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold glow hover:scale-105 transition">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500/20 transition">
                Contact Me
              </a>
              <a href="/resume.pdf" className="px-6 py-3 rounded-2xl glass hover:border-cyan-400 transition">
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 text-lg">
              <a href="https://github.com/rushi935993" target="_blank" className="hover:text-cyan-400 transition">GitHub</a>
              <a href="https://www.linkedin.com/in/rushikesh-pravin-patil/" target="_blank" className="hover:text-purple-400 transition">LinkedIn</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="glass rounded-[40px] p-4 glow relative w-[320px] h-[420px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20"></div>
              <img
                src="/profile.jpg"
                alt="profile"
                className="relative z-10 object-cover rounded-[30px] w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Passionate about AI automation, intelligent systems, NLP, computer vision,
            and emerging AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-8 glow">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Artificial Intelligence & Data Science student at Savitribai Phule Pune University
              with expertise in Machine Learning, Data Analytics, Generative AI, LangChain,
              LLMs, Prompt Engineering, and AI Agents.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>• NSDC Certified Master in Data Science & Data Analysis</p>
              <p>• ITVedant Certified Master in Data Science & Analytics with AI</p>
              <p>• IBM Data Analysis with Python</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-6 card-hover">
              <h4 className="text-xl font-semibold text-purple-400">SSC Board</h4>
              <p className="text-gray-300 mt-2">88.00%</p>
            </div>

            <div className="glass rounded-3xl p-6 card-hover">
              <h4 className="text-xl font-semibold text-cyan-400">HSC Board</h4>
              <p className="text-gray-300 mt-2">78.83%</p>
            </div>

            <div className="glass rounded-3xl p-6 card-hover glow">
              <h4 className="text-xl font-semibold gradient-text">
                B.E. in Artificial Intelligence & Data Science
              </h4>
              <p className="text-gray-300 mt-2">Savitribai Phule Pune University</p>
              <p className="text-cyan-300 mt-1">CGPA: 8.85 / 10</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-[#070b1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass rounded-3xl p-6 card-hover glow">
                <h3 className="text-2xl font-bold mb-5 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/10 border border-cyan-400/30 text-sm hover:bg-cyan-400/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text">Experience</h2>
        </div>

        <div className="glass rounded-3xl p-10 glow card-hover border-l-4 border-cyan-400">
          <p className="text-cyan-400 font-semibold mb-2">Sept 2025 – Dec 2025</p>
          <h3 className="text-3xl font-bold mb-2">Data Analyst Intern</h3>
          <p className="text-purple-300 mb-6">Inorbvict Healthcare Pvt. Ltd., Pune</p>

          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li>• Built interactive BI dashboards using Zoho Analytics</li>
            <li>• Created employee productivity dashboards</li>
            <li>• Conducted Zoho Projects training sessions</li>
            <li>• Developed Jira dashboards for sprint tracking</li>
            <li>• Built Git analytics dashboards for development monitoring</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-[#070b1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="glass rounded-3xl p-8 glow card-hover group">
                <div className="h-48 rounded-2xl mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-center p-4">
                  {project.title}
                </div>

                <p className="text-cyan-300 text-sm mb-4">{project.tech}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{project.desc}</p>

                <div className="flex gap-4">
                  <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition">
                    Live Demo
                  </button>
                  <button className="px-4 py-2 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert} className="glass rounded-3xl p-8 glow card-hover text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-200">{cert}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-[#070b1a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold gradient-text mb-16">
            Areas of Interest & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Data Science",
              "Generative AI",
              "NLP",
              "Computer Vision",
              "AI Automation",
              "AI Agents",
              "Data Analytics",
            ].map((item) => (
              <div key={item} className="glass rounded-3xl p-8 glow card-hover text-xl font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text">Contact Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass rounded-3xl p-8 glow">
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">Get In Touch</h3>

            <div className="space-y-5 text-gray-300">
              <p>📧 rushipatil935993@gmail.com</p>
              <p>📞 +91 93599 30147</p>
              <p>
                🔗 
                <a href="https://github.com/rushi935993" className="text-cyan-400">
                  github.com/rushi935993
                </a>
              </p>
              <p>
                💼 
                <a href="https://www.linkedin.com/in/rushikesh-pravin-patil/" className="text-purple-400">
                  linkedin.com/in/rushikesh-pravin-patil
                </a>
              </p>
            </div>
          </div>

          <form className="glass rounded-3xl p-8 glow space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none"
            ></textarea>

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-[1.02] transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        <h3 className="text-2xl font-bold gradient-text mb-2">Rushikesh Pravin Patil</h3>
        <p className="mb-4">Built with AI & Innovation</p>

        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/rushi935993" className="hover:text-cyan-400 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rushikesh-pravin-patil/" className="hover:text-purple-400 transition">
            LinkedIn
          </a>
        </div>

        <p>© 2026 Rushikesh Pravin Patil. All rights reserved.</p>
      </footer>
    </div>
  );
}
