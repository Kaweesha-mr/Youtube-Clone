
import logo from "../assets/Logo.png"
import Button from "../components/button";
import {  Bell, Menu, Mic, Search, Upload, User2 } from "lucide-react";

const Header = () => {
    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        {/* flex shrink 0 will stop shrinking this part */}
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size={"icon"}> <Menu/> </Button>
            <a href="/" className="h-6"> <img  className="h-6" src={logo} alt="" /></a>
        </div>
        {/* flex grow will grow the container with screen */}
        <form className="flex gap-4 flex-grow justify-center">

            <div>

                <div className="flex flex-grow max-w-[600px]">
                    <input/>
                    <Button type="submit" size="default" variant="ghost"><Search/></Button>
                </div>

            </div>
            <Button className="flex-shrink-0" type="button" variant={"ghost"} size={"icon"}><Mic/></Button>

        </form>
        <div className="flex flex-shrink-0 md:gap-2">
            <Button size={"icon"} variant={"ghost"}>
                <Upload/>
            </Button>
            <Button size={"icon"} variant={"ghost"}>
                <Bell/>
            </Button>
            <Button size={"icon"} variant={"ghost"}>
                <User2/>
            </Button>
        </div>

    </div>;
}

export default Header;