import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import SinglePdf from './demo.pdf'
import './App.css'

const App = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(false)
    window.open('https://dlzchui.azurewebsites.net/rfelogs/create-rfelog?invokeAppId=4612376', '_blank')
  }
  return (
    <div style={{ position: 'relative' }}>
      {open ?
        <div style={{ width: '100%', position: 'relative' }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${require('pdfjs-dist/package.json').version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={SinglePdf} defaultScale={1} />
          </Worker>
          <div class="sticky-container" onClick={handleClick}>
            <button class="sticky-button">
              Create RfE Log
            </button>
          </div>
        </div>
        :
        <div className="container">
          <div>
            <header>
              <h1>Your Name</h1>
            </header>

            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
              {/* <a onClick={() => setOpen(true)}>Open PDF</a> */}
              <button
               className='pdf-tab'
                onClick={() => setOpen(true)}
              >
                Open PDF
              </button>
            </nav>

            <section id="home">
              <h2>Welcome to My Portfolio</h2>
              <p>Showcasing my work and passion for creating amazing things.</p>
            </section>

            <section id="about">
              <h2>About Me</h2>
              <p>I am a passionate web developer with a focus on creating user-friendly and visually appealing
                websites.</p>
            </section>

            <section id="portfolio">
              <h2>Portfolio</h2>

              <div className="portfolio-item">
                <img src="https://via.placeholder.com/400x300" alt="Project 1" />
                <p>Project 1 - Description goes here.</p>
              </div>

              <div className="portfolio-item">
                <img src="https://via.placeholder.com/400x300" alt="Project 2" />
                <p>Project 2 - Description goes here.</p>
              </div>

              <div className="portfolio-item">
                <img src="https://via.placeholder.com/400x300" alt="Project 3" />
                <p>Project 3 - Description goes here.</p>
              </div>
            </section>

            <section id="contact">
              <h2>Contact Me</h2>
              <p>Feel free to reach out for collaboration, questions, or just to say hello!</p>
            </section>

            <footer>
              <p>&copy; 2023 Your Name. All rights reserved.</p>
            </footer>
          </div>
        </div>
      }
    </div>
  );
};

export default App;
