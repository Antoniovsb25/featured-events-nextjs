import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const eventPath = `/events/${year}/${month}`
    router.push(eventPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
