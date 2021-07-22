import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJSX = suggestedNames.map((suggestedName) => {
        return <p key={suggestedName}>{suggestedName}</p>;
    });

    return (
        <div className="results-container">{suggestedNameJSX}</div>
    );
};

export default ResultsContainer;