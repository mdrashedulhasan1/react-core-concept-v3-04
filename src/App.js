import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const buttonStyle = {
    padding:'10px 20px',
    backgroundColor:'tomato',
    color:'white',
    margin: '20px',
  }
 const handleIncrement = ()=> {
    setCount(count+1);
  }
  const handleDecrement = ()=> {
    setCount(count-1);
  }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div className="App">
      {
        users.map(user => <User key={user.id} name={user.name} email={user.email}></User>)
      }
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement} style={buttonStyle}>Increment</button>
      <button onClick={handleDecrement} style={buttonStyle}>Decrement</button>
      <PersonInfo></PersonInfo>
      <PersonInfo2 name="Tapu" job="Web Developer"></PersonInfo2>
      <PersonInfo2 name="Rakib" job="Web Designer"></PersonInfo2>
      <PersonInfo2 name="Sarowal" job="Android Developer"></PersonInfo2>
      <PersonInfo3></PersonInfo3>
    </div>
  );
}


function PersonInfo() {
  const personOne = {
    name: 'Rashedul Hasan',
    job: 'Web Developer'
  }
  const personTwo = {
    name: 'Rakibul Hasan',
    job: 'Web Designer'
  }
  const personThree = {
    name: 'Sarowal Hossan',
    job: 'Android Developer'
  }
  const boxStyle = {
    border: '2px solid tomato',
    backgroundColor: 'gray',
    color: 'white'
  }
  return (
    <div style={boxStyle}>
      <h1 style={{ border: '2px solid blue', margin: '5px' }}>Person One Info {personOne.name} {personOne.job}</h1>
      <h1 style={{ border: '2px solid yellow', margin: '5px' }}>Person Two Info {personTwo.name} {personTwo.job}</h1>
      <h1 style={{ border: '2px solid green', margin: '5px' }}>Person Three Info {personThree.name} {personThree.job}</h1>
    </div>
  )
}

function PersonInfo2(props) {
  const boxStyle = {
    border: '2px solid tomato',
    backgroundColor: 'gray',
    color: 'white',
    marginTop: '20px'
  }
  return (
    <div style={boxStyle}>
      <h1 style={{ border: '2px solid blue', margin: '5px' }}>Person Info {props.name} {props.job}</h1>
    </div>
  )
}

function PersonInfo3() {
  const infos = [
    { name: 'Tapu', job: 'Graphic Designer', salary: '$1000' },
    { name: 'Rashedul', job: 'Web Developer', salary: '$3000' },
    { name: 'Hasan', job: 'Web Designer', salary: '$1500' },
  ]
  return (
    <div>
      {
        infos.map(info => <PersonInfo3Update name={info.name} job={info.job} salary={info.salary}></PersonInfo3Update>)
      }
    </div>
  )
}

function PersonInfo3Update(props) {
  const boxStyle = {
    border: '2px solid tomato',
    backgroundColor: 'gray',
    color: 'white',
    marginTop: '20px'
  }
  return (
    <div style={boxStyle}>
      <h1 style={{ border: '2px solid blue', margin: '5px' }}>Person Info {props.name} {props.job} {props.salary}</h1>
    </div>
  )
}

function User(props){
  const boxStyle = {
    border: '2px solid tomato',
    backgroundColor: 'gray',
    color: 'white',
    margin: '20px',
    borderRadius:'50px',
  }
  return(
    <div style={boxStyle}>
      <h1>Name:{props.name}</h1>
      <h1>Email:{props.email}</h1>
    </div>
  )
}

export default App;
