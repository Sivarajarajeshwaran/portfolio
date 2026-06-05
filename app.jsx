// Since we are using CDN, React and ReactDOM are available globally
const { useState, useEffect } = React;

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand text-gradient" href="#home">Siva.dev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 fade-in-up">
                        <h4 className="hero-subtitle mb-3">Hello, I'm</h4>
                        <h1 className="display-4 fw-bolder mb-3" style={{ whiteSpace: 'nowrap' }}>A. Sivaraja <span className="text-gradient">Rajeswaran</span></h1>
                        <h2 className="h3 text-white mb-4">Entry-level Full Stack Developer</h2>
                        <p className="lead mb-5" style={{ maxWidth: "600px", color: "var(--text-muted)" }}>
                            Passionate about developing scalable and user-friendly web applications using the MERN stack.
                        </p>
                        <div className="d-flex gap-3 mb-5">
                            <a href="#projects" className="btn btn-primary-gradient">View Projects</a>
                            <a href="#contact" className="btn btn-outline-light">Contact Me</a>
                        </div>
                        <div className="social-icons">
                            <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:iamsivacdm@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 fade-in-up mt-5 mt-lg-0 text-end">
                        <img src="./WhatsApp_Image_2026-06-01_at_11.08.31_AM-removebg-preview.png" alt="A. Sivaraja Rajeswaran" className="img-fluid hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    const skills = {
        Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap'],
        Backend: ['Node.js', 'Express.js'],
        Databases: ['MongoDB', 'MySQL'],
        Concepts: ['REST API', 'CRUD Operations', 'Authentication'],
        Tools: ['Git', 'GitHub', 'VS Code']
    };

    return (
        <section id="about">
            <div className="container fade-in-up">
                <h2 className="section-title">About Me</h2>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="glass-card p-4 h-100">
                            <h3 className="h4 mb-3 text-gradient">Professional Summary</h3>
                            <p className="text-white" style={{ lineHeight: '1.8' }}>
                                Entry-level Full Stack Developer with hands-on experience in building responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                            </p>
                            <p className="text-white" style={{ lineHeight: '1.8' }}>
                                I possess a strong understanding of REST APIs, CRUD operations, and database management. I am highly passionate about developing scalable and user-friendly applications while continuously improving my problem-solving and analytical skills.
                            </p>
                            <div className="mt-4">
                                <p className="mb-2"><i className="fas fa-check text-success me-2"></i> Good communication and teamwork</p>
                                <p className="mb-2"><i className="fas fa-check text-success me-2"></i> Ability to quickly learn new technologies</p>
                                <p className="mb-0"><i className="fas fa-check text-success me-2"></i> Strong problem-solving skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="glass-card p-4 h-100">
                            <h3 className="h4 mb-4 text-gradient">Technical Skills</h3>
                            {Object.entries(skills).map(([category, items], index) => (
                                <div key={index} className="mb-3">
                                    <h5 className="h6 mb-2">{category}</h5>
                                    <div>
                                        {items.map((skill, idx) => (
                                            <span key={idx} className="skill-badge">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Full Stack Web Application (MERN)",
            description: [
                "Developed a full-stack web application using React.js and Node.js with RESTful API integration.",
                "Implemented CRUD operations and secure user authentication.",
                "Designed a highly responsive UI using Bootstrap and custom CSS.",
                "Managed database operations and schema design using MongoDB."
            ],
            icon: "fas fa-laptop-code",
            liveLink: "https://frontend-mcgb.onrender.com"
        },
        {
            title: "Student Management System",
            description: [
                "Built a web-based system to efficiently manage student records using Node.js and MySQL.",
                "Developed robust backend APIs for data handling and server-side validation.",
                "Improved data retrieval efficiency through optimized SQL queries and indexing."
            ],
            icon: "fas fa-users-cog"
        }
    ];

    return (
        <section id="projects">
            <div className="container fade-in-up">
                <h2 className="section-title">Projects</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="glass-card project-card p-4 h-100">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                        <i className={`${project.icon} fs-4 text-primary`}></i>
                                    </div>
                                    <h3 className="h5 mb-0 text-white">{project.title}</h3>
                                </div>
                                <ul className="mb-3 flex-grow-1">
                                    {project.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary-gradient">
                                        <i className="fas fa-external-link-alt me-2"></i>Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    return (
        <section id="education">
            <div className="container fade-in-up">
                <h2 className="section-title">Education & Training</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="glass-card p-4 h-100 position-relative overflow-hidden">
                            <div className="position-absolute top-0 end-0 p-3 opacity-25">
                                <i className="fas fa-graduation-cap fa-4x text-white"></i>
                            </div>
                            <h3 className="h4 mb-1" style={{ color: '#8b5cf6' }}>B.Sc. Computer Science</h3>
                            <p className="text-white fs-5 mb-3">Arc Viswanathan College</p>
                            <p className="text-white mb-0">Core focus on programming logic, database management, and computer architecture.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="glass-card p-4 h-100 position-relative overflow-hidden">
                            <div className="position-absolute top-0 end-0 p-3 opacity-25">
                                <i className="fas fa-certificate fa-4x text-white"></i>
                            </div>
                            <h3 className="h4 mb-1" style={{ color: '#8b5cf6' }}>Full Stack Development</h3>
                            <p className="text-white fs-5 mb-3">Livewire, Mayiladuthurai</p>
                            <p className="text-white mb-0">Intensive training program focusing on modern web technologies including the complete MERN stack.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="pb-0">
            <div className="container fade-in-up mb-5">
                <h2 className="section-title text-start d-block">Get In Touch</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="lead text-white mb-5">
                            I am currently open for full-time entry-level positions. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            <div className="glass-card p-4 text-decoration-none text-white text-center" style={{ minWidth: "250px", cursor: "default" }}>
                                <i className="fas fa-envelope fa-2x mb-3 text-primary"></i>
                                <h4 className="h6 mb-1">Email</h4>
                                <p className="text-white mb-0">iamsivacdm@gmail.com</p>
                            </div>
                            <div className="glass-card p-4 text-decoration-none text-white text-center" style={{ minWidth: "250px", cursor: "default" }}>
                                <i className="fas fa-phone-alt fa-2x mb-3 text-primary"></i>
                                <h4 className="h6 mb-1">Phone</h4>
                                <p className="text-white mb-0">6382799989</p>
                            </div>
                            <a href="https://wa.me/916382799989" target="_blank" rel="noopener noreferrer" className="glass-card p-4 text-decoration-none text-white text-center" style={{ minWidth: "250px" }}>
                                <i className="fab fa-whatsapp fa-2x mb-3" style={{ color: "#25D366" }}></i>
                                <h4 className="h6 mb-1">WhatsApp</h4>
                                <p className="text-white mb-0">Chat with me</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-4 text-center">
                <div className="container">
                    <p className="text-white mb-0">
                        &copy; {new Date().getFullYear()} A. Sivaraja Rajeswaran. Built with React.
                    </p>
                </div>
            </footer>
        </section>
    );
};

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Education />
                <Contact />
            </main>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
