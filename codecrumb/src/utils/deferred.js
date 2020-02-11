function deferred() {
    const s = {}
    const promise = new Promise(function (resolve, reject) {
        s.resolve = resolve;
        s.reject = reject;
    });
    s.promise = promise
    return Object.assign(s, promise);

}