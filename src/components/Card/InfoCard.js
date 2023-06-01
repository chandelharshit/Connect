import React from 'react';
import '../css/infoCard.css';
import anuImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/Anu.jpg';
import ishitaImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/isita.jpg';
import piyushImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/piyu.jpg';
import userImage from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/images/user.jpg';

const studentData = [
    { name: 'Ishita Gupta', rollNo: '1901640100139' },
    { name: 'Anushree Singh', rollNo: '1901640100070' },
    { name: 'Piyush Singh', rollNo: '1901640100192' },
    { name: 'Harshit Singh Chandel', rollNo: '1901640100134' }
  ];

  const StudentRow = ({ student }) => {
    return (
      <tr>
        <td className="photo-column">
        <div className="photo" style={{ backgroundImage: `url(${student.image})` }}></div>
        </td>
        <td className="text-column">{student.name}</td>
        <td className="text-column">Roll No: {student.rollNo}</td>
      </tr>
    );
  };
const InfoCard = () => {
  return (
    <div className="info-card">
    <table className="info-table">
      <tbody>
      {studentData.map((student, index) => (
            <StudentRow key={index} student={student} />
          ))}
      </tbody>
    </table>
  </div>
  );
};

export default InfoCard;
