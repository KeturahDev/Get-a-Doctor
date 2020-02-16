# Find-a-Doctor

#### _Week 6 Friday Project for Epicodus_, _14th Feb. 2020_

#### By _**Keturah Howard**_

## Description

This application will help you find the right doctor for you! Enter in any symptom your having, and recieve a list of specialtist who will be abke to help. You can also search by name, so you can try to get a hold of that one really good doctor youve heard of before. Good luck and get well! *This project was made for the purpose of using exisisting APIs, and practive calling information from that API and displaying to the user.*

## Specifications:


| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| User can input a symptom and recieve a doctor's name from Portland area | 'tooth ache' *enter* | *doctor's name appears* |
| Application warns user no Dr.s meet that criteria when the query recieves no Dr.s | 'toothachee' | 'Looks like there's no Drs in the area that meet that criteria. Try entering a one-word symptom, or Dr's name.' |
| User can input a symptom and recieve a list of doctor's names | 'tooth ache' *enter* | *list of doctors appear* |
| User is told to fill in at least one of inputs if submitting a blank form | symptom:'', name:'' *enter* | 'please fill in at least one of the inputs to recieve a list of doctors' |
| User can input a name and recieve a list of doctor's name that relate | 'Wang' *enter* | *list of doctors with 'Wang' in their name appear* |
| List appearing can show full name of Dr, address, phone number, bio, and ability to accept new patients | 'tooth ache' *enter* | *list of doctors with tooth ache as their specialty appear, along with their information* |
| Application warns user when the API call does not recieve a 200 status | *mess up API call* | 'Oops! something went wrong with that request!' |




## Setup/Installation Requirements

  1. Click on the *clone or download* button of this repository. You can download the project file clicking the **"Download Zip"** button, double clicking the file in downloads, and navigating to the index.html file and double clicking that. *Or*, you can copy the link that pops up when you've clicked the *clone or download* button above this README.md file.
  2. Navigate to your terminal, where you have previously installed git (if you have not done this yet, go ahead and do so now).
  3. In terminal, change your directory to desktop, and then type **"git clone https://github.com/KeturahDev/Find-a-Doctor"**.
  4. When you've pressed enter, my project will be cloned onto your desktop, and now you can change directory into it and type **"code ."** to open the projects files in Visual Studio Code!

_Next, install npm in the project directory_

5. At the root directory for this project, enter the command "npm install"
6. Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal).
7. Open index.html in a browser of your choice (e.g., Google Chrome).

_Installing you're own API key:_
1. generate your individual API key by signing up for one on [this website](https://developer.betterdoctor.com/)
2. Place your new API in an .env file at the top level of your directory (which you will create through either the terminal by changing directory intp the project and typing 'touch .env' or through right clicking over the project name on the left-heand side of VSCode interface and typing .env). Set it equal to what you'll call it by later- spelling and capitialization all identical. For example, I called it by ${process.env.API\_KEY}, so in my .env file its looks like 'API_KEY = xxxxxxxxxx', where the x's are my key. for your convenience, just set the API reference to the same format in your .env file so you dont have to change it in the doctors.js file.

## Technologies Used

* Git
* HTML
* CSS
* JavaScript
* jQuery
* npm
* webpack
* babel
* ESlint
* Jest
* VS Code
* Bootstrap
* Dotenv
* [BetterDoctor API](https://developer.betterdoctor.com/)

## Known Bugs
Currently there is one known bug where inputting symptoms that can be known as names will bring up doctors with that name, such as 'rash'. 

## Contact Info 
Currently there is one known bug, however, if there are any issues running this website I would love feedback! Please email me at keturah.dev@gmail.com.

## License

This HTML web page is licensed under the MIT license.

## Copyright

Copyright (c) 2020 Keturah Howard.