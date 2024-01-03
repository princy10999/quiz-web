import { apiText } from './utilService';

export const getResponse = async (url, data) => {
  const res = await apiText
    .get(url, data)
    .then((res) => {
      if (res.status === 200) {
        console.log(res, 'getResponse');
      } else {
        console.log(res, 'getError');
      }
      return res;
    })
    .catch((err) => {
      if (res.status === 400) {
        console.log(err, 'getError');
      }
      return err.response;
    });
  return res;
};

export const postResponse = async (url, data) => {
  const res = await apiText
    .post(url, data)
    .then((res) => {
      if (res.status === 200) {
        console.log(res, 'postResponse');
      } else {
        console.log(res, 'postError');
      }
      return res;
    })
    .catch((err) => {
      if (res.status === 400) {
        console.log(err, 'postError');
      }
      return err.response;
    });
  return res;
};

export const putResponse = async (url, data) => {
  const res = await apiText
    .put(url, data)
    .then((res) => {
      if (res.status === 200) {
        console.log(res, 'putResponse');
      } else {
        console.log(res, 'putError');
      }
      return res;
    })
    .catch((err) => {
      if (res.status === 400) {
        console.log(err, 'putCatchError');
      }
      return err.response;
    });
  return res;
};

export const deleteResponse = async (url) => {
  const res = await apiText.delete(url).then((res) => {
    if (res.status === 200) {
      console.log(res, 'deleteResponse');
    } else {
      console.log(res, 'deleteError');
    }
    return res;
  });
  return res;
};