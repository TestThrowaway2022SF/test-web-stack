# Plans for Unfinished Aspects
I wasn't able to complete every single aspect of this application
that I'd ideally wanted to. As such, here is a list of action
items & execution plans for unfinished features.


## Pagination / Load More

To implement the "Load More" functionality, I would have done the following:
* Store the local data state as a 2D array of UserModels instead
of a 1D array.
* For each click of Load More, the new array of queried data 
would be appended to the 2D array.
* Render the list DOM as sections of 6 users, each with an ID
representing the latest page number.
* After adding the new array of UserModels to the local state,
change the `page` query parameter to the location URL to be the
current size of the outer UserModel state array to reflect the
number of pages that have been pulled down.
* On a page reload, inside the useEffect call that fetches the initial
data, specify the number of UserModel pages to get, and jump to the
associated ID in the DOM upon completion.


## Improved Accessibility

While parts of the app (form fields and buttons, primarily) have
support for tab navigation, leveraging `a11y` principles by
inserting `tabindex` properties along with better CSS focus states for
generally navigable UI elements would greatly improve the app's
accessibility. It would also be beneficial to users requiring screen
readers and other accessibility tools to add `ARIA` values where
applicable.


## Responsiveness + Themes

This is currently a desktop-only application, but with some minor
styling tweaks and use of media queries based on `min`/`max-width`,
`min`/`max-resolution`, etc, the layout could be made to fit the
more compact displays of mobile phones and/or tablets.

In general, when developing most responsive apps, I find it to be
best practice to develop the mobile version first, due to the typical
relative simplicity of a mobile app versus its desktop counterpart—it's
far easier to make a design larger and add more information display to
it than it is to try to determine what to sacrifice in trying to
shoehorn a desktop UI/UX down into a mobile size.

In terms of theming, it would be straightforward to implement
dark mode support either by leveraging the theming system in
Styled Components, or through the use of the
`prefers-color-scheme` CSS media query in conjunction with
CSS variables to override colors from a single source of truth.



## Unsplash.com Avatars

While I did add random avatar images, they are selected and
downloaded at render time due to using the free random image
endpoint as the image src, and will be different for each
re-render.

By using their API with an account token, I could set a random
image for each user object during the initial local storage data
population with the FauxAPI instead.


## General Refactoring + Cleanup

There are several areas that could certainly use some cleanup
and/or refactoring to improve the code quality and improve
DRYness across the codebase.

Some examples of this include commonly used CSS spacing and color
values, putting deeply passed props into globally accessible
contexts, encapsulating logic in custom hooks, and adding proper
declarations to all components.
