import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import IconButton from './../IconButton/IconButton';

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
            <div>
                <div>Icons</div>
                <Icon name='edit' size={30}/>
                <br/>
                
                <Icon name='plus-square' size={20}/>
                <br/>

                <Icon name="align-right" />
                <br/>
                <Icon title="badge" size={30} name="award" />
            </div>  
            <div>
                <IconButton iconName='edit' iconSize={16} text='Редактировать'/>
                <br/>
                <IconButton iconName='plus-square' iconSize={16}/>
            </div>  
        </div>        
    );
}

export default App;
