import { motion } from "framer-motion";
import { Header } from "../../../../components/Header/Header";
import { MidText } from "../../../../components/MidText/MidText";

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
    <section className="min-h-screen bg-white px-4 md:px-0">
      <MidText
        title={"Découvrez nos projets"}
        subtitle={
          "Plongez dans les histoires de conceptions de produits réussies qui font la différence."
        }
      />

      <Header title="Nos projets phare" />
      
      <div className="flex gap-2 mb-4 md:mb-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className="btn btn-sm md:btn-md rounded-2xl whitespace-nowrap text-xs md:text-base"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
        {projects.map((project, index: number) => (
          <div
            key={project.id}
            className="items-center hover:scale-105 duration-200 cursor-pointer"
          >
            <motion.div
              className="group relative shadow-2xl aspect-[4/3] overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                <p className="text-xs md:text-sm text-gray-300">
                  {project.client}
                </p>
                <h3 className="text-lg md:text-xl font-light text-white mb-1 md:mb-2">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tags.map((tag: string) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};
