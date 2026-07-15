"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

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
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  const projects = [

    {
      title: "AI-First CRM HCP Platform",
      tech: "Next.js • TypeScript • LangGraph • LangChain • FastAPI • Groq LLM • Tailwind CSS",
      image: "/images/crm-hcp.jpg",
      desc: "Developed an AI-powered CRM platform for Healthcare Professionals (HCPs) featuring intelligent interaction logging, automated conversation analysis, sentiment detection, compliance validation, follow-up recommendations, entity extraction, and priority classification using LangGraph workflows and Large Language Models.",
      github: "https://github.com/rushi935993/ai-first-crm-hcp",
    },

    {
      title: "Sales CRM AI Chatbot",
      tech: "Python • OpenAI API • MongoDB • Flask • Streamlit",
      image: "/images/crm-ai.jpg",
      desc: "AI-powered CRM chatbot with intelligent lead qualification, automated customer interaction, OpenAI integration, and MongoDB-based chat storage system.",
      github: "https://github.com/rushi935993/Sales-CRM-AI-Chatbot",
    },

    {
      title: "AI Powered CT Scan Analysi",
      tech: "Python • TensorFlow • CNN • OpenCV • FastAPI • React.js • JavaScript • REST API ",
      image: "/images/ai-ctscananalysis.jpg",
      desc: "Developed an end-to-end AI-powered CT Scan Analysis System using Python, TensorFlow, FastAPI, and React.js.",
      github:
        "https://github.com/rushi935993/AI-Powered-CT-Scan-Analysis-Using-Python",
    },

    {
      title: "Loan Prediction ML Model",
      tech: "Python • XGBoost • Streamlit • Scikit-learn",
      image: "/images/loan-ml.jpg",
      desc: "Machine Learning-based loan eligibility prediction system using feature engineering, preprocessing pipelines, and real-time prediction dashboard.",
      github:
        "https://github.com/rushi935993/Loan-Predictor-Machine-Learning-Model",
    },
    {
      title: "Vehicle Monitoring System",
      tech: "YOLOv8 • OCR • FastAPI • OpenCV",
      image: "/images/vehicle-ai.jpg",
      desc: "AI-powered intelligent vehicle entry monitoring and license plate recognition system using YOLOv8, OCR, FastAPI backend, and OpenCV.",
      github:
        "https://github.com/rushi935993/vehicle_entry_monitoring_system",
    },
  ];

  const certifications = [
    { 
      title: "Mastery in Data Science and Data Analytics with AI – NSDC And ItVedant Education 2025", 
      link: "https://drive.google.com/file/d/14AhanCTNcQ9cBPIw4WoDxdr5rVWbIOo1/view", }, 
      { title: "Machine Learning with Python – IBM 2025", link: "https://drive.google.com/file/d/1NWTakA3MD6PXj3MKWsSnnp1H3LzjuF_V/view", },
      { title: "Data Science and Data Analytics with Python – IBM 2025", link: "https://drive.google.com/file/d/1Hr1UcEgGrwkmj-gCrAqTOqgkJVDuhpnG/view", }, 
      { title: "Amazon Web Services (AWS) – ItVedant Education 2025", link: "https://drive.google.com/file/d/1nO_aac4PYystCW1V99eR-7tEt1LfEpNg/view", }, 
      { title: "Fundamentals of DevOps – ItVedant Education 2025", link: "https://drive.google.com/file/d/1COd7kK8uc7q_FbeaDZbMPeVYf2PDtu4F/view", 

      },
    
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050505;
          font-family: sans-serif;
        }

        .glass {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .gradient {
          background: linear-gradient(90deg, #ff3c3c, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-red-500 uppercase tracking-[5px] mb-5">
              AI ENGINEER
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Hello, I'm <br />
              <span className="gradient">
                Rushikesh Patil
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Artificial Intelligence and Data Science Graduate
              with strong foundation in software engineering, machine learning,
              and data-driven systems.
            </p>

            <div className="flex gap-5 flex-wrap">
              <a
                href="#projects"
                className="bg-red-500 hover:bg-red-600 transition px-7 py-3 rounded-xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="border border-red-500 px-7 py-3 rounded-xl hover:bg-red-500/20 transition"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-5 mt-10 text-2xl">
              <a
                href="https://github.com/rushi935993"
                target="_blank"
              >
                <FaGithub className="hover:text-red-500 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/rushikesh-pravin-patil/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-red-500 transition" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-80 h-80 bg-red-500 rounded-full blur-[120px] opacity-30"></div>

            <img
              src="/profile.jpg"
              alt="profile"
              className="relative z-10 w-[380px] h-[480px] object-cover rounded-[40px] border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src="/profile.jpg"
              className="rounded-[35px] border border-white/10"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-red-500 uppercase tracking-[4px] mb-4">
                About Me
              </p>

              <h2 className="text-5xl font-bold mb-8">
                AI Engineer & <br />
                Generative AI Developer
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                Passionate about AI automation, intelligent systems,
                NLP, computer vision, and emerging AI technologies.
              </p>

              <div className="glass rounded-[30px] p-8 mb-8">
                <h3 className="text-2xl font-bold mb-5 text-white">
                  Professional Summary
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Artificial Intelligence & Data Science Graduate From
                  Savitribai Phule Pune University with expertise in
                  Machine Learning, Data Analytics, Generative AI,
                  LangChain, LLMs, Prompt Engineering, and AI Agents.
                </p>

                <div className="space-y-4 text-gray-300">
                  <p>
                    • NSDC Certified Master in Data Science & Data Analysis
                  </p>

                  <p>
                    • ITVedant Certified Master in Data Science & Analytics with AI
                  </p>

                  <p>
                    • IBM Data Analysis with Python
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-3xl font-bold text-red-500">
                    88%
                  </h3>

                  <p className="text-gray-400 mt-2">
                    SSC Board
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-3xl font-bold text-red-500">
                    78.83%
                  </h3>

                  <p className="text-gray-400 mt-2">
                    HSC Board
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-3xl font-bold text-red-500">
                    7.69
                  </h3>

                  <p className="text-gray-400 mt-2">
                    CGPA
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center">
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              Skills & Expertise
            </p>

            <h2 className="text-5xl font-bold">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Programming",
                skills: ["Python", "SQL"],
                icon: <FaPython />,
              },
              {
                title: "AI & ML",
                skills: ["Scikit-learn", "YOLO", "NLP", "RAG"],
              },
              {
                title: "Generative AI",
                skills: ["LangChain", "OpenAI", "ChatGPT", "LLMs"],
              },
              {
                title: "Backend",
                skills: ["FastAPI", "Flask", "Streamlit"],
              },
              {
                title: "Data Analytics",
                skills: ["Pandas", "NumPy", "Power BI", "Tableau"],
                icon: <FaDatabase />,
              },
              {
                title: "Tools",
                skills: ["Git", "GitHub", "Docker", "Jira"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[30px]"
              >
                <div className="text-red-500 text-4xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-6">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center">
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              Experience
            </p>

            <h2 className="text-5xl font-bold">
              Professional Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="/images/dashboard.jpg"
                alt="dashboard"
                className="rounded-[30px] border border-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass rounded-[30px] p-10"
            >
              <p className="text-red-500 mb-4">
                Sept 2025 – Dec 2025
              </p>

              <h3 className="text-4xl font-bold mb-4">
                Data Analyst Intern
              </h3>

              <p className="text-gray-400 mb-8">
                Inorbvict Healthcare Pvt. Ltd., Pune
              </p>

              <div className="space-y-5 text-gray-300">
                <p>• Built interactive BI dashboards using Power BI</p>
                <p>• Created employee productivity dashboards</p>
                <p>• Developed Jira sprint monitoring dashboards</p>
                <p>• Conducted Zoho Projects training sessions</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center">
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass rounded-[30px] overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.tech}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-red-500 px-6 py-3 rounded-xl hover:bg-red-500/20 transition"
                  >
                    View GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center">
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              Certifications
            </p>

            <h2 className="text-5xl font-bold">
              Professional Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[30px]"
              >
                <div className="text-5xl mb-6">🏆</div>

                <h3 className="text-xl font-semibold mb-8 leading-relaxed">
                  {cert.title}
                </h3>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-red-500 px-5 py-3 rounded-xl hover:bg-red-500/20 transition"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto glass rounded-[40px] p-10 md:p-16">

          <div className="text-center mb-14">
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-bold">
              Let's Work Together
            </h2>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl outline-none"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl outline-none"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        <h3 className="text-2xl font-bold text-white mb-4">
          Rushikesh Pravin Patil
        </h3>

        <div className="flex justify-center gap-6 mb-5 text-2xl">
          <a
            href="https://github.com/rushi935993"
            target="_blank"
          >
            <FaGithub className="hover:text-red-500 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/rushikesh-pravin-patil/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-red-500 transition" />
          </a>
        </div>

        <p>Built with AI & Innovation</p>
      </footer>
    </div>
  );
}