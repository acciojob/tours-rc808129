
import React from "react"
const Loading = ({loading})=>{

  return(<div>
    {loading && <h1>loading data...</h1>}

  </div>)
}

export default Loading