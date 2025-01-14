import { Outlet } from "react-router-dom"
import NavPane from "../components/NavPane"

const MainLayout = () => {
  return (
    <>
        <NavPane/>
        <Outlet/>
    </>
  )
}

export default MainLayout