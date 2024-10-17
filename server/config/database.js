import pg from 'pg'
import './dotenv.js'

const connectionString = process.env.PGCONNSTRING
const pool = new pg.Pool({connectionString})
export { pool }
