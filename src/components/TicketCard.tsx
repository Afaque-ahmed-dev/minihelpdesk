import { Ticket } from "../types/ticket";

type TicketCardProps = {
  ticket: Ticket;
  onDelete: (id: number) => void;
  onEdit: (ticket: Ticket) => void;
};

const priorityClass = (priority: Ticket["priority"]) => {
  if (priority === "High") return "badge badge-high";
  if (priority === "Medium") return "badge badge-medium";
  return "badge badge-low";
};

const statusClass = (status: Ticket["status"]) => {
  if (status === "Open") return "badge badge-open";
  if (status === "In Progress") return "badge badge-inprogress";
  return "badge badge-closed";
};

const TicketCard = ({ ticket, onDelete, onEdit }: TicketCardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-subject">{ticket.subject}</h3>
        <div className="card-badges">
          <span className={priorityClass(ticket.priority)}>{ticket.priority}</span>
          <span className={statusClass(ticket.status)}>{ticket.status}</span>
        </div>
      </div>
      <p className="card-description">{ticket.description}</p>
      <div className="card-footer">
        <span className="card-date">Created: {ticket.createdAt}</span>
        <div className="card-actions">
          <button className="btn btn-edit" onClick={() => onEdit(ticket)}>
            Edit
          </button>
          <button className="btn btn-delete" onClick={() => onDelete(ticket.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
