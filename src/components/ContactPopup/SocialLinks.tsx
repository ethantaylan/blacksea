import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  username: string;
  gradient: string;
  hoverGradient: string;
  hoverBorder: string;
  hoverColor: string;
  shadowColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram size={20} className="md:w-5 md:h-5 text-white" />,
    username: '@blacksea_agency',
    gradient: 'from-pink-500 to-purple-600',
    hoverGradient: 'hover:from-pink-950/20',
    hoverBorder: 'hover:border-pink-500/30',
    hoverColor: 'group-hover:text-pink-400',
    shadowColor: 'group-hover:shadow-pink-500/30',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin size={20} className="md:w-5 md:h-5 text-white" />,
    username: 'BlackSea Agency',
    gradient: 'from-blue-500 to-blue-700',
    hoverGradient: 'hover:from-blue-950/20',
    hoverBorder: 'hover:border-blue-500/30',
    hoverColor: 'group-hover:text-blue-400',
    shadowColor: 'group-hover:shadow-blue-500/30',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: <Twitter size={20} className="md:w-5 md:h-5 text-white" />,
    username: '@blacksea_agency',
    gradient: 'from-sky-400 to-sky-600',
    hoverGradient: 'hover:from-sky-950/20',
    hoverBorder: 'hover:border-sky-500/30',
    hoverColor: 'group-hover:text-sky-400',
    shadowColor: 'group-hover:shadow-sky-500/30',
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center justify-between p-4 md:p-5 bg-gradient-to-r from-neutral-900 to-neutral-900/50 ${social.hoverGradient} hover:to-neutral-900 border border-neutral-800 ${social.hoverBorder} rounded-xl transition-all cursor-pointer group`}
          aria-label={social.name}
        >
          <div className="flex items-center gap-4">
            <div
              className={`p-2.5 md:p-3 bg-gradient-to-br ${social.gradient} rounded-lg group-hover:shadow-lg ${social.shadowColor} transition-all`}
            >
              {social.icon}
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base text-white">
                {social.name}
              </p>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300">
                {social.username}
              </p>
            </div>
          </div>
          <motion.div
            className={`text-gray-600 ${social.hoverColor}`}
            whileHover={{ x: 4 }}
          >
            →
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}
