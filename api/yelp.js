import axios from "axios";
export default axios.create({
    
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
    'Bearer ObQ9XcFqTlJHlRXG-t3AEvK4ZsefRUzbUE2MTB7HVQpoF6piou2r1JIqNkdXpVDD4CF2DdDTdbOzw78FjsSENW2UF5auVaxgWJV098m3KluQZZOfrLs8mhR9hq3YZXYx'
    },
});