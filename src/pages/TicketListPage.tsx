import { useNavigate } from "react-router-dom";
import TicketCard from "../components/TicketCard";
import { Ticket } from "../types/ticket";

type TicketListPageProps = {
  tickets: Ticket[];
  onDelete: (id: number) => void;
  onEdit: (ticket: Ticket) => void;
};

const TicketListPage = ({ tickets, onDelete, onEdit }: TicketListPageProps) => {
  const navigate = useNavigate();

  const handleEdit = (ticket: Ticket) => {
    onEdit(ticket);
    navigate("/create");
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">All Tickets</h2>
        <span className="ticket-count">{tickets.length} ticket{tickets.length !== 1 ? "s" : ""}</span>
      </div>

      {tickets.length === 0 ? (
        <div className="empty-state">
          <p>No tickets found. Create your first ticket!</p>
        </div>
      ) : (
        <div className="ticket-list">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onDelete={onDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketListPage;
