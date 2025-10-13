/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { DotBackground } from "../components/DotBackground/DotBackground";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { portfolioProjects } from "../consts";
import { useLanguageStore } from "../stores/languageStore";

export default function Works() {
  const { t } = useLanguageStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const project = portfolioProjects.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center overflow-hidden bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DotBackground />

        <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left side - Text content */}
            <motion.div
              className="lg:col-span-7 space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t.works.title}
                <br />
                <span className="italic font-light">{t.works.subtitle}</span>
              </motion.h1>

              <motion.div
                className="flex items-start gap-6 md:gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                    {t.works.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Visual showcase */}
            {/* <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {portfolioProjects.slice(0, 4).map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={`relative overflow-hidden group cursor-pointer rounded-2xl ${
                      index === 0 ? "row-span-2" : "aspect-square"
                    }`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white font-semibold text-sm md:text-base mb-1">
                          {project.title}
                        </p>
                        <p className="text-gray-300 text-xs">{project.client}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
      </motion.section>

      {/* Filter Section */}
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
              onClick={() => setSelectedProject(project.id)}
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

      {/* Project Detail Modal */}
      {selectedProject && project && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>

              {/* Project Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
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

              {/* Project Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {t.works.projectDetails.description}
                  </h3>
                  <p className="text-lg text-gray-800">{t.portfolio.projects[project.translationKey]?.description}</p>
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
                    <p className="text-gray-700">{project.category}</p>
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
                  <p className="text-gray-700">{t.portfolio.projects[project.translationKey]?.challenge}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {t.works.projectDetails.solution}
                  </h3>
                  <p className="text-gray-700">{t.portfolio.projects[project.translationKey]?.solution}</p>
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

                <motion.button
                  className="w-full btn btn-primary rounded-full btn-lg mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.works.projectDetails.discussProject} <MdOutlineArrowOutward size={22} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
