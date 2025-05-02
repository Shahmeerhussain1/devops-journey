#!/bin/bash

#used for installing packages

echo "Installation Started ... "
sudo apt-get update -y > /dev/null
echo "25% Completed ... "
sudo apt-get upgrade -y > /dev/null
echo "50% Completed ... "
sudo apt-get install $1 -y
echo "100% completed ... "
echo "Package Dasti Installed"
