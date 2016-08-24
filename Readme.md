# Sample that implements the ActionListener pattern in node

Goal is to implement such a behavior :

``` node

ActionListenerPattern = require('ActionListenerPattern');

lib = new ActionListenerPattern();

lib.addListener(function(event) {
    console.log("new event received");
});

```