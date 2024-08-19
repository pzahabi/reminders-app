import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ReminderList } from "./components/ReminderList";
import Reminder from "./models/Reminder";
import ReminderService from "./services/reminder";
import { NewReminder } from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const response = await ReminderService.getReminders();
    setReminders(response);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    try {
      const reminder = await ReminderService.addReminder(title);
      setReminders([reminder, ...reminders]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList onRemoveReminder={removeReminder} items={reminders} />
    </div>
  );
}

export default App;
