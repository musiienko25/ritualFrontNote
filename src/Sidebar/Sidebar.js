import './styles.css'

const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <div>Add notes</div>

        </div>
        <div className="app-sidebar-notes">
            
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (

            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            > 
                <div className="app-sidebar-left"> 
                  <img className="app-sidebar-img" src={require('../src/icons/folder.png')} alt="folder"></img>
                  <div className="sidebar-note-title">
                      <strong>{title}</strong>

                  </div>
                </div>

                <div className="app-sidebar-right">
                  {/* <p>{body && body.substr(0, 100) + "..."}</p> */}
                  <small className="note-meta">
                      {new Date(lastModified).toLocaleDateString("en-GB", {
                      year: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                      })}
                  </small>
                  <button onClick={(e) => onDeleteNote(id)}>
                    <img className="app-sidebar-img-delete" src={require('../src/icons/backet.png')} alt="folder">
                      </img>
                  </button>
                </div>

            </div>
          ))}
          <div onClick={onAddNote} className="app-sidebar-add-button">
                               
            <img className="app-sidebar-img-delete" src={require('../src/icons/plus.png')} alt="folder">
            </img>
            <span>New template</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;