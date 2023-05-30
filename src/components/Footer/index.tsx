import "./styles.css";
import IconLinkedIn from '../../assets/linkedin.png';
import IconGithub from '../../assets/github.png';

export default function Footer() {
    return(
        <div className="exp-footer">
            <p className="exp-footer-content">Desenvolvido por Rodrigo Ramos</p>
            <p>Contato:</p>
            <div className="exp-footer-img">
                <a href="https://www.linkedin.com/in/rodrigojoaoramos/"><img src={IconLinkedIn} alt="LinkedIn" /></a>
                <a href="https://github.com/rodrigojramos"><img src={IconGithub} alt="Github" /></a>
            </div>
        </div>
    )
}