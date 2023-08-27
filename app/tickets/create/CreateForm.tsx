"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";

type TicketPriority = "low" | "medium" | "high";

const priorities = ["low", "medium", "high"];

const CreateForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const ticket = {
      title, // use state fields above, aside from user_email which is hardcoded
      body,
      priority,
      user_email: "mario@netninja.dev"
    };

    // send a post req to json-server to add the data to the file
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ticket)
    });

    // check the response status
    if (res.ok) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      </label>

      <label>
        <span>Body:</span>
        <textarea required onChange={(e) => setBody(e.target.value)} value={body} />
      </label>

      <label>
        <span>Priority:</span>
        <select
          className="capitalize"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          {priorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority} Priority
            </option>
          ))}
        </select>
      </label>

      <button className="btn-primary" disabled={isLoading}>
        <span>{isLoading ? "Adding..." : "Add Ticket"}</span>
      </button>
    </form>
  );
};

export default CreateForm;
