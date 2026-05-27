"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Portfolio() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_guxvonq",
        "template_r76usv1",
        form.current,
        "JXEAmhuyz1t-OkoA-"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  const skills = {
    Programming: ["Python", "SQL"],
    "AI & ML": [
      "Scikit-learn",
      "YOLO",
      "NLP",
      "RAG",
      "Model Evaluation",
    ],
    "Generative AI": [
      "LangChain",
      "OpenAI",
      "ChatGPT",
      "Prompt Engineering",
      "LLMs",
    ],
    Backend: ["FastAPI", "Flask", "Streamlit"],
    "Data Analytics": [
      "Pandas",
      "NumPy",
      "Power BI",
      "Tableau",
      "Excel",
    ],
    Databases: ["MySQL", "MongoDB"],
    Tools: ["Git", "GitHub", "Docker", "Jira", "AWS"],
  };

  const projects = [
    {
      title: "Sales CRM AI Chatbot",
      tech: "Python • OpenAI API • MongoDB • Flask • Streamlit",
      desc: "AI-powered CRM chatbot for lead qualification and automated customer interaction.",
    },
    {
      title: "Loan Prediction ML Model",
      tech: "Python • XGBoost • Scikit-learn • Streamlit",
      desc: "Real-time loan eligibility prediction system with feature engineering.",
    },
    {
      title: "Vehicle Monitoring & License Plate Recognition",
      tech: "YOLOv8 • OCR • FastAPI • OpenCV • MySQL",
      desc: "AI surveillance system for vehicle detection and OCR-based plate recognition.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050816;
        }

        .gradient-text {
          background: linear-gradient(90deg, #00f5ff, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glow {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          transition: 0.4s ease;
        }

        .typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid cyan;
          width: 0;
          animation: typing 5s steps(60, end) infinite alternate;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-cyan-400 mb-4">
              Future AI Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Rushikesh{" "}
              <span className="gradient-text">Pravin Patil</span>
            </h1>

            <div className="h-12 mb-6 overflow-hidden">
              <h2 className="typing text-xl md:text-2xl text-purple-300 font-semibold">
                AI & Data Science Engineer | Generative AI Enthusiast |
                ML Developer
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Artificial Intelligence & Data Science student at SPPU
              with expertise in AI/ML, Data Science, Computer Vision,
              and Generative AI technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500/20 transition"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl glass hover:border-cyan-400 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/rushi935993"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rushikesh-pravin-patil/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="glass rounded-[40px] p-4 glow w-[320px] h-[420px] overflow-hidden">
              <img
                src="/profile.jpg"
                alt="profile"
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 bg-[#070b1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="glass rounded-3xl p-6 glow card-hover"
              >
                <h3 className="text-2xl font-bold mb-5 text-cyan-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/10 border border-cyan-400/30 text-sm"
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

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-3xl p-8 glow card-hover"
            >
              <div className="h-48 rounded-2xl mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-center p-4">
                {project.title}
              </div>

              <p className="text-cyan-300 text-sm mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold">
                  Live Demo
                </button>

                <button className="px-4 py-2 rounded-xl border border-purple-500">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text">
            Contact Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass rounded-3xl p-8 glow">
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">
              Get In Touch
            </h3>

            <div className="space-y-5 text-gray-300">
              <p>📧 rushipatil935993@gmail.com</p>
              <p>📞 +91 93599 30147</p>

              <p>
                🔗{" "}
                <a
                  href="https://github.com/rushi935993"
                  className="text-cyan-400"
                >
                  github.com/rushi935993
                </a>
              </p>

              <p>
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/rushikesh-pravin-patil/"
                  className="text-purple-400"
                >
                  linkedin.com/in/rushikesh-pravin-patil
                </a>
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="glass rounded-3xl p-8 glow space-y-6"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        <h3 className="text-2xl font-bold gradient-text mb-2">
          Rushikesh Pravin Patil
        </h3>

        <p className="mb-4">Built with AI & Innovation</p>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/rushi935993"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rushikesh-pravin-patil/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
        </div>

        <p>© 2026 Rushikesh Pravin Patil. All rights reserved.</p>
      </footer>
    </div>
  );
}