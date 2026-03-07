# Utiliser l'image Node.js standard au lieu d'Alpine
FROM node:18

# Installer les dépendances système nécessaires
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 4321
RUN npm install -g http-server
CMD ["http-server", "dist", "-p", "4321", "--cors"]