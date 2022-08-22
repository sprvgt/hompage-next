import ReactDOM from 'react-dom';
import './index.css';

import profileImage from './images/me.jpeg';

function ProfileImage() {
  return <img src={profileImage} className="profile-image" alt="Profile Image" />;
}

function Introduction() {
  return (
    <div className="introduction">
      <h1 className="name">Xuan Lu (陆璇) </h1>
      <div className="intro-first">
        I am a Research Fellow in the School of Information at the University of Michigan. I work with 
        Prof. Qiaozhu Mei in the Foreseer Group.
      </div>
      <div className="intro-second">
        I was fortunate to be advised by Prof. Hong Mei and Prof. Xuanzhe Liu and received my Ph.D. from 
        Peking University. 
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="profile">
      <ProfileImage />
      <Introduction />
    </div>
  )
}

ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);