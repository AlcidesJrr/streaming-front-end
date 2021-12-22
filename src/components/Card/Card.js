import './Card.scss';
import { useNavigate} from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    const goFilme = () => {
        navigate(`/filme/${props.id}`)
    }

    return (
        <div className='card' onClick={goFilme}>
            <div onClick={goFilme}>
                <img src={props.cover} alt={props.title} />
            </div>
        </div>
    )
}

export default Card;