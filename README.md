# WALEED//AI — Portfolio Site

A dark, tech-noir portfolio for Waleed Naeem's AI automation agency. React + FastAPI + MongoDB.

## 1. Make it yours

Edit **one file** to rebrand everything:

`frontend/src/config/site.js` — your name, tagline, LinkedIn / GitHub / WhatsApp links,
profile photo, marquee services, manifesto chapters, metrics and customer reviews.

Set your inbox for contact-form emails:

`backend/.env` → `OWNER_EMAIL="waleednaeem090@gmail.com"` (already set) receives every enquiry,
and `EMAIL_FROM_NAME` controls the sender display name.

## 2. Run locally

Backend:
```bash
cd backend
pip install -r requirements.txt
# backend/.env must contain MONGO_URL and DB_NAME (local MongoDB required)
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Frontend:
```bash
cd frontend
yarn install
# frontend/.env must point at the backend:
# REACT_APP_BACKEND_URL=http://localhost:8001
yarn start
```

Open http://localhost:3000

## 3. What's included

- Kinetic hero with masked line reveal, parallax profile photo, LinkedIn/GitHub/WhatsApp links
- Manifesto chapters (01–03)
- Editorial services marquee
- Animated results metrics + static customer reviews
- Contact form → saves to MongoDB and emails each enquiry to `OWNER_EMAIL` (managed Resend)
- Lenis smooth scrolling, framer-motion reveals, grain overlay
