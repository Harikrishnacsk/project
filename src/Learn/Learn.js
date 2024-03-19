import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import {createClient} from '@supabase/supabase-js';

const supabaseClient = createClient(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_KEY)
const Learn = () =>{

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    const getName = (e) =>{
        
        setName(e.target.value);
    }

    const getEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleSubmit = async () =>{
      if(name.trim() === '' || email.trim() === ''){
          alert('missing required fields')
         } else {
         const { data, error } = await supabaseClient
          .from('userdata')
          .insert([
        { Name: name, e_mail: email },
           ])
          setName('');   
          setEmail('');   
        alert('user updated successfully');
        }
    }

    return (
    <div>
        <h3 className="mt-3 text-center">User Update</h3>
        <div className="m-4">
        Name : <input className="m-3 p-2" type="text" placeholder="Enter name" value={name} onChange={getName}/>
        <div className="row-1 mt-4">
        Email id : <input className="p-2" type="email" placeholder="example@gmail.com" value={email} onChange={getEmail}/>
        </div>
        <Button variant="success" className="col-1 m-4" onClick={handleSubmit}>Submit</Button>
        </div>
    </div>
    )
    
}

export default Learn