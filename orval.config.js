module.exports = {
  'gold-shop-api': {
    input: {
      target: './api-spec.yaml', // Path to your OpenAPI/Swagger spec
    },
    output: {
      target: './libs/shared-data-access/src/api/generated',
      schemas: './libs/shared-data-access/src/api/schemas',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: './libs/shared-data-access/src/api/mutator.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: 'limit',
        },
      },
    },
  },
  'gold-admin-api': {
    input: {
      target: './admin-api-spec.yaml', // Path to admin API spec
    },
    output: {
      target: './libs/shared-data-access/src/admin-api/generated',
      schemas: './libs/shared-data-access/src/admin-api/schemas',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: './libs/shared-data-access/src/api/mutator.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: 'limit',
        },
      },
    },
  },
};
