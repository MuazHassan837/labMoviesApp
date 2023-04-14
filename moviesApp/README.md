# Enterprise Web Development - Assignment 1.

__Name:__ Syed Muaz Hassan

## Overview.

[A bullet-point list of the features developed for the React SPA app (new/modified ones only for the Movies app),]

+ Favourite.
+ Watchlist. 
+ Auth.
+ Backend persistence.
+ Deployment.
+ Themed.
+ Private and Public routes.
+ Pagination.
+ Caching.
+ UI - New views/pages (3+).

## Feature Design.

[ For each feature listed in the overview, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include captions with the images.]

e.g. 

#### The Favourite Movies feature.

> Favourite

<img width="1618" alt="image" src="https://user-images.githubusercontent.com/113602921/232125320-8e624ddf-7a46-41b1-98b8-f5d81ccb27d3.png">


#### The Watchlist Movies feature.

> Watchlist

<img width="1612" alt="image" src="https://user-images.githubusercontent.com/113602921/232125704-29e7a35e-b960-451e-852d-7edc8f2012ec.png">



#### The Auth Movies feature.

> Auth

<img width="1617" alt="image" src="https://user-images.githubusercontent.com/113602921/232125840-50562657-6887-4f2c-abbb-5b3972c08fee.png">


## Authentication.

[ List all the routes in your app and highlight those that are protected/private (require authentication).]

e.g.

+ /movies - List of movies from the Discover endpoint.
+ /movies/{movie_id} - Detailed information on a specific movie.
+ /reviews/{review_id} - The full text of a movie review.
+ /movie/{movie_id}/ - A movies detail page.
+ /explore/movies - List of all movies for exploring.
+ /movies/favourites (Protected) - List of favourite movies.
+ /movies/upcoming (Protected) - List of all upcoming movies.
+ /explore/upcomings - List of all upcoming movies for exploring.
+ /reviews/form (Protected) - Add a movie review.
+ /login - Login user.
+ /signout - Logout user.

#### Protected features (if relevant)
In the app, users can mark movies as their favorites or add them to their watchlist. This information is then saved and associated with their user account. This means that each user has their own list of favorite movies and watchlist, and this information is protected so that only the user can access and modify it. Other users cannot view or modify the list of another user. It is retrieved when the user is newly logged in.

#### Supabase (if relevant)
<img width="1063" alt="image" src="https://user-images.githubusercontent.com/113602921/232127103-865589f6-2dd7-421a-8488-413a04c6fdfa.png">

## Deployment (if relevant).
https://muazhasssan-movie-ewd.vercel.app/
<img width="1618" alt="image" src="https://user-images.githubusercontent.com/113602921/232153212-7532838d-0359-4bdf-8815-6b45ecece6e4.png">

Username: syedmuazhassan@gmail.com ; Password: 123456
]
## Persistence (if relevant).

<img width="1067" alt="image" src="https://user-images.githubusercontent.com/113602921/232153526-c8d3e7e2-eb1e-415a-901b-bb39126da688.png">
<img width="1060" alt="image" src="https://user-images.githubusercontent.com/113602921/232153564-df478742-cf59-4a64-ba8b-86839f20a666.png">

## Additional Information.

Our app is a movie discovery platform. Users can browse a list of movies on the home page, view detailed information on a specific movie by clicking on it. Users can also filter for movies by title or genre.
Registered users can leave reviews for movies they have seen, view the full text of other users' movie reviews, and access a list of their favorite movies. They can also view detailed information on specific movies and their biographies.
The app provides a seamless and intuitive user experience, with a clean and modern design. It offers a range of features to cater to movie enthusiasts of all kinds, from casual viewers to serious critics.
<img width="1617" alt="image" src="https://user-images.githubusercontent.com/113602921/232127727-652eb123-aa39-4811-a575-304a82e3561a.png">
<img width="1603" alt="image" src="https://user-images.githubusercontent.com/113602921/232127796-db60f03a-0086-4047-849e-c89cdf9eebbe.png">
<img width="1617" alt="image" src="https://user-images.githubusercontent.com/113602921/232127851-e88e0c29-0f80-4d2c-b5a6-2399da1447d9.png">
<img width="1615" alt="image" src="https://user-images.githubusercontent.com/113602921/232128006-365a70f7-88a1-4c9c-9263-abadf398f8aa.png">
<img width="1610" alt="image" src="https://user-images.githubusercontent.com/113602921/232128043-983401f2-0ee0-4b31-b78a-82f382deb218.png">
<img width="1598" alt="image" src="https://user-images.githubusercontent.com/113602921/232127904-22ca1239-b74b-472a-98b4-fa5716a83964.png">
