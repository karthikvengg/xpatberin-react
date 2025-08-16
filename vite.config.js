import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const USERNAME = 'test'
const PASSWORD = 'test'

// List of allowed hostnames
const ALLOWED_HOSTS = ['xpatberin-react-1.onrender.com']

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'basic-auth',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const auth = req.headers.authorization

          if (!auth) {
            res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Secure Area"' })
            res.end('Authentication required')
            return
          }

          const [user, pass] = Buffer.from(auth.split(' ')[1], 'base64')
            .toString()
            .split(':')

          if (user !== USERNAME || pass !== PASSWORD) {
            res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Secure Area"' })
            res.end('Access denied')
            return
          }

          next()
        })
      }
    }
  ],  server: {
    port: 5173,
    host: true,
    // Whitelist allowed hosts (built-in Vite check)
    allowedHosts: ['localhost', 'xpatberin-react-1.onrender.com']
  }
})
