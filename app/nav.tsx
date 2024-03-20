import Image from "next/image";
import { images } from "./images";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between p-6 md:p-12">
            <Image className="h-6 w-auto md:h-12"  src={images.logo} alt="flyo_logo"/>
            <div className="grow"></div>
            <a href="#" className="pr-6 md:pr-12 text-xs md:text-base">Features</a>
            <a href="#" className="pr-6 md:pr-12 text-xs md:text-base">Team</a>
            <a href="#" className="text-xs md:text-base">Sign in</a>
        </div>
    )
}