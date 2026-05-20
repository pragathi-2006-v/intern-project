import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({
  projects,
  deleteProject,
  updateProject
}) {

  return (
    <div className="project-list">

      {projects.length === 0 ? (

        <p className="no-project">
          No Projects Added
        </p>

      ) : (

        projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
            deleteProject={deleteProject}
            updateProject={updateProject}
          />

        ))

      )}

    </div>
  );
}

export default ProjectList;
