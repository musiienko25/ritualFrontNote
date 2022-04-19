import React, { useMemo } from 'react';
import './Sidebar.styles.css';
import plus from '../../assets/icons/plus.png';
import folder from '../../assets/icons/folder.png';
import backet from '../../assets/icons/backet.png';
import { options } from '../../utils/options';

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = useMemo(() => notes.sort((a, b) => b.lastModified - a.lastModified), [notes]);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <div>Add notes</div>

      </div>
      <div className="app-sidebar-notes">

        {sortedNotes.map(({
          id, title, lastModified,
        }) => (

          <div
            key={id}
            className={`app-sidebar-note ${id === activeNote ? 'active' : ''}`}
            onClick={() => setActiveNote(id)}
            aria-hidden="true"
          >
            <div className="app-sidebar-left">
              <img className="app-sidebar-img" src={folder} alt="folder" />
              <div className="sidebar-note-title">
                <strong>{title}</strong>
              </div>
            </div>

            <div className="app-sidebar-right">
              <small className="note-meta">
                {new Date(lastModified).toLocaleDateString('en-GB', options)}
              </small>
              <button type="button" onClick={() => onDeleteNote(id)}>
                <img className="app-sidebar-img-delete" src={backet} alt="folder" />
              </button>
            </div>

          </div>
        ))}
        <div aria-hidden="true" onKeyDown={onAddNote} onClick={onAddNote} className="app-sidebar-add-button">

          <img className="app-sidebar-img-delete" src={plus} alt="folder" />
          <span>New template</span>
        </div>
      </div>
    </div>
  );
}
