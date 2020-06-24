export default (state, action) => {
	switch(action.type){

		case 'ADD_USER':
		return{
			users: [ action.payload, ...state.users ]
		}

		case 'EDIT_USER':
		const updatedUser = action.payload;
		const updatedUsers = state.users.map(user => {
			if (user.id === updatedUser.id) {
				return updatedUser;
			}
			return user;
		})
		return{
			users: updatedUsers
		}

		case 'REMOVE_USER':
		return{
			users: state.users.filter(user => {
				return user.id !== action.payload
			})
		}

		default:
		return state
	}
}