//make layout first
import Button from '../../Designs/UI/Button';
import Card from '../../Designs/UI/Card';
import style from './form.module.css';
const Form = () => {
  const formSubmitHandler = e => {
    e.preventDefault();
    alert('Form submitted!');
  };
  return (
    <>
      <Card className={style.center}>
        <form onSubmit={formSubmitHandler}>
          <div className={style.inputStyle}>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter Name' />
          </div>

          <Button text='Submit ' type='submit' />
        </form>
      </Card>
    </>
  );
};

export default Form;
