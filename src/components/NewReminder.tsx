import React, { useState } from "react";

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

export const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setError("");
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if(!title) return setError("Please insert a Reminder...");
    onAddReminder(title);
    setTitle("");
  }
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">New Reminder:</label>
      <input id="title" value={title} onChange={e => handleInput(e)} type="text" className="form-control" />
      {error && <small className="text-danger" style={{display: "block"}}>{error}</small>}
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Reminder
      </button>
    </form>
  );
};
