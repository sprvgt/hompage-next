import ReactDOM from 'react-dom';
import './index.css';

import profileImage from './images/me.jpeg';

function ProfileImage() {
  return <img 
      src={profileImage} className="profile-image" alt="Profile Image" />;
}

function Introduction() {
  return (
    <div className="introduction">
      <h1 className="name">Xuan Lu (陆璇) </h1>
      <div className="intro-first">
        I am a Research Fellow in the <a 
            href="https://www.si.umich.edu/">School of Information</a> at
        the <a
            href="https://www.umich.edu/">University of Michigan</a>. I work
        with Prof. <a 
            href="http://www-personal.umich.edu/~qmei/">Qiaozhu Mei</a> in
        the <a 
            href="http://foreseer.si.umich.edu/">Foreseer Group</a>.
      </div>
      <div className="intro-second">
        I was fortunate to be advised by Prof. <a 
            href="http://sei.pku.edu.cn/~meih/index_en.html">Hong Mei</a> and
        Prof. <a
            href="http://liuxuanzhe.com/">Xuanzhe Liu</a> and received my Ph.D 
        from <a 
            href="https://english.pku.edu.cn/">Peking University</a>. 
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