# APPROACH 1
# FROM python:alpine
# WORKDIR /app/backend
# COPY backend/requirements.txt .
# RUN pip install -r requirements.txt
# COPY backend/ .
# EXPOSE 8080
# ENTRYPOINT [ "uvicorn" ]
# CMD [ "main:app", "--host=0.0.0.0", "--port=8080" ]

# APPROACH 2
FROM node:16
WORKDIR /usr/src/app
COPY express-app/package*.json ./
RUN npm install
COPY express-app/* .
EXPOSE 3000
CMD [ "node", "index.js" ]