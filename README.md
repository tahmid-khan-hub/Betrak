# Betrak — Social Media Addiction Predictor

Betrak is a full-stack web application that predicts a user's social media addiction level using a trained machine learning model. Users answer a short assessment covering their usage habits, sleep, mental health and the system returns a classified addiction level - **Low**, **Medium** or **High** - along with a confidence score and personalized recommendations.

---

## Project Structure

```
├── betrak-backend/ 
    ├── app/ 
    │   ├── __init__.py
    │   ├── ml/ 
    │   │   ├── __init__.py
    │   │   ├── preprocess.py 
    │   │   └── train.py 
    │   ├── api/
    │   │   ├── __init__.py
    │   │   └── v1/ 
    │   │   │   ├── __init__.py
    │   │   │   ├── routes/ 
    │   │   │       ├── __init__.py
    │   │   │       ├── health.py
    │   │   │       └── predict.py 
    │   │   │   └── schemas/ 
    │   │   │       ├── __init__.py
    │   │   │       ├── prediction.py
    │   │   │       └── user_input.py 
    │   ├── core/ 
    │   │   ├── __init__.py
    │   │   ├── config.py
    │   │   └── database.py
    │   ├── models/ 
    │   │   ├── __init__.py
    │   │   └── user_prediction.py 
    │   └── services/ 
    │   │   ├── __init__.py
    │   │   ├── mental_health_service.py 
    │   │   └── prediction_service.py 
    ├── README.md
    ├── analysis/ 
    │   ├── images/ 
    │   │   ├── metrics_chart.png
    │   │   ├── confusion_matrix.png
    │   │   └── class_distribution.png
    │   ├── confusion_matrix.py 
    │   ├── class_distribution.py 
    │   └── metrics_chart.py 
    ├── requirements.txt
    └── main.py 

├── betrak-frontend/ 
    ├── CLAUDE.md
    ├── public/ 
    │   └── default_user.png
    ├── postcss.config.mjs
    ├── src/ 
    │   ├── types/ 
    │   │   ├── Review.ts
    │   │   ├── FormData.ts
    │   │   ├── DatabaseUser.ts
    │   │   ├── formDefaults.ts
    │   │   └── next-auth.d.ts 
    │   ├── lib/ 
    │   │   ├── utils.ts
    │   │   ├── postgresql.ts
    │   │   ├── resultData.ts
    │   │   ├── auth/ 
    │   │   │   └── UserSignUP.ts 
    │   │   ├── reviewApi.ts 
    │   │   ├── betrakApi.ts
    │   │   └── authOptions.ts 
    │   ├── app/ 
    │   │   ├── api/ 
    │   │   │   ├── auth/
    │   │   │   │   ├── [...nextauth]/ 
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── sign-up/ 
    │   │   │   │   │   └── route.ts 
    │   │   │   ├── getQuestions.ts
    │   │   │   ├── result/ 
    │   │   │   │   └── route.ts 
    │   │   │   └── review/ 
    │   │   │   │   └── route.ts 
    │   │   ├── ProviderSession.tsx
    │   │   ├── SharedComponents/ 
    │   │   │   ├── Footer/
    │   │   │   │   └── Footer.tsx
    │   │   │   └── Navbar/ 
    │   │   │   │   └── Navbar.tsx 
    │   │   ├── sign-in/ 
    │   │   │   ├── page.tsx
    │   │   │   └── components/ 
    │   │   │   │   ├── SignInPageSkeleton.tsx 
    │   │   │   │   ├── SignInPageClientSide.tsx 
    │   │   │   │   └── SignInFormFields.tsx 
    │   │   ├── sign-up/ 
    │   │   │   ├── page.tsx
    │   │   │   └── components/ 
    │   │   │   │   ├── SignUpPageSkeleton.tsx 
    │   │   │   │   ├── SignUpPageClientSide.tsx
    │   │   │   │   └── SignUpFormFields.tsx 
    │   │   ├── assessment/ 
    │   │   │   ├── page.tsx
    │   │   │   └── components/ 
    │   │   │   │   ├── MentalHealthQuestions/ 
    │   │   │   │       ├── components/ 
    │   │   │   │       │   ├── questionOptions.ts 
    │   │   │   │       │   ├── MentalHealthQuestionsSkeleton.tsx
    │   │   │   │       │   └── ErrorState.tsx 
    │   │   │   │       └── MentalHealthQuestions.tsx 
    │   │   │   │   ├── PersonalAndUsageInfo/ 
    │   │   │   │       ├── PersonalAndUsageInfo.tsx 
    │   │   │   │       └── components/
    │   │   │   │       │   ├── PersonalInfo.tsx
    │   │   │   │       │   └── UsageInfo.tsx 
    │   │   │   │   ├── AssessmentSkeleton.tsx 
    │   │   │   │   └── AssessmentContent.tsx 
    │   │   ├── QueryProvider.tsx 
    │   │   ├── hooks/ 
    │   │   │   ├── NavLinks.tsx 
    │   │   │   ├── Menu.tsx 
    │   │   │   ├── Alert/ 
    │   │   │   │   ├── ErrorAlert.tsx 
    │   │   │   │   └── SucessAlert.tsx 
    │   │   │   ├── ScrollAnimate.tsx 
    │   │   │   └── Dropdown.tsx 
    │   │   ├── page.tsx 
    │   │   ├── not-found.tsx 
    │   │   ├── HomeComponents/ 
    │   │   │   ├── Reviews/ 
    │   │   │   │   ├── ReviewCard.tsx 
    │   │   │   │   ├── ReviewCardSkeleton.tsx 
    │   │   │   │   └── Reviews.tsx 
    │   │   │   ├── WhatWeMeasure/ 
    │   │   │   │   ├── WhatWeMeasureData.tsx 
    │   │   │   │   └── WhatWeMeasure.tsx 
    │   │   │   ├── Banner/ 
    │   │   │   │   └── Banner.tsx 
    │   │   │   ├── CTA/ 
    │   │   │   │   └── CTA.tsx 
    │   │   │   ├── AddictionLevels/ 
    │   │   │   │   ├── AddictionLevelsData.tsx 
    │   │   │   │   └── AddictionLevels.tsx
    │   │   │   ├── WhyItMatters/ 
    │   │   │   │   └── WhyItMatters.tsx 
    │   │   │   └── HowItWorks/ 
    │   │   │   │   └── HowItWorks.tsx 
    │   │   ├── result/
    │   │   │   ├── components/
    │   │   │   │   ├── Suggestions.tsx 
    │   │   │   │   ├── NoResultFound/ 
    │   │   │   │   │   └── NoResultFound.tsx
    │   │   │   │   ├── StatsCharts/ 
    │   │   │   │   │   ├── StatsCharts.tsx 
    │   │   │   │   │   └── components/ 
    │   │   │   │   │   │   ├── DailyUsageChart.tsx 
    │   │   │   │   │   │   ├── IntensityGauge.tsx 
    │   │   │   │   │   │   └── SleepCorrelationChart.tsx 
    │   │   │   │   ├── InputProfile.tsx 
    │   │   │   │   ├── AddictionLevelCard.tsx 
    │   │   │   │   ├── ResultSkeleton.tsx 
    │   │   │   │   └── UserReview.tsx 
    │   │   │   └── page.tsx 
    │   │   ├── layout.tsx 
    │   │   └── globals.css
    │   ├── middleware.ts 
    │   └── components/ 
    │   │   └── ui/
    │   │       ├── alert.tsx 
    │   │       └── button.tsx 
    ├── AGENTS.md
    ├── next.config.ts
    ├── eslint.config.mjs
    ├── components.json 
    ├── .gitignore 
    ├── tsconfig.json 
    ├── package.json
    └── README.md 
├── .gitignore
└── README.md 

```

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
| Technology | Purpose |
|---|---|
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| SQLAlchemy | Database ORM |
| psycopg2 | PostgreSQL adapter |
| Pydantic | Data validation & settings |
| python-dotenv | Environment variable management |
| scikit-learn | Random Forest model |
| imbalanced-learn | SMOTE for class balancing |
| pandas | Data processing |
| numpy | Numerical computing |
| joblib | Model serialization |
| Python 3.11+ | Runtime |
 
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

### Analysis (Optional)
 
To generate the model evaluation charts:
 
```bash
cd betrak-backend
 
pip install matplotlib seaborn --break-system-packages
 
python analysis/class_distribution.py
python analysis/confusion_matrix.py
python analysis/metrics_chart.py
```
 
Charts will be saved as PNG files inside the `analysis/` folder.
 
---

## Environment Variables
 
### Frontend — `.env.local`
```
DATABASE_URL=postgresql://user:password@localhost:5432/betrak_db
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_API_URL=http://localhost:8000
```
 
---

## Authentication
 
Betrak supports two authentication methods:
- **Google OAuth** — via NextAuth.js
- **Email & Password** — custom registration route with bcrypt hashing
> The `password` column is nullable in the database to support both OAuth and credentials-based users simultaneously.
> For email and password users,`passwords` are securely hashed using bcrypt before being stored in the database.

---

## Database Schema
 
```sql
users (
  id, name, email, password (nullable), image (nullable), role, created_at, updated_at
)
 
user_predictions (
  id, user_id, age, gender, country, avg_daily_usage_hours, most_used_platform, sleep_hours_per_night, meantal_health_score, addiction_level, confidence, suggestions, created_at
)

reviews (
  id, user_id, user_name, user_image, rating, comment, created_at
)
```

---

## Model Performance
 
| Class | Precision | Recall | F1-Score |
|---|---|---|---|
| High | ~0.98 | ~1.00 | ~0.99 |
| Low | ~0.94 | ~0.96 | ~0.95 |
| Medium | ~0.97 | ~0.95 | ~0.96 |
 
> Note: High scores are expected given the dataset size and SMOTE balancing on training data.

---

### Model Evaluation Charts

<table>
  <tr>
    <td><img src="betrak-backend/analysis/images/metrics_chart.png" alt="Class Distribution" width="500"/></td>
    <td><img src="betrak-backend/analysis/images/accuracy.png" alt="Accuracy" width="500"/></td>
  </tr>
</table>

<p align="center">
  <img src="betrak-backend/analysis/images/confusion_matrix.png" alt="Confusion Matrix" width="600"/>
</p>

<p align="center">
  <img src="betrak-backend/analysis/images/class_distribution.png" alt="Confusion Matrix" width="600"/>
</p>

---

## Limitations
 
- Dataset is relatively small (~700 records) — may affect generalization on diverse populations
- Dataset was originally designed for students — adaptation may introduce minor inconsistencies
- Self-reported responses may contain bias
- Model does not update in real-time — requires manual retraining as social media trends evolve

---

## Sources
 
<a href="https://drive.google.com/file/d/1oWEySKAxdCm-BrrdTqf8EpqLi2yrKTkk/view?usp=sharing" target="_blank" rel="noopener noreferrer">Dataset Link</a>

## Live Link
<a href="https://betrak-web.vercel.app" target="_blank" rel="noopener noreferrer">Betrak</a>

