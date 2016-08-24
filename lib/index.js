
function Pattern() {
    self = this;

    self.listeners = [];
}

Pattern.prototype.addListener = function(listener) {
    self.listeners.push(listener);
};

Pattern.prototype.fireEvent = function(event) {
    self.listeners.forEach(function(listener) {
        listener(event);
    });
};

module.exports = Pattern