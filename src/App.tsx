import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "🐻‍❄️ Eshu Manohare - Portfolio";
  }, []);

  return (
    <div className="App">
      <h1>Hello! I'm Eshu Manohare</h1>
      <p>
        I'm a recent graduate from{" "}
        <a href="https://www.iiitd.ac.in/" target="_blank" rel="noopener noreferrer">
          IIIT Delhi
        </a>{" "}
        with a strong academic foundation in Computer Science.
      </p>
      <p>
        My passion lies in the dynamic realm of Blockchain technology. I'm deeply interested in fields like Algorithms, Decentralized Exchanges (DEX), Decentralized Finance (DeFI), and distributed systems. I find the intersection of Finance and Technology particularly intriguing, and I'm excited to be a part of the transformative changes taking place in the industry.
      </p>
      <p>
        Soon, I'll be embarking on a new journey as a Software Development Engineer at{" "}
        <a href="https://www.jio.com/" target="_blank" rel="noopener noreferrer">
          Reliance Jio
        </a>
        . My journey with Jio began earlier through an enriching internship where I had the opportunity to work on projects involving Big Data, Azure, and PySpark. This experience heightened my curiosity about the possibilities of real-world tech applications.
      </p>
      <p>
        Over the past couple of years, I've been actively engaged as a Blockchain researcher and developer at the{" "}
        <a href="https://www.iiitd.ac.in/sites/default/files/docs/positions/Hiring%20pamphlet%20-%20Networking%20and%20Security%20Lab.pdf" target="_blank" rel="noopener noreferrer">
          Network Security Lab, IIIT-Delhi
        </a>
        . My work has culminated in a significant achievement: the acceptance of my research paper titled{" "}
        <i>"Veil: Building a Scalable e-Voting System using Blockchain with Voter Demographics Obfuscation and Anonymous Vote Accountability Assurances"</i> at the prestigious{" "}
        <a href="https://www.icegov.org/edition-2023/papers/accepted-papers/#:~:text=Kortlander%20(WAAG%2C%20Netherlands)-,Paper%20Session%202,-%E2%80%93%20Veil%3A%20building" target="_blank" rel="noopener noreferrer">
          ICEGOV'23 conference
        </a>
        . This accomplishment has fueled my passion for creating impactful technological solutions.
      </p>
      <p>
        My recent endeavors have led me to showcase my problem-solving skills, particularly in the realm of Blockchain. I successfully designed and developed a <a href="https://eshumanohare.github.io/logicexchange" target="_blank" rel="noopener noreferrer">DEX platform from scratch</a>, aiming to revolutionize the trading experience. For deeper insights, you can refer to the corresponding <a href="https://hackmd.io/@eshumanohare/Sk9qnJrh3" target="_blank" rel="noopener noreferrer">whitepaper</a>.
      </p>
      <p>
        Beyond my professional pursuits, I find joy in watching animes, exploring cinematic worlds, indulging in literature, and immersing myself in the world of music. I'm always eager to connect with individuals who share exciting ideas, especially in the blockchain domain. Feel free to reach out to me via{" "}
        <a href="mailto:eshumanohare@gmail.com">email</a>, on Discord with the ID <b>eshumanohare#4029</b>, or through my{" "}
        <a href="https://www.linkedin.com/in/eshu-manohare-a31782225/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>.
      </p>
    </div>
  );
}

export default App;
