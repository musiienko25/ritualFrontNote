import './NoteView.styles.css';

export function NoteView({ activeNote, onUpdateNote }) {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-header">You’re editing a new template</div>
      <div className="app-main-note-edit">
        <input
          className="app-main-note-edit-input"
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
        />
        <textarea
          className="app-main-note-edit-textarea"
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField('body', e.target.value)}
        />
      </div>
    </div>
  );
}
