# systreKey
Stripped down JS code for constructing a unique topological key (so-called Systre key) for a periodic graph.

## Installation

0) Get node (see https://nodejs.org).

1) Clone the repository and move into it.
```
    git clone https://github.com/odf/systreKey.git
    cd systreKey
```

2) Install the node packages required for building.
```
    npm install
```

3) Build the compiled JavaScript file.
```
    npm run build
```

4) There is now a file `./dist/systreKey.js` that can be used from node like this:

```
    node
    
    > // we are typing the following into the node repl
    > systreKey = require('./dist/systreKey').systreKey
    [Function: ft]
    > systreKey([[1,2,[0,0,0]], [1,2,[1,0,0]], [1,2,[0,1,0]], [1,2,[0,0,1]]])
    '3 1 2 0 0 0 1 2 0 0 1 1 2 0 1 0 1 2 1 0 0'
```
