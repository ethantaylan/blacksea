import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "../../../../../components/SectionHeader/SectionHeader";
import { portfolioProjects } from "../../../../../consts";
import { Project } from "../../../../../models";
import { useLanguageStore } from "../../../../../stores/languageStore";

interface FilterSectionProps {
  project: Project | null;
  onProjectClick: (project: Project) => void;
}

export const FilterSection = ({ onProjectClick }: FilterSectionProps) => {
  const { t } = useLanguageStore();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: t.works.categories.all },
    { key: "webDesign", label: t.works.categories.webDesign },
    { key: "branding", label: t.works.categories.branding },
    { key: "marketing", label: t.works.categories.marketing },
    { key: "content", label: t.works.categories.content },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="px-4 md:px-0">
      <SectionHeader title={t.works.filterTitle} />
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <motion.button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`btn btn-sm md:btn-md rounded-2xl whitespace-nowrap text-xs md:text-base ${
              selectedCategory === category.key ? "btn-primary" : ""
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        layout
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            layout
            onClick={() => onProjectClick(project)}
          >
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs md:text-sm text-gray-300">
                    {project.client}
                  </p>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
                <h3 className="text-lg md:text-xl font-light text-white mb-1 md:mb-2">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-4 line-clamp-2">
                  {t.portfolio.projects[project.translationKey]?.description}
                </p>

                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 bg-white/10 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
