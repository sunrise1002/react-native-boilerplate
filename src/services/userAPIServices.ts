import {GET_REQUEST} from './service';

const _getUsers = () => GET_REQUEST({endpoint: '/users'});

export default {
  _getUsers,
};
