import { useState } from 'react';
import './styles.css';
import ButtonConsult from '../ButtonInverse';
import { Link } from 'react-router-dom';

export default function SelectDate() {

    const today = new Date;

    const [month, setMonth] = useState(today.getMonth());

    const [year, setYear] = useState(today.getFullYear());

    const [selectDate, setSelectDate] = useState<boolean>(false);

    interface Months {
        id: number,
        name: string
    }

    console.log(month);

    const months: Array<Months> = [
        { id: 1, name: "Janeiro"},
        { id: 2, name: "Fevereiro"},
        { id: 3, name: "Março"},
        { id: 4, name: "Abril"},
        { id: 5, name: "Maio"},
        { id: 6, name: "Junho"},
        { id: 7, name: "Julho"},
        { id: 8, name: "Agosto"},
        { id: 9, name: "Setembro"},
        { id: 10, name: "Outubro"},
        { id: 11, name: "Novembro"},
        { id: 12, name: "Dezembro"},
    ];

    function handleSelectDate(event: any) {
        event.preventDefault();
        return selectDate == false ? setSelectDate(true) : setSelectDate(false);
    }

    function handleBackMonth() {
        return (months.at(month)?.id != 1) ? setMonth(month - 1) : month;
    }

    function handleNextMonth() {
        return (months.at(month)?.id != 12) ? setMonth(month + 1) : month;
    }

    function handleBackYear() {
        return year > 2020 ? setYear(year -1) : year;
    }

    function handleNextYear() {
        return year < 2023 ? setYear(year +1) : year;
    }

    return(
        <div className="exp-select-date-container">
            <div onClick={handleSelectDate} className="exp-select-date">{months.at(month)?.name}/{year}</div>
            {
                selectDate &&
                <form>
                    <div className="exp-month-year">
                        <div className="exp-choose-month">
                            <p className="exp-btn-back-month" onClick={handleBackMonth}>&#8678;</p>
                            <div className="exp-month">{months.at(month)?.name}</div>
                            <p className="exp-btn-next-month" onClick={handleNextMonth}>&#8680;</p>
                        </div>
                        <div className="exp-choose-year">
                            <p className="exp-btn-back-year" onClick={handleBackYear}>&#8678;</p>
                            <div className="exp-year">{year}</div>
                            <p className="exp-btn-next-year" onClick={handleNextYear}>&#8680;</p>
                        </div>
                    </div>
                    <div className="exp-btn-consult">
                        <Link to="/expenses">
                            <ButtonConsult text="Consultar" />
                        </Link>
                    </div>
                </form>
            }
        </div>
    )
}