# 💰 Smart Goal Planner
Smart Goal Planner is a simple and intuitive React + Vite application that helps users track their financial savings goals. It features a clean UI, live progress visualization, and full CRUD functionality powered by a local API (json-server).

 # Features
- ✅ Add new financial goals
- ✅ View progress with dynamic progress bars
- ✅ Deposit savings toward goals
- ✅ Delete completed or irrelevant goals
- 🔔 Deadline reminders and alerts
- 🧮 Dashboard totals for saved funds and completed goals

# ⚙️ Tech Stack
- React
- Vite
- Axios
- json-server

# 📦 Installation & Local Setup
- Clone the repository:
git clone https://github.com/FrostyJames/smart-goal-planner.git
cd smart-goal-planner


- Install dependencies:
npm install


- Start the local backend (mock API):
json-server --watch db.json --port 3000


- Run the React app:
npm run dev


Open http://localhost:5173 

# 🌐 Deployment Notes
This frontend app is ready for deployment via Netlify or Vercel. However, json-server runs locally and cannot be accessed from a public domain. To make your app work online:
- ✅ Switch to a cloud-based backend (e.g. Supabase, Firebase, Render)
- 🔄 Or modify the app to store data using localStorage or a hosted REST API




# 📁 Folder Structure
smart-goal-planner/
├── db.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── components/
│       ├── DepositForm.jsx
│       ├── GoalCard.jsx
│       ├── GoalDashboard.jsx
│       ├── GoalForm.jsx
│       ├── GoalList.jsx
│       └── NotificationBanner.jsx



# 🧠 Author
Developed by James Ivan
Built with purpose, progress, and pixel perfection 🔥


