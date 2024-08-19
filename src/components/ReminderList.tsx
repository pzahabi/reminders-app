import React from "react";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

export const ReminderList = ({
  items,
  onRemoveReminder,
}: ReminderListProps): JSX.Element => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button
              className="btn btn-outline-danger rounded-pill mx-2"
              onClick={() => onRemoveReminder(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
