import { useState} from 'react'
import './App.css'
import CardContainer from './CardContainer';
function App() {

  const[category,setCategory] = useState("general");
  
  
  return (
    <>
      <div className="Navbar">
       <nav className="navbar bg-body-tertiary">
         <div className="container-fluid">
           <a className="navbar-brand">News_App</a>
           <a className="nav-link"  onClick={()=> {setCategory("general")}}>General</a>
           <a className="nav-link"  onClick={()=> {setCategory("technology")}}>Technology</a>
           <a className="nav-link"  onClick={()=> {setCategory("business")}}>Buisness</a>
           <a className="nav-link"  onClick={()=> {setCategory("science")}}>Science</a>
           <a className="nav-link"  onClick={()=> {setCategory("health")}}>Health</a>
           <a className="nav-link"  onClick={()=> {setCategory("sports")}}>Sports</a>
           <a className="nav-link"  onClick={()=> {setCategory("entertainment")}}>Entertainment</a>

           
           <form className="d-flex" role="search">
             <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-primary" type="submit">Search</button>
           </form>
         </div>
       </nav>
      </div>

      <CardContainer category={category}/>
         

         
          
        

       

</>
  )

}
    
     


export default App
