import Image from "next/image";
import profilePic from '/public/images/john-winward.jpeg'

export default function Home() {
  return (
    <main className="flex min-h-fit flex-col items-center p-24">
      <div className="text-center text-white font-mono">
        <h1 className="text-5xl">Welcome to winward.dev!</h1>
        <br></br>
        <p>I&apos;m John Winward, and this is my portfolio website built using NextJS.</p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:flex-row w-full mx-auto justify-center mt-16">
        <div className="text-white items-center w-screen p-2">
          <div className="text-center w-full">
            <h2 className="text-3xl mb-8 font-mono">About Me</h2>
            <p className="font-sans">I&apos;m John, a recent college graduate with a degree in computer science from 
              East Stroudsburg University. My current coding interest is in web development, 
              which is why I decided to build this project using the NextJS framework. I hope 
              to learn more about web development through this project, and also create a way 
              for people to learn more about me.
            </p>
          </div>
        </div>
        <div className="text-white font-mono items-center w-full p-2">
          <div className="flex mx-auto justify-center">
            <Image src={profilePic} alt="Photo of John Winward"></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
