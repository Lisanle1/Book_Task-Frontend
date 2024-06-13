import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Home.css'
import axiosInstance from '../../services/axiosInstance';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBook from '../AddBooks/AddBook';
import { Button } from '@mui/material';
import EditBook from '../EditBooks/EditBook';
import { useNavigate } from 'react-router';
function Home() {
  const [bookLists,setBookLists]= useState([])
  const [selectedBook, setSelectedBook] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axiosInstance.get('/get/books');
      setBookLists(response.data.bookLists);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleDeleteBook= async (id)=>{
    try {
      await axiosInstance.delete(`/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }

  }
 
  const handleEdit = (book) => {
    setSelectedBook(book);
    setOpenEditModal(true);
  };

  const handleLogout=()=>{
    navigate('/')
    localStorage.removeItem('token')
  }
  return (
    <div >
      <div style={{width:'10%',padding:"15px"}}>Books Lists</div>
      <Button style={{width:'10%'}} variant="outlined" onClick={() => setOpenAddModal(true)}>Add Book</Button>
      <AddBook style={{    width: '10%',
    display: 'flex',
    marginLeft: '45px'}} openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} fetchBooks={fetchBooks}/>
      <EditBook openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} selectedBook={selectedBook} fetchBooks={fetchBooks} />

      <div style={{paddingLeft:"656px"}} onClick={handleLogout}>Logout</div>
          <div className='table' >
          <TableContainer component={Paper}>

      <Table sx={{ minWidth: 950 }} aria-label="simple table" >
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
          {bookLists.length>0 ? bookLists?.map((book,idx) => (
            <TableRow
              key={book._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
              <TableCell align="right">{book.title}</TableCell>
              <TableCell align="right">{book.author}</TableCell>
              <TableCell align="right">{book.genre}</TableCell>
              <TableCell align="right">{book.publishedYear}</TableCell>
              <TableCell align="right" style={{display:"flex",gap:"4px"}}><DeleteIcon color='red' onClick={() => handleDeleteBook(book._id)}/>  <EditIcon color='blue' onClick={() => handleEdit(book)} /> </TableCell>
            </TableRow>
          )) :null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    </div>
  )
}

export default Home