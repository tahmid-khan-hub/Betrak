# Betrak — Social Media Addiction Predictor

Betrak is a full-stack web application that predicts a user's social media addiction level using a trained machine learning model. Users answer a short assessment covering their usage habits, sleep, mental health and the system returns a classified addiction level - **Low**, **Medium** or **High** - along with a confidence score and personalized recommendations.

---

## Project Structure

---

### Frontend
| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | React framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| NextAuth.js | Authentication (Google OAuth + Credentials) |
| TanStack Query | Data fetching |
| Shadcn UI | UI components |
| PostgreSQL | User & assessment storage |
 
### Backend

 
---

## Machine Learning
 
### Dataset
- **Source:** Kaggle — Social Media Addiction dataset
- **Records:** ~700 (after cleaning)
- **Preprocessing:** Removed all student/academic-specific columns to make the model applicable to the general population

### Features Used (7 input features)
- Age
- Gender
- Country
- Most Used Platform
- Average Daily Usage Hours
- Sleep Hours Per Night
- Mental Health Score *(aggregated from 3 frontend questions, scaled 1–10)*

### Target Variable
`Addicted_Score` → converted to `Addiction_Level`: **Low / Medium / High**

### Model
- **Algorithm:** Random Forest Classifier (100 trees, max depth 10)
- **Train/Test Split:** 80/20
- **Class Balancing:** SMOTE applied to training data to address underrepresentation of the Low class
- **Serialization:** `joblib` → `model.pkl`

---

## API Endpoints
 
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/health` | Health check |
| GET | `/api/v1/questions` | Fetch assessment questions |
| POST | `/api/v1/predict` | Submit answers and get prediction |

---


## Getting Started

### Backend Setup
 
```bash
cd betrak-backend
 
# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux
 
# Install dependencies
pip install -r requirements.txt
 
# Train the model
python app/ml/train.py
 
# Start the server
uvicorn app.main:app --reload --port 8000
```

---

### Frontend Setup
 
```bash
cd betrak-frontend
 
# Install dependencies
npm install
 
# Set up environment variables
cp .env.example .env.local
# Fill in your PostgreSQL and NextAuth credentials
 
# Run the development server
npm run dev
```
 
---


 
