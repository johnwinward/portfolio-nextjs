import PageSection, { SectionData } from "@/components/PageSection";
import xboxImg from "@/public/images/xbox.jpeg"

export default function Experience() {
    const introSection: SectionData = {
        title: "My Retro Video Games Collection",
        img: xboxImg,
        imgAlt: 'An Xbox with a game called Black in its open disc tray',
        leftImage: false,
        height: 400
    }
    return(
        <main>
            <h1 className="text-white text-center text-5xl mt-32 mb-32">How I Waste Time</h1>

            <PageSection sectionData={introSection}>
                Ever since my parents bought me a Nintendo Wii in 2006, I&apos;ve been a fan of video games.
                As I got older, I became a fan of not only the newest games, but the games of the past.
                Some of those games are games from my childhood, but many are from before my time as well.
                <br />
                <br />
                Some years ago, I began to buy video game consoles from the past and collect games for them.
                It started with the Original Xbox and copies of Halo and Halo 2. I had an Xbox 360 growing up, but I would say the original Xbox was my first retro console.
                Then, I bought the Playstation 2, Atari 2600, and many more over time. Now, I like to brag that I own a console from every gaming generation.
                My oldest console, a Pong unit from the 1970&apos;s, is still in its box!
            </PageSection>
        </main>
    )
}