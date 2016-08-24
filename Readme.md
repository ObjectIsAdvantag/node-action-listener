# ActionListener pattern implementation in NodeJS

Implements this behavior :

``` node

ActionListenerPattern = require('node-action-listener');

var lib = new ActionListenerPattern();

lib.addListener(function(event) {
    console.log("new event received");
});

lib.fireEvent({'id':1, 'message':"this is it, fired!"});
```