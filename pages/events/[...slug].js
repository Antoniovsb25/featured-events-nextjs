import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <h3>Loading...</h3>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  // notation for transforming a string into number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const invalidFilter =
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 0 ||
    numMonth > 12;

  const date = new Date(numYear, numMonth - 1);

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  const noEventsFound = !filteredEvents || filteredEvents.length === 0;

  if (noEventsFound) {
    return <h3>no events found for the chosen filter!</h3>;
  }

  if (invalidFilter) {
    return <h3>Invalid filter. Please, adjust your values</h3>;
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
