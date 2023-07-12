import { useState } from 'react'
import Header from "./assets/components/Header/Header"
import List from "./assets/components/Todo/List"
import Form from "./assets/components/Todo/Form"
// import Content from "./assets/components/Todo/Content"
import Footer from "./assets/components/Footer/Footer"
import './App.css'


function App() {
  const [theme, setTheme] = useState("dark")
  const [list, setList] = useState([
    { id: 1, content: "Tomar agua", completed: true },
    { id: 2, content: "Finalizar práctica de estados y props", completed: false },
    { id: 3, content: "Tomar agua", completed: false },
    { id: 4, content: "Fran es el mejor profesor", completed: true },
    { id: 5, content: "Compartir lo aprendido con algún compañero", completed: false },
    { id: 6, content: "Probar pizza italiana", completed: false },
    { id: 7, content: "Terminar el Sprint 3", completed: false },
    { id: 8, content: "React es fácil", completed: false },
    // { id: 9, content: "Tomar agua", completed: true },
    // { id: 10, content: "Finalizar práctica de estados y props", completed: false },
    // { id: 11, content: "Tomar agua", completed: false },
    // { id: 12, content: "Fran es el mejor profesor", completed: true },
    // { id: 13, content: "Compartir lo aprendido con algún compañero", completed: false },
    // { id: 14, content: "Probar pizza italiana", completed: false },
    // { id: 15, content: "Terminar el Sprint 3", completed: false },
    // { id: 16, content: "React es fácil", completed: false },
    // { id: 17, content: "Tomar agua", completed: true },
    // { id: 18, content: "Finalizar práctica de estados y props", completed: false },
    // { id: 19, content: "Tomar agua", completed: false },
    // { id: 20, content: "Fran es el mejor profesor", completed: true },
    // { id: 21, content: "Compartir lo aprendido con algún compañero", completed: false },
    // { id: 22, content: "Probar pizza italiana", completed: false },
    // { id: 23, content: "Terminar el Sprint 3", completed: false },
    // { id: 24, content: "React es fácil", completed: false },
    // { id: 25, content: "Tomar agua", completed: true },
    // { id: 26, content: "Finalizar práctica de estados y props", completed: false },
    // { id: 27, content: "Tomar agua", completed: false },
    // { id: 28, content: "Fran es el mejor profesor", completed: true },
    // { id: 29, content: "Compartir lo aprendido con algún compañero", completed: false },
    // { id: 30, content: "Probar pizza italiana", completed: false },
    // { id: 31, content: "Terminar el Sprint 3", completed: false },
    // { id: 32, content: "React es fácil", completed: false },
  ]);

  let itemsLeft = list.filter((todo) => !todo.completed)
  let amountItemsLeft = itemsLeft.length

  return (
    <>
      <Header theme={theme} setTheme={setTheme}></Header>
      <div className='task-container'>
        <Form list={list} setList={setList}></Form>
        <List list={list} setList={setList}></List>
        <span>{amountItemsLeft} Items Left</span>
      </div>
      <Footer></Footer>
      {/* <Content theme={theme} /> */}
    </>
  )
}

export default App;