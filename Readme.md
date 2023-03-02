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

## To Run the program 
Open your terminal or CMD (command prompt).
```bash
npm start
```
then open your browser and type __http://localhost:5000__
or just click this link
[http://localhost:5000](http://localhost:5000) .
This project runs on port 5000.

1. The main file of the project is [index.js](index.js) file.
1. All the api routes are found on [./routes/API.js](./routes/API.js) file.
2. All the view routes are found on [./routes/view.js](./routes/view.js) file.
3. All the data is stored on json format which are found on [./db](./db) folder.
4. The functions that handles the routes are found in [./controllers](./controllers) folder.
5. All project dependencies are in the [./node_modules](./node_modules) folder.
6. All the project enviroment variables are on the [.env](.env) file.

These are on the important files and folder you should check.

Start with [index.js](index.js) = then=> [public folder](./public/) = then => [routes](./routes/) =then after understanding its content go => [controllers](./controllers/) = then=> [db](./db/) 

# main file (index.js)
>index.js

This file runs the whole server-side application, its the initial entry.

Inside the [index.js](./index.js) file contains the following code.
```javascript
const express=require('express');
const cors=require('cors');
require('dotenv').config();

//intializing server
const app=express();

//middlewares
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//setting view engines
app.set('view engine','ejs');

//ejs routes
app.use(require('./routes/view'));

const port=process.env.PORT||5000;
//listening to server
app.listen(port,()=>{
    console.log(`Server running on Port ${port}`)
})
```

# controllers folder

>./controllers/AI.js

inside the [./controller.AI.js](./controllers/AI.js) contain the code below.
```javascript
const brain =require('brain.js');
const data=require('../db/data.json');
const checker=require('../db/checker.json');
const request = require('request');
const network= new brain.recurrent.LSTM();
const network2= new brain.recurrent.LSTM();
require('dotenv').config();

//Training checker data
const trainingcheckerData=checker.map(item=>({
    input: item.sign,
    output: item.output
}));
network2.train(trainingcheckerData,{
    iterations:100,
});

//training health data
const trainingData=data.map(item=>({
    input: item.signs,
    output: item.sickness
}));
network.train(trainingData,{
    iterations:100,
});

const Ask=async(req,res)=>{
    try {
        const {prompt}=req.body;
        const checkedData=network2.run(prompt)
        if(checkedData==1){
            const output=network.run(prompt);
            //google search the output
            let options = {
                'method': 'POST',
                'url': 'https://google.serper.dev/search',
                'headers': {
                    'X-API-KEY': '15afe59cd3f32c28b37219ee2d073b7348626de7',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "q": prompt,
                    "gl": "us",
                    "hl": "en",
                    "autocorrect": true
                })
                
            };
            request(options, (error, response) => {
                if (error) {
                    res.status(404).send({msg:"No Internet"})
                }else{
                    res.status(200).send({
                        msg:output,
                        ans:response.body
                    });
                }
            });
        }else{
            res.status(400).send({
                error:"Cannot generate response!",
                msg:'Enter a valid illness sign or symptom!',
            })
        }
       
    } catch (error) {
        console.log(error.message)
        res.status(400).send({
            error:error.message,
            msg:'Try again!',
        })
    }
}

module.exports={
    Ask,
}
```

Understand the code above.

The function in  [./controllers/AI.js](./controllers/AI.js)

I've import the json data from [db](./db/)
```javascript 
const data=require('../db/data.json');
const checker=require('../db/checker.json');
```
then i import the machine learning library called brain.js that uses a recurrent algorithm see below. 
```javascript
const network= new brain.recurrent.LSTM();
const network2= new brain.recurrent.LSTM();
```
The data is then trained on the recurrent neural network on 100  iterations, the recurrent takes in the input and gives out the output.
```javascript
//Training checker data
const trainingcheckerData=checker.map(item=>({
    input: item.sign,
    output: item.output
}));
network2.train(trainingcheckerData,{
    iterations:100,
});

//training health data
const trainingData=data.map(item=>({
    input: item.signs,
    output: item.sickness
}));
network.train(trainingData,{
    iterations:100,
});

```
Then a function called `Ask()` gets executed

it takes in two parameters `req and res` (request and response)
```javascript
const Ask=async(req,res)=>{
    ...
}
```
then the user input called _prompt_ is captched from the req.body then the prompt is the runned on the trained data set
which checks it if its a valid medical sign or sympthon if its returns true then it proceed to perform a google search and send the output to the user through `res.send({})`
```javascript
try {
        const {prompt}=req.body;
        const checkedData=network2.run(prompt)
        if(checkedData==1){
            const output=network.run(prompt);
            //google search the output
            let options = {
                'method': 'POST',
                'url': 'https://google.serper.dev/search',
                'headers': {
                    'X-API-KEY': '15afe59cd3f32c28b37219ee2d073b7348626de7',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "q": prompt,
                    "gl": "us",
                    "hl": "en",
                    "autocorrect": true
                })
                
            };
            request(options, (error, response) => {
                if (error) {
                    res.status(404).send({msg:"No Internet"})
                }else{
                    res.status(200).send({
                        msg:output,
                        ans:response.body
                    });
                }
            });
        }
``` 
if the user input return false then its not a medical related input then an error is sent back to the user. which is "Cannot generate response!"
"Try again!"
```javascript 
        else{
            res.status(400).send({
                error:"Cannot generate response!",
                msg:'Enter a valid illness sign or symptom!',
            })
        }
       
    } catch (error) {
        console.log(error.message)
        res.status(400).send({
            error:error.message,
            msg:'Try again!',
        })
    } 
```
# db (database in full)

In this folder you would find the json data that are used that a ran on the recurrent neural network 
> data.json

The "signs" is expected user input while the "sickness" is the expect result according to the sign entered 

_Note: Bare in mind that this data isnt correct it only for development and practical purposes, on production real data would be used._
```javascript
[
    {
        "signs":"difficult-breathing, wheezing",
        "sickness":"Asthma"
    },
    {
        "signs":"backache, coughing",
        "sickness":"Tuberculosis"
    },
    {
        "signs":"vomiting, headache",
        "sickness":"Malaria"
    },
    {
        "signs":"stomachache, rashes",
        "sickness":"Cholera"
    },
    {
        "signs":"bad hearing, poor sight",
        "sickness":"Aging"
    }
]

```
> checker.json

This data use to check if the user input is medical related or not.

"sign" is the expected user input while "output" is the response if the sign equals to the field assigned to it. 

For example, if a user inputs "headache" then the neural network will return `1`
which will the executed as true else it will be false.
```javascript
[
    {
        "sign":"headache",
        "output":1
    },
    {
        "sign":"backache",
        "output":1
    },
    {
        "sign":"stomachache",
        "output":1
    },
    {
        "sign":"typhoid",
        "output":1
    },
    {
        "sign":"diarhoea",
        "output":1
    },
    {
        "sign":"headache",
        "output":1
    },
    {
        "sign":"pain",
        "output":1
    },
    {
        "sign":"muscle",
        "output":1
    },
    {
        "sign":"fever",
        "output":1
    },
    {
        "sign":"lack",
        "output":1
    }
]
```

# .env (environment variables)

All the environment varibles used in this project are stored here.

Environment variables are data through arent suppose to be public but need for a project. We store important variables on an `.env` file where its protected from the user. i.e like api keys, secret keys, private keys, passwords e.t.c
```javascript
SEARCH_API_KEY=
```

# routes folder

This folder contains two files the `API.js` and `views.js`.

The api routes are written in the `API.js` file 

while the view routes like" __/home__" are written in the `view.js` file.
>API.js

```javascript
const express=require('express');
const router=express.Router();
const {
    Ask,
}=require('../controllers/AI');

//post signs and sympthoms
router.post('/',Ask)

module.exports=router;
```
Express is a backend web framework that I've used with node to simplify the process of creating a server-side application, I have import it as:
```javascript
const express=require('express');
```
There is only one api route that is `'/'` that executes a function called `Ask`
```javascript
//post signs and sympthoms
router.post('/',Ask)
```
  which is imported from the `controllers/AI.js` file.
  ```javascript
  const {
    Ask,
}=require('../controllers/AI');
  ```

  >view.js

  contains the view routes
  ```javascript
  const express=require('express'),
views=express.Router();

//view routes
views.get('/',(req,res)=>{
    res.render('index',{title:'Home',js:'js/index.js'})
});
views.get('/playground',(req,res)=>{
    res.render('playground',{title:'AI',js:'js/playground.js'})
});
 
//api routes
views.use('/api',require('./API'));

//rendering not found page
views.use((req,res)=>{
    res.status(404).render('notfound',{title:'Not found',js:'js/notfound.js'})
})

module.exports=views
```

# views 
contains the `ejs` templates that display content on the webpage like `html`.

[Open views folder](./views/)



### That's all please understand the code, if you would like help contact me