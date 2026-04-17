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
