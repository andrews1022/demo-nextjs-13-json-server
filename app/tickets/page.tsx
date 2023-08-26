import { Suspense } from "react";
import TicketList from "./TicketList";

const TicketsPage = () => {
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

      <Suspense fallback={<p>Loading tickets...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <TicketList />
      </Suspense>
    </main>
  );
};

export default TicketsPage;
