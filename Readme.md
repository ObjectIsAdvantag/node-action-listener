# ActionListener pattern implement in nodejs

Goal is to implement such a behavior :

``` node

ActionListenerPattern = require('node-action-listener');

var lib = new ActionListenerPattern();

lib.addListener(function(event) {
    console.log("new event received");
});

lib.fireEvent

```