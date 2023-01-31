#!/bin/bash

docker stop $(docker ps -aq)

docker rm $(docker ps -aq)

docker rmi $(docker images -q)

cd /

if [ -d "nboxatt" ]; then
rm -r -d nboxatt
fi

git clone https://github.com/aloproducao/nboxatt

cd nboxatt

docker build -t nboxatt .

docker run -d --net=host -e INCLUDE_PUBLIC_IP_IN_NAT_1_TO_1_IP=yes nboxatt

htop