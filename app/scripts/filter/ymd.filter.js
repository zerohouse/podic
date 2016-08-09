angular.module('Podic.filters').filter('ymd', function () {
    return function (value) {
        var date = new Date(value - 60 * 1000);
        if (new Date().isSameDay(date))
            return date.fromNow();
        return date.format("YYYY. M. D");
    };
});
