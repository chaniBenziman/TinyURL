# השתמש בבסיס של Node.js גרסה 18
FROM node:18

# הגדר את תיקיית העבודה בתוך ה-container
WORKDIR /usr/src/app

# העתק את ה-package.json וה-package-lock.json (אם קיים)
COPY package*.json ./

# התקן את התלויות של האפליקציה
RUN npm install

# העתק את כל הקבצים של האפליקציה
COPY . .

# ציין את הפורט שהאפליקציה מאזינה לו
EXPOSE 3000

# הפקודה להריץ את האפליקציה
CMD [ "node", "index.js" ]
