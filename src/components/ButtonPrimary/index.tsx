import './styles.css';

type Props = {
    text: string;
  };

export default function ButtonPrimary({ text }: Props) {
    return(
        <div>
            <div className="exp-btn-primary">{text}</div>
        </div>
    )
}