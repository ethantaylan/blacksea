import { motion } from "framer-motion";
import { SectionHeader } from "../../../../../components/SectionHeader/SectionHeader";
import { useLanguageStore } from "../../../../../stores/languageStore";

export const TeamSection = () => {
  const { t } = useLanguageStore();

  const team = [
    {
      name: "Sarah Johnson",
      role: t.aboutUs.team.founder,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "Michael Chen",
      role: t.aboutUs.team.leadDesigner,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Emma Davis",
      role: t.aboutUs.team.developer,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "James Wilson",
      role: t.aboutUs.team.marketing,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
  ];

  return (
    <section className="px-4 md:px-0 pb-20">
      <SectionHeader title={t.aboutUs.team.title} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative aspect-square overflow-hidden rounded-2xl mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
            </motion.div>
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
