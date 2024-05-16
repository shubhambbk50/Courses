











Installation in ubuntu, can use virtualbox
1. open terminal and delete any previous information of docker exist in the system using
    sudo apt-get docker docker-engine docker.io
    Enter your password.
2. clear is use to clear screen
3. ensure that the softwares in our system in the latest state using
    sudo apt-get update
4. Now we install our docker
    sudo apt-get install docker-ce
     if above code not work then
     use:     docker install
              sudo apt install docker.io
              sudo snap install docker

    check is Installation is done :
    docker --version
5. pull an image from docker hub
    sudo docker run hello-world
    To check if it actually pulled on system or not
    sudo docker images
6. sudo docker ps -a
    displays all (a refers all) the containers whether they are in existing state or running state
    sudo docker ps 
    displays container in the running state
    


// for windows
1.download docker desktop

//docker vs VM
1. memory usage
2. performance
3. portability
4. boot-up time
