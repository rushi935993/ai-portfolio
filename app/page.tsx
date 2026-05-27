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
      title: "Sales CRM AI Chatbot",
      tech: "Python • OpenAI API • MongoDB • Flask • Streamlit",
      image: "/images/crm-ai.jpg",
      desc: "AI-powered CRM chatbot with intelligent lead qualification, automated customer interaction, OpenAI integration, and MongoDB-based chat storage system.",
      github: "https://github.com/rushi935993/Sales-CRM-AI-Chatbot",
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
      title:
        "Mastery in Data Science and Data Analytics with AI – NSDC And ItVedant Education 2025",
      link:
        "https://drive.google.com/file/d/14AhanCTNcQ9cBPIw4WoDxdr5rVWbIOo1/view",
    },
    {
      title:
        "Machine Learning with Python – IBM 2025",
      link:
        "https://drive.google.com/file/d/1NWTakA3MD6PXj3MKWsSnnp1H3LzjuF_V/view",
    },
    {
      title:
        "Data Science and Data Analytics with Python – IBM 2025",
      link:
        "https://drive.google.com/file/d/1Hr1UcEgGrwkmj-gCrAqTOqgkJVDuhpnG/view",
    },
    {
      title:
        "Amazon Web Services (AWS) – ItVedant Education 2025",
      link:
        "https://drive.google.com/file/d/1nO_aac4PYystCW1V99eR-7tEt1LfEpNg/view",
    },
    {
      title:
        "Fundamentals of DevOps – ItVedant Education 2025",
      link:
        "https://drive.google.com/file/d/1COd7kK8uc7q_FbeaDZbMPeVYf2PDtu4F/view",
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
              Final-year Artificial Intelligence and Data Science undergraduate with strong foundation in software engineering, machine
              learning, and data-driven systems. Experienced in building AI-powered applications, APIs, and analytics solutions using
              Python and modern frameworks. Familiar with Generative AI tools, prompt engineering, cloud platforms, DevOps
              fundamentals, and Agile workflows. Passionate about building scalable AI-augmented software systems and seeking a
              Trainee Software Engineer role to contribute to innovative product development
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            src="/profile.jpg"
            className="rounded-[35px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-bold mb-8">
              AI Engineer & <br />
              Generative AI Developer
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Artificial Intelligence & Data Science student at
              Savitribai Phule Pune University with expertise in
              Machine Learning, NLP, Computer Vision, LangChain,
              LLMs, AI Agents, and Data Analytics.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-red-500">
                  8.85
                </h3>
                <p className="text-gray-400 mt-2">
                  CGPA
                </p>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-red-500">
                  15+
                </h3>
                <p className="text-gray-400 mt-2">
                  Technical Skills
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              Experience
            </p>

            <h2 className="text-5xl font-bold">
              Work Experience
            </h2>
          </div>

          <div className="glass rounded-[30px] p-10">
            <p className="text-red-500 mb-3">
              Sept 2025 – Dec 2025
            </p>

            <h3 className="text-3xl font-bold mb-3">
              Data Analyst Intern
            </h3>

            <p className="text-gray-400 mb-6">
              Inorbvict Healthcare Pvt. Ltd., Pune
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>
                • Built interactive BI dashboards using Zoho Analytics
              </li>
              <li>
                • Created employee productivity dashboards
              </li>
              <li>
                • Developed Jira sprint tracking dashboards
              </li>
              <li>
                • Built Git analytics dashboards for monitoring
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-28 px-6"
      >
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
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="glass p-8 rounded-[30px] border border-white/10 hover:border-red-500/40 transition duration-500 relative overflow-hidden group"
              >

                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full"></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">
                      🏆
                    </div>

                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xl group-hover:bg-red-500 group-hover:text-white transition">
                      ↗
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold leading-relaxed mb-8 min-h-[140px]">
                    {cert.title}
                  </h3>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-red-500 px-5 py-3 rounded-xl hover:bg-red-500/20 transition"
                  >
                    View Certificate
                  </a>

                </div>
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

        <p>
          Built with AI & Innovation
        </p>
      </footer>
    </div>
  );
}