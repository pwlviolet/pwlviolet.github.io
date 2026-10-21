import {parseTemporalPly} from './temporal-ply.mjs';
onmessage=event=>{try{const result=parseTemporalPly(event.data);postMessage({result},[result.data.buffer])}catch(error){postMessage({error:error.message})}};
