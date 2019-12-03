import React from 'react';
import Header from './Header'

import ContestPreview from './ContestPreview'


class App extends React.Component {

    state = {
        pageHeader: 'Naming Contests'
    }

    render(){
        return (
            <div className="App">
                <Header message = {this.state.pageHeader} />
                <div>
                    {this.props.contests.map(contest=>
                       <ContestPreview {...contest} /> )}
                </div>
            </div>   
        );
    }
}

export default App;