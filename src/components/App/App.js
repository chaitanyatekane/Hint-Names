import React from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component {

    state = {
        headerText: 'Using setState Will Change This',
    }

    render() {
        return (
            <div>
                <Header />
                <h1>{this.state.headerText}</h1>
                <button onClick={() => {
                    this.setState({
                        headerText: 'Chaitanya Changed This',
                    })
                }}>Change HeaderText</button>
            </div>
        );
    }
};

export default App;