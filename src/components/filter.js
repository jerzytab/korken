const roles = ['Wszyscy', 'Aktor', 'Reżyser', 'Operator', 'Inni'];
 
export function Filter({ currentFilter, onFilterChange }) {
  return (
    <div>
      {roles.map((role) => (
        <button
          key={role}
          type="button"
          className={`btn me-2 ${currentFilter === role ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onFilterChange(role)}
        >
          {role}
        </button>
      ))}
    </div>
  );
}
 