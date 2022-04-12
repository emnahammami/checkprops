
import './App.css';
import Profile from "./profile/profile"
import Me from "./images/me.jpg"
function App() {
  const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a. Nascetur ridiculus mus mauris vitae ultricies leo integer. Tristique magna sit amet purus gravida quis blandit";
  function handleName() {
    alert("My name is Hammami emna!")
}
  return (
    <div className="App">
   <Profile fullname="Hammami emna" bio={lorem} profession="student"  image={Me} handlename={handleName}/>
    </div>
  );
}

export default App;
