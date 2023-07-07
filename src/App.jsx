// import { useState } from 'react'
import './App.css'
import Header from "./assets/components/Header/Header"
import AddTODO from "./assets/components/Todo/addTODO"
import ItemTODO from "./assets/components/Todo/itemTODO"
import FilterTODO from "./assets/components/Todo/filterTODO"


export default function App() {
  // return (
  //   <div>hOLA</div>
  // )
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <AddTODO />
      <ItemTODO />
      <FilterTODO />
    </div>
  )
}

