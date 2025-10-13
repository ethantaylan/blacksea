import { Project } from "../../../../models";
import { useLanguageStore } from "../../../../stores/languageStore";

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { t } = useLanguageStore();

  return (
    <div className="p-6 md:p-8 space-y-4 overflow-y-auto max-h-[calc(90vh-12rem)]">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {t.works.projectDetails.description}
        </h3>
        <p className="text-lg text-gray-800">
          {t.portfolio.projects[project.translationKey]?.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {t.works.projectDetails.services}
          </h3>
          <ul className="space-y-1">
            {project.services.map((service) => (
              <li key={service} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {t.works.projectDetails.category}
          </h3>
          <p className="text-gray-700">{t.works.categories[project.category as keyof typeof t.works.categories]}</p>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4">
            {t.works.projectDetails.year}
          </h3>
          <p className="text-gray-700">{project.year}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {t.works.projectDetails.challenge}
        </h3>
        <p className="text-gray-700">
          {t.portfolio.projects[project.translationKey]?.challenge}
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {t.works.projectDetails.solution}
        </h3>
        <p className="text-gray-700">
          {t.portfolio.projects[project.translationKey]?.solution}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
