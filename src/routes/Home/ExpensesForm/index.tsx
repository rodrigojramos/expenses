/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as expenseService from '../../../services/expenses-service';
import "react-datepicker/dist/react-datepicker.css";

export default function ExpensesForm() {

    const params = useParams();

    const navigate = useNavigate();

    const isEditing = params.expenseId !== 'add';

    const [formData, setFormData] = useState<any>({
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function(value: string) {
                return /^.{3,80}$/.test(value);
            },
            message: "Favor informar uma descrição de 3 a 80 caracteres"
        },
        amount: {
            value: "",
            id: "amount",
            name: "amount",
            type: "number",
            placeholder: "Valor",
            validation: function(value: any) {
                return Number(value) > 0;
            },
            message: "Favor informar um valor positivo"
        },
        date: {
            value: "",
            id: "date",
            name: "date",
            type: "text",
            placeholder: "Data",
            validation: function(value: string) {
                return value != "";
            },
            message: "Favor informar uma data correta! Exemplo: 2023-06-01"
        }
    })

    useEffect(() => {
        if(isEditing) {
            expenseService.findById(Number(params.expenseId))
                .then(response => {
                    setFormData(forms.updateAll(formData, response.data));
                })
        }
    }, [])

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if(forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);
        if(isEditing) {
            requestBody.id = params.expenseId;
        }

        console.log(requestBody);

        const request = isEditing
            ? expenseService.updateExpense(requestBody)
            : expenseService.insertExpense(requestBody);

        request
            .then(() => {
                navigate("/expenses/");
            })
    }

    return(
        <main>
            <section>
                <form className="exp-form" onSubmit={handleSubmit}>
                    <div className="exp-form-container">
                        <div>
                            <h2>Dados da despesa</h2>
                            <div className="exp-form-inputs">
                                <div>
                                    <FormInput 
                                        {...formData.description}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                    <div className="exp-form-error">{formData.description.message}</div>
                                </div>
                                <div>
                                    <FormInput 
                                        {...formData.amount}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                    <div className="exp-form-error">{formData.amount.message}</div>
                                </div>
                                <div>
                                    <FormInput
                                        { ...formData.date}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                    <div className="exp-form-error exp-form-date">{formData.date.message}</div>
                                </div>
                            </div>
                        </div>
                        <div className="exp-form-buttons">
                            <div className="exp-form-btn-cancel">
                                <Link to="/expenses">
                                    <button>Cancelar</button>
                                </Link>
                            </div>
                            <div className="exp-form-btn-save">
                                <button type="submit">Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}