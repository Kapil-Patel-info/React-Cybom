
import College from "./College";

const obj = {
  name : "LNCT",
  fees : 5600,
  seats : 46,
  city : "Bhopal"

}



const App = () => {
  return (
    <>

    
<College name= {obj.name} seats = {obj.seats}  fees= {obj.fees} city = {obj.city}/>

    </>
  );
};

export default App;
