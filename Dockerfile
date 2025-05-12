# Используем официальный образ Node.js на основе Alpine Linux
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Открываем порт, который будет использовать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]