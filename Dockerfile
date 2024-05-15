FROM node:20-alpine AS base


FROM base As build
ENV NODE_ENV build

USER node
WORKDIR /app

COPY --chown=node:node package*.json ./
COPY --chown=node:node .prettierrc ./

RUN npm ci

COPY --chown=node:node . .

RUN npx prisma generate

RUN npm run build

RUN npm ci --only=production && npm cache clean --force



FROM base As production
ENV NODE_ENV production

USER node
WORKDIR /app

COPY --chown=node:node --from=build /app/.env ./
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist

CMD [ "node", "dist/main.js" ]