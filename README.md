# crud-users

Live url: 

### To run the app:
<ol>
  <li>Download the repository on the local machine./li>
  <li>Open the backend folder in terminal and write: npm install</li>
  <li>Now, create a .env file in the backend folder.</li/>
  <li>In this file, add 3 variables: MONGO_URL, PORT, FRONTEND_URL</li>
  <li>Once done, write this in terminal within the backend folder: node index.js</li>
  <li>Open the frontend folder in termina and write: npm install</li>
  <li>Now, create a .env file in frontend folder at same level of package.json file.</li>
  <li>In this file, add 1 variable: REACT_APP_SERVER_URL</li>
  <li>Once done, write this in terminal within the frontend folder: npm run start.</li>
</ol>

### Environment variables
<ol>
  <li>MONGO_URL: This represents the mongodb url. It can be local to your machine or the mongo atlas url.</li>
  <li>PORT: This represents the port where you want to run your app.</li>
  <li>FRONTEND_URL: This represents the url where the react app is running on your machine. Generally, it's: http://localhost:3000/ </li>
  <li>REACT_APP_SERVER_URL: This represents the url where the backend app is running on your machine. It will be in this format: http://localhost:<YOUR PORT NO>/api/v1</li>
</ol>
