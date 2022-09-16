import ReactDOM from 'react-dom';
import { Email } from 'react-obfuscate-email';
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
      <span className="note">Email: </span><Email email="luxuan@umich.edu" />
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

function Education() {
  return  (
    <div className="segment">
      <div className="segment-title">
        Education
      </div>
      <ul>
        <li>2016-2019, Ph.D. student, in Computer Science, Peking University</li>
        <li>2013-2016, Master student (advisor: Prof. Xuanzhe Liu), in Computer Science, Peking University</li>
        <li>2010-2013, B.A. in Economics (dual degree), Peking University</li>
        <li>2009-2013, B.S. in Computer Science, Peking University</li>
      </ul>
    </div>
  )
}

function ResearchInterests() {
  return (
    <div className="segment">
      <div className="segment-title">
        Research Interests
      </div>
      <div className="segment-content">
        Causal data science; Emoji; Mobile app ecosystem
      </div>
    </div>
  )
}

function AcademicServices() {
  return  (
    <div className="segment">
      <div className="segment-title">
        Academic Services
      </div>
      <ul>
        <li>PC member, ACM International WSDM Conference (WSDM, 2021, 2022)</li>
        <li>PC member, ACM International Conference on Information and Knowledge Management (CIKM, 2021, 2022)</li>
        <li>PC member, ACM SIGKDD Conference on Knowledge Discovery and Data Mining, Applied Data Science Track (KDD ADS track, 2021, 2022)</li>
        <li>PC member, International Workshop on Emoji Understanding and Applications in Social Media (EMOJI, 2021, 2022)</li>
        <li>PC member, International ACM SIGIR Conference on Research and Development in Information Retrieval, short paper (SIGIR short paper, 2021)</li>
        <li>PC member, IEEE International Conference on Cloud Computing (IEEE CLOUD, 2020)</li>
        <li>Reviewer for IEEE Transactions on Services Computing (TSC, 2021, 2022)</li>
        <li>Reviewer for IEEE Transactions on Software Engineering (TSE, 2021)</li>
        <li>Reviewer for ACM Transactions on Intelligent Systems and Technology (TIST, 2021)</li>
        <li>Reviewer for Frontiers in Big Data (2021)</li>
        <li>Reviewer for International Journal of Human-Computer Interaction (IJHCI, 2021)</li>
        <li>Reviewer for ACM Transactions on the Web (TWEB, 2020, 2022)</li>
        <li>Reviewer for Journal of Biomedical Informatics (JBI, 2020)</li>
        <li>Reviewer for Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT, 2018)</li>
        <li>External reviewer for ACM SIGKDD conference on Knowledge Discovery and Data Mining (KDD 2017, 2018, 2019)</li>
        <li>External reviewer for International Conference on Mining Software Repositories (MSR 2017)</li>
      </ul>
    </div>
  )
}

function Awards() {
  return (
    <div className="segment">
      <div className="segment-title">
        Honors and Awards      
      </div>
      <ul>
        <li>2018, Yang Fuqing & Wang Yangyuan Academician Scholarship, Peking University</li>
        <li>2017, Microsoft Research Asia Fellowship Award, Microsoft Research Asia</li>
        <li>2017, National Scholarship, Ministry of Education</li>
        <li>2016, Lee Wai Wing Scholarship, Peking University</li>
        <li>2015, Excellent Research Award, Peking University</li>
        <li>2014, Suzhou Industrial Park Scholarship, Peking University</li>
        <li>2013, Outstanding Graduate of Beijing</li>
        <li>2013, Outstanding Graduate of Peking University</li>
        <li>2012, National Scholarship, Ministry of Education)</li>
        <li>2011, Outstanding Student Leader of Peking University</li>
        <li>2010, Suzhou Industrial Park Scholarship, Peking University</li>
      </ul>
    </div>
  )
}

function Main() {
  return (
    <div>
      <Profile />
      <Education />
      <ResearchInterests />
      <AcademicServices />
      <Awards />
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);