import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Home.css'
import { API_URL } from '../../Config/API_URL';

function Home() {

  
  return (
    <div >
      {/* <div>Books Lists</div> */}
          <div class='table' >
          <TableContainer component={Paper}>

      <Table sx={{ minWidth: 850 }} aria-label="simple table" class='table' >
        <TableHead>
          <TableRow>
            <TableCell>NO</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">PublishedBy</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </div>
  )
}

export default Home