import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { LoginScreen } from '../components/Screen/login/LoginScreen'
import { RegisterScreen } from '../components/Screen/login/RegisterScreen'
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <div>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Route exact path="/auth/register" component={RegisterScreen}/>

                    <Route path="/" component={DashboardRoutes}/>
                    </div>

                
                </Switch>    
            </Router>   
        </>
    )
}
