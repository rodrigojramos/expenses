import SelectDate from '../../../components/SelectDate';
import './styles.css';
import DeleteIcon from '../../../assets/delete.svg';
import EditIcon from '../../../assets/edit.svg';

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
                        <div>
                            <table className="exp-table">
                                <thead>
                                    <th className="exp-padding">Dia</th>
                                    <th className="exp-txt-left scg-padding">Descrição</th>
                                    <th className="exp-padding">Valor</th>
                                    <th></th>
                                    <th></th>
                                </thead>
                                <tbody>
                                <tr>
                                        <td className="exp-padding">26</td>
                                        <td className="exp-txt-left scg-padding">Conta de água</td>
                                        <td className="exp-padding">R$ 200,00</td>
                                        <td className="exp-padding"><img src={EditIcon} alt="Editar" /></td>
                                        <td><img src={DeleteIcon} alt="Deletar" /></td>
                                    </tr>
                                    <tr>
                                        <td className="exp-padding">26</td>
                                        <td className="exp-txt-left scg-padding">Conta de água</td>
                                        <td className="exp-padding">R$ 200,00</td>
                                        <td className="exp-padding"><img src={EditIcon} alt="Editar" /></td>
                                        <td><img src={DeleteIcon} alt="Deletar" /></td>
                                    </tr>
                                    <tr>
                                        <td className="exp-padding">26</td>
                                        <td className="exp-txt-left scg-padding">Conta de água</td>
                                        <td className="exp-padding">R$ 200,00</td>
                                        <td className="exp-padding"><img src={EditIcon} alt="Editar" /></td>
                                        <td><img src={DeleteIcon} alt="Deletar" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}