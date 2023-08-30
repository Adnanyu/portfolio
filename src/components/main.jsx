import Pdf from '../assets/Resume.pdf'
const Main = () => {
    return (
        <main className='main-section'>
            <div className="main-text">
                <h1 className="main-header">hello there! I'am aden</h1>
                <p> I am a full-stack developer.</p>
                <a href={Pdf} className='profile-links' target='_blank' rel='noopener noreferrer'>Resume</a> 
                <a href="https://github.com/Adnanyu" target='_blank' rel="noreferrer" className='profile-links'>Github</a>
            </div>
        </main>
    )
}
export default Main