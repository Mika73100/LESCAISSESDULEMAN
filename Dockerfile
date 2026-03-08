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

# RunTipi / Traefik cible ce port (loadbalancer.server.port: "8082")
EXPOSE 8082
CMD ["serve", "-s", "dist", "-l", "8082"]
