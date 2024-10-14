import yelpDevelopers from '@api/yelp-developers';

yelpDevelopers.v3_business_search({sort_by: 'best_match', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));