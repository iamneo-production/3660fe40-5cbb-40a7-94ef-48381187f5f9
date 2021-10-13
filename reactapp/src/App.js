import React from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import AdminMovie from './AdminMovie';
import {Route,Switch} from 'react-router-dom';

function App()
{
    return(
        <>
        <Switch>
            <Route path='/Login' component={Login}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path='/AdminMovie' component={AdminMovie}/>
        </Switch>
        </>

    );
}
export default App;