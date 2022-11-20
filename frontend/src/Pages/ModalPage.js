import React from 'react';
// import './App.css';
import { StyledModal } from "../Components/reuseableModal.js";

function ModalPage() {
    const [isPopOpen, setIsPosOpen] = React.useState(false)

    return (
        <div className="App">
            <header className="App-header">
                <span
                    style={{
                        display: 'flex',
                        cursor: 'pointer',
                        fontSize: '22px',
                        backgroundColor: '#cfded8',
                        width: '100%'
                    }}
                    onClick={() => setIsPosOpen(!isPopOpen)}
                >
                    EDIT/UPDATE
                </span>
                <StyledModal
                    show={isPopOpen}
                    handleClose={() => setIsPosOpen(false)}
                >
                    <div style={{ border: '1px solid white' }}>

                        <h1 style={{ margin: '20px' }}> UPDATE </h1>

                    </div>

                </StyledModal>
            </header>
        </div >
    );
}

export default ModalPage;