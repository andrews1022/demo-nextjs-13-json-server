// npm
import Link from "next/link";
import { Suspense } from "react";

// components
import TicketList from "./TicketList";

const TicketsPage = () => {
  return (
    <main>
      <nav className="pb-0 mb-0">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>

      <Link href="/tickets/create" className="block my-8 ml-auto">
        <button className="btn-primary">New Ticket</button>
      </Link>

      <Suspense fallback={<p>Loading tickets...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <TicketList />
      </Suspense>
    </main>
  );
};

export default TicketsPage;
