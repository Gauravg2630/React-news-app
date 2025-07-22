📰 React News App with Filters — Full Stack (Day 23 of #100DaysOfReact)
A full-stack, responsive news application built using React (frontend) and Express.js (backend) that fetches real-time headlines from NewsAPI. Users can browse by category or search for any topic. Built with clean UI, functional filters, and environment-secure backend.

🚀 Features
🔎 Search for news articles by keyword
📂 Filter by categories (Business, Sports, Tech, etc.)
🧠 Backend handles API requests securely via Express.js
🗂️ Responsive card layout
🌐 Real-time news from NewsAPI
💬 Clickable links to full articles
💡 Clean design with hover effects

🛠️ Tech Stack
Frontend:
React.js
CSS3
JSX (Hooks, Components)

Backend:
Node.js
Express.js
Axios
CORS
dotenv

📂 Folder Structure
React-news-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── NewsCard.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── config.js
├── server/
│   ├── app.js
│   └── .env

📷 Screenshots
![App Screenshot](Screenshot%20(516).png)
![App Screenshot](Screenshot%20(517).png)


⚙️ How It Works
🖥 Frontend:
User selects category or enters a search term.
Sends a request to Express.js backend.
Displays formatted articles in news cards.

🌐 Backend:
Uses Axios to request data from NewsAPI.org.
Protects API key via .env file.

Provides routes:
/api/top-headlines?category=business
/api/search?q=technology

🧪 Setup Instructions

🔧 Clone the repository
git clone https://github.com/yourusername/React-news-app.git
cd React-news-app

📁 Client Setup
cd client
npm install

📁 Server Setup
cd ../server
npm install

🔐 Add Environment Variables
Create .env in server/:
NEWS_API_KEY=your_newsapi_key
🔑 Get API key from https://newsapi.org

▶️ Run Both Servers
# Run backend
cd server
node app.js

# In new terminal, run frontend
cd client
npm start

✨ Future Improvements
 Pagination or Infinite Scroll
 Save Favorite Articles
 Loading Skeleton/Spinner
 Dark Mode Toggle

🔗 Live Demo
(https://news-api-frontend.netlify.app/)

📬 Connect With Me
💼 LinkedIn : https://www.linkedin.com/in/gorav-gumber-9319a2342/
💻 GitHub : https://github.com/Gauravg2630
📧 gauravgumber@gmail.com
