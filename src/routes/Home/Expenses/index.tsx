import SelectDate from '../../../components/SelectDate';
import './styles.css';
import DeleteIcon from '../../../assets/delete.svg';
import EditIcon from '../../../assets/edit.svg';
import { ExpenseDTO } from '../../../models/expense';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonInverse from '../../../components/ButtonInverse';

export default function Expenses() {

    const today = new Date;

    const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);

    const [month, setMonth] = useState<number>(today.getMonth());

    const [year, setYear] = useState<number>(today.getFullYear());

    const [noExpense, setNoExpense] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/expenses/${month}/${year}`)
        .then(response => {
            setExpenses(response.data.content);
            response.data.content.length == 0 ? setNoExpense(true) : setNoExpense(false);
        })
    }, [month, year, noExpense]);

    function handleNewDate(newMonth: number, newYear: number) {
        setMonth(newMonth +1);
        setYear(newYear);
    }

    return(
        <main>
            <section className="exp-expenses-section">
                <div className="exp-container">
                    <div className="exp-expenses-container">
                        <h2>Despesas</h2>
                        <div>
                            <SelectDate onNewDate={handleNewDate} />
                        </div>
                        <div>
                            {
                                !noExpense &&
                                <table className="exp-table">
                                    <thead>
                                        <tr>
                                            <th className="exp-padding">Dia</th>
                                            <th className="exp-txt-left scg-padding">Descrição</th>
                                            <th className="exp-padding">Valor</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            expenses.map(expense => (
                                                <tr key={expense.id}>
                                                    <td className="exp-padding">{expense.date.slice(8)}</td>
                                                    <td className="exp-txt-left scg-padding">{expense.description}</td>
                                                    <td className="exp-padding">R$ {expense.amount.toFixed(2)}</td>
                                                    <td className="exp-padding"><img src={EditIcon} alt="Editar" /></td>
                                                    <td><img src={DeleteIcon} alt="Deletar" /></td>
                                                </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                            }
                            {
                                noExpense &&
                                <div className="exp-msg-none-expenses">
                                    <p>Nenhuma despesa adicionada neste mês!</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="exp-btn-add-and-amount">
                        <div className="exp-btn-add">
                            <ButtonInverse text="Add +"/>
                        </div>
                        <div className="exp-amount">
                            <p className="exp-total">Total:</p>
                            <p className="exp-value">R$ 5.000,00</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}