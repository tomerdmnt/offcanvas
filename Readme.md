
# offcanvas

  OffCanvas component as described in http://jasonweaver.name/lab/offcanvas/
  A great way to bring a responsive site up quickly.

  ```html
    <body>
      <div role="nav">
      </div>
      <div role="main">
      </div>
      <div role="sidebar">
      </div>
    </body>
  ```

  ```js
    var OffCanvas = require('offcanvas')();

    // show navigation
    OffCanvas.nav();

    // show main
    OffCanvas.main();

    // show sidebar
    OffCanvas.sidebar();
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

### sidebar()
Show sidebar

### next()
Show the next screen (by position: nav -> main -> sidebar)

### prev()
Show the previous screen (by position: nav <- main <- sidebar)


## License

  MIT
