# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production (sans nginx – compatible Traefik / RunTipi)
FROM node:18-alpine

WORKDIR /app

# Fichiers buildés + serve pour servir le SPA
COPY --from=builder /app/dist ./dist
RUN npm install -g serve

EXPOSE 7000

# Même port que dans docker-compose (7000:7000) pour Traefik / RunTipi
CMD ["serve", "-s", "dist", "-l", "7000"]
