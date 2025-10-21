# Holy Cross of Davao College Room Finder

## Overview
This is a prototype HTML/CSS/JavaScript web application for the Holy Cross of Davao College (HCDC) Room Finder. It allows users to:

1. Browse campus buildings
2. Find rooms with detailed information
3. View course listings by department
4. See real-time room availability status (for authenticated users)

## Features
- **Two User Types**: 
  - Regular users (guests) can view room locations without status information
  - Authenticated users can see real-time room status (available/occupied)
- **Building Directory**: Visual display of all campus buildings
- **Room Finder**: Search and filter rooms by building, floor, type, and status
- **Course Directory**: Browse course offerings by department
- **Responsive Design**: Works on desktop and mobile devices
- **Offline Capability**: No internet needed after initial download

## How to Use
1. **Installation**:
   - Simply unzip all files into a folder on your computer
   - Open the `index.html` file in any modern web browser
   - No server installation or internet connection required after download

2. **Navigation**:
   - Use the top navigation menu to switch between pages
   - Click on buildings in the home page to quickly find rooms in that building

3. **Authentication**:
   - Click "Login" to access full features
   - Demo Credentials:
     - Username: `admin`, Password: `admin123` (full access)
     - Username: `guest`, Password: `guest123` (limited access)

4. **Room Finding**:
   - Use filters to narrow down room search
   - View room details including building, floor, type, and capacity
   - Authenticated users will see color-coded status indicators (green = available, red = occupied)

## Technical Information
- **Technologies Used**:
  - Plain HTML5, CSS3, and JavaScript
  - No frameworks or libraries
  - SVG graphics for building images
  - Local browser storage for user session persistence

- **Files Structure**:
  - `index.html`: Main HTML document
  - `styles.css`: All styling information
  - `data.js`: Application data (buildings, rooms, courses)
  - `app.js`: Application logic and functionality
  - `assets/`: Images and graphics
  - `png-assets/`: PNG versions of SVG files for older browsers

## Customization
This prototype is designed to be easily customizable:

- **Add/Edit Buildings**: Modify the `buildings` array in `data.js`
- **Add/Edit Rooms**: Modify the `rooms` array in `data.js`
- **Add/Edit Courses**: Modify the `courses` array in `data.js`
- **Change Colors/Theme**: Edit CSS variables in the `:root` section of `styles.css`
- **Add Users**: Modify the `users` array in `data.js`

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Edge
- Safari
- Opera

## Notes
- This is a prototype and not connected to a real database
- Status indicators are for demonstration purposes only
- For production use, this would need to be connected to a real-time room reservation system

Created for Holy Cross of Davao College, 2025