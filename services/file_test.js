module.exports = function() {
    this.from('direct:in')
        // .to('file:///home/jafar/test');
        .to('file:test/ignore-001-inbox');

    this.from('file:test/ignore-001-inbox')
        // .to(function(exchange) {
        //     console.log('BODY: ' + exchange.body);
        // });
        .to('file:test/ignore-002-outbox');

    this.trace = true;

    var template = this.createProducerTemplate();

    setImmediate(function() {
        try {
            var data = 'one ' + new Date();
            template.send('direct:in', data);
            // template.send('direct:in', 'two');
            // template.send('direct:in', 'three');
        } catch(e) {
            console.log(e.stack);
        }
    });
};