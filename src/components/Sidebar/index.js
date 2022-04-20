import React from 'react';
import './Sidebar.styles.css';
import plus from '../../assets/icons/plus.png';
import folder from '../../assets/icons/folder.png';
import backet from '../../assets/icons/backet.png';
import { formattedDate } from '../../utils/dates';

export function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <div>Add notes</div>

      </div>
      <div className="app-sidebar-notes">

        {notes.map(({
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
                {formattedDate(lastModified, 'en-GB', {
                  year: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
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
