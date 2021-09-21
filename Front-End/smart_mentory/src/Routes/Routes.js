
import React, {useContext} from 'react'
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from '../View/Login'
import Home from '../View/Home'
import CorporateDevices from '../View/CorporateDevices'
import CorporateUsers from '../View/CorporateUsers'
import { AuthContext } from './MainContext'

export default function Routes() {
    const { user }  = useContext(AuthContext)
    console.log(user)
    /*
        <=====================================================>
            REQUISIÇÃO PARA O BACK-END + VALIDAÇÃO DO TOKEN
        <=====================================================>
    */


    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            { ...rest }
            render={() => true
                ?  <Component {...rest}/> 
                :  <Redirect to="/"/>
            }
        />
    )

    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute exact path="/home" component={Home}/>
                    <PrivateRoute exact path="/devices" component={CorporateDevices}/>
                    <PrivateRoute exact path="/users" component={CorporateUsers}/>
                </Switch>
            </BrowserRouter>
    )
}
