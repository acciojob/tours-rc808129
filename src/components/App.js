import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";


const App = () => {

 const [loading, setLoading] = useState(true);
const [tours, setTours] = useState([]);



  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    console.log("sdhfosdafjo")
    setTours(newTours);
  };

  useEffect(()=>{
    fetch("https://www.course-api.com/react-tours-project")
    .then((data)=> data.json())
   
    .then((data)=> {
      console.log(data)
      setTours(data)
      setLoading(false)
  })
    .catch((err)=> {
      console.log(err)
      setLoading(false)
  })

  }, [])

   if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
  return (
    <div>
      <h2>No tours left</h2>
      <button onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
}


    return(
       <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
     
    )
}
export default App;
