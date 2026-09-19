import Hero from "@/components/Hero";
import HomeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imageData={HomeImg}
        imgAlt="Home"
        title="Welcome to Our Website"
      />
    </div>
  );
}
