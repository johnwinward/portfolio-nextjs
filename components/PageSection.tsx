import Image from "next/image"
import { NextPage } from "next"
import { PropsWithChildren, ReactNode } from "react"

interface Props {
    children: ReactNode,
    sectionData: SectionData
}

export type SectionData = {
    img: any,
    imgAlt: string,
    height: number,
    title: string,
    leftImage: boolean
}

export default function PageSection({children, sectionData}: Props){
    return (
        <>
            {sectionData.title !== "" && (<h2 className="text-white text-center text-4xl mb-12 mt-12">{sectionData.title}</h2>)}

            <div className="flex flex-wrap md:flex-nowrap w-screen">
                {sectionData.img && sectionData.leftImage && (<div className="w-full pt-12 pb-12 flex mx-auto justify-center">
                    <Image src={sectionData.img} alt={sectionData.imgAlt} height={sectionData.height} />
                </div>)}

                <p className="text-white text-center w-full p-12 m-auto text-xl">
                    {children}
                </p>

                {sectionData.img && !sectionData.leftImage && (<div className="w-full pt-12 pb-12 flex mx-auto justify-center">
                    <Image src={sectionData.img} alt={sectionData.imgAlt} height={sectionData.height} />
                </div>)}
            </div>
        </>
    )
}