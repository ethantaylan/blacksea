import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
}

const categories = [
  "Web Design",
  "Branding & Identity",
  "Digital Marketing & Strategy",
  "Content Creation",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Learnify",
    client: "Education Platform",
    description:
      "Crafting a refined and memorable visual identity that resonates with the brand's audience.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["Branding", "UI/UX", "Education"],
  },
  {
    id: 2,
    title: "Coworking Space",
    client: "WorkHub",
    description: "Modern workspace solution with community-driven design",
    image:
      "https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg",
    tags: ["Interior", "Community", "Design"],
  },
  {
    id: 3,
    title: "Creative Studio",
    client: "ArtSpace",
    description: "Collaborative creative environment for artists and designers",
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
    tags: ["Studio", "Creative", "Design"],
  },
  {
    id: 4,
    title: "Digital Agency",
    client: "PixelPerfect",
    description: "Modern digital agency workspace and branding",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    tags: ["Agency", "Digital", "Branding"],
  },
];

export const Portfolio = () => {
  return (
    <section className="min-h-screen py-24 bg-white">
      <h1 className="text-xl my-10">Nos projects phare</h1>

      <div>
        {/* Catégories */}
        <div className="flex gap-2 mb-5 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className="btn rounded-2xl whitespace-nowrap"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projets */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project, index: number) => (
            <div
              key={project.id}
              className="items-center hover:scale-105 duration-200 cursor-pointer"
            >
              {/* Image */}
              <motion.div
                className="group relative shadow-2xl aspect-[4/3] overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Contenu */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-sm text-gray-300">{project.client}</p>
                  <h3 className="text-xl font-light text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-white/10 rounded-full text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="flex items-center gap-2 text-white hover:gap-4 transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Voir le projet <MdOutlineArrowOutward size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Nombre de projets */}
        <div className="mt-8 text-sm text-gray-400">
          {projects.length} projets réalisés
        </div>
      </div>
    </section>
  );
};
