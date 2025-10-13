/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Project } from "../../models";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";
import { ProjectImage } from "./components/ProjectImage/ProjectImage";
import { FilterSection } from "./components/sections/FilterSection/FilterSection";
import { HeroSection } from "./components/sections/HeroSection/HeroSection";

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <HeroSection />
      {/* Filter Section */}
      <FilterSection
        project={selectedProject}
        onProjectClick={(v) => setSelectedProject(v)}
      />

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen flex items-center justify-center p-4 py-8">
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute cursor-pointer top-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X />
              </button>

              {/* Project Image */}
              <ProjectImage project={selectedProject} />

              {/* Project Details */}
              <ProjectDetails project={selectedProject} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
