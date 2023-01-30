# Medical Assistance
This is a medical chat bot that uses machine learning to predict user inputs (sign and symptoms entered by the user) then run the input on an trained data set which later validates if the input is medical related then gives out an error if not else perform a search of the signs and symptoms, and later the system response to the user with information about the sickness, remedies on the sickness, preventive measures and links on more information about the sickness.

In simple terms: this system release the user input as _sign and symptoms_ then responses back to the user with a solution.


>Advantages of the system
* It's reliable : this system can be easily accessed by any user and gives out quick response.
* User-friend: this system is build for a good user-experience and user-interruption.
* Provides remedies, preventations and more resource to sick users in a quickier way.

> Limitations
* The response may not be accurate since the system runs on a small machine learning dataset.
* The system may be slow since it need high computering power to run the machine learning models.

# Technical

## Technology used/ programming language/ stacks
* Nodejs: a javascript run-time that enables javascript to run server-side.
* View Engines (ejs) : used to display the content on the web page (sometime like html)
* CSS : to style the web pages
* Brainjs: A machine learning javascript library that enabled us to train and test our dataset again a **recurrent neural network** 
* Expressjs: helped us in creating a server
For more view on the **Dependencies** used on this project check the package.json file [here](/package.json).

## Coding and logic
This project is entirely created on javascript specific nodejs. I have used the Models, Views and Controllers (MVC) structure to make the project more module and reusable. You will see the Controllers folder, the View folder where the ejs (like html) stays , the Controller folder where the api functions stay, The Routes folder for the api routes.

First, the server runs on a main javascript file called [index.js](index.js).
