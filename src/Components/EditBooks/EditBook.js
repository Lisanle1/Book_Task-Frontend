import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axiosInstance from '../../services/axiosInstance';

function EditBook({ openEditModal, setOpenEditModal, selectedBook, fetchBooks }) {
  const [title, setTitle] = useState(selectedBook ? selectedBook.title : '');
  const [author, setAuthor] = useState(selectedBook ? selectedBook.author : '');
  const [genre, setGenre] = useState(selectedBook ? selectedBook.genre : '');
  const [publishedYear, setPublishedYear] = useState(selectedBook ? selectedBook.publishedYear : '');

  const handleEditBook = async () => {
    try {
      await axiosInstance.put(`/${selectedBook._id}`, {
        title,
        author,
        genre,
        publishedYear
      });
      fetchBooks();
      setOpenEditModal(false);
    } catch (error) {
      console.error('Error editing book:', error);
    }
  };

  return (
    <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
      <DialogTitle>Edit Book</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <TextField fullWidth label="Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <TextField fullWidth label="Genre" value={genre} onChange={e => setGenre(e.target.value)} />
        <TextField fullWidth label="Year Published" value={publishedYear} onChange={e => setPublishedYear(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
        <Button onClick={handleEditBook}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditBook;
