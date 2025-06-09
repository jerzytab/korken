export function RoleStatistic({ workers }) {
  if (workers.length === 0) {
    return <p>Brak osób w statystykach</p>;
  }
 
  const stats = workers.reduce((acc, person) => {
    acc[person.rola] = (acc[person.rola] || 0) + 1;
    return acc;
  }, {});
 
  return (
    <ul>
      {Object.entries(stats).map(([role, count]) => (
        <li key={role}>
          {role}: {count}
        </li>
      ))}
    </ul>
  );
}