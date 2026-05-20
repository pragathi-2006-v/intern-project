import React from "react";

function ProjectCard({
  project,
  deleteProject,
  updateProject
}) {

  return (
    <div className="project-card">

      <h3>{project.title}</h3>

      <p>
        Freelancer:
        {project.freelancer}
      </p>

      <p>
        Budget:
        ₹{project.budget}
      </p>

      <div className="button-group">

        <button
          className="update-btn"
          onClick={() =>
            updateProject(project.id)
          }
        >
          Update
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteProject(project.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;
