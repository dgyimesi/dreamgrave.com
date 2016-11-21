// Our API for demos only
import { fakeDemoRedisCache } from './cache';

let source = {
    catalogue: require('../data/catalogue.json')
}

// Our API for demos only
export function data(request, response) {
    let key = request.params.type;
    let cache = fakeDemoRedisCache.get(key);
    let data = source[key];

    if (!data) {
        console.error(`${key} is unknown`);

        response.status(404).end();
    }

    if (cache !== undefined) {
        console.log(`${key} cache hit`);

        return response.json(cache);
    }

    console.log(`${key} cache miss`);

    fakeDemoRedisCache.set(key, data);
    
    response.json(data);
}
