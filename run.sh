#!/bin/bash

docker build -t minuit-frontend .

docker run -p 3000:3000 minuit-frontend