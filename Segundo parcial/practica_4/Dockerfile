# Etapa para instalación de dependencias de desarrollo
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Etapa de construcción
FROM dev-deps as builder
COPY . .
RUN yarn build

# Etapa para instalación de dependencias de producción
FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --prod --frozen-lockfile
RUN yarn cache clean

# Etapa de producción
FROM node:19-alpine3.15 as prod
EXPOSE 3000
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Configuración de la variable de entorno
ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}

CMD ["node", "dist/main.js"]
