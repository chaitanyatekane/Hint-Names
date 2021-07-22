import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

class App extends React.Component {

    state = {
        headerText: 'Hint Names',
    }

    handleInput = (inputText) => {
        console.log(inputText);
    };

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInput} />
            </div>
        );
    }
};

export default App;