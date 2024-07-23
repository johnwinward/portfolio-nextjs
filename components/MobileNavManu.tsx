import Link from "next/link"

type MobileNavMenuProps = {
    closeOnSelection: () => void;
}

function MobileNavMenu({closeOnSelection}: MobileNavMenuProps) {
    return (
        <ul className="text-white text-center bg-blue-900 text-xl">
            <li className="">
                <Link href="/" onClick={closeOnSelection}>
                    <p>Home</p>
                </Link>
            </li>
            <li className="">
                <Link href="/esu" onClick={closeOnSelection}>
                    <p>ESU</p>
                </Link>
            </li>
            <li className="">
                <Link href="/experience" onClick={closeOnSelection}>
                    <p>Work Experience</p>
                </Link>
            </li>
            <li className="">
                <Link href="/johnball" onClick={closeOnSelection}>
                    <p>Game Development</p>
                </Link>
            </li>
            <li className="">
                <Link href="/hobbies" onClick={closeOnSelection}>
                    <p>Hobbies</p>
                </Link>
            </li>
        </ul>
    )
}

export default MobileNavMenu