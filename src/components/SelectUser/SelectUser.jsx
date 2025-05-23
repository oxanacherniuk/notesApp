import { useContext } from 'react';
import styles from './SelectUser.module.css';
import { UserContext } from '../../context/user.context';

function SelectUser() {
	const { userId, setUserId } = useContext(UserContext);

	const changeUser = (e) => {
		setUserId(Number(e.target.value));
	};
	
	return (
		<select className={styles['select']} name="user" id="user" value={userId} onChange={changeUser}>
			<option className={styles['option']} value="1">Оксана</option>
			<option className={styles['option']} value="2">Пользователь 2</option>
		</select>
	);
}

export default SelectUser;