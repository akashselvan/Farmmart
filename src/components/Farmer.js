 import React from "react";
import{useState} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import './farmer.css'
import {Navbar ,Container,Nav} from 'react-bootstrap'
import Box from '@mui/material/Box';
import {TextField } from '@material-ui/core'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {  ref ,getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../context/firebase";
import farmmart from './farmmart.png'






const Home = () => {






  const [newName, setNewName] = useState("");
  const [newdistrict, setDistrict] = useState("");
  const [newtotalland, setTotalland] = useState(0);
  const [newcrop, setCrop] = useState("");
  const [price, setPrice] = useState(0);
  const [number ,setNumber ] = useState(0);
  
  const[url,setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const[image,setImage] = useState("");
  const usersCollectionRef = collection(db, "farmers");
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    const imageRef = ref(storage, `/pics/${file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setUrl(url),
        console.log(url),
        );
      }
    );
  };
 
   const newBlog = async () => {
    await addDoc(usersCollectionRef, {
       name:newName,
      district:newdistrict,
       totalland:newtotalland,
       crop:newcrop,
       price:price,
       number:number,
       time: Date.now(),
       uid:user.uid,
       image:image
     });
      setNewName("");
      setDistrict("");
      setTotalland(0);
      setCrop("");
      setPrice(0);
      setNumber(0);

   };

  
  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
   
 


  <>
 <Navbar className="navbar123"  variant="dark">
    <Container>
    <img  className="img" src={farmmart}/>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <div className=" "> <button  className="third"   onClick={handleLogout}>
        <h5 className="log">logout</h5>  </button></div>
    
    </Nav>
    </Container>
  </Navbar>
 

  <div>
    

    
  <Box className="box1"
      sx={{
        width: 600,
        maxWidth: '100%', }}
    >  
      <TextField className='textfield' fullWidth label="Name" id="fullWidth"  
      onChange={(event) => {
          setNewName(event.target.value) } }/>
      <hr className="hr">
      </hr>
      <TextField className="textfield"fullWidth label="district" id="fullWidth"  onChange={(event) => {
          setDistrict(event.target.value)}} />
    
      <hr className="hr">
      </hr>
      <TextField className="textfield"fullWidth label="total land(in acres)" id="fullWidth"  onChange={(event) => {
          setTotalland(event.target.value)}} />
      <hr className="hr"></hr>
      <TextField className="textfield"fullWidth label="crop" id="fullWidth"   onChange={(event) => {
          setCrop(event.target.value)}}/>
      <hr className="hr">
    </hr> 
       <TextField className="textfield"fullWidth label="price(perkg)" id="fullwidth"   onChange={(event) => {
          setPrice(event.target.value)}}/>
           <hr className="hr">
    </hr> 
       <TextField className="textfield"fullWidth label="image url " id="fullwidth"   onChange={(event) => {
          setImage(event.target.value)}}/>    
         
         <hr className="hr">
    </hr> 
       <TextField className="textfield"fullWidth label="contact no " id="fullwidth"   onChange={(event) => {
          setNumber(event.target.value)}}/>
    </Box>  
     
    {/* <div className="input123">
      <form onSubmit={handleSubmit}>
        <input type="file" className="input" />
        <button  type="submit">Upload</button>
   </form>
      {progress > 0 && <h3>Uploaded {progress} % </h3>}{" "} */}
  
   
{/* </div>     */}
    <Button type = "submit"  className=" navlink2"variant="warning" onClick={newBlog}  >submit</Button>
    
  </div>
  
</>
 );
};

export default Home;

 