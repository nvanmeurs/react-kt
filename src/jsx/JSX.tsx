export const JSX = () => {
  const appName = 'Demo app';
  const fruits = ['apple', 'orange', 'banana'];

  return (
    <>
      <h1 style={{ color: 'darkgrey' }}>{appName}</h1>
      <p className="appDescription">Description</p>
      {fruits.map((fruit, i) => (
        <p key={i}>{fruit}</p>
      ))}
    </>
  );
};
