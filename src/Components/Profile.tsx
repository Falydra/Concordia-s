import { BlackHoleStars } from "./BlackholeStars";
import { Button } from "./ui/button";

export default function Profile() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/CV%20Daffa%20Aly%20M.pdf"; 
    link.download = "CV_Daffa_Aly_Meganendra.pdf"; 
    link.click();
  };

  const handleDownloadCV2 = () => {
    const link = document.createElement("a");
    link.href = "/files/CV%20TARA.pdf"; 
    link.download = "CV_Tara_Tirzandina.pdf"; 
    link.click();
  };

  return (
    <div
      className="relative flex md:flex-row flex-col w-full h-screen px-12"
      id="profile-section"
    >
      <div className="flex-1 h-[272px] md:rounded-3xl flex-row md:rounded-tl-none md:rounded-bl-none gap-6 pb-6 px-4 pt-8 bg-white bg-opacity-30 flex items-center justify-center">
        <div className="md:w-[125px] w-[125px] aspect-square bg-white rounded-full flex items-center justify-center" />
        <div className="md:w-[225px] md:h-[125px] flex flex-col items-start justify-center">
          <h1 className="text-black text-xl font-bold">
            Daffa Aly Meganendra
          </h1>
          <h2 className="text-black text-sm font-semibold">
            Informatika S1 - 2022
          </h2>
          <h4 className="text-black text-xs font-semibold">
            21 Years Old
          </h4>
          <Button
            onClick={handleDownloadCV}
            className="mt-4 bg-transparent backdrop-blur-xl border border-dark-fg w-[125px] h-[35px] text-white rounded-xl"
            variant="default"
          >
            Download CV
          </Button>
        </div>
      </div>

      <div className="md:h-4 md:w-0 relative flex-shrink-0 items-center bg-transparent z-10">
        <div className="block absolute md:-left-4 md:skew-x-[42deg] skew-x-[115deg] left-36 -top-32 md:top-0 h-[272px] md:w-4 w-8 bg-black" />
        <div className="absolute md:top-36 -top-10  left-36 md:-left-1 md:-translate-x-1/2 md:-translate-y-1/2 bg-black w-[78px] h-[78px] rounded-full flex items-center justify-center overflow-hidden">
          <BlackHoleStars />
        </div>
      </div>

      <div className="flex-1 h-[272px] md:rounded-3xl flex-row md:rounded-tl-none md:rounded-bl-none gap-6 pb-6 px-4 pt-8 bg-white bg-opacity-30 flex items-center justify-center">
        <div className="md:w-[225px] md:h-[125px] flex flex-col items-end justify-center">
          <h1 className="text-black text-xl font-bold">
            Tara Tirzandina
          </h1>
          <h2 className="text-black text-sm font-semibold">
            Informatika S1 - 2022
          </h2>
          <h4 className="text-black text-xs font-semibold">
            20 Years Old
          </h4>
          <Button
            onClick={handleDownloadCV2}
            className="mt-4 bg-transparent backdrop-blur-xl border border-dark-fg w-[125px] h-[35px] text-white rounded-xl"
            variant="default"
          >
            Download CV
          </Button>
        </div>
        <div className="md:w-[125px] w-[125px] aspect-square bg-white rounded-full flex items-center justify-center" />
      </div>
    </div>
  );
}
