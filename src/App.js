import logo from './logo.svg';
import './App.css';

const color ={
  color:'red',
  bacground: '#FFF',
  borerRadius:'10px',
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <h1>New dynamic Props: Simillar in Look Different in data</h1>

      <Friends name="Anup Roy"></Friends>
      <Friends name="Shemol" phone="01788888......"></Friends>
    </div>
  );
}

// create My componant
function Person(){
  return (
    <div className='container'>
          <p>Name: Arun chandra roy</p>
          <p>Address: Panchagarh</p>
    </div>
  )
}

// dynamic props practices 
function Friends(props){
  return (
    <div className='another'>
      <p>Name: {props.name}</p>
      <p>Phone:{props.phone}</p>
    </div>
  )
}

export default App;
