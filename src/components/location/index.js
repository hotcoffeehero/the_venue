import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.2039446599433!2d-118.38655977984159!3d34.090709756173055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bea3a4976859%3A0x732d4bc7db3981!2sThe%20Viper%20Room!5e0!3m2!1sen!2sjp!4v1603871908804!5m2!1sen!2sjp" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowfullscreen
            >
            </iframe>

            <div className='location_tag'>
                <div>Loacation</div>
            </div>
        </div>
    );
};

export default Location