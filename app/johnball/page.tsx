import PageSection, { SectionData } from "@/components/PageSection"
import jb1Image from '@/public/images/jb1.png'
import jb2Image from '@/public/images/jb2.png'
import jb3Image from '@/public/images/jb3.png'
import Link from "next/link"

export default function GameDevPage() {
    const introSectionData: SectionData = {
        title: "Origins"
    }

    const jb1SectionData: SectionData = {
        title: "The First Game",
        img: jb1Image,
        imgAlt: '"Cover Art" for the game JohnBall',
        leftImage: false,
        height: 300
    }

    const jb2SectionData: SectionData = {
        title: 'JohnBall 2',
        img: jb2Image,
        imgAlt: 'A JohnBall, as displayed in the video game JohnBall 2',
        leftImage: true,
    }

    const jb3SectionData: SectionData = {
        title: 'JohnBall Pong',
        img: jb3Image,
        imgAlt: 'Screenshot from the game "JohnBall Pong"',
        leftImage: false
    }

    const howToPlaySection: SectionData = {
        title: 'How To Play'
    }

    const downloadsSection: SectionData = {
        title: 'Downloads'
    }

    return(
        <main>
            <h1 className="text-white text-center text-5xl mt-32 mb-32">The JohnBall Series</h1>

            <PageSection sectionData={introSectionData}>
                <p>In 2020, East Stroudsburg University hosted an event called GameJam, where individuals 
                    or teams are given a specific time period to make a video game, often within a theme, against others. The best game wins!
                </p>
                <br />
                <br />
                <p>
                    As a college freshman learning remotely, I wanted to get involved with my remote campus as much as I could from home, so I signed up to make a game. 
                    I had no idea how to make a video game, but I challenged myself by choosing to use Unity instead of the other recommended tools that were easier to use. 
                    Unity is a game development software really used in the game development industry.
                </p>
            </PageSection>

            <PageSection sectionData={jb1SectionData}>
                <p>
                    Being the average college procrastinator, I ended up with only one day to learn Unity before the weekend-long gamejam (the theme 
                    being &quot;Only One&quot;, which can be seen <a href="https://itch.io/jam/esu-gamejam-1" className="underline hover:text-blue-600">here</a>). I started a tutorial 
                    for writing Unity games the day before the jam. On Saturday, after some hard work, confusion, and coffee, I submitted JohnBall on Saturday and took Sunday off.
                    <br></br>
                    <br></br>
                    By some miracle, I won the game jam! I was picked as first place winner for the contest, 
                    and I got $150 as a prize. I learned that day that as long as I put in the effort, anything can be done with code.
                </p>
            </PageSection>

            <PageSection sectionData={jb2SectionData}>
                <p>
                    As a junior in college, I was president of the campus computer science club. Based on the idea of a club member, I 
                    realized that a game jam would be a PERFECT event for a computer science club to do. The ESU GameJam never happened after 2020, so the CSO GameJam was born.
                    <br />
                    <br />
                    The 2022 CSO GameJam was open to CSO members, and had the theme of &quot;Arcade&quot;. I didn&apos;t want it to be a contest, but a way 
                    to show off game development skills and have fun. I participated as well, and created a sequel to my first video game, &quot;JohnBall 2: Attack 
                    of the JohnBalls&quot;. In my biased opinion, it was a hit within CSO.
                    Many <a href="https://itch.io/jam/esu-cso-game-jam" className="underline hover:text-blue-600">great games</a> were made during that jam,
                    and I was happy that we got as many submissions as we did. If it were a contest, JohnBall 2 would not have been the winner. However, my club 
                    now knew me as the creator of JohnBall, and that stuck for the rest of my college career.
                </p>
            </PageSection>

            <PageSection sectionData={jb3SectionData}>
                <p>
                    In 2023, I submitted a game to the 2nd CSO GameJam, with a theme of Multiplayer. &quot;JohnBall Pong&quot; is just pong, 
                    but themes similar to the other 2 games I made. It allowed simple player customization, and included some easter eggs that 
                    got some laughs. I think this was my most polished JohnBall game, since I had some Unity experience before starting development.
                </p>
            </PageSection>

            <PageSection sectionData={howToPlaySection}>
                <p>
                    All 3 JohnBall games only work on Windows. To play each game, click the download link, unzip the downloaded folder, and run the executable.
                    The rules for the first game are a little confusing at first, but the goal is to finish with a score of exactly one, and each play subtracts from the total score.
                    The second game is like any arcade shooter, and the third game is just like pong. Each game has an Itch page with a game description, which can be found in the downloads section.
                    Also, ESC always quits the game if you have trouble leaving.
                </p>
                <br />
                <br />
                <p>
                    Note: Windows defender may block the games from running since the games are not recognized. In that case, you have the option to bypass it. 
                    I made these games for educational purposes, so you will have to trust me that they are not malware. 
                    The source code for JohnBall 2 and JohnBall Pong are also available on <a href="https://github.com/johnwinward?tab=repositories" className="underline hover:text-blue-600">GitHub</a>, 
                    if you want to check and be certain they are safe to execute.
                </p>
            </PageSection>

            <PageSection sectionData={downloadsSection}>
                <ul>
                    <li>
                        <Link href="/api/johnball" className="underline hover:text-blue-600">JohnBall</Link>, 
                        Itch.io download <a href="https://halbert47.itch.io/johnball" className="underline hover:text-blue-600">here</a>
                    </li>
                    <br />
                    <li>
                        <Link href="/api/johnball2" className="underline hover:text-blue-600">JohnBall 2</Link>, 
                        Itch.io download <a href="https://halbert47.itch.io/johnball-2" className="underline hover:text-blue-600">here</a>
                    </li>
                    <br />
                    <li>
                        <Link href="/api/johnballpong" className="underline hover:text-blue-600">JohnBall Pong</Link>, 
                        Itch.io download <a href="https://halbert47.itch.io/johnball-pong" className="underline hover:text-blue-600">here</a>
                    </li>
                </ul>
            </PageSection>
        </main>
    )
}