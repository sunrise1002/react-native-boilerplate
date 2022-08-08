import {API_CONFIG} from '../constants';
import {getHeader} from '@src/utils/apiServicesUtils';
import axios from 'axios';

const service = axios.create({
  baseURL: API_CONFIG.API_SERVER,
  timeout: API_CONFIG.TIME_OUT,
});

const DELETE_REQUEST = async ({endpoint}: {endpoint: string}) => {
  const headers = await getHeader({
    method: 'DELETE',
    endpoint,
  });

  return service.delete(endpoint, {
    headers,
  });
};

const GET_REQUEST = async ({endpoint}: {endpoint: string}) => {
  const headers = await getHeader({
    method: 'GET',
    endpoint,
  });

  return service.get(endpoint, {
    headers,
  });
};

const POST_REQUEST = async ({
  endpoint,
  params = {},
}: {
  endpoint: string;
  params: any;
}) => {
  const headers = await getHeader({
    method: 'POST',
    endpoint,
  });

  return service.post(endpoint, params, {
    // Request config
    headers,
    // data: params <- or can set data in body here
  });
};

const PUT_REQUEST = async ({
  endpoint,
  params = {},
}: {
  endpoint: string;
  params: any;
}) => {
  const headers = await getHeader({
    method: 'PUT',
    endpoint,
    params,
  });

  return service.put(endpoint, params, {
    // Request config
    headers,
    // data: params <- or can set data in body here
  });
};

export {DELETE_REQUEST, GET_REQUEST, POST_REQUEST, PUT_REQUEST};
