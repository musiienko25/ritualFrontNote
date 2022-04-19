import React from 'react';
import './Sidebar.styles.css';

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

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
            className={`app-sidebar-note ${id === activeNote && 'active'}`}
            onClick={() => setActiveNote(id)}
            aria-hidden="true"
          >
            <div className="app-sidebar-left">
              <img className="app-sidebar-img" src={require('../../assets/icons/folder.png')} alt="folder" />
              <div className="sidebar-note-title">
                <strong>{title}</strong>

              </div>
            </div>

            <div className="app-sidebar-right">
              {/* <p>{body && body.substr(0, 100) + "..."}</p> */}
              <small className="note-meta">
                {new Date(lastModified).toLocaleDateString('en-GB', {
                  year: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </small>
              <button type="button" onClick={() => onDeleteNote(id)}>
                <img className="app-sidebar-img-delete" src={require('../../assets/icons/backet.png')} alt="folder" />
              </button>
            </div>

          </div>
        ))}
        <div aria-hidden="true" onKeyDown={onAddNote} onClick={onAddNote} className="app-sidebar-add-button">

          <img className="app-sidebar-img-delete" src={require('../../assets/icons/folder.png')} alt="folder" />
          <span>New template</span>
        </div>
      </div>
    </div>
  );
}
