
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import UserProfile from "./Components/UserProfile";
import Background from "./Components/Background";
import Projects from "./Components/Projects";

import { Stars } from "./Components/Stars";

const Welcome = () => {
    return (
        <div className="relative flex w-full bg-black min-h-screen flex-col items-center justify-start overflow-x-hidden z-10">
            <Stars />
            <Navbar />
            <Banner />
            {/* <GameSection /> */}
            <UserProfile />
            <Background />
            <Projects />
            
            {/* <Scheduling />
            <Profile /> */}
            {/* <SpotifyPlayer />
            <SpotifyPlayerComponent /> */}
            
            {/* <div className="flex w-full h-screen flex-col items-center justify-center bg-gray-300">
                <h2 className="text-3xl font-bold mb-4">Another Section</h2>
                <p className="text-lg mb-4">This is another section below the game section. Add more content here.</p>
                <p className="text-lg mb-4">Scroll down to see more content.</p>
                <p className="text-lg mb-4">You can add more sections as needed.</p>
                <p className="text-lg mb-4">This is a placeholder section.</p>
            </div> */}

            <Footer />
        </div>
    );
};

export default Welcome;