const College = (props)=>{
    return(<>
    
    <h1>my college name is {props.name}</h1>
    <h1>seats available {props.seats}</h1>
    <h1>fees {props.fees}</h1>
    <h1>city {props.city}</h1>
    
    </>);
}

export default College;