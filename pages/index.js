import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return <EventList items={props.featuredEvents} />;
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
  };
};

export default HomePage;
