import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "../../helpers/api-util";
import { useRouter } from "next/router";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const eventPath = `/events/${year}/${month}`;
    router.push(eventPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
