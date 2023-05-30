import SelectDate from '../../../components/SelectDate';
import './styles.css';
import DeleteIcon from '../../../assets/delete.svg';
import EditIcon from '../../../assets/edit.svg';
import { ExpenseDTO } from '../../../models/expense';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Expenses() {

    const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);

    const [month, setMonth] = useState<number>(5);

    const [year, setYear] = useState<number>(2023);

    useEffect(() => {
        axios.get(`http://localhost:8080/expenses/${month}/${year}`)
        .then(response => {
            setExpenses(response.data.content);
            console.log(response.data.content);
        })
    }, [month, year]);

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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}