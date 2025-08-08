import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Palette, Database, Globe, Smartphone, Brain, Users, Star, RefreshCw, Lightbulb } from 'lucide-react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from './assets/profile.jpg';

import exCoverImg from './assets/ex-pj-cover.jpg';
import emailjs from "@emailjs/browser";





const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'works', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a dummy PDF download - in real implementation, you would link to your actual resume
    const link = document.createElement('a');
    link.href = '/SUDHARSON_A_Resume.pdf'; // Replace with actual resume URL
    link.download = 'SUDHARSON_A_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  
  };

  const skills = [
    { name: 'HTML/CSS', level: 95, icon: <Code className="w-6 h-6" /> },
    { name: 'JavaScript', level: 75, icon: <Globe className="w-6 h-6" /> },
    { name: 'React.js', level: 75, icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Mongo DB', level: 90, icon: <Database className="w-6 h-6" /> },
    { name: 'Java', level: 80, icon: <Brain className="w-6 h-6" /> },
    { name: 'Tailwind CSS', level: 90, icon: <Palette className="w-6 h-6" /> }
  ];

  const softSkills = [
  { name: 'Problem Solving', level: 85, icon: <Brain className="w-6 h-6" /> },
  { name: 'Logical Thincking', level: 93, icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Communication', level: 80, icon: <Mail className="w-6 h-6" /> },
  { name: 'Teamwork', level: 92, icon: <Users className="w-6 h-6" /> },
  { name: 'Adaptability', level: 88, icon: <RefreshCw className="w-6 h-6" /> }
  
  ];

  const projects = [
    {
      title: 'Blogging Platform',
      description: 'A modern blogging platform with user authentication, rich text editing, image uploads, and an admin dashboard for content management.',
      image: 'https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/ASUDHARSON-2004-GIT/blogging-platform.git',
      demo: 'https://my-blog-plat-form.netlify.app',
      tech: ['Bolt AI', 'Chat-Gpt', 'React', 'Supabase', 'Mongo Db','Redux','Node.js']
    },
    {
      title: 'Excel-Analytic platform',
      description: 'A web app that lets users upload Excel files, analyze data, and generate interactive 2D/3D charts with download options.',
      image: exCoverImg,
      github: 'https://github.com/ASUDHARSON-2004-GIT/chart-wizard-suite',
      demo: 'https://chart-wizard-suite.lovable.app',
      tech: ['Lovable AI', 'React', 'Chart Js', 'Tailwind CSS']
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Interactive dashboard for portfolio management with real-time analytics.',
      image: 'https://i.pinimg.com/originals/01/1c/19/011c196a4da92e53d7178cd683ba6154.jpg',
      github: 'https://github.com/',
      demo: 'https://e-commerce-eight-beryl-24.vercel.app',
      tech: ['React.js', 'Fire base', 'Tailwind CSS', 'Mongo Db','Copilot']
    }
  ];

  const experiences = [
    {
      company: 'Zidio Developments ',
      role: 'Web Development Intern',
      period: '17/04/2025 - 19/07/2025',
      description: 'Completed a web development internship at Inconix, gaining hands-on experience in building responsive web interfaces, optimizing code performance, and collaborating on real-world projects.',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      company: 'Iconix Software Solutions',
      role: 'Front-end Developert Intern',
      period: '10/06/2024 - 06/07/2024',
      description: 'Interned at Iconix Software Solutions, where I learned HTML, CSS, and Bootstrap by developing a responsive bike gallery website.',
      logo: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const handleContactSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_cq4fz52',   // 🔹  EmailJS Service ID
    'template_1nohzjb',  // 🔹  Template ID you just created
    e.target,
    'ToT12IyR_NJkbkAHi'    // 🔹 EmailJS Public Key
  )
  .then((result) => {
      console.log(result.text);
      alert('✅ Your message has been sent successfully!');
  }, (error) => {
      console.log(error.text);
      alert('❌ Failed to send message. Please try again.');
  });

  e.target.reset();
};



  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img 
              src={profileImg} 
              alt="Sudharson Logo" 
              className="logo-img"
            />
          </div>

          <div className="nav-links">
            {['home', 'about', 'skills', 'works', 'experience', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section" data-aos="fade-up">
        <div className="container">
          <div className="home-content">
            <div className="home-text">
              <h1 className="hero-title">
                <span className="hero-name">SUDHARSON A</span>
              </h1>
              <p className="hero-subtitle">
                AI‑Powered Web Developer | Building Smart, Scalable & Dynamic Websites by Combining Modern Tools, AI‑Driven Automation, and a Passion for Innovative Problem Solving.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={handleDownloadResume}>
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="home-image">
              <div className="image-container">
                <img
                  src={profileImg}
                  alt="SUDHARSON A"
                  className="profile-image"
                />
                <div className="image-border"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                Welcome to my digital realm! I'm SUDHARSON A, a passionate AI-powered web developer 
                who believes in creating not just websites, but digital experiences that leave lasting impressions.
              </p>
              <p className="about-paragraph">
                My journey in web development is fueled by an insatiable curiosity for emerging technologies, 
                particularly AI integration in web applications. I specialize in crafting responsive, 
                user-centric solutions that bridge the gap between functionality and aesthetics.
              </p>
              <p className="about-paragraph">
                As a "Vibe Coder," I bring creativity and innovation to every project, ensuring that each 
                line of code contributes to a seamless user experience. My vision is to be at the forefront 
                of future-ready web development, constantly evolving with the digital landscape.
              </p>
              <div className="resume-download">
                <button className="btn btn-primary" onClick={handleDownloadResume}>
                  <Download className="w-5 h-5" />
                  Download My Resume
                </button>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">AI tools learned</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Leet-Code problem </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            
            {/* Skills divided into two columns */}
            <div className="skills-columns">
              
              {/* Left: Technical Skills */}
              <div className="skills-column">
                <h3 className="skills-subtitle">Technical Skills</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="skill-header">
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right: Soft Skills */}
              <div className="skills-column">
                <h3 className="skills-subtitle">Soft Skills</h3>
                <div className="skills-grid">
                  {softSkills.map((skill, index) => (
                    <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="skill-header">
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


      

      {/* Works Section */}
      <section id="works" className="section works-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      {/* 🆕 Add heading for tech stack */}
                      <h4 className="project-tech-heading">Built with</h4>
                      
                      <div className="project-tech">
                        {project.tech.map(tech => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                </div>
            ))}
          </div>
          <div className="github-section">
            <a href="https://github.com/ASUDHARSON-2004-GIT" className="github-button" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="timeline-item" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header">
                      <img src={exp.logo} alt={exp.company} className="company-logo" />
                      <div className="experience-info">
                        <h3 className="experience-role">{exp.role}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                        <span className="experience-period">{exp.period}</span>
                      </div>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's Create Something Amazing Together</h3>
              <p className="contact-description">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin className="w-5 h-5" />
                  <span>1104, Nort Street, North Aachiyoor, Tirunelvel - 627 101, Tamil Nadu, India </span>
                </div>
                <div className="contact-item">
                  <Phone className="w-5 h-5" />
                  <span>+91 8098187274</span>
                </div>
                <div className="contact-item">
                  <Mail className="w-5 h-5" />
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dharsonsudharson@gmail.com&su=Hello&body=Hi Sudharson,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    dharsonsudharson@gmail.com
                  </a>
                </div>


                <div className="contact-item">
                  <Linkedin className="w-5 h-5" />
                  <a 
                    href="https://www.linkedin.com/in/sudharson-a-5830ab259/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    linked In.
                  </a>
              </div>

              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" className="form-input" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 SUDHARSON A. All rights reserved. Built with React</p>
        </div>
      </footer>
    </div>
  );
};

export default App;