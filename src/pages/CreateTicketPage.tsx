import { useNavigate } from "react-router-dom";
import TicketForm from "../components/TicketForm";
import { Ticket } from "../types/ticket";

type CreateTicketPageProps = {
  onCreateTicket: (ticket: Omit<Ticket, "id" | "createdAt">) => void;
  onUpdateTicket: (ticket: Ticket) => void;
  editingTicket: Ticket | null;
  onCancelEdit: () => void;
};

const CreateTicketPage = ({
  onCreateTicket,
  onUpdateTicket,
  editingTicket,
  onCancelEdit,
}: CreateTicketPageProps) => {
  const navigate = useNavigate();

  const handleSubmit = (data: Omit<Ticket, "id" | "createdAt">) => {
    if (editingTicket) {
      onUpdateTicket({ ...editingTicket, ...data });
    } else {
      onCreateTicket(data);
    }
    navigate("/");
  };

  const handleCancel = () => {
    onCancelEdit();
    navigate("/");
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">
          {editingTicket ? "Edit Ticket" : "Create New Ticket"}
        </h2>
      </div>
      <div className="form-container">
        <TicketForm
          onSubmit={handleSubmit}
          editingTicket={editingTicket}
          onCancelEdit={handleCancel}
        />
      </div>
    </div>
  );
};

export default CreateTicketPage;
