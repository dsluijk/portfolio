# Use the NodeJS image as builder
FROM node:lts AS builder

# Create the workspace
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install pupeteer dependencies
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Copy the package file and install dependencies
COPY package.json /usr/src/app
RUN yarn install

# Copy over the source code
COPY src /usr/src/app/src
COPY static /usr/src/app/src
COPY tsconfig.json /usr/src/app
COPY .postcssrc /usr/src/app
COPY .eslintrc.json /usr/src/app
COPY .stylelintrc.json /usr/src/app

# Run a lint check
RUN yarn lint

# Build the application
RUN yarn build

# The actual server, this builds the final image
FROM nginx:latest

# Copy the nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the output of the builder
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
RUN chown nginx:nginx /usr/share/nginx/html/ -R
EXPOSE 80
