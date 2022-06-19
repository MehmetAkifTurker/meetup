import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {

    const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch("https://react-getting-started-bd56a-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <div>
      <h1>Add Meetup</h1>
      <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    </div>
  );
}
export default NewMeetupsPage;
