export const extend = (vectorOps, scalarTypes) => {

  const V = vectorOps;


  class Point {
    constructor(coords) {
      this.coords = coords;
    }

    toString() {
      return 'Point(' + this.coords.map(x => x.toString()).join(', ') + ')';
    }

    get __typeName() { return 'Point'; }
  };


  const array = n => Array(n).fill(0);

  const methods = {
    __context__: () => `points(${vectorOps.__context__()})`,

    origin: {
      Integer: n => new Point(array(n))
    },

    point: {
      Vector: v => new Point(v)
    },

    vector: {
      Point: p => p.coords
    },

    dimension: {
      Point: p => p.coords.length
    },

    negative: {
      Point: p => new Point(V.negative(p.coords))
    },

    plus: {
      Vector: {
        Point: (v, p) => new Point(V.plus(v, p.coords))
      },
      Point: {
        Vector: (p, v) => new Point(V.plus(p.coords, v))
      }
    },

    minus: {
      Point: {
        Vector: (p, v) => new Point(V.minus(p.coords, v)),
        Point: (p, q) => V.minus(p.coords, q.coords)
      }
    },

    times: {
      Matrix: {
        Point: (A, p) => new Point(V.times(A, p.coords))
      },
      Point: {
      }
    },

    div: {
      Point: {
      }
    },

    modZ: {
      Point: p => new Point(V.mod(p.coords, 1))
    }
  };

  for (const name of ['times', 'div']) {
    for (const sType of scalarTypes) {
      methods[name]['Point'][sType] =
        (p, x) => new Point(V[name](p.coords, x));
    }
  }

  for (const sType of scalarTypes) {
    methods.times[sType] = {
      Point: (x, p) => new Point(V[name](x, p.coords))
    }
  }

  return V.register(methods);
};
