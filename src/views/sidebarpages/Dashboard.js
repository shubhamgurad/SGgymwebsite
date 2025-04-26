// import React from 'react';
// import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';
// import { BsSearch, BsPlus } from 'react-icons/bs';
// import { GrView } from "react-icons/gr";
// import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
// import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
// import { GrGamepad } from "react-icons/gr";
// import { FaFigma } from "react-icons/fa6";
// import { RiGraduationCapLine } from "react-icons/ri";
// import { RiRobot2Line } from "react-icons/ri";
// import { IoColorPaletteOutline } from "react-icons/io5";
// import { GrPersonalComputer } from "react-icons/gr";
// import ProfileImg from '../../assets/images/Ellipse_993-removebg-preview.png';

// const StatCard = ({ title, value, icon }) => (
//   <Col md={4} xs={12} className="mb-2">
//     <Card className="p-3" style={{ height: '110px', borderRadius: '12px', marginBottom: '10px' }}>
//       <div className="d-flex justify-content-between align-items-center">
//         <h6 className="mb-0" style={{ fontWeight: 'bold', fontSize: '16px' }}>{title}</h6>
//         <div style={{ backgroundColor: 'var(--background-color)', color: 'white', width: '30px', height: '30px', borderRadius: '5px', textAlign: 'center', fontWeight:'bold' }}>
//           {icon}
//         </div>
//       </div>
//       <p className="mt-3 mb-0" >{value}</p>
//     </Card>
//   </Col>
// );

// const CourseCard = ({ iconn, title, progress, totalLessons }) => (
//   <Col md={6} xs={12} className="mb-2">
//     <Card className="p-2" style={{ height: '150px', borderRadius: '12px' }}>
//       <div style={{ backgroundColor: 'var(--background-color)', color: 'black', width: '35px', height: '40px', borderRadius: '5px', textAlign: 'center', paddingTop: '5px' }}>
//         {iconn}

//       </div>
//       <h6 className='p-1' >{title}</h6>
//       <div className="d-flex justify-content-between align-items-center mt-3 ">
//         <ProgressBar
//           now={progress}
//           style={{ width: '70%', backgroundColor: '#e9ecef', height: '80%' }} // Outer background color
//         >
//           <div style={{ backgroundColor: 'var(--background-color)', width: `${progress}%`, height: '100%' }} />
//         </ProgressBar>
//         <span style={{ fontSize: '12px' }}>{totalLessons}</span>
//       </div>
//     </Card>
//   </Col>
// );

// const ClassCard = ({ title, details, classicon }) => (
//   <Col md={6} xs={12} className="mb-2">
//     <Card className="p-3 " style={{ height: '120px', borderRadius: '12px', marginBottom: '10px' }}>
//       <div className='d-flex'>
//         <Col md={2} xs={12}>
//           <div style={{ backgroundColor: 'var(--background-color)', color: 'black', width: '35px', height: '40px', borderRadius: '5px', textAlign: 'center', paddingTop: '5px' }}>
//             {classicon}

//           </div>
//         </Col>
//         <Col md={10} xs={12}>
//           <h6 style={{ fontWeight: 'bold', fontSize: '16px' }}>{title}</h6>
//           <p className="text-muted mb-0" style={{ fontSize: '14px' }}>{details}</p>
//         </Col>
//       </div>
//     </Card>
//   </Col>
// );


// const Dashboard = () => {
//   const statsData = [
//     { id: 1, title: 'Login Users', value: 5000, icon: <GrView size={15} /> },
//     { id: 2, title: 'Courses Created', value: 50, icon: <IoCheckmarkCircleOutline size={15} /> },
//     { id: 3, title: 'Active Trainers', value: 50, icon: <HiOutlineQuestionMarkCircle size={15} /> },
//   ];

//   const enrolledCoursesData = [
//     { id: 1, iconn: <HiMiniDevicePhoneMobile size={20} />, title: 'Mobile App Development', progress: 40, totalLessons: '4/10 Lessons' },
//     { id: 2, iconn: <GrGamepad size={20} />, title: 'Game Development', progress: 20, totalLessons: '4/20 Lessons' },
//   ];

//   const enrolledClassesData = [
//     { id: 1, classicon: <FaFigma size={20} />, title: 'Learn Figma The UI Design Essentials', details: '2:30hr · 14 Lessons · Assignment' },
//     { id: 2, classicon: <RiGraduationCapLine size={20} />, title: 'Ethical Hacking and Penetration Testing', details: '2:30hr · 14 Lessons · Assignment' },
//   ];

//   const upcomingClassesData = [
//     { id: 1, classicon: <RiRobot2Line size={20} />, title: 'Cloud Computing Essentials', time: '5:30pm' },
//     { id: 2, classicon: <IoCheckmarkCircleOutline size={20} />, title: 'Mobile App Development Trends', time: '2:30pm' },
//   ];

//   return (
//     <Container fluid className="p-4">
//       {/* Welcome Section */}


//       {/* Stats Cards */}
//       <Row className="mb-4 ">
//         {statsData.map(stat => (
//           <StatCard key={stat.id} title={stat.title} value={stat.value} icon={stat.icon} />
//         ))}
//       </Row>

//       {/* Recent Enrolled Course & Daily Progress */}
//       <Row className="mb-4">
//         <Col xs={12}>
//           <h6>Recent Enrolled Course</h6>
//         </Col>
//         <Col md={8}>
//           <Row>
//             {enrolledCoursesData.map(course => (
//               <CourseCard key={course.id} iconn={course.iconn} title={course.title} progress={course.progress} totalLessons={course.totalLessons} />
//             ))}
//           </Row>
//         </Col>
//         {/* Daily Progress */}
//         <Col md={4} xs={12} className="mb-2">
//           <Card className="p-2" style={{ height: '150px', borderRadius: '12px', marginBottom: '10px' }}>
//             <h6 style={{ fontWeight: 'bold' }}>Daily Progress</h6>
//             <ul className="list-unstyled mb-0 mt-3">
//               <li className="mb-2 list-item" >
//                 <GrGamepad size={20} /> <span>Game Development</span>
//               </li>
//               <li className="mb-2 list-item"> <IoColorPaletteOutline size={20} /><span>  UI/UX</span>
//               </li>
//               <li className="mb-2 list-item"> <GrPersonalComputer size={20} /> <span>Web Development </span> </li>
//             </ul>

//             <style jsx>{`
//   .list-item {
//     background-color: #fff; /* Default background color */
//   }

//   .list-item:hover {
//     background-color: #fff1f1; /* Hover background color */
//   }
// `}</style>
//           </Card>
//         </Col>
//       </Row>

//     </Container>
//   );
// };

// export default Dashboard;




import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { GrView } from "react-icons/gr";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import '../sidebarCSS/dashboard.css';

const StatCard = ({ title, value, icon }) => (
  <Col md={4} xs={12} className="mb-2">
    <Card className="dashboard-card p-3" style={{ height: '110px', borderRadius: '12px', marginBottom: '10px' }}>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="dashboard-card-header mb-0" style={{ fontWeight: 'bold', fontSize: '16px' }}>{title}</h6>
        <div className="dashboard-card-icon">
          {icon}
        </div>
      </div>
      <p className="dashboard-card-value mt-3 mb-0">{value}</p>
    </Card>
  </Col>
);



const Dashboard = () => {
  const statsData = [
    { id: 1, title: 'Total Blogs', value: 4, icon: <GrView size={15} /> },
    { id: 2, title: 'Active Blogs', value: 4, icon: <IoCheckmarkCircleOutline size={15} /> },
    { id: 3, title: 'Inactive Blogs', value: 0, icon: <HiOutlineQuestionMarkCircle size={15} /> },

    { id: 4, title: 'Contact Inquiries', value: 5, icon: <GrView size={15} /> },
    { id: 5, title: 'Total Users', value: 5, icon: <IoCheckmarkCircleOutline size={15} /> },
    { id: 6, title: 'Trainers', value: 8, icon: <HiOutlineQuestionMarkCircle size={15} /> },

    { id: 7, title: 'Membership Plan', value: 3, icon: <GrView size={15} /> },
  ];


  return (
    <Container fluid className="dashboard-container p-4">
      {/* Stats Cards */}
      <Row className="dashboard-stats-row mb-4">
        {statsData.map(stat => (
          <StatCard key={stat.id} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </Row>

      {/* Recent Enrolled Course & Daily Progress */}
      {/* <Row className="dashboard-courses-row mb-4">
        <Col xs={12}>
          <h6>Recent Enrolled Course</h6>
        </Col>
        <Col md={8}>
          <Row>
            {enrolledCoursesData.map(course => (
              <CourseCard key={course.id} iconn={course.iconn} title={course.title} progress={course.progress} totalLessons={course.totalLessons} />
            ))}
          </Row>
        </Col> */}
        {/* Daily Progress */}
        {/* <Col md={4} xs={12} className="dashboard-daily-progress mb-2">
          <Card className="p-2" style={{ height: '150px', borderRadius: '12px', marginBottom: '10px' }}>
            <h6 className="dashboard-daily-progress-header" style={{ fontWeight: 'bold' }}>Daily Progress</h6>
            <ul className="dashboard-daily-progress-list list-unstyled mb-0 mt-3">
              <li className="dashboard-list-item mb-2">
                <GrGamepad size={20} /> <span>Game Development</span>
              </li>
              <li className="dashboard-list-item mb-2">
                <IoColorPaletteOutline size={20} /><span> UI/UX</span>
              </li>
              <li className="dashboard-list-item mb-2">
                <GrPersonalComputer size={20} /> <span>Web Development </span>
              </li>
            </ul>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Dashboard;
