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
  }
];


function AllMeetupsPage() {
  return (
    <div>
      <h1>All Meetups</h1>
      {DUMMY_DATA.map((meetup) => {
        return (
          <div key={meetup.id}>
            <h2>{meetup.title}</h2>
            <img src={meetup.ImageUrl} alt=""/>
            <p>{meetup.description}</p>
            <p>{meetup.address}</p>
          </div>

        );
      })}

    </div>
  );
}
export default AllMeetupsPage;
