import ButtonInverse from '../ButtonInverse';
import './styles.css';

type Props = {
    message: string;
    id: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onDialogAnswer: Function;
}

export default function DialogConfirmation( { id, message, onDialogAnswer }: Props) {
    return(
        <div className="exp-dialog-background" onClick={() => onDialogAnswer(false, id)}>
            <div className="exp-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="exp-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(false, id)} >
                        <ButtonInverse text="Não" />
                    </div>
                    <div onClick={() => onDialogAnswer(true, id)} >
                        <ButtonInverse text="Sim" />
                    </div>   
                </div>
            </div>
        </div>
    )
}