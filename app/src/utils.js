var toPromise = function (f, args) {
    return new Promise((resolve, reject)=> {
        var cb = function (error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        };
        if (Array.isArray(args)) {
            f(...args, cb);
        } else {
            if (args === undefined) {
                f(cb);
            } else {
                f(args, cb);
            }
        }
    });
};

export {
    toPromise
}