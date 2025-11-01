# CS250 - Computational Thinking Project

**Advanced Program in Computer Science (APCS) at University of Science, Vietnam National University Ho Chi Minh City (VNU-HCMUS)**

This repository contains the source code for the CS250 - Computational Thinking course project. It is a full-stack web application designed to assist travelers in Ho Chi Minh City by providing real-time location services, landmark information, AI-powered Q&A, landmark recognition, public transportation overlays, user accounts, and rating features.

---

## 🚀 Tech Stack

This project is built with a modern, decoupled architecture:

* **Frontend:** [Next.js](https://nextjs.org/) (React Framework)
* **Backend:** [Flask](https://flask.palletsprojects.com/) (Python Micro-Framework)
* **APIs:**
    * [Google Maps Platform](https://mapsplatform.google.com/) for geospatial features.
    * [Google Gemini](https://ai.google.dev/) for generative AI capabilities.

---

## 📂 Repository Structure

The project is organized into two main directories:

* `/frontend`: Contains the Next.js application for the user interface.
* `/backend`: Contains the Python Flask server that handles business logic and serves as an API endpoint.

---

## 🏁 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/) (v18.x or later)
* [Python](https://www.python.org/) (v3.10 or later)
* `npm` or `yarn` package manager
* `pip` and `venv` for Python package management

### API Keys

You will need API keys for the Google Maps and Gemini APIs. Create a `.env.local` file in both the `/frontend` and `/backend` directories and add your keys:

```bash
# In /frontend/.env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_KEY_HERE
NEXT_PUBLIC_GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

```bash
# In /backend/.env.local
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_KEY_HERE
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

*(Note: Adjust the variable names above to match what you use in your application code.)*

### 1. Backend Setup (Flask)

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Create a virtual environment
python -m venv venv

# 3. Activate the virtual environment
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# 4. Install the required Python packages
pip install -r requirements.txt

# 5. Run the Flask server
flask run
```
Your backend API should now be running on `http://127.0.0.1:5000`.

### 2. Frontend Setup (Next.js)

```bash
# 1. Open a new terminal and navigate to the frontend directory
cd frontend

# 2. Install Node.js dependencies
npm install

# 3. Run the frontend development server
npm run dev
```
Your frontend application should now be running. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 License

This project is intended for educational use.

Please contact the authors before using the code in other applications.