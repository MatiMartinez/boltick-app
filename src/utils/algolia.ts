import algoliasearch from 'algoliasearch';
const client = algoliasearch('AD8P317SD6', 'ee1084c9592c442acee499b216c97492');
export const algoliaIndex = client.initIndex('events');
