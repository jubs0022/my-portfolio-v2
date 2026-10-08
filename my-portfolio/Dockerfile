# --------------------------
# Stage 1: Build Vite app
# --------------------------
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .
RUN npm run build


# --------------------------
# Stage 2: Serve with Nginx
# --------------------------
FROM nginx:alpine

# Remove default nginx static config
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port for host reverse proxy
EXPOSE 5173

# SPA fallback for React Router (no nginx.conf needed)
RUN sed -i 's|index  index.html index.htm;|index index.html index.htm;\n    try_files $uri $uri/ /index.html;|g' \
    /etc/nginx/conf.d/default.conf

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
