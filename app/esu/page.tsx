import diplomaImg from '@/public/images/diploma.png'
import esuSignImg from '@/public/images/esu-sign.jpeg'
import Image from 'next/image'
import csoImg from '@/public/images/csoLogo.png'
import Link from 'next/link'
import PageSection, { SectionData } from '@/components/PageSection'

export default function ESUPage() {
    const introSection: SectionData = {
        img: diplomaImg,
        imgAlt: "A college diploma",
        height: 400,
        title: "",
        leftImage: false
    }

    const covidSection: SectionData = {
        img: null,
        imgAlt: "",
        height: -1,
        title: "The Impact of 2020",
        leftImage: false
    }
    
    const csoSection: SectionData = {
        img: csoImg,
        imgAlt: "The logo for the ESU Computer Science Organization",
        height: 400,
        title: "The CSO",
        leftImage: true
    }
    
    const coursesSection: SectionData = {
        img: esuSignImg,
        imgAlt: "John standing next to a navigation sign on ESU's campus",
        height: 600,
        title: "Courses",
        leftImage: false
    }

    return(
        <main>
            <h1 className="text-white text-center text-5xl mt-32 mb-32">My College Experience</h1>

            <PageSection sectionData={introSection}>
                In December of 2023, I graduated Summa Cum Laude with my bachelor&apos;s degree in computer science 
                from East Stroudsburg University of Pennsylvania. By applying AP credit from high school and taking the maximum number of credits some semesters, 
                I was able to graduate one semester early.
            </PageSection>

            <PageSection sectionData={covidSection}>
                Due to the 2020 pandemic, my first 2 semesters of college were fully online. 
                Although I saved money from being at home and not paying for housing, it was a hard time for everyone. 
                In order to make friends virtually and get involved, I joined a student-run club called the 
                Computer Science Organization. I didn&apos;t know it at the time, but this was the best thing I could have done to start off my time at college!
            </PageSection>

            <PageSection sectionData={csoSection}>
                The Computer Science Organization was a big part of my college life, and we did some great things during my first year 
                (like <a href="https://quantum.esu.edu/insider/esu-computer-science-organization-raises-more-than-2000-to-help-hospitals-around-the-globe/" className="underline hover:text-blue-600">ExtraLife</a>).
                I participated in the CSO for 2 years before eventually being elected president of the club for my junior year. 
                Some things I did as president that I think were notable were hosting the first CSO GameJam (where members code their 
                own <a href="https://itch.io/jam/esu-cso-game-jam" className="underline hover:text-blue-600">video games</a>)
                and hosting the first STEM Mixer (an event for STEM clubs on campus to come together, have some fun, and promote STEM through clubs). Since I was graduating early,
                I stepped down my senior year to help the next president for a semester.
            </PageSection>

            <PageSection sectionData={coursesSection}>
                I took many courses at ESU, mostly in computer science, but also in math, physics, and other subjects. A complete list of the courses I took at ESU 
                can be found <Link href="/esu/courses" className="underline hover:text-blue-600">here</Link>.
            </PageSection>

        </main>
    )
}