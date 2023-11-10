import { createBrowserRouter, RouterProvider } from "react-router-dom"

// RUTAS 
import Login from "./routes/Login"
import Registros from "./paginas/Registros"
import Tabla from "./paginas/Tabla"
import './index.css';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/registro",
    element: <Registros/>
  },
  {
    path:"/tabla",
    element: <Tabla/>
  }
 
 
])

function App() {

  return (
    <>
    <div>
    <body>
      <RouterProvider router={router}/>
      </body>
      </div>
    </>
  )
}

export default App
