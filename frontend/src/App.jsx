import { createBrowserRouter, RouterProvider } from "react-router-dom"

// RUTAS 
import Login from "./routes/Login"
import Registros from "./paginas/Registros"
import Tabla from "./paginas/Tabla"


const router = createBrowserRouter([
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/registros",
    element: <Registros/>
  },
  {
    path:"/",
    element: <Tabla/>
  }
 
 
])

function App() {

  return (
    <>
    <div>
      <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
