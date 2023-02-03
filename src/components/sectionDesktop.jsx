import { data } from "../data/data"
import { useRef, useState, useEffect} from "react"
import { useOnScreen } from "./hooks"
const Section = () => {
    const textRef = useRef(null)
    const selectedProject = useOnScreen(textRef)
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    console.log(width)
    return (

        width >= 800 ? <div className="main-container">
        <div>
        {data.map(dat =>
            <section key={ dat.id } className={ `text-element ${dat.video}` } ref={textRef}>
                <div className='project-container projects-list'>
                    <div className="sub-1">
                        <h2>{dat.name}</h2>
                        <p>{dat.description}</p>  
                        <div className="project-links-container">
                            <a href={ dat.live_link } target='_blank' rel="noreferrer" className='project-links'>see live{ dat.live_icon}</a>
                           <a href={dat.github_link} target='_blank' rel="noreferrer" className='project-links'>see respository {dat.github_icon}</a>
                        </div>  
                    </div>
                    <div className="sub-2">
                        <h3>technologies</h3>
                        <div>     
                           {dat.technologies_logo}
                        </div>
                    </div>
                </div>
            </section>) }
        </div>
            <div className="video-container">
                {selectedProject && <video src={ selectedProject[1]}  className={selectedProject[1][14]}  style={{opacity: '1'}} loop autoPlay muted webkit-playsinline playsInline ></video>}
            </div>
        </div>
            :
        <div>
            <div>
                <section id="section-mobile">
                {data.map(dat =>
                    <div className='project-container-mobile projects-list'>
                        <div className="video-container-mobile" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${dat.video}"
          
        />,
      ` }}>
                        </div>
                        <div className="sub-1">
                            <h2>{dat.name}</h2>
                            <p>{dat.description}</p>  
                        <div className="project-links-container">
                            <a href={ dat.live_link } target='_blank' rel="noreferrer" className='project-links'>see live { dat.live_icon}</a>
                            <a href={dat.github_link} target='_blank' rel="noreferrer" className='project-links'>see respository {dat.github_icon}</a>
                        </div>  
                        </div>
                        <div className="sub-2">
                            <h3>technologies</h3>
                            <div>     
                                {dat.technologies_logo}
                            </div>
                        </div>
                    </div>) }
                </section>
            </div>
        </div>
                
    )
}
export default Section