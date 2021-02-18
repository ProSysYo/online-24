import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const  App = () => { 
    const onClick = () => {
        console.log('Нажата кнопка');
    }   
    return (
        <div style={{marginLeft: 20}}>
            <div>
                <div>Кнопки:</div>
                <Button onClick={onClick}>Default</Button>
                <br/>
                <br/>
                <Button onClick={onClick} disabled>Disabled</Button>
                
                <br/>
                <br/>
                <Button onClick={onClick} danger>Danger</Button>
            </div>
            <div style={{width: '300px'}}>
                <div>Input:</div>
                <Input id='text1' type='text' placeholder='Input без label'/>
                <br/>                
                <Input id='text2' type='text' label='Name' placeholder='Input с label'/>
                <br/>                
                <Input id='text4' type='password' label='Name' placeholder='Input с label'/>
                <br/>                
                <Input id='text3' type='text' label='City' error='Ошибка' placeholder='Input с ошибкой'/>
            </div>
            
        </div>        
    );
}

export default App;
