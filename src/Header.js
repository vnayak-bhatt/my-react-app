import React from 'react';

function Header(props){
    return (
        <React.Fragment>
        <h1>{props.name}</h1>
         <p>{props.desc}</p>
        </React.Fragment>
            )
}

export default Header;