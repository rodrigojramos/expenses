import ButtonStart from '../../components/ButtonStart';
import './styles.css';

export default function Home() {
    return(
        <div className="exp-container">
            <div className="exp-home-container">
                <h2>Bem-vindo!</h2>
                <div className="exp-home-btn">
                    <ButtonStart />
                </div>
            </div>
        </div>
    )
}