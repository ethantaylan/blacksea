import { motion } from "framer-motion";
import { DotBackground } from "../../components/DotBackground/DotBackground";
import { Header } from "../../components/Header/Header";
import { useLanguage } from "../../contexts/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  const values = [
    {
      title: t.aboutUs.values.innovation.title,
      description: t.aboutUs.values.innovation.description,
      icon: "💡",
    },
    {
      title: t.aboutUs.values.quality.title,
      description: t.aboutUs.values.quality.description,
      icon: "✨",
    },
    {
      title: t.aboutUs.values.collaboration.title,
      description: t.aboutUs.values.collaboration.description,
      icon: "🤝",
    },
    {
      title: t.aboutUs.values.passion.title,
      description: t.aboutUs.values.passion.description,
      icon: "❤️",
    },
  ];

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
                {t.aboutUs.hero.title}
                <br />
                <span className="italic font-light">
                  {t.aboutUs.hero.subtitle}
                </span>
              </motion.h1>

              <motion.div
                className="flex items-start gap-6 md:gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                    {t.aboutUs.hero.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Stats */}
            {/* <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-black text-white p-6 md:p-8 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="px-4 md:px-0 pb-20">
        <Header title={t.aboutUs.story.title} />

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t.aboutUs.story.paragraph1}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t.aboutUs.story.paragraph2}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t.aboutUs.story.paragraph3}
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="px-4 md:px-0 pb-32">
        <Header title={t.aboutUs.values.title} />

        <div className="max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group py-12 md:py-16 border-b border-gray-200 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                {/* Number */}
                <motion.div
                  className="flex-shrink-0 text-6xl md:text-7xl font-light text-gray-200 group-hover:text-black transition-colors duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  0{index + 1}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
                    {value.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 md:px-0 pb-20">
        <Header title={t.aboutUs.team.title} />

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
    </div>
  );
}
