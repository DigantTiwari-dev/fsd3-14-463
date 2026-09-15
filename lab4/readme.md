# NPM folder

1. create project folder
2. go to project folder in terminal
2. type `npm init -y` in terminal and prrss enter
3. open package.json file from project folder
5. update type as `type:module` in package.json
6. type in terminal `npm i nodemon -D` to install nodemon which restarts server while file changes. -D indicate install in dev dependency
7. it creates node_modules folder and package-lock.json
8. update .gitignore file and write project-folder/node_modules
9. update package.json to run the project, update script propert
   ''' "scripts": 
        { "start": "node app.js",
        "dev": "nodemon app.js"}'''

10. now you can start the server by typing `npm run dev` in the terminal of the project folder 

