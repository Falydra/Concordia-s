export default function Navbar(){
    return (
        <div className="w-full fixed md:h-[55px] z-20 md:flex hidden ">
            <div className="flex-row flex w-full h-[55px] backdrop-blur-sm z-15   items-center justify-center top-0 left-0 sticky">
                <div className="flex w-full h-full items-center justify-center">
                    <div className="flex w-full items-center justify-start">
                        {/* <img src="images/Screenshot_2025-01-02_195749-removebg-preview.png" className="w-auto flex h-16" /> */}
                    </div>
                    <div className="flex w-full items-center justify-around text-white">
                      
                      <h1>
                        Home
                      </h1>
                      <h2>
                        About
                      </h2>
                        <h3>
                            Contact
                        </h3>
                    </div>
                    <div className="flex w-full items-center justify-end mr-3 text-white">
                       
                    </div>
                </div>
            </div>

        </div>

    )
}

