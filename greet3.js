function Greeter() {
    this.greeting = 'Hello world';
    
    this.greet = function() {
        console.log('this.greeting: ', this.greeting);
    }
}

module.exports = new Greeter();