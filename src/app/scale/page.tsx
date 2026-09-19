import Hero from "@/components/Hero";
import ScaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imageData={ScaleImg}
      imgAlt="Scale"
      title="Scale Page"
    />
  );
};