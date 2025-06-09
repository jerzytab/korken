import {WorkersMember} from './workersMember';
 
export function WorkersList({ workers, onToggleCheck, onEditPerson }) {
  if (workers.length === 0) {
    return <p>Brak osób</p>;
  }
 
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle">
        <thead>
          <tr>
            <th style={{ width: '5%' }}></th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rola</th>
            <th>Doświadczenie</th>
            <th>Opis</th>
            <th>Data</th>
            <th style={{ width: '10%' }}>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((person) => (
            <WorkersMember
              key={person.id}
              person={person}
              onToggleCheck={onToggleCheck}
              onEditPerson={onEditPerson}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}