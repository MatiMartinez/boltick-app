import algoliasearch from 'algoliasearch';
const client = algoliasearch('AD8P317SD6', '15d76442dfa20141120f32feeb208da1');
export const algoliaIndex = client.initIndex('events');
