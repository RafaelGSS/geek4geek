// Set array contains
Array.prototype.arrayContains = function (sub) {
    var self = this;
    var result = sub.filter(function (item) {
        return self.indexOf(item) > -1;
    });
    return sub.length === result.length;
};