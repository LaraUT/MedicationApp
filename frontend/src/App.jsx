import { createBrowserRouter, RouterProvider } from "react-router-dom"

// RUTAS 
import Home from "./paginas/Home"
import Login from "./routes/Login"
import Registros from "./paginas/Registros"
import Tabla from "./paginas/Tabla"
import './index.css';
import {ContextoContextProvider} from './context/MainContext'


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
  },
 
 
])

function App() {

  return (
    <>
    <ContextoContextProvider>
      <div>
        <body>
          <RouterProvider router={router}/>
        </body>
      </div>
    </ContextoContextProvider>
    </>
  )
}

export default App
