import React, { useState } from 'react';

export function Test2(){
    const [list, setList] = useState(['Diego', 'Gabriel', 'Mayk']);

    function addToList() {
        setList(state => [...state, 'New name'])
    }

    return(
        <div>
            <button onClick={addToList}>Adicionar</button>
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}