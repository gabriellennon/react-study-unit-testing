import React, { useState } from 'react';

export function Test2(){
    const [list, setList] = useState(['Diego', 'Gabriel', 'Mayk']);
    const [newItem, setNewItem] = useState('');

    function addToList() {
        //Call API simulation
        setTimeout(() => {
            setList(state => [...state, newItem])
        }, 500)
    }

    return(
        <div>
            <input 
                type="text" 
                value={newItem} 
                onChange={e => setNewItem(e.target.value)} 
                placeholder="New Name"
            />
            <button onClick={addToList}>Adicionar</button>
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}