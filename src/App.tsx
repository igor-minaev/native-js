import React from 'react';
import './App.css';


function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
    const users = [{id: 231, name: 'Dimych'}, {id: 34324, name: 'Sveta'}, {id: 546366, name: 'Katya'},
        {id: 67876, name: 'Viktor'}, {id: 46768, name: 'Ignat'}]
    const liElements = users.map(u => <li key={u.id}>{u.name}</li>)
    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
