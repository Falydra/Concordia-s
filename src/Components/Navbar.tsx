import {Link} from "react-scroll"

export default function Navbar(){
    return (
        <div className="absolute inset-x-0 top-0 z-20 flex h-[72px] items-center justify-center px-4 sm:px-6">
                <div className="flex min-h-11 w-full max-w-xl items-center justify-center rounded-full bg-black/20 px-3 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.25)] sm:px-6">
                   
                    <div className="flex w-full items-center justify-around gap-2 sm:gap-8">
                        <Link to="user-profile" smooth delay={300} className="group relative cursor-pointer px-2 py-2 text-sm text-white sm:text-base">
                            Profile
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="user-background" smooth delay={100} className="group relative cursor-pointer px-2 py-2 text-sm text-white sm:text-base">
                            Background
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="user-projects" smooth delay={100} className="group relative cursor-pointer px-2 py-2 text-sm text-white sm:text-base">
                            Projects
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </div>
                    
              
            </div>

        </div>

    )
}
