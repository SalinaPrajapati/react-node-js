import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

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
            <div>
            <Button label="Sign Up" severity="secondary" text style={{ fontSize: '0.75rem', color: 'white' }} />
            </div>
        </div>
    )
}

export default Header;

