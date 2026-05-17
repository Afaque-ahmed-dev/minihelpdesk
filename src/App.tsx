import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TicketListPage from "./pages/TicketListPage";
import CreateTicketPage from "./pages/CreateTicketPage";
import { Ticket } from "./types/ticket";
import { initialTickets } from "./data/mockTickets";

let nextId = initialTickets.length + 1;

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);

  const handleCreateTicket = (data: Omit<Ticket, "id" | "createdAt">) => {
    const newTicket: Ticket = {
      id: nextId++,
      ...data,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setTickets((prev) => [newTicket, ...prev]);
  };

  const handleUpdateTicket = (updated: Ticket) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
    setEditingTicket(null);
  };

  const handleDeleteTicket = (id: number) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditTicket = (ticket: Ticket) => {
    setEditingTicket(ticket);
  };

  const handleCancelEdit = () => {
    setEditingTicket(null);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <TicketListPage
                tickets={tickets}
                onDelete={handleDeleteTicket}
                onEdit={handleEditTicket}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateTicketPage
                onCreateTicket={handleCreateTicket}
                onUpdateTicket={handleUpdateTicket}
                editingTicket={editingTicket}
                onCancelEdit={handleCancelEdit}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
