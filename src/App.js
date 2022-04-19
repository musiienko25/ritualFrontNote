import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main';
import Search from './Search/Search';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => notes.find((note) => note.id === activeNote);

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  return (
    <>
      <Search handleSearchNote={setSearchText} />
      <div className="App">
        <Sidebar
          notes={notes.filter((note) => note.title.toLowerCase().includes(searchText))}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    </>
  );
}

export default App;
