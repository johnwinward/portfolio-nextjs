import PageSection, { SectionData } from "@/components/PageSection";
import tutorImg from "@/public/images/tutor-of-the-month.png"

export default function Experience() {
    const internSection: SectionData = {
        title: 'NREIP Intern at NIWC Pacific',
    }
    const scientistSection: SectionData = {
        title: 'Scientist at NIWC Pacific'
    }
    const nonDevSection: SectionData = {
        img: tutorImg,
        imgAlt: 'A image recognizing John Winward for winning tutor of the month in February',
        title: 'Previous Employment',
        leftImage: true,
        height: 400
    }

    return(
        <main>
            <h1 className="text-white text-center text-5xl mt-32 mb-32">Work History</h1>

            <PageSection sectionData={scientistSection}>
                In May of 2024, I was hired by NIWC Pacific Philadelphia to be a full time Software Developer. Since starting, I have developed skills in Angular and .NET Core Web API.
            </PageSection>

            <PageSection sectionData={internSection}>
                During the summer of 2023, I was hired as an intern at NIWC Pacific in Philadelphia. This was my first 
                role as a developer. My internship was extended part time for the fall semester of 2023 and during the winter of early 
                2024. During the summer, my team of 3 interns, including myself, successfully created a proof of concept application from scratch using
                our chosen framework of Electron, which allows a typical JavaScript/Node.js web application to become a desktop application.
                <br></br>
                <br></br>
                For the two internship extensions, I got to use other technologies and frameworks. These include Microsoft Power Apps/Automate, NextJS and Cypress.
            </PageSection>

            <PageSection sectionData={nonDevSection}>
                Before becoming an intern, I had other jobs. During my sophomore year of college, I was a math tutor for the university. 
                I even won tutor of the month one month, and there were posters of me around campus! Before that, I worked a summer at Lowe&apos;s 
                with 4 of my friends (best summer for sure), and I worked a few months at Sears in high school right before they closed forever.
            </PageSection>
        </main>
    )
}