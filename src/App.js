import React from 'react'
import { data } from "./data";
import { Histogram } from "./Histogram";

function App() {
  return (
    <Histogram data={data} width={400} height={400} />
  )
}

export default App