import { Ticket } from "../types/ticket";

export const initialTickets: Ticket[] = [
  {
    id: 1,
    subject: "Cannot login to account",
    description: "User is unable to login using correct credentials.",
    priority: "High",
    status: "Open",
    createdAt: "2026-03-26",
  },
  {
    id: 2,
    subject: "Password reset not working",
    description: "The password reset email is not being received by the user.",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2026-03-27",
  },
  {
    id: 3,
    subject: "Page not loading on mobile",
    description: "The dashboard page fails to load correctly on mobile devices.",
    priority: "Low",
    status: "Open",
    createdAt: "2026-03-28",
  },
  {
    id: 4,
    subject: "UI bug in ticket form",
    description: "Dropdown overlaps with the text field when screen is resized.",
    priority: "Low",
    status: "Closed",
    createdAt: "2026-03-29",
  },
  {
    id: 5,
    subject: "Server error on submission",
    description: "Users get a 500 error when submitting a support request form.",
    priority: "High",
    status: "Open",
    createdAt: "2026-03-30",
  },
];
