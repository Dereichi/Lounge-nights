# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production --legacy-peer-deps

# Copy source code
COPY . .

# Build the client application
RUN npm run build

# Expose port 80
EXPOSE 80

# Start the application
CMD ["npm", "start"]