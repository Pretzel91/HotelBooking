import React from 'react'
import './AboutUs.css'
import Photo from '../Photos/restaurant.jpg'


const AboutUs = () => {
  return (
    <div className='about_container'>
      <div className='body_container'>
        <div className='left_side'>
          <img src={Photo} alt='Hotel Restaurant'/>
        </div>
        <div className='right_side'>
        <div className='about_header'>
        <h3>About Us</h3>
        <br></br>
        <h1>Your Dream Stay in the Heart of Finland.</h1>
        </div>
          <p>Welcome to our Boutique Hotel, a place where elegance meets tranquility in the breathtaking landscapes of Finland. Nestled amidst pristine forests and shimmering lakesm our hotel is a haven for travelers seeking comfort, adventure, and a deep connection with nature. Whether you are here to witness the magical Northern Lights or to bask in the serenity of a summer night under the Midnight Sun, our doors are open to offer you an unforgettable exprience.
            <br></br>
            <br></br>
            Whether you're visiting for a weekend retreat, a romantic getaway, or a longer stay, we promise as experience that combines unparalleled comfort, personalized service, and the timeless allure of Finland. Come and discover the magic of Finland at our boutique hotel- we look forward to welcoming you.</p>
            <br></br>
          <ul>
            <li>Customer Rewards Program and excellent technology</li>
            <li></li>
            <li></li>
          </ul>
          <button>Discover more</button>
        </div>
      </div>

    </div>
  )
}

export default AboutUs