
# Index
* [Installing NodeJS](#Installing-NodeJS)
* [Using the terminal](#Using-the-terminal)
* [Installing and usage of Git](#Installing-and-usage-of-Git)
* [Setting up this project on your computer](#Setting-u-pthis-project-on-your-computer)

# Installing NodeJS
Node is a server runtime built around the chrome V8 engine for javascript. Node will take care of everything that needs to happen on the server. Together with node comes 'npm' with stands for node package manager. It will take care of all the modules which the projects depend on. A module is a bundle of function and objects we can use in our code. 
How to download node:
* Go to https://nodejs.org/en/ and download the version which says latest (lts)
* Follow the installation instructions, make sure node is added to path
* Close all terminal windows for the installation to take effect
* Check if node was propely installed by running `node -v` in the terminal

# Using the terminal
* On windows, open the termianl by searching `cmd` on your computer
* `dir` to list the files and subdirectories in your current directory
* `cd <directory name>` to navigate to subdirectory. Use `cd ..` to navigate back to parent directory.
* `mkdir <directory name>` to create a new directory

# Installing and usage of Git
Go to https://git-scm.com/download/ and download 64-bit version for your system
### Initializing and setup new repository
* `git init` initializes the new repository
* Alternatively you can clone someones elses repository `git clone <repository url>`  
* `git remote add origin <repository url>` stores the url to the remote repository in a variable named origin

### Staging and committing
* `git add .`  for all staging all files
* `git add <file name> <file name>` for staging specific file. Requires minimum one filename but can take in multiple filenames seperated by whitespace
* `git commit -m "<commit message>"` the commit message should briefly describe the changes you have made to the branch
* `git commit -am.` commits without a message 
* `git push origin <branch name>` for pushing the commited code to the remote github repository

### Pulling 
* `git pull origin <branch name>` To pull the changes from the remote repository
* The above command is the commbination of the following commands


### Branches
The changes you make to the project should not be commited to the local or remote master branch, but rather a temporary branch containing the changes you made. This is to avoid problems regarding two people making changes to the same file.
* `git branch` to view a list over the local branches and the current active branch
* `git branch <new branch name>` to create a new branch 
* `git checkout <branch name>` to switch to a specific branch
* `git checkout -b <new branch name>` to both create a new branch and switch to it
* Make sure to always push to specific branch. If no branch is specified, then the changes may be pushed to the master branch, overriding the content there. Always use `git push origin <branch name>`
* After making a new branch and checking out to it, you can stage and commit as usual
* `git branch -d <local branch name>` to delete a branch locally
* `git push origin --delete <remote branch name>` to delete a branch remotely

### Troubleshooting
* If you get an error when running a command, try adding the `-f` flag (f stands for force) to execute the command despite the error

# Setting up this project on your computer
* Open the terminal and navigate to the folder you want your local version of the project in and run the following commands
* `git clone https://github.com/sigrikd/CIBUS.git`
* `npm install`
* `npm start`
* Type in `localhost:3000` in the search bar in your browser




