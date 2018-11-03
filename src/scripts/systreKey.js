import * as pgr from '../pgraphs/periodic';
import * as sym from '../pgraphs/symmetries';
import * as inv from '../pgraphs/invariant';


const compute = G => {
  if (!pgr.isConnected(G))
    throw new Error(`net is not connected`);
  else if (!pgr.isLocallyStable(G))
    throw new Error(`net is not locally stable`);
  else
    return inv.invariant(sym.minimalImage(G));
};


export default compute;
