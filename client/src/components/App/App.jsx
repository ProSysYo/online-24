import React from 'react';
import Button from '../Button/Button';

const  App = () => { 
    const onClick = () => {
        console.log('Нажата кнопка');
    }   
    return (
        <div style={{marginLeft: 20}}>
            <div>Кнопки:</div>
            <Button onClick={onClick}>Default</Button>
            <br/>
            <br/>
            <Button onClick={onClick} disabled>Disabled</Button>
            
            <br/>
            <br/>
            <Button onClick={onClick} danger>Danger</Button>
        </div>        
    );
}

export default App;
