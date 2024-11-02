// src/data/employees.js
import johnsonImg from '../assests/images/johnson.jpg';
import johnImg from '../assests/images/john.jpg';
import fakharImg from '../assests/images/fakhar.jpg';
import alexImg from '../assests/images/alex.jpg'

export const employees = [
  { 
    id: 1, 
    name: 'Johnson Wood', 
    role: 'Front End Developer', 
    email: 'johnsonwood@microsoft.com', 
    img: johnsonImg
  },
  { 
    id: 2, 
    name: 'John Doe', 
    role: 'Team Lead', 
    email: 'johndoe@microsoft.com', 
    img: johnImg
  },
  { 
    id: 3, 
    name: 'Fakhar Naveed', 
    role: 'UI/UX Designer', 
    email: 'fakhar@microsoft.com', 
    img: fakharImg 
  },
  { 
    id: 4, 
    name: 'Alex Made', 
    role: 'Backend Developer', 
    email: 'alexmade@microsoft.com', 
    img: alexImg 
  }
];
