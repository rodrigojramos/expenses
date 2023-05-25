import './styles.css';

type Props = {
    text: string;
  };

export default function ButtonInverse({ text }: Props) {
    return(
        <div>
            <div className="exp-btn-inverse">{text}</div>
        </div>
    )
}