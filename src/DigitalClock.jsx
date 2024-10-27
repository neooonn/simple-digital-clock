import React, {useState, useEffect} from 'react'



function DigitalClock(){

    const [time, setTime] = useState(new Date());
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
            setBlink(b => !b)


            const audio = new Audio('./assets/sound.mp3');
            audio.play().catch(error => console.log('Audio play failed:', error));
        }, 1000);

        return () => {
            clearInterval(intervalId)
        } 
    }, []);

    padZero() 
    function padZero(number) {
            return (number < 10 ? "0" : "") + number
    }

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        const colon = blink ? ":" : " ";


        hours = hours % 12 || 12;

        return `${padZero(hours)}${colon}${padZero(minutes)}${colon}${padZero(seconds)} ${meridiem}`
    }
    



    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>


            </div>
        </div>)
}

export default DigitalClock;