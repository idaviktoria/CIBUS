# CIBUS


# Installing NodeJS
Node is a server runtime built around the chrome V8 engine for javascript. Node will take care of everything that needs to happend on the server. Together with node comes 'npm' with stands for node package manager. It will take care of all the modules which the projects depends on. A module is a bundle of function and objects we can use in our code. 
How to download node:
* Go to https://nodejs.org/en/ and download the version which says latest (lts)
* Follow the installation instructions, make sure node is added to path
* Close all terminal windows for the installation to take effect
* Check if node was propely installed by running 'node -v' in the terminal


# Using the termianl
* `dir` to list the files and directories in your current directory
* `cd <directory name>` to navigate to subdirectory. Use `cd ..` to navigate back to parent directory.
* `mkdir <directory name>` 

# Installing and using Git
Go to https://git-scm.com/download/ and download 64-bit version for your system
### Initializing and setup new repository
* `git init`
* Alternatively you can clones someones elses repository `git clone <repository url>`  
* `git remote add origin <repository url>` stores the url to the remote repository in a variable named origin

### Staging and commiting
* `git add .`  for all staging all files
* `git add <file name> <file name>` , for staging specific file. Requires minimum one filename but can take in multiple filenames seperated by whitespace
* `git push origin <branch name>` for pushing the commited code to the common remote github repository


# Setting up the project on your computer
* Open up the terminal and navigate to the folder you want your local version of the project in
* Run `git clone https://github.com/sigrikd/CIBUS.git`
* Run `npm install`
* Run `npm start`
* Type in 'localhost:3000' in the search filed in your browser



