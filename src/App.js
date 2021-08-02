import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Orders from './pages/Orders';

const navbarConfig = [
    {title: 'home', url: '/'},
    {title: 'about', url:'/about'},
    {title: 'orders', url:'/orders'}
]

const App = () => {
    return (
    
    <div>
    <Navbar config={navbarConfig}/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/orders' component={Orders} />
            <Redirect to ='/' />
        </Switch>
    </div>

    );
}

export default App;