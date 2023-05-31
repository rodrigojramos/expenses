import { useState } from 'react';
import './styles.css';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSearch: Function;
}

export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    function handleChange(event: any) {
        setText(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(text);
    }

    function handleResetClick() {
        setText("");
        onSearch(text);
    }

    return(
        <div className="exp-search-bar-container">
            <form className="exp-search-bar" onSubmit={handleSubmit}>
                <button type="submit">🔎︎</button>
                <input 
                    value={text}
                    type="text" 
                    placeholder="Descrição da despesa"
                    onChange={handleChange} />
                <button onClick={handleResetClick} className="exp-border-side">🗙</button>
            </form>
        </div>
    );

}