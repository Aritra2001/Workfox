import './Meet.css'
import Meeting from '../../images/meeting.png'

const Meet = () => {

  return (
    <div className='meet'>
      <p>Schedule a meet</p>
      <img src={Meeting} alt="" />
      <a href='https://calendly.com/workfox'><button id='schedule'>Schedule</button></a>
    </div>
  );
}

export default Meet;
