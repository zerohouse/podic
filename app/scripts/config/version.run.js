angular.module('Podic').run(function ($ajax, confirm) {
  $ajax.get('/api/v1/version').then(function (version) {
    if (version === '0.0.4')
      return;
    confirm("새로운 버전이 나왔습니다. 업데이트 받으시겠습니까?", "새로운 버전").then(function () {

    });
  });
});
