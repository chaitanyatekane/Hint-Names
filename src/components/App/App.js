import React from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component {

    state = {
        headerText: 'Hint Names',
    }

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
            </div>
        );
    }
};

export default App;