import React from "react";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Basic Information */}
      <section>
        <h1 className="text-3xl font-bold">Basic Information</h1>
        <p>Author: Yuwei Bao</p>
        <p>Email: ybao2@rrc.ca</p>
        <p>Complete Date: 2025 April 05</p>
        <p>Content: A portfolio website to demonstrate the information of my previous project</p>
        <p>GitHub: <a href="https://github.com/zlsdnflanjkasnk/portfolio" className="text-blue-500">Portfolio Project</a></p>
      </section>

      {/* Work Section */}
      <section>
        <h2 className="text-2xl font-bold">Work</h2>
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Storybook Project</h3>
          <p>This project is a component library that has button, card, dropdown menu, hero image, image, label, radio button, table and text components. I built this project using storybook and yarn.</p>
          <img src="/image.png" width="1000" alt="Project" className="my-2" />
          <p>
            <a href="http://localhost:8018" className="text-blue-500">View Project</a>
          </p>
          <p>Tech Stack: React, Yarn, Docker</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold">Skills</h2>
        <p>Passionate about frontend development and UI/UX design.</p>
        <ul className="list-disc ml-5">
          <li>Languages/Frameworks: JavaScript, React, HTML, CSS</li>
          <li>Tools: Git, VSCode, EsLint, Prettier, Docker</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-bold">Resources</h2>
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold">React and Storybook</h3>
          <img src="/react.png" width="100" alt="React" className="w-20 my-2" />
          <img src="/storybook.png" width="100" alt="storybook" className="w-20 my-2" />
          <img src="/docker.png" width="100" alt="docker" className="w-20 my-2" />
          <img src="/github.png" width="100" alt="github" className="w-20 my-2" />
          <p>My work was built using mostly React and Storybook, with the help of react and storybook tutorials.</p>
          <p>I uploaded it to github and let it run on docker.</p>
          <p>I also installed EsLint and Prettier to better format my codes.</p>
          <p>
            <a href="https://reactjs.org" className="text-blue-500">reactjs</a><br></br>
            <a href="https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/" className="text-blue-500">storybook</a><br></br>
            <a href="https://github.com/" className="text-blue-500">github</a><br></br>
            <a href="https://www.docker.com/" className="text-blue-500">docker</a><br></br>
          </p>
        </div>
      </section>

      {/* Developer Setup */}
      <section>
        <h2 className="text-2xl font-bold">Developer Setup</h2>
        <ul className="list-disc ml-5">
          <li>VSCode Setup:Light theme, default font, liveserver, docker and internal terminal installed and enabled</li>
          <li>Terminal Setup: A terminal in docker for writing codes, another terminal in local files for running servers</li>
          <li>Preferred Editor Font: Cascade Mono</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
