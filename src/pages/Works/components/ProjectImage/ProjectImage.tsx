import { Project } from "../../../../models";

interface ProjectImageProps {
  project: Project;
}

export const ProjectImage = ({ project }: ProjectImageProps) => {
  return (
    <div className="relative h-48 md:h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          {project.title}
        </h2>
        <p className="text-lg text-gray-200">{project.client}</p>
      </div>
    </div>
  );
};
