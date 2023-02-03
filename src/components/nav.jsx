import { useState } from "react"
const Nav = () => {

    const [showNav, setShowNav] = useState(false)
    const navHandler = () => setShowNav(!showNav)
    const scrollHandler = () => {
        const element = document.getElementsByClassName('projects-list')
        if (element[0]) {
            element[0].scrollIntoView({ behavior: 'smooth' })
            setShowNav(false)
        }
    }
    const scroll2Handler = () => {
        const element = document.getElementsByClassName('about-section')
        if (element[0]) {
            element[0].scrollIntoView({ behavior: 'smooth' })
            setShowNav(false)
        }
    }
    const scroll3Handler = () => {
        const element = document.getElementsByClassName('contact-section')
        if (element[0]) {
            element[0].scrollIntoView({ behavior: 'smooth' })
            setShowNav(false)
        }
    }
    window.addEventListener('resize', () => { if (window.innerWidth ) setShowNav(false) })
    return(
        <nav className="navbar">
            <div className="logo">AD</div>
            <div className="links" style={ showNav ? { display: 'block' } : { display:''}}>
                <ul>
                    <li><a onClick={scroll2Handler}>about</a></li>
                    <li ><a onClick={scrollHandler}>projects</a></li>
                    <li><a onClick={scroll3Handler}>contact</a></li>
                </ul>
            </div>
            <div className='burger-menu' onClick={navHandler}>
                <span className={`lines ${showNav ? 'open' : ''}`}></span>
                <span className={`lines ${showNav ? 'open' : ''}`}></span>
                <span className={`lines ${showNav ? 'open' : ''}`}></span>
            </div>
        </nav>
    )
}  
export default Nav