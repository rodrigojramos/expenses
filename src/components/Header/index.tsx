import './styles.css';
import LogoIcon from '../../assets/logo.png';

export default function Header() {
    return (
        <header>
            <div className="exp-header-container">
                <div className="exp-container">
                    <div className="exp-header-content">
                        <img className="exp-header-logo" src={LogoIcon} alt="Logo" />
                        <div className="exp-header-title">
                            <h1>Controle de gastos</h1>
                            <p>Desenvolvido por Rodrigo Ramos</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}