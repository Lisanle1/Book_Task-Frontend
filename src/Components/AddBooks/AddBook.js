import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axiosInstance from '../../services/axiosInstance';

function AddBook({ openAddModal, setOpenAddModal, fetchBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishedYear, setYearPublished] = useState('');

  const handleAddBook = async () => {
    try {
      await axiosInstance.post('/add/book', {
        title,
        author,
        genre,
        publishedYear
      });
      fetchBooks();
      setOpenAddModal(false); // Close the modal after adding the book
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <DialogTitle>Add New Book</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <TextField fullWidth label="Author" value={author} onChange={e => setAuthor(e.target.value)} />
          <TextField fullWidth label="Genre" value={genre} onChange={e => setGenre(e.target.value)} />
          <TextField fullWidth label="Year Published" value={publishedYear} onChange={e => setYearPublished(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddModal(false)}>Cancel</Button>
          <Button onClick={handleAddBook}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddBook;
