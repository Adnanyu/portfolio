import Pdf from '../assets/aden2.pdf'
const Main = () => {
    return (
        <main className='main-section'>
            <div className="main-text">
                <h1 className="main-header">hello there! I'am aden</h1>
                <p> I am a frontend developer.</p>
                <a href={Pdf} className='profile-links' target='_blank' rel='noopener noreferrer'>resume</a> 
                <a href="https://github.com/Adnanyu" target='_blank' rel="noreferrer" className='profile-links'>github</a>
            </div>
        </main>
    )
}
export default Main