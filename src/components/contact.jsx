import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import gmail from '../assets/gmail.svg'
const Contact = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.open('mailto:adenyusuf332@gmail.com', '_blank');
      };
    return (
        <section className='contact-section'>
            <h2 className="about-title">contact me</h2>
            <div className='icons-container'>
                <div><a href="https://github.com/Adnanyu" target='_blank' rel="noreferrer" o><img src={github} alt="github-contact" /></a></div>
                <div><a target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin-contact" /></a></div>
                <div onClick={handleClick}><a  target='_blank' rel="noreferrer" ></a><img src={gmail} alt="email-contact" /></div>
            </div>
        </section>
    )
}
export default Contact