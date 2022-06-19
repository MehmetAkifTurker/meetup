import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Meetup 1",
    ImageUrl: "https://source.unsplash.com/random",
    address: "123 Main St",
    description: "This is a dummy description",
  },
  {
    id: "m2",
    title: "Meetup 2",
    ImageUrl: "https://source.unsplash.com/random",
    address: "123 Main St",
    description: "This is a dummy description2",
  },
];

function AllMeetupsPage() {
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}
export default AllMeetupsPage;
