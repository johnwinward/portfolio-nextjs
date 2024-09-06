import Image from "next/image";
import oliviaImg from '@/public/images/olivia.jpeg';

export default function Olivia() {
    return (
        <main>
            <h1 className="text-white text-center text-4xl mb-12 mt-12">HI OLIVIA!</h1>

            <p className="text-white text-center w-full p-12 m-auto text-xl">I created this page on my website just for you. This is the surprise I mentioned (since I&apos;m a nerd ☝️🤓)!</p>

            <p className="text-white text-center w-full p-12 m-auto text-xl">You really are the best girlfriend ever, and if anyone else sees this page then now they know 😁</p>

            <p className="text-white text-center w-full p-12 m-auto text-xl">I love you ❤️</p>

            <p className="text-white text-center w-full p-12 m-auto text-xl">-John</p>

            <Image src={oliviaImg} alt="Photo of Olivia" width={400} className="d-block mx-auto mb-20"/>
        </main>
    )
}