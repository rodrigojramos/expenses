import SelectDate from '../../../components/SelectDate';
import './styles.css';
import DeleteIcon from '../../../assets/delete.svg';
import EditIcon from '../../../assets/edit.svg';
import { ExpenseDTO } from '../../../models/expense';
import { useEffect, useState } from 'react';
import ButtonInverse from '../../../components/ButtonInverse';
import SearchBar from '../../../components/SearchBar';
import * as expenseService from '../../../services/expenses-service';
import DialogConfirmation from '../../../components/DialogConfirmation';
import { Link, useNavigate } from 'react-router-dom';

export default function Expenses() {

    const navigate = useNavigate();

    const today = new Date;

    const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);

    const [expenseDescription, setExpenseDescription] = useState("");

    const [month, setMonth] = useState<number>(today.getMonth() + 1);

    const [year, setYear] = useState<number>(today.getFullYear());

    const [noExpense, setNoExpense] = useState<boolean>(false);

    const [total, setTotal] = useState<number>(0);

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?",
    });

    const [deletedExpense, setDeletedExpense ] = useState<boolean>(false);

    useEffect(() => {
        expenseService.findExpensesRequest(month, year, expenseDescription)
        .then(response => {
            setExpenses(response.data.content);
            
            setDeletedExpense(false);
            const obj = response.data.content;
            let sum = 0;
            // eslint-disable-next-line prefer-const
            for (let value of obj) {
                console.log(value.amount);
                sum = sum + value.amount;
                setTotal(sum);
            }

            response.data.content.length == 0 ? setNoExpense(true) : setNoExpense(false);
        })
    }, [month, year, noExpense, expenseDescription, deletedExpense]);

    function handleNewDate(newMonth: number, newYear: number) {
        setMonth(newMonth +1);
        setYear(newYear);
    }

    function handleSearch(searchText: string) {
        setExpenseDescription(searchText);
    }

    function handleDeleteClick(expenseId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: expenseId, visible: true});
    }

    function handleUpdateClick(expenseId: number) {
        navigate(`/expenses/${expenseId}`);
    }

    function handleDialogConfirmationAnswer(asnwer: boolean, expenseId: number) {
        if(asnwer) {
            expenseService.deleteById(expenseId)
            .then(() => {
                setDeletedExpense(true);
            })
        }
        setDialogConfirmationData({ ...dialogConfirmationData, visible: false})
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
                            <SearchBar onSearch={handleSearch}/>
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
                                                    <td className="exp-padding"><img onClick={() => handleUpdateClick(expense.id)} src={EditIcon} alt="Editar" /></td>
                                                    <td><img onClick={() => handleDeleteClick(expense.id)} src={DeleteIcon} alt="Deletar" /></td>
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
                                    <p>Nenhuma despesa encontrada neste mês!</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="exp-btn-add-and-amount">
                        <div className="exp-btn-add">
                            <Link to="/expenses/add">
                                <ButtonInverse text="Add +"/>
                            </Link>
                        </div>
                        {
                            !noExpense &&
                            <div className="exp-amount">
                                <p className="exp-total">Total:</p>
                                <p className="exp-value">R$ {total.toFixed(2)}</p>
                            </div>
                        }
                    </div>
                    {
                        dialogConfirmationData.visible &&
                        <DialogConfirmation
                            message={dialogConfirmationData.message}
                            id={dialogConfirmationData.id}
                            onDialogAnswer={handleDialogConfirmationAnswer}
                        />
                    }
                </div>
            </section>
        </main>
    )
}