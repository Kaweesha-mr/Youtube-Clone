
import { useState } from "react";
import logo from "../assets/Logo.png"
import Button from "../components/button";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User2 } from "lucide-react";

const Header = () => {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
    
    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        {/* flex shrink 0 will stop shrinking this part */}
        <div className={`flex flex-shrink-0 items-center md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
            <Button variant="ghost" size={"icon"}> <Menu /> </Button>
            <a href="/" className="h-6"> <img className="h-6" src={logo} alt="" /></a>
        </div>
        {/* flex grow will grow the container with screen */}
        <form className={`md:flex gap-4 flex-grow justify-center ${showFullWidthSearch ? 'flex' : 'hidden'}`}>

            <Button onClick={()=>{setShowFullWidthSearch(false)}} className="md:hidden" size={"icon"} variant={"ghost"}>
                <ArrowLeft />
            </Button>
            <div>
                <div className="flex flex-grow w- ">
                    <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-secondary py-1 text-lg px-4 w-full
                    focus:border-blue-500 outline-none"/>
                    <Button
                        className="py-2 px-4 rounded-r-full border border-1-0 flex-shrink-0 border-secondary-border shadow-secondary hover:bg-secondary-hover hover:text-white"
                        type="submit" size="default" variant="ghost"><Search /></Button>
                    <Button className="flex-shrink-0" type="button" variant={"ghost"} size={"icon"}><Mic /></Button>
                </div>
            </div>





        </form>
        <div className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
            <Button onClick={() => { setShowFullWidthSearch(true) }} className="md:hidden" size={"icon"} variant={"ghost"}>
                <Search />
            </Button>
            <Button className="md:hidden" size={"icon"} variant={"ghost"}>
                <Mic />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
                <Upload />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
                <Bell />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
                <User2 />
            </Button>
        </div>

    </div>;
}

export default Header;