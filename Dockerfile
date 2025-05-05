# ship-tornado/frontend/Dockerfile
FROM node:20

WORKDIR /app
COPY . .

ENV npm_config_optional=false
RUN npm install --include=dev
RUN npm run build

EXPOSE 5173
CMD ["npx", "vite"]

