import { Link } from 'react-router-dom';
import ButtonStart from '../../../components/ButtonPrimary';
import './styles.css';

export default function Welcome() {
    return(
        <div className="exp-container">
            <div className="exp-welcome-container">
                <h2>Bem-vindo!</h2>
                <div className="exp-welcome-btn">
                    <Link to="/expenses">
                        <ButtonStart text="Iniciar" />
                    </Link>
                </div>
            </div>
        </div>
    )
}