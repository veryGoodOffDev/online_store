import { observer } from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userApi";
import { BrowserRouter } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const  App = observer(() => {
  const {user} = useContext(Context)
  const [isLoading, setIsLoasding] = useState(true)

  useEffect(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setIsLoasding(false))
  },[])

  if(isLoading) {
    return <Spinner animation="grow"/>
  }
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}) 

export default App;
