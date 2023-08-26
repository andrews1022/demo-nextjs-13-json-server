import { Ticket } from "@/types";
import Link from "next/link";

const getTickets = async (): Promise<Ticket[]> => {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      // value is in seconds
      revalidate: 0 // use 0 to opt out of using cache - will always be fresh
    }
  });

  return res.json();
};

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <div>
      <h2>Tickets</h2>

      {tickets.map((ticket) => (
        <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
          <div className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
          </div>
        </Link>
      ))}

      {!tickets.length && <p className="text-center">There are no open tickets</p>}
    </div>
  );
};

export default TicketList;
