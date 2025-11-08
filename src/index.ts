import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

// Serve static files from public directory
app.use('/*', serveStatic({ root: './public' }))

// Static HTML routes
app.get('/', serveStatic({ path: './public/html/login.html' }))
app.get('/signup', serveStatic({ path: './public/html/signup.html' }))

// User routes
app.get('/user/dashboard', serveStatic({ path: './public/html/user/dashboard.html' }))
app.get('/user/appointments', serveStatic({ path: './public/html/user/appointments.html' }))
app.get('/user/payments', serveStatic({ path: './public/html/user/payments.html' }))
app.get('/user/timers', serveStatic({ path: './public/html/user/timers.html' }))
app.get('/user/messages', serveStatic({ path: './public/html/user/messages.html' }))
app.get('/user/settings', serveStatic({ path: './public/html/user/settings.html' }))

// Staff routes - Admin-like functionality
app.get('/staff/dashboard', serveStatic({ path: './public/html/staff/dashboard.html' }))
app.get('/staff/timers', serveStatic({ path: './public/html/staff/timers.html' }))
app.get('/staff/reminders', serveStatic({ path: './public/html/staff/reminders.html' }))
app.get('/staff/notices', serveStatic({ path: './public/html/staff/notices.html' }))
app.get('/staff/scheduling', serveStatic({ path: './public/html/staff/scheduling.html' }))


export default app
