import UserCard from ".../components/UserCard.jsx";

function Assignment2() {
  return (
    <div>
      <h1>Assignment 2</h1>

      <UserCard name="Ram" age={22} profession="Developer" />
      <UserCard name="Sita" age={21} profession="Designer" />
      <UserCard name="Hari" age={23} profession="Student" />
    </div>
  );
}

export default Assignment2;