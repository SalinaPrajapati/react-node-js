import React, { useState } from 'react';
import { Sidebar,Button } from '../primeReact';
import  LogInForm  from '../components/Account/LoginForm';


function Header(){
    const [visible, setVisible] = useState(false);
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card flex justify-content-left">
                <Sidebar visible={visible} onHide={() => setVisible(false)} style={{background: '#4c5b72', color: 'white'}}>
                    <p> Home</p>
                    <p>Contact</p>
                    <p>Blog</p>
                </Sidebar>
                <Button icon="pi pi-bars" severity="secondary" text style={{ fontSize: '0.75rem', color: 'white' }} raise onClick={() => setVisible(true)} />
            </div>
            <LogInForm /> 
        </div>
    )
}

export default Header;

