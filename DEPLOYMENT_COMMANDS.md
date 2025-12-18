# 🚀 Production Deployment Commands for Render

## ✅ Your Frontend is Production-Ready!

Your project structure is correctly configured:
- ✅ All dependencies in `frontend/package.json`
- ✅ Build command configured: `npm install && npm run build`
- ✅ Output directory: `dist`
- ✅ Environment variables properly configured

---

## 📋 Deployment Steps

### Option 1: Using render.yaml (Recommended - Automated)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Render configuration"
   git push origin main
   ```

2. **Deploy on Render:**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **"New +"** → **"Blueprint"**
   - Connect your repository: `https://github.com/ledionanishani/EvalsGenieUI-.git`
   - Render will automatically detect `render.yaml` and create both services
   - Set these environment variables in the dashboard:
     - Backend: `MONGODB_URI` (your MongoDB connection string)
     - Frontend: `VITE_API_URL` (your backend URL after it's deployed)

### Option 2: Manual Deployment

#### Backend Deployment

1. **Create Web Service:**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **"New +"** → **"Web Service"**
   - Connect repository: `https://github.com/ledionanishani/EvalsGenieUI-.git`

2. **Configure Backend:**
   ```
   Name: evalsgenie-backend
   Region: Oregon (or closest to you)
   Branch: main
   Root Directory: backend
   Runtime: Python 3
   
   Build Command:
   pip install -r requirements.txt
   
   Start Command:
   uvicorn main:app --host 0.0.0.0 --port $PORT
   ```

3. **Environment Variables:**
   ```
   PYTHON_VERSION=3.11.0
   MONGODB_URI=<your-mongodb-connection-string>
   SECRET_KEY=<generate-secure-key>
   ```
   
   Generate SECRET_KEY:
   ```bash
   python -c "import secrets; print(secrets.token_urlsafe(32))"
   ```

4. **Deploy Backend** → Note the URL (e.g., `https://evalsgenie-backend.onrender.com`)

#### Frontend Deployment

1. **Create Static Site:**
   - Click **"New +"** → **"Static Site"**
   - Connect same repository

2. **Configure Frontend:**
   ```
   Name: evalsgenie-frontend
   Region: Oregon (or closest to you)
   Branch: main
   Root Directory: frontend
   
   Build Command:
   npm install && npm run build
   
   Publish Directory:
   dist
   ```

3. **Environment Variables:**
   ```
   VITE_API_URL=https://evalsgenie-backend.onrender.com
   ```
   (Replace with your actual backend URL from step 1)

4. **Deploy Frontend**

---

## 🔧 Production Build Commands (Local Testing)

### Test Frontend Build Locally:
```bash
cd frontend
npm install
npm run build
npm run preview
```

### Test Backend Locally:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

---

## 📦 What Happens During Deployment

### Frontend Build Process:
1. Render navigates to `frontend/` directory
2. Runs `npm install` → Downloads all dependencies to `frontend/node_modules/`
3. Runs `npm run build` → Creates optimized production build in `frontend/dist/`
4. Serves static files from `frontend/dist/`

### Backend Build Process:
1. Render navigates to `backend/` directory
2. Runs `pip install -r requirements.txt` → Installs Python packages
3. Starts server with `uvicorn main:app --host 0.0.0.0 --port $PORT`

---

## ✅ Deployment Checklist

- [ ] Push latest code to GitHub
- [ ] Backend deployed on Render
- [ ] Backend environment variables set (MONGODB_URI, SECRET_KEY)
- [ ] Backend URL noted (e.g., https://evalsgenie-backend.onrender.com)
- [ ] Frontend deployed on Render
- [ ] Frontend environment variable set (VITE_API_URL with backend URL)
- [ ] Test login functionality
- [ ] Test API calls
- [ ] Verify all pages load correctly

---

## 🔄 Continuous Deployment

After initial setup, any push to `main` branch will automatically trigger redeployment:

```bash
# Make your changes
git add .
git commit -m "Your changes"
git push origin main
```

Both services will automatically rebuild and redeploy.

---

## 🐛 Troubleshooting

### Frontend Build Fails
**Check:**
- All dependencies in `frontend/package.json`
- Build command is correct: `npm install && npm run build`
- Publish directory is set to: `dist`

**View Logs:**
- Go to your service in Render dashboard
- Click "Logs" tab
- Look for npm errors

### Backend Fails to Start
**Check:**
- `MONGODB_URI` is set correctly
- `SECRET_KEY` is set
- Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### API Calls Fail
**Check:**
- `VITE_API_URL` in frontend matches backend URL
- CORS settings in `backend/main.py` include frontend URL
- Backend is running (check health: `https://your-backend.onrender.com/healthz`)

---

## 📊 Monitoring

### Health Checks
- **Backend:** `https://your-backend-url.onrender.com/healthz`
- **API Docs:** `https://your-backend-url.onrender.com/docs`

### View Logs
1. Go to Render Dashboard
2. Select your service
3. Click "Logs" tab
4. Monitor real-time logs

---

## 💰 Free Tier Notes

- Services spin down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free (enough for 1 service running 24/7)
- Consider paid plan ($7/month) for production to avoid spin-down

---

## 🎯 Quick Deploy Command

```bash
# One command to commit and push
git add . && git commit -m "Deploy to production" && git push origin main
```

---

**Your frontend is production-ready! All dependencies will be installed in the correct location (`frontend/node_modules/`) during deployment.** 🚀