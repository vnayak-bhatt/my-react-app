import React, {useState, useEffect} from 'react';

export default function Header(props){
    const [name, setName] = useState('Vinayak');
    const [surname, setSurname] = useState('Bhatt');
    // const [width, setWidth] = useState(window.innerWidth);

    function handleNameChange(e){
        setName(e.target.value)
    }

     const handleSurnameChange=(e)=>{
        setSurname(e.target.value)
    }

    useEffect(()=>{
        document.title = name + ' ' + surname;
    });
    // useEffect(()=>{
    //     const handleResize = () => {}
    // });

    return (
        <section>
            <p>Edit input to change the title of page</p>
            <input value={name} onChange={handleNameChange}/>
            <input value={surname} onChange={handleSurnameChange}/>
            {/*<p>width = {width}</p>*/}
        </section>
    )
}

