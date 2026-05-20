import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("Projects Updated");
  }, [projects]);

  // Add Project
  const addProject = (title, freelancer, budget) => {

    const newProject = {
      id: Date.now(),
      title,
      freelancer,
      budget,
    };

    setProjects([...projects, newProject]);
  };

  // Delete Project
  const deleteProject = (id) => {

    const updatedProjects = projects.filter(
      (project) => project.id !== id
    );

    setProjects(updatedProjects);
  };

  // Update Project
  const updateProject = (id) => {

  const updatedTitle = prompt(
    "Enter New Project Title"
  );

  const updatedBudget = prompt(
    "Enter New Project Budget"
  );

  if (!updatedTitle || !updatedBudget) {
    return;
  }

  const updatedProjects = projects.map((project) => {

    if (project.id === id) {

      return {
        ...project,
        title: updatedTitle,
        budget: updatedBudget,
      };

    }

    return project;
  });

  setProjects(updatedProjects);
};


  return (
    <div>

      <Navbar />

      <div className="main-container">

        <h1>
          Freelancer Project Collaboration Portal
        </h1>

        <ProjectForm addProject={addProject} />

        <ProjectList
          projects={projects}
          deleteProject={deleteProject}
          updateProject={updateProject}
        />

      </div>

      <Footer />

    </div>
  );
}

export default App;
