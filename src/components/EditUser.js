import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

export const EditUser = (props) => {

	const [selectedUser, setSelectedUser] = useState({
		id: '',
		name: ''
	});

	const { users, editUser } = useContext(GlobalContext);
	const history = useHistory();
	const currentUserId = props.match.params.id;
	
	useEffect(() => {
		const UserId = currentUserId;
		const selectedUser = users.find(user => user.id ===  UserId)
		setSelectedUser(selectedUser)
	}, [currentUserId, users])

	const onSubmit = () => {
		editUser(selectedUser)
		history.push('/');
	}

	const onChange = (e) => {
		setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
	}

	return (
			<Form onSubmit={ onSubmit }>
				<FormGroup>
					<Label>Name</Label>
					<Input name="name" value={ selectedUser.name } onChange={ onChange } type="text"></Input>
				</FormGroup>
				<Button type="submit">Update</Button>
				<Link to="/" className="btn btn-danger ml-2">Cancel</Link>
			</Form>
		)
}