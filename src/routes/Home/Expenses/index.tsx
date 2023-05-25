import SelectDate from '../../../components/SelectDate';
import './styles.css';

export default function Expenses() {
    return(
        <main>
            <section className="exp-expenses-section">
                <div className="exp-container">
                    <div className="exp-expenses-container">
                        <h2>Despesas</h2>
                        <div>
                            <SelectDate />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}