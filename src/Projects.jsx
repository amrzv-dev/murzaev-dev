import React, { useState } from "react";

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="mt-16 pb-8">
      <h2 className="text-3xl font-semibold text-gray-100 mb-6">Archive.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-7 border-1 glass-effect border-neutral-200 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.img}
              alt={project.alt}
              className="w-full h-auto rounded-md mb-3"
            />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-neutral-800 rounded-lg overflow-hidden flex flex-col md:flex-row max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 relative">
              <img
                src={selectedProject.img}
                alt={selectedProject.alt}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
            <div className="md:w-2/5 p-8 text-left flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
              <button
                className="mt-8 px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-orange-500 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;