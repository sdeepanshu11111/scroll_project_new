// src/components/ProjectsSection.jsx
import React from "react";

const projects = [
  {
    title: "Imperial College",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    title: "Woodside Park & River Mill School",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    title: "Dulwich College",
    imageUrl: "/path/to/image3.jpg",
  },
  {
    title: "Deeplish Community Centre",
    imageUrl: "/path/to/image4.jpg",
  },
  {
    title: "Herne Hill Nursery",
    imageUrl: "/path/to/image5.jpg",
  },
  {
    title: "Pavilion Planters",
    imageUrl: "/path/to/image6.jpg",
  },
  {
    title: "Simple Solutions for Safer Schools",
    imageUrl: "/path/to/image7.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-[#f7f4ec] px-4 md:px-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-lg ${
              index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className={`w-full ${
                index === 0 ? "h-80" : "h-60"
              } object-cover hover:scale-105 transition-transform duration-300`}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-700">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
