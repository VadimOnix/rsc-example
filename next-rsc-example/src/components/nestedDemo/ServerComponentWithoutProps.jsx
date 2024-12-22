export const ServerComponentWithoutProps = async () => {
  let count = 0
  try {
    count = await fetch('http://localhost:3000/api/server-count', {method: "GET"}).then(res => res.json());
  } catch (error) {
    console.warn('[BuildTime Error]: ServerComponentWithoutProps try to fetch data from localhost');
  }
  return (
    <div>
      Now score = {count}
    </div>
  );
};
