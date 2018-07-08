import React from "react";
import ReactDOM from "react-dom";

import SearchBar from './components/search_bar';

const App = () => {
    return (
        <div>
            <h2>
                Dhiren : Hello to React ...
        </h2>
            <SearchBar />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector(".container"));