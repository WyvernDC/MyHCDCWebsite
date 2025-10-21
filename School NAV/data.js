// Data for the HCDC Room Finder application
// This file contains all the data for buildings, rooms, courses, and users

/**
 * Valid users for login authentication
 * Types:
 * - full: Can see room status (available/occupied)
 * - guest: Limited access, can only see room locations
 */
const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    type: 'full'
  },
  {
    id: 2,
    username: 'guest',
    password: 'guest123',
    type: 'guest'
  }
];

/**
 * Campus buildings data
 */
const buildings = [
  {
    id: 'main',
    name: 'Main Building',
    shortName: 'Main',
    description: 'The main academic building housing most classrooms and administrative offices.',
    imageUrl: 'assets/main-building.jpg'
  },
  {
    id: 'Theater',
    name: 'Cross-Theater',
    shortName: 'Sci',
    description: 'Houses science laboratories, research facilities, and related classrooms.',
    imageUrl: 'assets/Cross-Theater.jpg'
  },
  {
    id: 'tech',
    name: 'Technology Center',
    shortName: 'Tech',
    description: 'Modern facility with computer labs, multimedia rooms, and technology spaces.',
    imageUrl: 'assets/tech-building.jpg'
  },
  {
    id: 'gym',
    name: 'Gymnasium',
    shortName: 'Gym',
    description: 'Athletic facilities, courts, and physical education spaces.',
    imageUrl: 'assets/gym-building.jpg'
  },
  {
    id: 'admin',
    name: 'Administration Building',
    shortName: 'Admin',
    description: 'Contains offices for school administration, registrar, and finance.',
    imageUrl: 'assets/admin-building.jpg'
  },
  {
    id: 'library',
    name: 'Library and Resource Center',
    shortName: 'Lib',
    description: 'Main library, study areas, and educational resources.',
    imageUrl: 'assets/Library.jpg'
  }
];

/**
 * Available floors across buildings
 */
const floors = [1, 2, 3, 4, 5];

/**
 * Room data across all buildings
 */
const rooms = [
  // Main Building Rooms
  {
    id: 101,
    number: 'M101',
    type: 'classroom',
    capacity: 40,
    floor: 1,
    building: 'main',
    status: 'available'
  },
  {
    id: 102,
    number: 'M102',
    type: 'classroom',
    capacity: 35,
    floor: 1,
    building: 'main',
    status: 'occupied'
  },
  {
    id: 103,
    number: 'M103',
    type: 'office',
    capacity: 10,
    floor: 1,
    building: 'main',
    status: 'occupied'
  },
  {
    id: 201,
    number: 'M201',
    type: 'classroom',
    capacity: 40,
    floor: 2,
    building: 'main',
    status: 'available'
  },
  {
    id: 202,
    number: 'M202',
    type: 'classroom',
    capacity: 40,
    floor: 2,
    building: 'main',
    status: 'occupied'
  },
  {
    id: 301,
    number: 'M301',
    type: 'classroom',
    capacity: 45,
    floor: 3,
    building: 'main',
    status: 'available'
  },
  
  // Science Building Rooms
  {
    id: 104,
    number: 'S101',
    type: 'laboratory',
    capacity: 30,
    floor: 1,
    building: 'science',
    status: 'occupied'
  },
  {
    id: 105,
    number: 'S102',
    type: 'laboratory',
    capacity: 25,
    floor: 1,
    building: 'science',
    status: 'available'
  },
  {
    id: 203,
    number: 'S201',
    type: 'classroom',
    capacity: 35,
    floor: 2,
    building: 'science',
    status: 'available'
  },
  {
    id: 204,
    number: 'S202',
    type: 'laboratory',
    capacity: 30,
    floor: 2,
    building: 'science',
    status: 'occupied'
  },
  
  // Technology Center Rooms
  {
    id: 106,
    number: 'T101',
    type: 'laboratory',
    capacity: 35,
    floor: 1,
    building: 'tech',
    status: 'available'
  },
  {
    id: 107,
    number: 'T102',
    type: 'classroom',
    capacity: 40,
    floor: 1,
    building: 'tech',
    status: 'occupied'
  },
  {
    id: 205,
    number: 'T201',
    type: 'laboratory',
    capacity: 30,
    floor: 2,
    building: 'tech',
    status: 'available'
  },
  
  // Gymnasium Rooms
  {
    id: 108,
    number: 'G101',
    type: 'auditorium',
    capacity: 200,
    floor: 1,
    building: 'gym',
    status: 'available'
  },
  {
    id: 109,
    number: 'G102',
    type: 'classroom',
    capacity: 30,
    floor: 1,
    building: 'gym',
    status: 'occupied'
  },
  
  // Admin Building Rooms
  {
    id: 110,
    number: 'A101',
    type: 'office',
    capacity: 10,
    floor: 1,
    building: 'admin',
    status: 'occupied'
  },
  {
    id: 111,
    number: 'A102',
    type: 'office',
    capacity: 5,
    floor: 1,
    building: 'admin',
    status: 'occupied'
  },
  {
    id: 206,
    number: 'A201',
    type: 'office',
    capacity: 8,
    floor: 2,
    building: 'admin',
    status: 'available'
  },
  
  // Library Rooms
  {
    id: 112,
    number: 'L101',
    type: 'classroom',
    capacity: 50,
    floor: 1,
    building: 'library',
    status: 'available'
  },
  {
    id: 207,
    number: 'L201',
    type: 'classroom',
    capacity: 40,
    floor: 2,
    building: 'library',
    status: 'occupied'
  }
];
