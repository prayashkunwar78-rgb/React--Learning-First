function UserCard({ name, age, profession }) {
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

export default UserCard;