import '@blueprintjs/core/lib/css/blueprint.css';
import { Drawer, Classes } from "@blueprintjs/core";
import { useState } from 'react';
import Layout from './Layout';
import Form from './Form';
  
function NewNote() {
    const [close, setClose]=useState(true);
    return (
        <div style={{
            display: 'block', width: 400, padding: 30
        }}>
        <Layout/>
        
            <Drawer
                isOpen={close}
                onClose={() => setClose(false)}
                icon="menu-open"
                title="New Note"
            >
                <div className={Classes.DRAWER_BODY}>
                    <div className={Classes.DIALOG_BODY}>
                       <Form />
  
                    </div>
                </div>
                <div className={Classes.DRAWER_FOOTER}></div>
            </Drawer>
        </div >
    );
}
  
export default NewNote;