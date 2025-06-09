import React, { useState } from 'react';
 
export function ListWorkers({ person, onToggleCheck, onEditPerson }) {
    const [isEditing, setIsEditing] = useState(false);

    const [editData, setEditData] = useState({
        rola: person.rola,
        doswiadczenie: person.doswiadczenie,
        opis: person.opis,
    });
  
    const handleEditClick = () => {
        setIsEditing(true);
    };
  
    const handleCancelClick = () => {
        setIsEditing(false);
        setEditData({
            rola: person.rola,
            doswiadczenie: person.doswiadczenie,
            opis: person.opis,
        });
    };
  
  const handleSaveClick = () => {
    onEditPerson(person.id, editData);
    setIsEditing(false);
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({...prev, [name]: name === 'doswiadczenie' ? parseInt(value) || 0 : value }));
  }
 
  const formatDate = (date) => {
      if (!date) return '';
      return new Date(date).toLocaleString('pl-PL');
  }
 
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="form-check-input"
          checked={person.checked}
          onChange={() => onToggleCheck(person.id)}
        />
      </td>
      <td>{person.imie}</td>
      <td>{person.nazwisko}</td>
      <td>
        {isEditing ? (
            <input type="text" name="rola" className="form-control" value={editData.rola} onChange={handleChange} />
        ) : (
            person.rola
        )}
      </td>
      <td>
        {isEditing ? (
            <input type="number" name="doswiadczenie" className="form-control" value={editData.doswiadczenie} onChange={handleChange} />
        ) : (
            person.doswiadczenie
        )}
      </td>
       <td>
        {isEditing ? (
            <input type="text" name="opis" className="form-control" value={editData.opis} onChange={handleChange} />
        ) : (
            person.opis
        )}
      </td>
      <td>
          <div>Dodano: {formatDate(person.dataDodania)}</div>
          {person.dataModyfikacji && <div className="text-muted">Zmieniono: {formatDate(person.dataModyfikacji)}</div>}
      </td>
      <td>
        {isEditing ? (
          <>
            <button className="btn btn-success btn-sm mb-1 d-block w-100" onClick={handleSaveClick}>Zapisz</button>
            <button className="btn btn-secondary btn-sm d-block w-100" onClick={handleCancelClick}>Anuluj</button>
          </>
        ) : (
          <button className="btn btn-warning btn-sm" onClick={handleEditClick}>Edytuj</button>
        )}
      </td>
    </tr>
  );
}