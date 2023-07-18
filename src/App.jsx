import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './redux/users/usersSlice';

function App() {
	const { isLoading, users } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers(5));
	}, [dispatch]);

	if (isLoading) return <div>Loading ...</div>;

	return (
		<main>
			<ul >
				{users.map((user) => (
					<li key={user.id.value} style={{ display: 'flex', gap:'10px' }}>
						<div>
            {user.name.title}
            </div>
            <div>
						{user.name.first}
            </div>
						{user.name.last}
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
