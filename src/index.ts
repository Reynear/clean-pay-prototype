import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

// Serve static files from public directory
app.use('/*', serveStatic({ root: './public' }))

// Static HTML routes
app.get('/', serveStatic({ path: './public/html/login.html' }))
app.get('/signup', serveStatic({ path: './public/html/signup.html' }))
app.get('/user/dashboard', serveStatic({ path: './public/html/user/dashboard.html' }))
app.get('/user/appointments', serveStatic({ path: './public/html/user/appointments.html' }))
app.get('/user/payments', serveStatic({ path: './public/html/user/payments.html' }))
app.get('/user/timers', serveStatic({ path: './public/html/user/timers.html' }))
app.get('/user/messages', serveStatic({ path: './public/html/user/messages.html' }))
app.get('/user/settings', serveStatic({ path: './public/html/user/settings.html' }))


export default app
