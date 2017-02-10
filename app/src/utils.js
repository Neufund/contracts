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

const makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then((val) =>
            hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
        );
        promise.catch((error) =>
            hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};

export {
    toPromise,
    makeCancelable
}