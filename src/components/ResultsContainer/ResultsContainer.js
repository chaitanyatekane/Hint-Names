import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJSX = suggestedNames.map(suggestedName => {
        return <p>{suggestedName}</p>;
    });

    return (
        <div>
            <p>{suggestedNameJSX}</p>
        </div>
    );
};

export default ResultsContainer;