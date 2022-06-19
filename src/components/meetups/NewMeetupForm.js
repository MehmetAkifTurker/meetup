import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '/Users/mehmetakifturker/Documents/Projects/learning process/Acedemimind-react-course/meetup/src/components/ui/card.js';
function NewMeetupForm(props) {
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();
    const addressInputRef = useRef();
    
    function handleSubmit(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescritption = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            imageUrl: enteredImage,
            address: enteredAddress,
            description: enteredDescritption

        };
        props.onAddMeetup(meetupData); // this is the function that we passed from the parent component

    }

    return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type="text" required id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='imageUrl'>Meetup Image</label>
            <input type="url" required id='imageUrl' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='address'>Meetup Address</label>
            <input type="text" required id='address' ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='description'>Meetup Description</label>
            <textarea id='description' required rows="5" ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>

      </form>
    </Card>
  );
}
export default NewMeetupForm;
