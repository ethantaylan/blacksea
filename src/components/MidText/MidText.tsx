interface MidTextProps {
  title: string;
  subtitle: string;
  space?: number;
}

export const MidText = ({ title, subtitle, space = 600 }: MidTextProps) => {
  return (
    <div className={`h-[${space}px] flex flex-col justify-center`}>
      <h1 className="text-5xl">{title}</h1>
      <h2 className="text-gray-500 text-5xl">{subtitle}</h2>
    </div>
  );
};
