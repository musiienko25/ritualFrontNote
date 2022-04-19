import React, { useCallback, useState, useMemo } from 'react';
import uuid from 'react-uuid';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { NoteView } from './components/NoteView';
import { Search } from './components/Search';

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

    setNotes((prev) => [newNote, ...prev]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = useCallback(() => notes.find((note) => note.id === activeNote), [activeNote, notes]);

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
          notes={useMemo(() => (searchText ? notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase())) : notes), [notes, searchText])}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <NoteView activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    </>
  );
}

export default App;
