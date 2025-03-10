import { Link } from "react-scroll"


export default function Section() {
    return (
        <>
              <h1 className="text-xl font-semibold">Section</h1>
              
              <Link to="hero-section" delay={100} smooth className="cursor-pointer hover:text-blue-300">
                  <h1>
                      Home
                  </h1>
              </Link>
              <a href="/about" className="cursor-pointer hover:text-blue-300">
                  <h1>
                      About
                  </h1>
              </a>
              <a href="/contact" className="cursor-pointer hover:text-blue-300">
                  <h1>
                      Contact
                  </h1>
              </a>
              <a href="/project" className="cursor-pointer hover:text-blue-300">
                  <h1>
                      Projects
                  </h1>
              </a>
        </>
    )
}