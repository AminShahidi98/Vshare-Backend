import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Create from './create_room/create_room'
import Homepage from './Component/Homepage'
import Login from './Components/signup-login/signup-login'

import Chat from './chatroom/chat_room'

import Start from './Strartpage/Startpage'
import About from './About/About'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/create" component={Create} />
                <Route path="/homepage" component={Homepage} />
                <Route path="/login" component={Login} />

                <Route exact path="/group/:id"  component={Chat} />


                        <Route path="/startpage" component={Start} />
    
                  
               
                <Route path="/about" component={About} />

            </div>
        </BrowserRouter>
 
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)
//serviceWorker.unregister();