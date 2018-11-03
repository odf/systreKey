import * as pgr from './pgraphs/periodic';
import * as sym from './pgraphs/symmetries';
import * as inv from './pgraphs/invariant';


export const compute = edges => {
  const graph = pgr.make(edges);

  if (!pgr.isConnected(graph))
    throw new Error(`net is not connected`);
  else if (!pgr.isLocallyStable(graph))
    throw new Error(`net is not locally stable`);
  else
    return inv.systreKey(sym.minimalImage(graph));
};
