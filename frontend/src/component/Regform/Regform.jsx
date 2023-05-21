import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Regform.css'


const Regform = () => {

    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [brandname, setBrandname] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    const handelSubmit = async(e) => {
        e.preventDefault()

        const login = {firstname, middlename, lastname, email, contact, brandname} 

        const response = await fetch('http://localhost:5050/workfox/register', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            navigate('/')
        }
        if(response.ok) {
            setError(null)
            setFirstname('')
            setMiddlename('')
            setLastname('')
            setEmail('')
            setContact('')
            setBrandname('')
            console.log("New Registration")
            navigate('/meeting')
        }
       
    }


  return (
    <div className='Reg'>
      <p>Get free UI design</p>
      <form onSubmit={handelSubmit}>
        <input type='text' onChange={(e) => setFirstname(e.target.value)} value={firstname} id='f-name' placeholder='Enter your First Name'required></input>
        <input type='text' onChange={(e) => setMiddlename(e.target.value)} value={middlename} id='m-name' placeholder='Enter your Middle Name'></input>
        <input type='text' onChange={(e) => setLastname(e.target.value)} value={lastname} id='l-name' placeholder='Enter your last Name'required></input>
        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} id='email' placeholder='Email' required></input>
        <input type='number' onChange={(e) => setContact(e.target.value)} value={contact} id='contact' placeholder='Contact No'required></input>
        <input type='text' onChange={(e) => setBrandname(e.target.value)} value={brandname} id='b-name' placeholder='Brand Name'required></input>
        <button id='submit'>Submit</button>
        {error && <div className='error'>{error}</div>}
      </form>

    </div>
  );

  }

export default Regform;
