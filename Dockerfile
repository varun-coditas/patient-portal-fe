FROM nginx

# Copy the current directory (assuming it contains Angular code) into the container
COPY . /app

WORKDIR /app

# Install Node.js and npm (if not already installed) to run ng build
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g @angular/cli@17.0.x && \
    npm install

# Run ng build command
RUN ng build --configuration=production

# Copy the built Angular app to the nginx default public folder
RUN cp -r ./dist/coditas-dot-ai-fe/browser/* /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]