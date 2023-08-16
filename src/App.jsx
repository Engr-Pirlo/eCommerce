import { Outlet } from "react-router-dom"

function App() {
 

  return (
   <div className="tex-lg">
    <h1>this is header</h1>

    <Outlet />

    <p>this Footer</p>
       
   </div>
  )
}

export default App
