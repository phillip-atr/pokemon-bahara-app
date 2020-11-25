import api from './api.service';

const typeService = {
  list: async () => await api.get('types'),
  show: async (payload: any) => api.get(`types/${payload}`),
  create: async (payload: any) => await api.post(`types`, payload),
  update: async (payload: any) => await api.put(`types/${payload.id}`, payload),
  delete: async (payload: any) => await api.delete(`types/${payload.id}`)
}

export default typeService;
