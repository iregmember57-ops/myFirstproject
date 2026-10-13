
import "./App.css";
import UserCard from "./UserCard";
function App() {
  const name = "Ali";
  const age = "24";

  return (
    <div className="container">
      <div className="profile-card">
        <h1>Hello Ali!</h1>
        <p>My name is <span>{name}</span></p>
        <p>My age is <span>{age}</span></p>
      </div>
        <UserCard/>
    </div>

  
  );
}

export default App;
