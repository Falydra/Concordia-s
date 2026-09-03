import {Link} from "react-scroll"

export default function Navbar(){
    return (
        <div className="w-full z-10  md:h-[55px] absolute justify-center text items-center bg-transparent flex flex-row m-3">
                <div className="flex  h-full items-center justify-center  w-1/3 bg-transparent backdrop-blur-xl rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                {/* <div className="flex  h-full items-center justify-center  w-full border-white backdrop-blur-3xl rounded-full absolute"/> */}
                   
                    <div className="flex w-full items-center justify-around gap-12">
                        <Link to="user-profile" smooth delay={300} className="text-white relative group cursor-pointer">
                            Profile
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="user-background" smooth delay={100} className="text-white relative group cursor-pointer">
                            Background
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="user-projects" smooth delay={100} className="text-white relative group cursor-pointer">
                            Projects
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </div>
                    
              
            </div>

        </div>

    )
}

