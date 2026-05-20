import React, { useState } from "react";

function ProjectForm({ addProject }) {

  const [title, setTitle] = useState("");
  const [freelancer, setFreelancer] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      title.trim() === "" ||
      freelancer.trim() === "" ||
      budget.trim() === ""
    ) {

      setError("Please Fill All Fields");
      return;
    }

    addProject(title, freelancer, budget);

    setTitle("");
    setFreelancer("");
    setBudget("");
    setError("");
  };

  return (
    <div className="form-container">

      <form
        onSubmit={handleSubmit}
        className="project-form"
      >

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Freelancer Name"
          value={freelancer}
          onChange={(e) =>
            setFreelancer(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Project Budget"
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value)
          }
        />

        <button type="submit">
          Add Project
        </button>

      </form>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

    </div>
  );
}

export default ProjectForm;
