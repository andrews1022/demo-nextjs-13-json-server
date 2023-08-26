import TicketList from "./TicketList";

const Tickets = async () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>

      {/* @ts-expect-error Async Server Component */}
      <TicketList />
    </main>
  );
};

export default Tickets;
