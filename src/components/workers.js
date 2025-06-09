import React, { useState } from 'react';

export function Workers() {
    const [selectedWorker, setSelectedWorker] = useState("Wszyscy");
    
    const workerTypes = ["Wszyscy", "Aktor", "Reżyser", "Operator", "Inni"];

    function handleSelection(e) {
        setSelectedWorker(e.target.value);
    };

    return(
        <div>
            <h1>Pracownicy</h1>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                {workerTypes.map((worker, index) => (
                    <>
                        <input 
                            key={index}
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id={`btnradio${index}`}
                            value={worker}
                            autocomplete="off"
                            checked={selectedWorker === worker}
                            onChange={handleSelection} />
                            
                            <label 
                                className="btn btn-outline-primary"
                                htmlFor={`btnradio${index}`}>
                                {worker}
                        </label>
                    </>
                ))}
            </div>
        </div>
    );
}