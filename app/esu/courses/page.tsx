import PageSection, { SectionData } from "@/components/PageSection";

export default function CoursesPage() {
    const computerScienceSection: SectionData = {
        title: 'Computer Science'
    }

    const mathSection: SectionData = {
        title: 'Mathematics'
    }

    const physSection: SectionData = {
        title: 'Physics'
    }

    const otherSection: SectionData = {
        title: 'Other Subjects'
    }

    return (
        <main>
            <h1 className="text-white text-center text-5xl mt-32 mb-32">Courses I&apos;ve Taken at ESU, by Subject</h1>

            <PageSection sectionData={computerScienceSection}>
                <ul>
                    <li>Intro To Computer Programming II</li>
                    <li>Intro To Computer Organization</li>
                    <li>Programming Principles and Practice</li>
                    <li>Intro to Assembler Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Computer Security I</li>
                    <li>Operating System Concepts and Design</li>
                    <li>Programming Languages</li>
                    <li>Networking and Data Communications</li>
                    <li>Issues in the Practice of Computer Science</li>
                    <li>Internet and Web Programming</li>
                    <li>Real Time Systems</li>
                    <li>Database Systems</li>
                    <li>Software Engineering</li>
                    <li>Independent Study: Honors Thesis</li>
                </ul>
            </PageSection>

            <PageSection sectionData={mathSection}>
                <ul>
                    <li>Calculus II</li>
                    <li>Discrete Mathematical Structures</li>
                    <li>Multivariate Calculus</li>
                    <li>Statistics I</li>
                    <li>Linear Algebra</li>
                </ul>
            </PageSection>

            <PageSection sectionData={physSection}>
                <ul>
                    <li>Physics I</li>
                    <li>Physics II</li>
                    <li>Basic Electronics</li>
                </ul>
            </PageSection>

            <PageSection sectionData={otherSection}>
                <ul>
                    <li>English Composition</li>
                    <li>University Studies / First Year Experience</li>
                    <li>Intro to Communication</li>
                    <li>Principles of Macroeconomics</li>
                    <li>Health Promotion and Wellness</li>
                    <li>Advanced Composition</li>
                    <li>Intro to Global Politics</li>
                    <li>Classical Mythology</li>
                    <li>Introduction to Art</li>
                    <li>Physical Geology</li>
                    <li>History of Rock and Jazz</li>
                    <li>General Psychology</li>
                </ul>
            </PageSection>

        </main>
    )
}