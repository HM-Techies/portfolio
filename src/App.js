import envelope from "../src/resource/envelope.png";
import phone from "../src/resource/phone.png";
import Jenkins from "../src/resource/Jenkins.jpg";
import Ansible from "../src/resource/Ansible.png";
import Terraform from "../src/resource/Terraform.png";
import Airflow from "../src/resource/Airflow.png";
import Docker from "../src/resource/docker.png";
import docker from "../src/resource/docker.png";
import Bash from "../src/resource/Bash.png";
import java from "../src/resource/java.png";
import Python from "../src/resource/Python.jpeg";
import sql from "../src/resource/sql.png";
import mongodb from "../src/resource/m.png";
import AWS from "../src/resource/AWS.png";
import Azure from "../src/resource/Azure.png";
import GitHub from "../src/resource/GitHub Action.png";
import GIT from "../src/resource/GIT.png";
import Linux from "../src/resource/Linux.png";

function Navbar() {
  return (
    <nav>
      <div className="home">
        <div className="profile_name">
          Kahan HM
          <div className="contact_info">
            <img src={envelope} alt="email" />
            kahanahamed42@gmail.com
          </div>
          <div className="contact_info">
            <img src={phone} alt="phone" />
            +94 755824166
          </div>
        </div>
        <div className="topdiv">
          <section id="home">
            <a className="topmenu" href="#about-me">About Me</a>
            <a className="topmenu" href="#skills">Skills</a>
            <a className="topmenu" href="#experience">Experience</a>
            <a className="topmenu" href="#projects">Projects</a>
            <a className="topmenu" href="#certifications">Certifications</a>
          </section>
        </div>
      </div>
    </nav>
  );
}

function About() {
  return (
    <section id="about-me">
        <div className="container">
          <h1>
            Hi, I'm  Kahan 
          </h1></div>
        <div className="container"><p>
          I am a passionate DevOps Engineer with experience in cloud infrastructure, CI/CD automation, and containerization.
          I recently completed my Bachelor in ICT (Special) at the University of Jaffna. 
          I specialize in AWS, Terraform, Jenkins, and Docker, and I am currently expanding my skills in Azure**.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-card">
        <h3>DevOps Engineer - Codeolima Pvt Ltd</h3>
        <p><strong>March 2024 - September 2024</strong></p>
        <ul>
          <li>Managed and deployed cloud resources on AWS (EC2, S3, VPC).</li>
          <li>Built and automated CI/CD pipelines with GitHub Actions.</li>
          <li>Configured and maintained MongoDB replication for high availability.</li>
          <li>Containerized applications using Docker and Kubernetes.</li>
          <li>Implemented Terraform and Ansible for infrastructure automation.</li>
          <li>Set up Apache Airflow with Celery Executor for workflow automation.</li>
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      
      <div className="skillType">
        <h3>Tools</h3>
        <div className="all_skills">
          <div className="skill"><img src={Docker} alt="Docker" /><h6>Docker</h6></div>
          <div className="skill"><img src={Ansible} alt="Ansible" /><h6>Ansible</h6></div>
          <div className="skill"><img src={Terraform} alt="Terraform" /><h6>Terraform</h6></div>
          <div className="skill"><img src={Airflow} alt="Airflow" /><h6>Airflow</h6></div>
        </div>
      </div>

      <div className="skillType">
        <h3>Programming Languages</h3>
        <div className="all_skills">
          <div className="skill"><img src={Python} alt="Python" /><h6>Python</h6></div>
          <div className="skill"><img src={Bash} alt="Bash" /><h6>Bash</h6></div>
          <div className="skill"><img src={java} alt="java" /><h6>Java</h6></div>
        </div>
      </div>
      <div className="skillType">
        <h3>Development AND CICD</h3>
        <div className="all_skills">
          <div className="skill"><img src={GitHub} alt="GitHub" /><h6>GitHub Action </h6></div>
          <div className="skill"><img src={Jenkins} alt="Jenkins" /><h6>Jenkins</h6></div>
          <div className="skill"><img src={Linux} alt="Linux" /><h6>Linux</h6></div>
          <div className="skill"><img src={GIT} alt="GIT" /><h6>GIT</h6></div>
        </div>
      </div>
      <div className="skillType">
        <h3> Cloud Services </h3>
        <div className="all_skills">
          <div className="skill"><img src={AWS} alt="AWS" /><h6>AWS</h6></div>
          <div className="skill"><img src={Azure} alt="Azure" /><h6>Azure</h6></div>
        </div>
      </div>

      <div className="skillType">
        <h3>Databases</h3>
        <div className="all_skills">
          <div className="skill"><img src={sql} alt="sql" /><h6>SQL</h6></div>
          <div className="skill"><img src={mongodb} alt="mongodb" /><h6>MongoDB</h6></div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Node.js App Deployment with Jenkins & AWS S3</h3>
        <p>
          A full CI/CD pipeline for a Node.js application, using **Jenkins, Docker, and AWS S3** for automated deployment.
          <br />
          GitHub: <a href="https://github.com/KahanHM/NodeJSApp" >NodeJSApp</a>
        </p>
        <h3>MongoDB Replication on EC2</h3>
        <p>
        Configured MongoDB replication for high availability and failover on AWS EC2
        </p>
        <h3>Steampipe for Cloud Monitoring</h3>
        <p>
        Implemented Steampipe to query and monitor AWS cloud resources efficiently.
        </p>
      </div>

     
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul>
        <li>LFS158: Introduction to Kubernetes -The Linux Foundation, Issued Aug 2024</li>
        <li>AWS Cloud Quest: Cloud Practitioner Amazon Web Services (AWS), Issued Jul 2024</li>
        <li>Docker Essentials: A Developer Introduction Cognitive Class, Issued Jun 2024 </li>
        <li>LFS101: Introduction to Linux the Linux Foundation, Issued Jun 2024 </li>
        <li>Microsoft Learn profile –Azure DevOps </li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;
