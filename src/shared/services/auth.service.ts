import api from './api.service';

const authService = {
  login: async (payload: any) => await api.post('auth/login', payload),
  register: async (payload: any) => await api.post('auth/register', payload)
}

export default authService;
