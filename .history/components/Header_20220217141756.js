import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";

function Header () {
    return(
        <div className="sticky bg-[#040714] top-0 z-[1000]
        flex items-center px-10 h-[72px] md:px-12">
            <Image 
              src="/images/logo.svg" 
              width={80} 
              height={80} 
              className="cursor-pointer"
            />
            <div>
                <a className="text-white">
                    <HomeIcon className="h-4"/>
                    <span>HOME</span>
                </a>
            </div>
        </div>
    );
}
 export default Header;