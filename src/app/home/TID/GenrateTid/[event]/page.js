
import EventForm from "@/app/components/form";
import { db } from "@/app/database/connect";

export default async function Page({ params }) {
  const { event } = await params

  const filter = {};
  filter[event] = true;

  const EVENTS = await db.event.findMany({ where: filter,orderBy:{EventID : 'asc'} });
  return (
    <div>
      <h1>Events for {event}</h1>
      {(event === 'Event1' || event === 'Event2' || event === 'Event3') ? (<EventForm events={EVENTS} eventName = {event} />) : (<></>)}
    </div>
  );
}
