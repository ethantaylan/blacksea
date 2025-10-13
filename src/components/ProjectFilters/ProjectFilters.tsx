import { motion } from "framer-motion";
import { useLanguageStore } from "../../stores/languageStore";

interface ProjectFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string) => void;
}

export const ProjectFilters = ({ selectedCategory, onCategoryChange }: ProjectFiltersProps) => {
  const { t } = useLanguageStore();

  const categories = [
    { key: "all", label: t.works.categories.all },
    { key: "webDesign", label: t.works.categories.webDesign },
    { key: "branding", label: t.works.categories.branding },
    { key: "marketing", label: t.works.categories.marketing },
    { key: "content", label: t.works.categories.content },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category, index) => (
        <motion.button
          key={category.key}
          className="btn btn-sm md:btn-md rounded-2xl whitespace-nowrap text-xs md:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};
