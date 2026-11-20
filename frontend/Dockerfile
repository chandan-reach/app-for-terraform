
# Use lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY . .

# Expose frontend port
EXPOSE 3000

# Start Express application
CMD ["npm", "start"]
