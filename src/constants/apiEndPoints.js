export const BACKEND_URL = 'http://localhost:4000';

export const GET_COLLECTION_NAMES = () =>({
  method: 'GET',
  url: '/dashboard/collection-names',
});

export const GET_CONTENT_TYPES = () => ({
  method: 'GET',
  url: '/dashboard/content-types',
});

export const GET_CONTENT_TYPE_BY_ID = (id) => ({
  method: 'GET',
  url: `/dashboard/content-types/${id}`,
});

export const GET_COLLECTION_FIELDS_BY_ID = (id) => ({
  method: 'GET',
  url: `/dashboard/collection-fields/${id}`,
});

export const ADD_CONTENT_TYPE = () => ({
  method: 'POST',
  url: '/dashboard/add-content-type',
});

export const UPDATE_CONTENT_NAME_BY_ID = (id) => ({
  method: 'PATCH',
  url: `/dashboard/update-content-name/${id}`,
});

export const ADD_CONTENT_FIELDS_PER_ID = (id) => ({
  method: 'PATCH',
  url: `/dashboard/add-content-fields/${id}`,
});

export const UPDATE_FIELD_NAME_BY_ID = (id) => ({
  method: 'PATCH',
  url: `/dashboard/update-field-name/${id}`,
});

export const DELETE_CONTENT_FIELD_BY_ID = (id) => ({
  method: 'DELETE',
  url: `/dashboard/delete-content-field/${id}`,
});

export const ADD_COLLECTION_ENTRY_BY_ID = (id) => ({
  method: 'POST',
  url: `/collection/add-entry/${id}`,
});

export const UPDATE_COLLECTION_ENTRY_BY_ID = (id) => ({
  method: 'PATCH',
  url: `/collection/update-entry/${id}`,
});

export const DELETE_COLLECTION_ENTRY_BY_ID = (id) => ({
  method: 'DELETE',
  url: `/collection/delete-entry/${id}`,
});

export const AUTH_BACKEND_URL = 'http://localhost:5000';

export const REGISTER_USER = () => ({
  method: 'POST',
  url: '/auth/register',
});

export const LOGIN_USER = () => ({
  method: 'POST',
  url: '/auth/login',
});

export const AUTH_USER = () => ({
  method: 'GET',
  url: '/auth/verify',
});