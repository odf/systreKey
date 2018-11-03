class Seq {
  toArray() {
    const a = [];
    for (const x of this)
      a.push(x);
    return a;
  }
};


Seq.prototype[Symbol.iterator] = function*() {
  let s = this;
  while (!s.isNil) {
    yield s.first();
    s = s.rest();
  }
};


export const nil = new Seq();

nil.isNil = true;
nil.first = () => { throw new Error('empty sequence has no first element'); };
nil.rest  = () => nil;


class Cons extends Seq {
  constructor(firstVal, restFn) {
    super();

    this.isNil = false;
    this.first = () => firstVal;
    this.rest = () => {
      const val = restFn && restFn();
      this.rest = () => val;
      return val;
    }
  }
}


export const cons = (firstVal, restFn) => new Cons(firstVal, restFn);


export const seq = val => {
  if (val instanceof Seq)
    return val;
  else if (typeof val.next == 'function') {
    const s = val.next();
    return s.done ? nil : cons(s.value, () => seq(val));
  }
  else if (typeof val[Symbol.iterator] == 'function')
    return seq(val[Symbol.iterator]());
  else
    return cons(val, () => nil);
};
