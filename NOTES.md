## while development
- Product List Page 
  - Duplicate API calls in Product List Page
  - Categories data collected from separate API call.
  - Pagination/lazy loading implementation

- Material UI version is 4 which has been deprecated. Migrate to v5. [Link](https://mui.com/material-ui/migration/migration-v4/ to upgrade to v5.
)

## Before production
- Overall test coverage at-least for the UI component with User's perspective
- Use react-query/axois to decline the API calls and get benefits of caching when user move back/forth between pages. fetch is very basic for API calls

## Nice to haves
- Optimize Image rendering to make the page load faster

## Features
- Maintain user-cart on backend so it can keep for user on other devices