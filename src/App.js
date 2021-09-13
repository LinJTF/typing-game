import React from 'react';

const App = () => {
    return(
        <div className="container">
            <div className="valid-keys">
                <span className="matched">Feli</span>
                <span className="remainder">pe</span>
            </div>
            <div className="typed-keys">
                aloaslaskaskoFe
            </div>
            <div className="completed-words">
                <ol>
                    <li>CIn</li>
                    <li>Engenharia</li>
                    <li>Computacao</li>
                </ol>
            </div>
        </div>
    )
};

export default App;