import diplomaImg from '@/public/images/diploma.png'
import esuSignImg from '@/public/images/esu-sign.jpeg'
import Image from 'next/image'
import csoImg from '@/public/images/csoLogo.png'
import Link from 'next/link'

export default function ESUPage() {
    return(
        <main>
            <h1 className="text-white text-center text-5xl mt-32 mb-32">My College Experience</h1>

            <div className="flex flex-wrap md:flex-nowrap w-screen mb-40">
                <p className="text-white text-center w-full p-12 m-auto text-xl">In December of 2023, I graduated Summa Cum Laude with my bachelor&apos;s degree in computer science 
                from East Stroudsburg University of Pennsylvania. By applying AP credit from high school and taking the maximum number of credits some semesters, 
                    I was able to graduate one semester early.
                </p>
                <div className="w-full pt-12 pb-12 flex mx-auto justify-center">
                    <Image src={diplomaImg} alt="A college diploma" height="400" />
                </div>
            </div>

            <h2 className="text-white text-center text-4xl mb-12 mt-12">The Impact of 2020</h2>

            <div className="flex flex-wrap md:flex-nowrap w-screen justify-center mb-40">
                <p className="text-white text-center text-xl w-6/12">Due to the 2020 pandemic, my first 2 semesters of college were fully online. 
                Although I saved money from being at home and not paying for housing, it was a hard time for everyone. 
                In order to make friends virtually and get involved, I joined a student-run club called the 
                Computer Science Organization. I didn&apos;t know it at the time, but this was the best thing I could have done to start off my time at college!</p>
            </div>

            <h2 className="text-white text-center text-4xl mb-12 mt-12">The CSO</h2>

            <div className="flex flex-wrap md:flex-nowrap w-screen">
                <div className="w-full pt-12 pb-12 flex mx-auto justify-center">
                    <Image src={csoImg} alt="A college diploma" height="400" />
                </div>
                <p className="text-white text-center w-full p-12 m-auto text-xl">
                    The Computer Science Organization was a big part of my college life, and we did some great things during my first year 
                    (like <a href="https://quantum.esu.edu/insider/esu-computer-science-organization-raises-more-than-2000-to-help-hospitals-around-the-globe/" className="underline hover:text-blue-600">ExtraLife</a>).
                    I participated in the CSO for 2 years before eventually being elected president of the club for my junior year. 
                    Some things I did as president that I think were notable were hosting the first CSO GameJam (where members code their 
                    own <a href="https://itch.io/jam/esu-cso-game-jam" className="underline hover:text-blue-600">video games</a>)
                    and hosting the first STEM Mixer (an event for STEM clubs on campus to come together, have some fun, and promote STEM through clubs). Since I was graduating early,
                    I stepped down my senior year to help the next president for a semester.
                </p>
            </div>

            <h2 className="text-white text-center text-4xl mb-12 mt-12">Courses</h2>

            <div className="flex flex-wrap md:flex-nowrap w-screen mb-40">
                <p className="text-white text-center w-full p-12 m-auto text-xl">
                    I took many courses at ESU, mostly in computer science, but also in math, physics, and other subjects. A complete list of the courses I took at ESU 
                    can be found <Link href="/esu/courses" className="underline hover:text-blue-600">here</Link>.
                </p>
                <div className="w-full pt-12 pb-12 flex mx-auto justify-center">
                    <Image src={esuSignImg} alt="A photo of John Winward standing next to a navigation sign on campus" height="600" />
                </div>
            </div>

        </main>
    )
}