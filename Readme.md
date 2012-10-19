
# offcanvas

  OffCanvas [component](http://github.com/component/component) as described in http://jasonweaver.name/lab/offcanvas/
  A great way to bring a responsive site up quickly.

  ```html
    <body>
      <div role="nav">
      </div>
      <div role="main">
      </div>
    </body>
  ```

  ```js
    var OffCanvas = require('offcanvas')();

    // show navigation
    OffCanvas.nav();

    // show main
    OffCanvas.main();
  ```
## Installation

    $ component install tomerdmnt/offcanvas

## API

### ()
bind to the page (check if javascript exists. add transitions only after load)

### nav()
Show navigation

### main()
Show main

## License

  MIT
