import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Header from './Header';
import StreamCreate from './Streams/StreamCreate';
import StreamShow from './Streams/StreamShow';
import StreamList from './Streams/StreamList';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';


class App extends React.Component{
    render(){
       return (
            <div className="ui container">

                <BrowserRouter>
                    <Route path="/" component={Header}/>
                    <Route exact path="/" component={StreamList}/>
                    <Route exact path="/streams/new" component={StreamCreate} />
                    <Route exact path="/streams/show" component={StreamShow}/>
                    <Route exact path="/streams/edit" component={StreamEdit}/>
                    <Route exact path="/streams/delete" component={StreamDelete}/>
                    
                </BrowserRouter>
            </div>
       )
    }
}

export default App;