import React, { useState, useEffect } from 'react'
import {createClient} from '@supabase/supabase-js';
import './basecrud.css';
import { Button, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper, TextField, Typography, Box, Modal } from '@mui/material';

const supabaseClient = createClient(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_KEY)
const Basecrud = () => {

    const [data, setData] = useState([]);
    const [ShowModel, setShowModel] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

        const fetchuserdata = async() => {
        try {
            const { data, error } = await supabaseClient
              .from('userprofile')
              .select('*');
            if(error){
                throw error
            }
            setData(data);
        }
        catch (error){
            console.log('fecthcing data error', error.message);
        }
    }

    useEffect(() =>{
        fetchuserdata();
    })

    const handleOpen = () => {
        setShowModel(true);
    };

    const handleClose = () => {
        setShowModel(false);
    };

    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const getName = (e) => {
        setName(e.target.value);
    };

    const getPhonenumber = (e) => {
        setPhonenumber(e.target.value);
    };

    const handleSubmit = async () => {
        if (data.length === 0){
            handleClose();
        }
        else{
            const { data, error } = await supabaseClient
           .from('userprofile')
           .insert([
           { Email:email, Name:name, PhoneNumber:phonenumber },
              ]);
             if(error){
                throw error
            }
        }
        // try {                    
        //   const { data, error } = await supabaseClient
        //   .from('userprofile')
        //   .insert([
        //   { Email:email, Name:name, PhoneNumber:phonenumber },
        //    ]);
        //     if(error){
        //         throw error
        //     }
        //     else{
        //     handleClose();
        //     fetchuserdata();
        //     alert('user updated successfully');
        //     }
        // } catch (error) {
        //     console.error('Error adding data:', error.message);
        // }
    };

  return (
   <>
   <h3 className='text-center'>User Data </h3>
   <div>
     {data === '' ? (
        <Box textAlign="center">
        <Typography variant="h6">No data found</Typography>
        <Button onClick={handleOpen} variant="contained" color="primary">Add</Button>
        </Box>)
        :(
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>PhoneNumber</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.phonenumber}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary">Edit</Button>
                                        <Button variant="contained" color="secondary">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )}
        <Modal open={ShowModel} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        width: 400,
                        borderRadius: 8
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Add New Entry
                    </Typography>
                    <TextField
                        name="email"
                        label="email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={email}
                        onChange={getEmail}
                    />
                    <TextField
                        name="name"
                        label="name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={name}
                        onChange={getName}
                    />
                    <TextField
                        name="phonenumber"
                        label="Phonenumber"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={phonenumber}
                        onChange={getPhonenumber}
                    />
                    <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                </Box>
            </Modal>
 
   </div>
   </>
  )
}

export default Basecrud