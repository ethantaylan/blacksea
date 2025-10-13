interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return <h1 className="text-xl text-gray-500 my-10">{title}</h1>;
};
