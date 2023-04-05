import styles from './Card.module.scss';
import clsx from 'clsx';
import {useDispatch} from 'react-redux';
import {toggleCardFavorite, removeCard} from '../../redux/cardsRedux';

const Card = props => {
	const dispatch = useDispatch();
	const handleFavorite = e => {
		e.preventDefault();
		dispatch(toggleCardFavorite(props.id));
	};
	const handleRemove = e => {
		e.preventDefault();
		dispatch(removeCard(props.id));
	};
	return (
		<li className={styles.card}>
			{props.title}
			<div>
				<button onClick={handleFavorite} className={clsx(styles.button, props.isFavorite && styles.isActive)}>
					<i className={'fa fa-star-o'} />
				</button>
				<button onClick={handleRemove} className={styles.button}>
					<i className={'fa fa-trash-o'} />
				</button>
			</div>
		</li>
	);
};

export default Card;