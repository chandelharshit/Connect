import React from 'react';
// import '../../App.css';
import "../css/products.css"
import ProfileCard from '../Card/ProfileCard';
import anuImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/Anu.jpg';
import ishitaImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/isita.jpg';
import piyushImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/piyu.jpg';
import userImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/user.jpg';


export default function Products() {
  // return <h1 className='products'>Our Team</h1>;
  return<>
  <div className='headingPage'>Our Team</div>
   <div className="profile-container">
  <ProfileCard name="Ishita Gupta" job="Team Leader" rollNo="1901640100139" image={ishitaImage}  />
  <ProfileCard name="Anushree Singh"job="" rollNo="1901640100070"  image={anuImage} />
  <ProfileCard name="Piyush Singh" job="" rollNo="1901640100192" image={piyushImage} />
  <ProfileCard name="Harshit Singh Chandel"job=" " rollNo="1901640100134" image={userImage} />

  </div>
  </>
}
