import * as util from '../common/util';
import * as io from '../io/cgd';
import * as pgr from '../pgraphs/periodic';
import * as sym from '../pgraphs/symmetries';
import * as inv from '../pgraphs/invariant';


const fs = require('fs');

Array.prototype.toString = function() {
  return `${this.map(x => x.toString()).join(' ')}`;
};


const timers = util.timers();

require('../io/crystal').useTimers(timers);

timers.start('total');


process.argv.slice(2).forEach(file => {
  const text = fs.readFileSync(file, { encoding: 'utf8' });

  for (const b of io.structures(text)) {
    console.log(b.name);

    const G = b.graph;

    try {
      if (!pgr.isConnected(G))
        console.log(`  Error: net '${b.name}' is not connected`);
      else if (!pgr.isLocallyStable(G))
        console.log(`  Error: net '${b.name}' is not locally stable`);
      else {
        const key = inv.invariant(sym.minimalImage(G));
        timers.start('printing results');
        for (const [head, tail, shift] of key)
          console.log(`  ${head} ${tail} ${shift}`);
        timers.stop('printing results');
      }
    } catch(ex) {
      console.log(ex.stack);
    }

    console.log();
  }
});

timers.stop('total');
console.log(`${JSON.stringify(timers.current(), null, 2)}`);
