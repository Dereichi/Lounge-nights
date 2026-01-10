# Use Node.js 18 LTS - Updated for Railway deployment
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies needed for build)
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the client application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --omit=dev

# Expose port 80
EXPOSE 80

# Start the application
CMD ["npm", "start"]