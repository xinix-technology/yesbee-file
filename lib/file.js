var File = function(filePath) {
    this.type = 'file';
    this.filePath = filePath;
};

File.prototype.pipe = function(stream) {
    try {

        var deferred = Q.defer();
        var readStream = fs.createReadStream(this.filePath);

        readStream.on('end', function() {
            deferred.resolve(stream);
        });

        readStream.pipe(stream);

        return deferred.promise;
    } catch(e) {
        deferred.reject();

        return deferred.promise;
    }
};

module.exports = File;