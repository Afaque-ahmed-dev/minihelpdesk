import { useState, useEffect } from "react";
import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

type TicketFormProps = {
  onSubmit: (ticket: Omit<Ticket, "id" | "createdAt">) => void;
  editingTicket: Ticket | null;
  onCancelEdit: () => void;
};

const TicketForm = ({ onSubmit, editingTicket, onCancelEdit }: TicketFormProps) => {
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TicketPriority>("Low");
  const [status, setStatus] = useState<TicketStatus>("Open");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (editingTicket) {
      setSubject(editingTicket.subject);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
      setStatus(editingTicket.status);
      setError("");
    } else {
      setSubject("");
      setDescription("");
      setPriority("Low");
      setStatus("Open");
      setError("");
    }
  }, [editingTicket]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (subject.trim() === "") {
      setError("Ticket subject is required.");
      return;
    }

    setError("");
    onSubmit({ subject: subject.trim(), description, priority, status });

    if (!editingTicket) {
      setSubject("");
      setDescription("");
      setPriority("Low");
      setStatus("Open");
    }
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Subject / Title
        </label>
        <input
          id="subject"
          className="input"
          type="text"
          placeholder="Enter ticket subject"
          value={subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
        />
        {error && <p className="error-msg">{error}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          className="input textarea"
          placeholder="Describe the issue..."
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <select
            id="priority"
            className="input"
            value={priority}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setPriority(e.target.value as TicketPriority)
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            className="input"
            value={status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setStatus(e.target.value as TicketStatus)
            }
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        {editingTicket && (
          <button type="button" className="btn btn-cancel" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
        <button type="submit" className="btn btn-primary">
          {editingTicket ? "Update Ticket" : "Create Ticket"}
        </button>
      </div>
    </form>
  );
};

export default TicketForm;
