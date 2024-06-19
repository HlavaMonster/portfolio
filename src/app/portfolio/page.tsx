import Header from "@/app/portfolio/components/Header";
import Portfolio from "@/app/portfolio/components/Portfolio";
import Experience from "@/app/portfolio/components/Experience";
import Skills from "@/app/portfolio/components/Skills";
import Education from "@/app/portfolio/components/Education";
import Personal from "@/app/portfolio/components/Personal";
import Footer from "@/app/portfolio/components/Footer";
import PortfolioData from "@/app/portfolio/data/portfolioData";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <Personal basicsData={PortfolioData.basics} />
      <Experience workData={PortfolioData.work} />
      <Skills skillGroupData={PortfolioData.skills} />
      <Education educationData={PortfolioData.education} />
      <Portfolio workData={PortfolioData.projects} />
      <Footer basicsData={PortfolioData.basics} />
    </>
  );
}
