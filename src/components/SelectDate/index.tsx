import { useState } from 'react';
import './styles.css';
import ButtonConsult from '../ButtonInverse';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onNewDate?: Function;
}

export default function SelectDate({ onNewDate }: Props) {

    const today = new Date;

    const [month, setMonth] = useState(today.getMonth());

    const [year, setYear] = useState(today.getFullYear());

    const [selectMonth, setSelectMonth] = useState(today.getMonth());

    const [selectYear, setSelectYear] = useState(today.getFullYear());

    const [selectDate, setSelectDate] = useState<boolean>(false);

    interface Months {
        id: number,
        name: string
    }

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
        return (months.at(selectMonth)?.id != 1) ? setSelectMonth(selectMonth - 1) : selectMonth;
    }

    function handleNextMonth() {
        return (months.at(selectMonth)?.id != 12) ? setSelectMonth(selectMonth + 1) : selectMonth;
    }

    function handleBackYear() {
        return selectYear > 2020 ? setSelectYear(selectYear -1) : selectYear;
    }

    function handleNextYear() {
        return selectYear < 2023 ? setSelectYear(selectYear +1) : selectYear;
    }

    function handleClick() {
        const newMonth = selectMonth;
        const newYear = selectYear;
        setMonth(newMonth);
        setYear(newYear);
        setSelectDate(false);
        if (onNewDate) {
            onNewDate(newMonth, newYear);
        }
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
                            <div className="exp-month">{months.at(selectMonth)?.name}</div>
                            <p className="exp-btn-next-month" onClick={handleNextMonth}>&#8680;</p>
                        </div>
                        <div className="exp-choose-year">
                            <p className="exp-btn-back-year" onClick={handleBackYear}>&#8678;</p>
                            <div className="exp-year">{selectYear}</div>
                            <p className="exp-btn-next-year" onClick={handleNextYear}>&#8680;</p>
                        </div>
                    </div>
                    <div className="exp-btn-consult">
                        <div onClick={handleClick}><ButtonConsult text="Consultar" /></div>
                    </div>
                </form>
            }
        </div>
    )
}