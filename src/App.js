import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4} from 'uuid'
import { AddPeople } from './components/addPeople.js';
import { Sort } from './components/sort.js';
import { WorkersList } from './components/workersList.js';
import { RoleStatistic } from './components/roleStatistic.js';
import { initialWorkers } from './data/initialData.js';
import { Filter } from './components/filter.js'

import { useState, useMemo } from 'react';

export default function App() {
  const [workers, setWorkers] = useState([...initialWorkers])
  const [filter, setFilter] = useState("Wszyscy")
  const [sortOrder, setSortOrder] = useState("initial")

  function handleAddPerson(person) {
    const newPerson = {
      ...person,
      id: uuidv4(),
      checked: false,
      dateAdd: new Date(),
      dateModificatuin: null
    }

    setWorkers([...workers, newPerson])
  }

  function handleToogleCheck(id) {
    setWorkers(
      workers.map((person) => 
        person.id == id ? {
          ...person,
          checked: !person.checked
        }
        : person
      )
    )
  }

  function handleDeleteSelected() {
    setWorkers(
      workers.filter((person) => !person.checked)
    )
  }

  function handleEditPerson(id, updateDate) {
      setWorkers.map(person => 
        person.id == id ? {
          ...person,
          ...updateDate,
          dateModificatuin: new Date()
        }
        : person
      )
  }

  function handleRestList() {
    setWorkers([...initialWorkers])
    setFilter("Wszyscy")
    setSortOrder("initial")
  }

  const displayedWorkers = useMemo(() => {
    const filtered = workers.filter(person => {
      if (filter === 'Wszyscy') return true;
      if (filter === 'Inni') {
        return !['Aktor', 'Reżyser', 'Operator'].includes(person.rola);
      }
      return person.rola === filter;
    });
 

    if (sortOrder === 'initial') {
      return filtered; 
    }
    
    const sorted = [...filtered];
    sorted.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.doswiadczenie - b.doswiadczenie;
      } else {
        return b.doswiadczenie - a.doswiadczenie;
      }
    });
 
    return sorted;
  }, [workers, filter, sortOrder]);

 return (
    <div className="container mt-4">
      <h2 className="mb-3">Dodaj osobę</h2>
      <AddPeople onAddPerson={handleAddPerson} />
 
      <h2 className="mt-5 mb-3">Pracownicy</h2>
      <Filter currentFilter={filter} onFilterChange={setFilter} />
 
      <h2 className="mt-4 mb-3">Sortuj</h2>
      <Sort onSortChange={setSortOrder} />
      
      <h2 className="mt-4 mb-3">Lista ekipy</h2>
      <WorkersList
        workers={displayedWorkers}
        onToggleCheck={handleToogleCheck}
        onEditPerson={handleEditPerson}
      />
 
      <h2 className="mt-4 mb-3">Statystyki ról</h2>
      <RoleStatistic workers={workers} />
 
      <div className="mt-4">
        <button className="btn btn-danger me-2" onClick={handleDeleteSelected}>
          Usuń zaznaczone
        </button>
        <button className="btn btn-secondary" onClick={handleRestList}>
          Resetuj listę
        </button>
      </div>
    </div>
  );
}