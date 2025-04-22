import { useEffect} from "react"
import axios from 'axios';
import styled from 'styled-components';
import { Box, Button, Divider, IconButton, Stack, Typography} from "@mui/material"
import Drower from "./Drower";
import ListOne  from "./List";
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "./Sidebar";


// const Button = styled.button `
//   background-color:green;
//   color : white;
//   padding:10px 20px;
// `

const Title = styled.h1 `
  color:gray;
  font-size:40px;
  letter-spacing: 20px
`


// const Box = styled.div`
//   max-width:1320px;
//   margin:auto;
//   padding:10px;
//   border-radius:10px;
//   border:1px solid gray;
//    > p {
//     color:pink;
//    }

// `



function App() {





  let obj = {
    headers:{
      "x-api-key" : "lorem10"
    }
  }
  function getData(){
  //  let url = "https://fakestoreapi.com/products"

   let url = "https://randomuser.me/api/?results=5"

   axios.get(url, obj)
   .then((res)=>console.log(res))
  }

  getData()


  return (
    <>
    <div >

    <Typography variant="h1" color="success" component="h6">
  h1. Heading
  </Typography>

    <Title>This is me</Title>
    <Button>Click me</Button>

    <Box>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nam necessitatibus veritatis itaque porro maiores perspiciatis, quam temporibus obcaecati iure aspernatur, unde fugit, eveniet distinctio praesentium pariatur. Fuga, esse quam.</p>
    </Box>

    <Drower/>


    <ListOne/>


    <IconButton>
      <DeleteIcon/>
    </IconButton>


    {/* <Sidebar/> */}

    <Box></Box>

<Stack sx={{width:"200px"}} divider={<Divider orientation="vertical" flexItem />} spacing={1}>
  <Button variant="contained">click 1</Button>
    <Button variant="contained">click 1</Button>
    <Button variant="contained">click 1</Button>
    <Button variant="contained">click 1</Button>
    <Button variant="contained">click 1</Button>
    <Button variant="contained">click 1</Button>
</Stack>

  


    </div>
  </>
  )
}

export default App
