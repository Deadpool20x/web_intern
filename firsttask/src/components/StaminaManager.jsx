import { useState } from 'react';

const StaminaManager = () => {
    const [stamina, setStamina] = useState(100);
    const [clickCount, setClickCount] = useState(0);

    const handleWriteCode = () => {
        setClickCount((prev) => {
            const newCount = prev + 1;

            // Determine burn rate: Every 5th click (modulus) is -15, otherwise -2
            const burnAmount = newCount % 5 === 0 ? 15 : 2;

            setStamina((prevStamina) => {
                const nextStamina = prevStamina - burnAmount;
                return nextStamina < 0 ? 0 : nextStamina; // Constraint: Cannot go below 0
            });

            return newCount;
        });
    };

    const isBurnedOut = stamina <= 0;

    return (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #444' }}>
            <h3>Stamina: {stamina}%</h3>

            {/* Progress Bar for visual feedback */}
            <div style={{ width: '100%', bg: '#eee', height: '10px', marginBottom: '10px' }}>
                <div style={{
                    width: `${stamina}%`,
                    height: '100%',
                    backgroundColor: stamina > 20 ? '#4caf50' : '#f44336',
                    transition: 'width 0.3s ease'
                }} />
            </div>

            <button
                onClick={handleWriteCode}
                disabled={isBurnedOut}
                style={{
                    padding: '10px 20px',
                    cursor: isBurnedOut ? 'not-allowed' : 'pointer',
                    backgroundColor: isBurnedOut ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                {isBurnedOut ? "Burnout! Rest Required" : "Write Code"}
            </button>

            <p><small>Total lines written: {clickCount}</small></p>
        </div>
    );
};

export default StaminaManager;