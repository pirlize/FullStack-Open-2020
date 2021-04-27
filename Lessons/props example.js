import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  const name = 'Nickz'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="nick" age={26+10} />
      <Hello name={name} age ={age} />
      <Hello />
    </>
  )
}


export default App
