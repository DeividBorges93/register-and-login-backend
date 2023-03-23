import { Api } from './api';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

new Api().start(PORT);