import api from './api.service';

const groupService = {
  list: async () => await api.get('groups'),
  show: async (payload: any) => await api.get(`groups/${payload}`),
  create: async (payload: any) => await api.post(`groups`, payload),
  update: async (payload: any) => await api.put(`groups/${payload.id}`, payload),
  delete: async (payload: any) => await api.delete(`groups/${payload.id}`)
}

export default groupService;
