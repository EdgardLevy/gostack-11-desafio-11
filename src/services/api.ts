import axios from 'axios';
import { Platform } from 'react-native';

const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

const api = axios.create({
  baseURL: `http://${host}:3333`,
});

export default api;
