import classes from './NewMeetupForm.module.css';
import Card from '/Users/mehmetakifturker/Documents/Projects/learning process/Acedemimind-react-course/meetup/src/components/ui/card.js';
function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type="text" required id='title'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='imageUrl'>Meetup Image</label>
            <input type="url" required id='imageUrl'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='address'>Meetup Address</label>
            <input type="text" required id='address'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='description'>Meetup Description</label>
            <textarea id='description' required rows="5" />
        </div>
        <div className={classes.action}>
            <button type='submit'>Add Meetup</button>
        </div>

      </form>
    </Card>
  );
}
export default NewMeetupForm;
