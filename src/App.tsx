import React from "react"
import Header from "./components/Header"
import Poster from "./components/Poster"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SearchItems from "./components/SearchItems"


function App() {


  return (
   <Router> 
      <Header/>
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/search" element = {<SearchItems/>} />
     {/*<Route path = "/search/:id"/>*/}
  </Routes>
</Router>
     
  )
}


const Home:React.FC<{}> = () => {
  return (<section className="w-full min-h-screen bg-black">
        <Poster/>
        </section>
     )
}

export default App
