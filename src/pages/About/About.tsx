/* eslint-disable react/no-unescaped-entities */
import { MidText } from "../../components/MidText/MidText";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <MidText
        title={"Nous, nos valeurs, nos missions"}
        subtitle={"Découvrez qui nous sommes et ce que nous défendons."}
      />
    </div>
  );
}
