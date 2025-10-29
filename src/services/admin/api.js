// Real API service for admin panel
// Integrates with Triarii Growth Administration Backend

import apiClient, { buildPaginatedUrl } from './apiClient';
import { API_ENDPOINTS } from '../../config/api';

export const api = {
  // Seminars/Events Management
  getEvents: async (page = 0, size = 20, sort = null) => {
    const url = buildPaginatedUrl(API_ENDPOINTS.ADMIN.SEMINARS, page, size, sort);
    const response = await apiClient.getPaginated(url);
    return response.data;
  },

  createEvent: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.ADMIN.SEMINARS, data);
    return response.data;
  },

  updateEvent: async (id, data) => {
    const response = await apiClient.put(API_ENDPOINTS.ADMIN.SEMINAR_BY_ID(id), data);
    return response.data;
  },

  deleteEvent: async (id) => {
    const response = await apiClient.delete(API_ENDPOINTS.ADMIN.SEMINAR_BY_ID(id));
    return response.data;
  },

  getEventById: async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.ADMIN.SEMINAR_BY_ID(id));
    return response.data;
  },

  // Exams Management
  getExams: async (page = 0, size = 20, sort = null) => {
    const url = buildPaginatedUrl(API_ENDPOINTS.ADMIN.EXAMS, page, size, sort);
    const response = await apiClient.getPaginated(url);
    return response.data;
  },

  createExam: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.ADMIN.EXAMS, data);
    return response.data;
  },

  updateExam: async (id, data) => {
    const response = await apiClient.put(API_ENDPOINTS.ADMIN.EXAM_BY_ID(id), data);
    return response.data;
  },

  deleteExam: async (id) => {
    const response = await apiClient.delete(API_ENDPOINTS.ADMIN.EXAM_BY_ID(id));
    return response.data;
  },

  getExamById: async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.ADMIN.EXAM_BY_ID(id));
    return response.data;
  },

  // Exam Applications
  getExamApplications: async (page = 0, size = 20, sort = null) => {
    const url = buildPaginatedUrl(API_ENDPOINTS.ADMIN.EXAM_APPLICATIONS, page, size, sort);
    const response = await apiClient.getPaginated(url);
    return response.data;
  },

  getExamApplicationsByExam: async (examId, page = 0, size = 20, sort = null) => {
    const url = buildPaginatedUrl(API_ENDPOINTS.ADMIN.EXAM_APPLICATIONS_BY_EXAM(examId), page, size, sort);
    const response = await apiClient.getPaginated(url);
    return response.data;
  },

  getExamApplicationById: async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.ADMIN.APPLICATION_BY_ID(id));
    return response.data;
  },

  updateExamApplication: async (id, data) => {
    const response = await apiClient.put(API_ENDPOINTS.ADMIN.APPLICATION_BY_ID(id), data);
    return response.data;
  },

  deleteExamApplication: async (id) => {
    const response = await apiClient.delete(API_ENDPOINTS.ADMIN.APPLICATION_BY_ID(id));
    return response.data;
  },

  // General Applications (Hemen Başvur)
  getApplications: async (page = 0, size = 20, sort = null) => {
    const url = buildPaginatedUrl(API_ENDPOINTS.ADMIN.APPLICATIONS, page, size, sort);
    const response = await apiClient.getPaginated(url);
    return response.data;
  },

  getApplicationById: async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.ADMIN.APPLICATION_BY_ID(id));
    return response.data;
  },

  updateApplication: async (id, data) => {
    const response = await apiClient.put(API_ENDPOINTS.ADMIN.APPLICATION_BY_ID(id), data);
    return response.data;
  },

  deleteApplication: async (id) => {
    const response = await apiClient.delete(API_ENDPOINTS.ADMIN.APPLICATION_BY_ID(id));
    return response.data;
  },

  // Payments
  getPayments: async (page = 0, size = 20, sort = null) => {
    const url = buildPaginatedUrl(API_ENDPOINTS.ADMIN.PAYMENTS, page, size, sort);
    const response = await apiClient.getPaginated(url);
    return response.data;
  },

  getPaymentById: async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.ADMIN.PAYMENT_BY_ID(id));
    return response.data;
  },

  updatePayment: async (id, data) => {
    const response = await apiClient.put(API_ENDPOINTS.ADMIN.PAYMENT_BY_ID(id), data);
    return response.data;
  },

  // Statistics
  getStatistics: async () => {
    const response = await apiClient.get(API_ENDPOINTS.ADMIN.STATS);
    return response.data;
  }
};
