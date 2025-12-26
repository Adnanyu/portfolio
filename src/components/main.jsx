import Pdf from '../assets/Resume.pdf'
import TypingLoop from './TypeLoop'
const Main = () => {
    
    return (
        <main className='main-section'>
            <div className="main-text">
                <h1 className="main-header">Hello there! my name is <span style={{ color: 'rgba(255, 0, 0, 1)' }}>Adnan.</span></h1>
                <TypingLoop />
                <a href={Pdf} className='profile-links' target='_blank' rel='noopener noreferrer'>Resume</a> 
                <a href="https://github.com/Adnanyu" target='_blank' rel="noreferrer" className='profile-links'>GitHub</a>
            </div>
        </main>
    )
}
export default Main