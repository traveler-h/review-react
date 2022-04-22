import http from '../http';

/**
 * 获取首页列表
 */
function getFilmList() {
  return new Promise((resolve, reject) => {
    http('get', '/api/filmList').then(res => {
      resolve (res);
    }, error => {
      console.log('网络异常~', error);
      reject(error);
    });
  });
}

export {
    getFilmList
};
