import React from 'react';
import './styles.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2>Hi, I'm <span>Manohar Reddy</span></h2>
        <p className="objective">
          Dedicated and motivated fresher aspiring to kickstart a career as a Software Developer. Eager to leverage strong problem-solving skills, creative thinking, and a passion for software development to contribute to innovative and efficient applications.
        </p>
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <ul>
              <li><a href="https://certificates.ccbp.in/intensive/static-website?id=AEUQJHNHLA" target='_blank' rel="noopener noreferrer">HTML5</a></li>
              <li><a href="https://certificates.ccbp.in/intensive/responsive-website?id=LWLIVACRQO" target='_blank' rel="noopener noreferrer">CSS3</a></li>
              <li><a href="https://certificates.ccbp.in/intensive/javascript-essentials?id=MWPFDLXEGM" target='_blank' rel="noopener noreferrer">JavaScript</a></li>
              <li><a href="https://certificates.ccbp.in/intensive/react-js?id=MXHNMRGCJW" target='_blank' rel="noopener noreferrer">React.js</a></li>
              <li><a href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=LVEKVKTGWX" target='_blank' rel="noopener noreferrer">SQL</a></li>
              <li><a href="https://certificates.ccbp.in/intensive/programming-foundations?id=PGGJXMGBRY" target='_blank' rel="noopener noreferrer">Python</a></li>
            </ul>
          </ul>
        </div>
        <div className="skills">
          <h3>Soft Skills</h3>
          <ul>
            <li>problem-solving</li>
            <li>Analytical skills</li>
            <li>Communication</li>
            <li>Quick adaptability</li>
          </ul>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="education-item">
            <p><strong>B.Tech (ECE)</strong></p>
            <p>Malla Reddy College of Engineering (JNTUH), Hyderabad</p>
            <p>2019-2023 | CGPA: 7.07</p>
          </div>
          <div className="education-item">
            <p><strong>Intermediate</strong></p>
            <p>SR Junior College, Karimnagar</p>
            <p>2017-2019 | 78.1%</p>
          </div>
          <div className="education-item">
            <p><strong>SSC</strong></p>
            <p>Oxford High School, Jagtial</p>
            <p>2017 | CGPA: 8.0</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;