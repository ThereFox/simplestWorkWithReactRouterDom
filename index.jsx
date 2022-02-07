import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";

import '/styles/index.css'


function NavList() {
    return(
        <nav>
            <Router>
                <RouterList  length={5} />
            </Router>
        </nav>
    )
}

function RouterList(props){
    let length = props.length;
    let list = [];

    for(let i = 1;i <= length;i++){
        list.push(<RouterListItem id={i} />)
    }

    return (
        <ul className="list">
                    {
                        list
                    }
                </ul>
    );
}

function RouterListItem(props){
    const id = props.id;
    return(
        <li key={`${id}`}>
            <NavLink to={`/${id}`}>{`${id}`}</NavLink>
            <SubList level={`${id}`}/>
        </li>
    )
}

function SubList(props){
    const level = props.level;
    let list = [];

    for(let i = 1;i <= 3;i++){
        list.push(<SubListItem level={level} id={i}/>)
    }
    return(
        <Routes>
            <Route path={`/${level}*`} element={
                <ul className="subList">
                    {
                        list
                    }
                </ul>
            } />
        </Routes>
    )
}
function SubListItem(props){
  const level = props.level;
  const id = props.id;
  return(
    <li key={level * 10 + id}>
        <NavLink to={`/${level}/${id}`}>
            {`${level}.${id}`}
        </NavLink>
    </li>
  )  
}
ReactDOM.render(<NavList />, document.querySelector(".App"));