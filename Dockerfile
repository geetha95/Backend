# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the backend code
COPY . .

# Expose app port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
