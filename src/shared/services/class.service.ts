import api from './api.service';

const classService = {
  list: async () => await api.get('classes'),
  show: async (payload: any) => await api.get(`classes/${payload}`),
  create: async (payload: any) => await api.post(`classes`, payload),
  update: async (payload: any) => await api.put(`classes/${payload.id}`, payload),
  delete: async (payload: any) => await api.delete(`classes/${payload.id}`)
}

export default classService;
