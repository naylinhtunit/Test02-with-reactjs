import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
	users: []
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer ( AppReducer, initialState );

	// Remove action
	const removeUser = (id) => {
		dispatch({
			type: 'REMOVE_USER',
			payload: id
		})
	}

	// Add action
	const addUser = (user) => {
		dispatch({
			type: 'ADD_USER',
			payload: user
		})
	}

	// Edit action
	const editUser = (user) => {
		dispatch({
			type: 'EDIT_USER',
			payload: user
		})
	}

	return(
			<GlobalContext.Provider
				value={{ 
					users: state.users,
					removeUser,
					addUser,
					editUser
				}}
			>
				{ children }
			</GlobalContext.Provider>
		)
} 