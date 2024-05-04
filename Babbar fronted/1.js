// Version control -> make save points that saves your project
// version control tools -> git, subversion
// Github -> is a serice that hosts repo so that they can be used for collabaration. it also maintains version control

// Yes, GitHub primarily serves as a platform for hosting Git repositories, 
// which are commonly used for version control. Git is a distributed version control system t
// hat allows multiple developers to collaborate on projects, tracking changes to files over time. 
// GitHub provides additional features like issue tracking, pull requests, 
// and project management tools built around Git repositories, 
// making it a popular choice for software development teams and open-source projects.
// hmare folder me jo bhi ho rha sb kuch watch krta hai git.

// Download -
// Git - while installing click on Add Git Bash to windows terminal
to verify git --version
// now make id on github.com
// one more thing to do in cmd
git config --global user.name "lovebabbar"
git config --global user.email "lovebabbar@gmail.com"
// to verify it 
git config --list

Download github github desktop

// for macbook the process is different


git init 
// is used for initializing
.  denotes current repo
.. denotes parent repo
.git contains metaData of git repo

git clone https://github.com/shubhambbk50/TnP Newfolder/
//it will make a local repo in our system


// ----Life cycle of a change
// working directory -> (temp changes)
// staging area -> (about to commit)
// repository -> (committed)

// we have commit id for each commit we have done
git log
//show all commits done till and latest commit is on top

git show _________________
// put commit id to see what changes were done for a particular commit

git diff 
// command is used to show the differences between various states of your Git repository

git restore _______________
//undo any commit using its commit id

// if we want a file, a particular type of file, a subdirectory to get untracked from git
// make a file and name it .gitignore
// and write the name of file, a particular type of file, a subdirectory to get untracked from git
// git add . 
// git commit -m "doing commit"


