module.exports = function() {
    this.from('file:tmp')
        .to(function(exchange) {
            console.log('GOT FILE:', exchange.body);
        });

    this.trace = true;
};