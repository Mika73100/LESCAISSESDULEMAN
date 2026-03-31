# Étape 1 : build de l'app Vite + React
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Étape 2 : servir les fichiers statiques avec nginx
FROM nginx:alpine

# Remplacer la page par défaut par notre app
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 86

CMD ["nginx", "-g", "daemon off;"]
