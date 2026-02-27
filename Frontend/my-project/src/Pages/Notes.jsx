import { useEffect, useState } from "react";
import API from "../services/Api";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch notes from DB
  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add note
  const addNote = async () => {
    if (!title || !content) {
      return alert("Title and content are required");
    }

    await API.post("/notes", { title, content });
    setTitle("");
    setContent("");
    fetchNotes(); // refresh list
  };

  // Delete note
  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  return (
    <div className="notes-page">
      <div className="notes-card">
        <h2>My Notes</h2>

        <div className="note-input">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={addNote}>Add Note</button>
        </div>

        <div className="notes-list">
          {notes.length === 0 && <p>No notes yet</p>}

          {notes.map((note) => (
            <div className="note-item" key={note._id}>
              <div className="note-content">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
              </div>
              <button onClick={() => deleteNote(note._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
