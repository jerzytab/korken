import { useState } from 'react';
 
export function AddPeople({ onAddPerson }) {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [rola, setRola] = useState('');
  const [doswiadczenie, setDoswiadczenie] = useState('');
  const [opis, setOpis] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imie || !nazwisko || !rola || !doswiadczenie) {
      alert('Proszę wypełnić wszystkie wymagane pola (Imię, Nazwisko, Rola, Doświadczenie).');
      return;
    }
    onAddPerson({ imie, nazwisko, rola, doswiadczenie: parseInt(doswiadczenie), opis });

    setImie('');
    setNazwisko('');
    setRola('');
    setDoswiadczenie('');
    setOpis('');
  };
 
  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <div className="row g-3">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Imię" value={imie} onChange={(e) => setImie(e.target.value)} required />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Nazwisko" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} required />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Rola" value={rola} onChange={(e) => setRola(e.target.value)} required />
        </div>
        <div className="col-md-3">
          <input type="number" className="form-control" placeholder="Doświadczenie (lata)" value={doswiadczenie} onChange={(e) => setDoswiadczenie(e.target.value)} required />
        </div>
        <div className="col-12">
          <textarea className="form-control" placeholder="Opis" value={opis} onChange={(e) => setOpis(e.target.value)} rows="3"></textarea>
        </div>
      </div>
      <div className="mt-3">
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </div>
    </form>
  );
}
 