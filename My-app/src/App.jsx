const name = "kapil patel";
const age = 22;
const salary = 1000000;

const subject = <ul>
  <li>html</li>
  <li>css</li>
  <li>js</li>
  <li>React</li>
</ul>

const App = ()=>{

  return(
    <>
 <h1>My Name is {name} my age is {age} and my salary is {salary}</h1>
 <h1>Languages i know {subject}</h1>
 <h1>React fragments </h1>
    </>
   
  )
}


export default App;


