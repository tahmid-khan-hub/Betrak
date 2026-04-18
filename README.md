# Betrak — Social Media Addiction Predictor

Betrak is a full-stack web application that predicts a user's social media addiction level using a trained machine learning model. Users answer a short assessment covering their usage habits, sleep, mental health and the system returns a classified addiction level - **Low**, **Medium** or **High** - along with a confidence score and personalized recommendations.

---

## Project Structure

```
├── betrak-backend/ (6000 tokens)
    ├── app/ (4200 tokens)
    │   ├── __init__.py
    │   ├── ml/ (1000 tokens)
    │   │   ├── __init__.py
    │   │   ├── preprocess.py (500 tokens)
    │   │   └── train.py (500 tokens)
    │   ├── api/ (1300 tokens)
    │   │   ├── __init__.py
    │   │   └── v1/ (1300 tokens)
    │   │   │   ├── __init__.py
    │   │   │   ├── routes/ (1000 tokens)
    │   │   │       ├── __init__.py
    │   │   │       ├── health.py
    │   │   │       └── predict.py (900 tokens)
    │   │   │   └── schemas/ (300 tokens)
    │   │   │       ├── __init__.py
    │   │   │       ├── prediction.py
    │   │   │       └── user_input.py (200 tokens)
    │   ├── core/ (200 tokens)
    │   │   ├── __init__.py
    │   │   ├── config.py
    │   │   └── database.py
    │   ├── models/ (300 tokens)
    │   │   ├── __init__.py
    │   │   └── user_prediction.py (300 tokens)
    │   └── services/ (1400 tokens)
    │   │   ├── __init__.py
    │   │   ├── mental_health_service.py (500 tokens)
    │   │   └── prediction_service.py (900 tokens)
    ├── README.md
    ├── analysis/ (1400 tokens)
    │   ├── images/ (300 tokens)
    │   │   ├── metrics_chart.png
    │   │   ├── confusion_matrix.png
    │   │   └── class_distribution.png
    │   ├── confusion_matrix.py (300 tokens)
    │   ├── class_distribution.py (400 tokens)
    │   └── metrics_chart.py (400 tokens)
    ├── requirements.txt
    └── main.py (300 tokens)

├── betrak-frontend/ (32800 tokens)
    ├── CLAUDE.md
    ├── public/ (100 tokens)
    │   └── default_user.png
    ├── postcss.config.mjs
    ├── src/ (30900 tokens)
    │   ├── types/ (600 tokens)
    │   │   ├── Review.ts
    │   │   ├── FormData.ts
    │   │   ├── DatabaseUser.ts
    │   │   ├── formDefaults.ts
    │   │   └── next-auth.d.ts (200 tokens)
    │   ├── lib/ (1900 tokens)
    │   │   ├── utils.ts
    │   │   ├── postgresql.ts
    │   │   ├── resultData.ts
    │   │   ├── auth/ (200 tokens)
    │   │   │   └── UserSignUP.ts (200 tokens)
    │   │   ├── reviewApi.ts (300 tokens)
    │   │   ├── betrakApi.ts (300 tokens)
    │   │   └── authOptions.ts (800 tokens)
    │   ├── app/ (27000 tokens)
    │   │   ├── api/ (1200 tokens)
    │   │   │   ├── auth/ (400 tokens)
    │   │   │   │   ├── [...nextauth]/ (100 tokens)
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── sign-up/ (300 tokens)
    │   │   │   │   │   └── route.ts (300 tokens)
    │   │   │   ├── getQuestions.ts
    │   │   │   ├── result/ (300 tokens)
    │   │   │   │   └── route.ts (300 tokens)
    │   │   │   └── review/ (400 tokens)
    │   │   │   │   └── route.ts (400 tokens)
    │   │   ├── ProviderSession.tsx
    │   │   ├── SharedComponents/ (900 tokens)
    │   │   │   ├── Footer/ (100 tokens)
    │   │   │   │   └── Footer.tsx
    │   │   │   └── Navbar/ (800 tokens)
    │   │   │   │   └── Navbar.tsx (800 tokens)
    │   │   ├── sign-in/ (1700 tokens)
    │   │   │   ├── page.tsx
    │   │   │   └── components/ (1600 tokens)
    │   │   │   │   ├── SignInPageSkeleton.tsx (300 tokens)
    │   │   │   │   ├── SignInPageClientSide.tsx (600 tokens)
    │   │   │   │   └── SignInFormFields.tsx (700 tokens)
    │   │   ├── sign-up/ (2200 tokens)
    │   │   │   ├── page.tsx
    │   │   │   └── components/ (2100 tokens)
    │   │   │   │   ├── SignUpPageSkeleton.tsx (300 tokens)
    │   │   │   │   ├── SignUpPageClientSide.tsx (600 tokens)
    │   │   │   │   └── SignUpFormFields.tsx (1200 tokens)
    │   │   ├── assessment/ (4800 tokens)
    │   │   │   ├── page.tsx
    │   │   │   └── components/ (4700 tokens)
    │   │   │   │   ├── MentalHealthQuestions/ (1500 tokens)
    │   │   │   │       ├── components/ (700 tokens)
    │   │   │   │       │   ├── questionOptions.ts (200 tokens)
    │   │   │   │       │   ├── MentalHealthQuestionsSkeleton.tsx (200 tokens)
    │   │   │   │       │   └── ErrorState.tsx (300 tokens)
    │   │   │   │       └── MentalHealthQuestions.tsx (800 tokens)
    │   │   │   │   ├── PersonalAndUsageInfo/ (1700 tokens)
    │   │   │   │       ├── PersonalAndUsageInfo.tsx (500 tokens)
    │   │   │   │       └── components/ (1200 tokens)
    │   │   │   │       │   ├── PersonalInfo.tsx (500 tokens)
    │   │   │   │       │   └── UsageInfo.tsx (700 tokens)
    │   │   │   │   ├── AssessmentSkeleton.tsx (600 tokens)
    │   │   │   │   └── AssessmentContent.tsx (900 tokens)
    │   │   ├── QueryProvider.tsx (200 tokens)
    │   │   ├── hooks/ (2000 tokens)
    │   │   │   ├── NavLinks.tsx (200 tokens)
    │   │   │   ├── Menu.tsx (200 tokens)
    │   │   │   ├── Alert/ (600 tokens)
    │   │   │   │   ├── ErrorAlert.tsx (300 tokens)
    │   │   │   │   └── SucessAlert.tsx (300 tokens)
    │   │   │   ├── ScrollAnimate.tsx (400 tokens)
    │   │   │   └── Dropdown.tsx (600 tokens)
    │   │   ├── page.tsx (200 tokens)
    │   │   ├── not-found.tsx (200 tokens)
    │   │   ├── HomeComponents/ (5200 tokens)
    │   │   │   ├── Reviews/ (1100 tokens)
    │   │   │   │   ├── ReviewCard.tsx (300 tokens)
    │   │   │   │   ├── ReviewCardSkeleton.tsx (300 tokens)
    │   │   │   │   └── Reviews.tsx (500 tokens)
    │   │   │   ├── WhatWeMeasure/ (900 tokens)
    │   │   │   │   ├── WhatWeMeasureData.tsx (400 tokens)
    │   │   │   │   └── WhatWeMeasure.tsx (500 tokens)
    │   │   │   ├── Banner/ (400 tokens)
    │   │   │   │   └── Banner.tsx (400 tokens)
    │   │   │   ├── CTA/ (400 tokens)
    │   │   │   │   └── CTA.tsx (400 tokens)
    │   │   │   ├── AddictionLevels/ (1100 tokens)
    │   │   │   │   ├── AddictionLevelsData.tsx (500 tokens)
    │   │   │   │   └── AddictionLevels.tsx (600 tokens)
    │   │   │   ├── WhyItMatters/ (600 tokens)
    │   │   │   │   └── WhyItMatters.tsx (600 tokens)
    │   │   │   └── HowItWorks/ (700 tokens)
    │   │   │   │   └── HowItWorks.tsx (700 tokens)
    │   │   ├── result/ (6700 tokens)
    │   │   │   ├── components/ (5900 tokens)
    │   │   │   │   ├── Suggestions.tsx (300 tokens)
    │   │   │   │   ├── NoResultFound/ (300 tokens)
    │   │   │   │   │   └── NoResultFound.tsx (300 tokens)
    │   │   │   │   ├── StatsCharts/ (2300 tokens)
    │   │   │   │   │   ├── StatsCharts.tsx (300 tokens)
    │   │   │   │   │   └── components/ (2000 tokens)
    │   │   │   │   │   │   ├── DailyUsageChart.tsx (500 tokens)
    │   │   │   │   │   │   ├── IntensityGauge.tsx (700 tokens)
    │   │   │   │   │   │   └── SleepCorrelationChart.tsx (800 tokens)
    │   │   │   │   ├── InputProfile.tsx (500 tokens)
    │   │   │   │   ├── AddictionLevelCard.tsx (700 tokens)
    │   │   │   │   ├── ResultSkeleton.tsx (900 tokens)
    │   │   │   │   └── UserReview.tsx (900 tokens)
    │   │   │   └── page.tsx (800 tokens)
    │   │   ├── layout.tsx (400 tokens)
    │   │   └── globals.css (1200 tokens)
    │   ├── middleware.ts (200 tokens)
    │   └── components/ (1200 tokens)
    │   │   └── ui/ (1200 tokens)
    │   │       ├── alert.tsx (500 tokens)
    │   │       └── button.tsx (700 tokens)
    ├── AGENTS.md
    ├── next.config.ts
    ├── eslint.config.mjs (200 tokens)
    ├── components.json (200 tokens)
    ├── .gitignore (200 tokens)
    ├── tsconfig.json (200 tokens)
    ├── package.json (300 tokens)
    └── README.md (400 tokens)
├── .gitignore
└── README.md (1000 tokens)

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

## Model Performance
 
| Class | Precision | Recall | F1-Score |
|---|---|---|---|
| High | ~0.98 | ~1.00 | ~0.99 |
| Low | ~0.94 | ~0.96 | ~0.95 |
| Medium | ~0.97 | ~0.95 | ~0.96 |
 
> Note: High scores are expected given the dataset size and SMOTE balancing on training data.

---

## Limitations
 
- Dataset is relatively small (~700 records) — may affect generalization on diverse populations
- Dataset was originally designed for students — adaptation may introduce minor inconsistencies
- Self-reported responses may contain bias
- Model does not update in real-time — requires manual retraining as social media trends evolve

---

