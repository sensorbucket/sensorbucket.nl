FROM --platform=$BUILDPLATFORM node:alpine AS build
WORKDIR /app
COPY package.json bun.lockb .
RUN npm install -D
COPY . .
RUN npm run build

FROM caddy:alpine AS runtime
RUN cat <<EOF > /etc/caddy/Caddyfile
:80
root * /var/www/html
file_server
EOF


COPY --from=build /app/dist /var/www/html
EXPOSE 80
