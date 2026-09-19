import Hero from "@/components/Hero";
import PerformanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imageData={PerformanceImg}
      imgAlt="Performance"
      title="Performance Page"
    />
  );
}
