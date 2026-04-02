import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FileUpload from "@/components/FileUpload";
import AnalysisResults from "@/components/AnalysisResults";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <FileUpload />
        <AnalysisResults />
      </main>
    </>
  );
}
