# Workaholics - Disaster Preparedness and Response  Documentation

## Project Overview

In response to the increasing frequency and intensity of natural disasters—such as hurricanes, earthquakes, floods, and wildfires—this project aims to provide a comprehensive solution for disaster preparedness and response. The website addresses critical challenges such as limited access to reliable information, insufficient education on disaster response, and fragmented communication channels. By leveraging real-time data, educational resources, and emergency assistance tools, this platform empowers users to be better prepared for and more effectively respond to natural disasters.

## Bonus Features Included
1. User Authentication with firebase
2. Gelocation API and storing the same
3. SEO optimisation


## UI 
![image](https://github.com/user-attachments/assets/35f8886b-257f-4bc1-93b3-03624055a2fc)
<br/>
![image](https://github.com/user-attachments/assets/f987b923-b7d3-4356-835f-3fa6015e0a7a)
<br/>
![image](https://github.com/user-attachments/assets/8ab8eb8b-558f-48f1-8cc0-4ced9030a91c)
<br/>
![image](https://github.com/user-attachments/assets/9705e03f-0b06-44c2-9244-79aa6b3c3df8)

<br/>
and many more 


## To be considered 
1. Make sure the href is as "../component/component.html" or "component/component.html" , whichever is compatible to your device
2. Make sure you give permission for location and notifications access on clicking on emergency.


## Features

### 1. Home Page
- **Live Statistical Graphs**:
  - Displays real-time data visualizations, including graphs and charts, showing statistics on global natural disasters and related casualties. 
  - The data is continuously updated to reflect current events, providing users with up-to-date information on disaster impacts worldwide.
  
- **Navigation Bar & Footer**:
  - A consistent navigation experience is ensured across all pages with a responsive navbar and footer, providing easy access to all sections of the website.
  - Key features, such as the emergency button and resource links, are readily accessible.

- **Emergency Button**:
  - Prominently featured in both the navbar and footer, the emergency button allows users to quickly request assistance during a disaster.
  - Upon activation, the user's geolocation is instantly captured and stored in Firebase, facilitating rapid response from emergency services.

### 2. Emergency Assistance System
- **Geolocation Storage**:
  - The user's location data is securely stored in Firebase, ensuring that emergency responders have accurate information for quick deployment.
  
- **Communication Page**:
  - Users are redirected to a communication page after activating the emergency button. 
  - This page facilitates real-time interaction with emergency services, where users can provide additional details about their situation.
  - The communication interface includes a series of questions to gather critical information, such as the nature of the emergency and the number of people affected.
  - The page also displays live updates on the status of the help request, keeping the user informed until assistance arrives.

### 3. User Authentication System
- **Login & Sign-Up**:
  - The website includes a robust user authentication system powered by Firebase.
  - Users can create accounts, log in, and securely access personalized features such as saved resources, donation history, and emergency alerts.
  - The authentication process is designed to be secure, with encrypted data transmission and storage.

### 4. Education Portal
- **Courses & Videos**:
  - A comprehensive library of educational content is available, including video tutorials and structured courses on disaster preparedness and response.
  - Topics covered include preparedness for specific types of disasters (e.g., earthquakes, floods), first aid training, and survival skills.
  
- **Downloadable PDF Guides**:
  - Users can access and download a variety of PDF guides covering disaster management strategies, emergency kits, and evacuation plans.
  - These guides are designed for offline use, ensuring users can access critical information even when internet connectivity is disrupted.

### 5. Resource Directory
- **Contacts & Shelters**:
  - The resources page provides a dynamic directory of emergency contacts, shelters, and relief centers based on the user's location.
  - Users can quickly find the nearest shelter or contact local authorities for assistance.
  
- **Services Offered**:
  - This section details the services provided by the organization, including disaster relief efforts, training programs, and community outreach initiatives.
  - Users can also find information on how to volunteer or get involved in disaster preparedness activities.

### 6. Testimonials Page
- **Survivor Stories**:
  - This page features testimonials from individuals who have survived natural disasters, sharing their experiences and insights.
  - The stories are intended to inspire and educate others on the importance of disaster preparedness.
  
- **User Reviews**:
  - Users can submit their reviews and feedback on the services and resources provided by the website, fostering a community-driven platform.

### 7. Donation Platform
- **Donation Statistics**:
  - The donation page displays real-time statistics on funds raised for disaster relief efforts, showing transparency in how contributions are used.
  
- **Donation Options**:
  - Users can contribute to disaster relief funds through the website, although the payment integration is currently a planned feature.
  - The page outlines various ways to donate, including recurring contributions and targeted donations for specific disasters or regions.

## Technology Stack

### Frontend
- **HTML**: Structure and layout of the website.
- **CSS**: Styling for responsive design and user interface elements.
- **JavaScript**: Interactive features, data handling, and dynamic content updates.

### Backend
- **Firebase**:
  - **Authentication**: Secure user login and sign-up processes.
  - **Real-Time Database**: Storing user data, emergency requests, and geolocation information.
  - **Hosting**: Deployment and hosting of the website.

## Installation & Setup

### Prerequisites
- Basic knowledge of web development (HTML, CSS, JavaScript).
- A Firebase account for backend setup.

### Steps
1. **Clone the Repository**:
   - Clone the project repository to your local machine using Git.
    ```
     git clone https://github.com/your-repository.git
     ```

2. **Set Up Firebase**:
   - Create a Firebase project and configure the necessary services (Authentication, Firestore Database).
   - Update the Firebase configuration in the project with your credentials.

3. **Deploy the Website**:
   - Use Firebase Hosting or another preferred hosting service to deploy the website.
   - Follow the hosting platform's instructions to upload your files and go live.

### Usage
- **Navigating the Website**:
  - Use the navigation bar to access different sections, such as emergency services, educational content, and resources.
  
- **Requesting Emergency Help**:
  - In an emergency, click the emergency button to store your location and access the communication page for further assistance.

- **Accessing Educational Content**:
  - Explore courses, videos, and downloadable guides in the education portal to enhance your disaster preparedness knowledge.

***
# Thank You
