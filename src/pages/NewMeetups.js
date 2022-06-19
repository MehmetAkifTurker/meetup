import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    console.log(meetupData);
  }
  return (
    <div>
      <h1>Add Meetup</h1>
      <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    </div>
  );
}
export default NewMeetupsPage;
