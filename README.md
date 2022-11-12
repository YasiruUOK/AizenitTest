1. Download The Project
2. unzip the project
3. Goto WebAPI folder
4. run WebAPI.sln file by using Visual Studio
5. Go to appsetting.json file in the project
6. change ToDOConnetionString values according to your MS SQL Database
7. run following commands one by one in Package manager console
    enable-migrations
    add-migration InitialCreate
    update-database
    
8. Then you can Run WebAPI Project

9. Then open Fullstack.ui File from Visual Studio Code
10. Open the terminal in Visual Studio Code
11. Then run "npm install" in the terminal
12. If you encounter any vulnerability reports run "npm audit fix"
13. Now you have all requirements to run the project, you can run it and open it in a browser. Start by building and serving the project: ng serve
14. Then you can use this project
