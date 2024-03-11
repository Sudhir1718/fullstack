import React from 'react';
import '/src/assets/css/explore.css';
import DrawerAppBar from './navbar';

const classesData = [
  {
    id: 1,
    title: "Hatha Yoga",
    instructor: "SHANTHI-VINO(cap-vice cap)",
    schedule: "Mon, Wed, Fri 9:00 AM - 10:30 AM",
    description: "Hatha yoga is a classical form of yoga that focuses on physical postures, breath control, and meditation."
  },
  {
    id: 2,
    title: "Vinyasa Flow",
    instructor: "SUDHIR-KXV",
    schedule: "Tue, Thu 6:00 PM - 7:30 PM",
    description: "Vinyasa flow yoga is a dynamic style of yoga that links movement with breath. It emphasizes smooth transitions between poses."
  },
  {
    id: 3,
    title: "Yin Yoga",
    instructor: "VIRAT KOHLI",
    schedule: "Sat, Sun 10:00 AM - 11:30 AM",
    description: "Yin yoga is a slow-paced style of yoga with postures that are held for longer periods of time. It targets the deeper layers of fascia and connective tissue in the body."
  },
  // Add more classes as needed
];

const Classes = () => {
  return (
    <><DrawerAppBar/>
    <div className="classes">
      <h2>Explore Classes</h2>
      <div className="class-cards">
        {classesData.map((classItem) => (
          <div className="class-card" key={classItem.id}>
            <h3>{classItem.title}</h3>
            <p><strong>Instructor:</strong> {classItem.instructor}</p>
            <p><strong>Schedule:</strong> {classItem.schedule}</p>
            <p>{classItem.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Classes;
