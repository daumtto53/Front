#!/bin/bash

docker stop react;
docker ps kill react;
docker rm react;
docker image rm fitmate_front;

docker build -t fitmate_front .;
docker run -p3000:3000 -p8080:8080 --name react fitmate_front;
