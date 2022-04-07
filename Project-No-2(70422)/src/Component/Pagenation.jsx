import axios from "axios";
import React, { useState, useEffect } from "react";
import _ from "lodash"

const Pagination = () => {
  const [state, setState] = useState([]);
  const [paginated, setPaginated] = useState([])
  const [currentpage, setCurrentPage] = useState(1);
  const [list, setList] = useState(true)
  const [mode, setMode] = useState(false)
const togglemode=()=>{
  if(mode === true){
    setMode(false)
  }else{
    setMode(true)
    
  }
}
  
  const pageSize = 6;
  const pageCount = state? Math.ceil(state.length / pageSize) : 0
  const pages = _.range(1, pageCount + 1)
  
  const pagination = (pageN) => {
      setCurrentPage(pageN)
      const startIndex = (pageN -1)* pageSize;
      const paginatedPost = _(state).slice(startIndex).take(pageSize).value()
      setPaginated(paginatedPost)
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
          setState(res.data)
          setPaginated(_(res.data).slice(0).take(pageSize).value())
        });
  }, []);

 

 
  return (
    <div className={` ${mode===true?"bg-dark":null}`}>
        <div className="button_holder my-4">
            <div>
               
            <h1>List View</h1>
           <button type="checkbox" onClick={togglemode} className={`${mode===false?"btn-dark":"btn-light"}`}
             > 
             Change Mode
           </button>
            </div>

        </div>
      <div className="row p-2">
        {
        paginated.map((ele, i) => {
          if(list === true ){
           return (
            <div className="card m-3" key={i} id='col'>
              <div className="card-body">
                <h5 className="card-title">{ele.id}. {ele.title}</h5>
                <p className="card-text">{ele.body}</p>
              </div>
            </div>
          );}
          })
       
        }
         <div className="m-2">
         <nav className="d-flex justify-content-center">
         <ul className="pagination">
         {
          pages.map((page) => {
            
              return <li className={
                  page === currentpage ? "page-item active" : "page-item"
              }>
                  <p className="page-link"
                  onClick={() => pagination(page)}>{page}</p>
              </li>
          })
         }
         </ul>
     </nav>
         </div>
      </div>
    
      
    </div>
  );
};

export default Pagination;
