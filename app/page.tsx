import profilePic from '../public/images/john-winward.jpeg'
import PageSection, { SectionData } from "@/components/PageSection";

export default function Home() {
  const introSection: SectionData = {
    img: profilePic,
    imgAlt: "Photo of John Winward",
    height: 500,
    title: "About Me",
    leftImage: false
  }


  return (
    <main>
      <div className="h-auto text-center text-white mt-32 mb-32">
        <h1 className="text-5xl mb-8 font-mono">Welcome to winward.dev!</h1>
        <p className="text-xl">I&apos;m John Winward, and this is my portfolio website built using NextJS.</p>
      </div>
      
      <PageSection sectionData={introSection}>
        I&apos;m John, a recent college graduate with a degree in computer science from 
        East Stroudsburg University. My current coding interest is in web development, 
        which is why I decided to build this project using the NextJS framework. I hope 
        to learn more about web development through this project, and also create a way 
        for people to learn more about me.
      </PageSection>
    </main>
  );
}
