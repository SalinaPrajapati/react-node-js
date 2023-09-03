import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


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
            <Button label="Sign Up" severity="secondary" text style={{ fontSize: '0.75rem', color: 'white' }} onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
            <div className="flex flex-column gap-2">
            <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
            </div>
            </p>
            </Dialog>
            </div>
        </div>
    )
}

export default Header;

