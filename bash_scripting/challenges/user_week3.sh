#!/bin/bash

<<info
filename [options]
[-c or --create] to create new user  

info

checkAvaiableUser(){
	usercheck=sudo cat /etc/passwd | grep $1 | wc | awk '{print $1}'
	echo $usercheck
}

createUser(){
        read -p "Enter the name of new user : " newusername
	userconfirmation=$(checkAvaiableUser $newusername)
	if [ $userconfirmation -gt 0 ]; then
		echo "User with same name alredy exists :("
	else
	sudo useradd -m $newusername -s /bin/bash
	read -p "Enter the password for new user : " newuserpass
	echo -e "$newuserpass\n$newuserpass" | sudo passwd $newusername
	echo "new user created successfully"
        fi
}

deleteUser(){
        read -p "Enter the name of user : " username
        userconfirmation=$(checkAvaiableUser $username)
        if [ $userconfirmation -lt 1 ]; then
                echo "NO user exists with this name :("
        else
	sudo userdel $username
	echo "User deleted successfully :)"
	fi
}

resetUser(){
	read -p "Enter the name of a user : " oldusername
        userconfirmation=$(checkAvaiableUser $oldusername)
        if [ $userconfirmation -lt 1 ]; then
                echo "NOT any user with same name exists :("
        else
        read -p "Enter the password for new user : " newuserpass
        echo -e "$newuserpass\n$newuserpass" | sudo passwd $newusername
        echo "new password created successfully"
        fi

}

listUser(){
	userslist= cat /etc/passwd | awk '{print $1}'
	echo $userlist
}

helpUser(){
	echo "use following arguments : "
	echo "[-c or --create] to create new user"
        echo "[-d or --delete] to delete a user"
        echo "[-r or --reset] to reset a password of a user"
        echo "[-l or --list] to list all users of machine"
	echo "[-h or --help] to see all the required parameters of script"
}


if   [ "$1" == "-c" ] || [ "$1" == "--create" ]; then
	createUser;
elif [ "$1" == "-l" ] || [ "$1" == "--list" ]; then 
	listUser;
elif [ "$1" == "-d" ] || [ "$1" == "--delete" ]; then
       	deleteUser
elif [ "$1" == "-r" ] || [ "$1" == "--reset" ]; then
        resetUser
elif [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
        helpUser
else
	echo "invalid parameters"
fi


