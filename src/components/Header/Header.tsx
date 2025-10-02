interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return <h1 className="text-xl my-10">{title}</h1>;
};
