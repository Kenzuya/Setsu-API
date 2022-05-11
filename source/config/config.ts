import dotenv from 'dotenv'

dotenv.config()

const SERVER_PORT = process.SERVER_PORT || 1337
const SERVER_HOSTNAME = process.SERVER_HOSTNAME || 'localhost'

cconst SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
}