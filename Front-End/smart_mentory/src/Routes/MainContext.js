import React, { createContext } from 'react';

export const AuthContext = createContext({});

export class AuthProvider extends React.Component {
    
    state = {
        user: {},
        username: '',
    }
    
    setUser = (value) => {
        this.setState((prevState) => ({user: value}))
        console.log(value)
    }
    
    render() {
        const { children } = this.props;
        const { user } = this.state.user;
        const { username } = this.state.username
        const { setUser } = this 
        return(
            <AuthContext.Provider value={{ username, user, setUser }}>
                {children}
            </AuthContext.Provider>
        )
    }
}