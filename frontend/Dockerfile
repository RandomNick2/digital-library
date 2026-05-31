############################
# Stage 1 — dependencies
############################
FROM node:latest AS deps

WORKDIR /app

COPY package*.json ./

# кэш npm
RUN --mount=type=cache,target=/root/.npm \
    npm ci


############################
# Stage 2 — build
############################
FROM node:latest AS builder

WORKDIR /app

# node_modules из предыдущего слоя
COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build


############################
# Stage 3 — nginx
############################
FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Vite => dist
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]