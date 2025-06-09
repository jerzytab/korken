import { useState } from 'react';

export function WorkersMember({ person, onToggleCheck, onEditPerson }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
      rola: person.rola,
      doswiadczenie: person.doswiadczenie,
      opis: person.opis,
  });
  
  function handleEditClick() {
    setIsEditing(true);
  };
  
  function  handleCancelClick() {
    setIsEditing(false);
    setEditData({
        rola: person.rola,
        doswiadczenie: person.doswiadczenie,
        opis: person.opis,
    });
  };
  
  function  handleSaveClick() {
    onEditPerson(person.id, editData);
    setIsEditing(false);
  };
 
  function handleChange(e) {
    const { name, value } = e.target;
    setEditData(prev => ({...prev, [name]: name === 'doswiadczenie' ? parseInt(value) || 0 : value }));
  }
 
  function formatDate(date) {
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
          <div>Dodano: {formatDate(person.dateAdd)}</div>
          {person.dateModificatuin && <div className="text-muted">Zmieniono: {formatDate(person.dateModificatuin)}</div>}
      </td>
      <td>
        {isEditing ? (
          <>
            <button className="btn btn-success btn-sm mb-1 d-block w-100" onClick={handleSaveClick}>Zapisz</button>
            <button className="btn btn-secondary btn-sm d-block w-100" onClick={handleCancelClick}>Anuluj</button>
          </>
        ) : (
          <button className="btn btn-secondary btn-sm" onClick={handleEditClick}>Edytuj</button>
        )}
      </td>
    </tr>
  );
}