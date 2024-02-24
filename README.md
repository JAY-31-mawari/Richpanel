# Project Link - https://richpanel-nxc4.onrender.com

#INSTALLATION
# Go into the backend directory and open terminal here and run command "npm install" as it will install the necessary dependcies for the project.
# After running the command run another command "node server.js" to run the server.


#TECH-STACK
# FRONTEND - HTML/CSS/JAVASCRIPT
# BACKEND  - Node.js
# DATABASE - MongoDB
# JWT for authentication
# Rest API

#API WORKING
# /api/v1/getdata - to get the data of Users Account
# /api/v1/signup  - to post the 'Sign up' data from 'signup.html'
# /api/v1/login   - to post the 'Login' data from 'login.html'
# /api/v1/delete  - to delete Users Account information from the database

#WEB APP WORKING
# 1. First you need to Sign up/Login to your account. After signing in, you can see your data on /api/v1/getdata. Fully intutive user interface for better user understanding and experience
# 2. After sign up/login you will be redirected to 'connect.hmtl'
# 3. After connect you will be redirected to 'permission.html', where you have two options  
# Option - 1. To delete account, where your account will be deleted. After deletion you will be redirected to sign up and these whole process is authenticated using JWT.
# Option - 2. proceed to 'dashboard.html', where you will be redirected to 'dashboard.html' 

# 4. 'dashboard.html', Demo of chat app, where you will have two buttons names 'manoj' and 'ayushi' whichever button you will click, the message from the input bar will be shown in the chat section. Demo is shown in video.

# Due to time constraints i only had done this,but could have done more by using websockets and making proper database schemas to make it dynamic and fast.


#HTML PAGES
# All the Html pages are names straight forward to their functionality.

# server.js file - holds all the necessary modules, middlewares and functionality required for the backend.
# controller folder- handles all the operations after the data has been received from the frontend
# routes folder- handles all the routing operations for the end points
# models folder- holds the schemas for the Users account data.
