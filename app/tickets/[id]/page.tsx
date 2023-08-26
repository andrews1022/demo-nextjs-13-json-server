import type { Ticket } from "@/types";

const getTicket = async (id: string): Promise<Ticket> => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  });

  return res.json();
};

type SingleTicketPageProps = {
  params: {
    id: string;
  };
};

const SingleTicketPage = async ({ params }: SingleTicketPageProps) => {
  const ticket = await getTicket(params.id);

  const { body, priority, title, user_email } = ticket;

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>

      <div className="card">
        <h3>{title}</h3>
        <small>Created by {user_email}</small>
        <p>{body}</p>
        <div className={`pill ${priority}`}>{priority} priority</div>
      </div>
    </main>
  );
};

export default SingleTicketPage;
