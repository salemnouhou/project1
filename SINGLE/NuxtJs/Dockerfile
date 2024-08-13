FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/nuxt.config.js ./
EXPOSE 3000
CMD ["npm", "run", "start"]
# docker build -t nuxtjs-image .
# docker run -d -p 3000:3000 --name nuxt-container mon-app-nuxtjs
