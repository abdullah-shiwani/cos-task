# Todo

## Early user feedback
- There are not enough ways to filter products
- There is no accessibility support for screen readers
- I can't search by product name
- I am seeing lot of products that are out of stock
- I can't see my order history

## Feature backlog
- Some of our API integrations have the credentials hard-coded into our private repository
- We need to display the product image in the cart
- One of our testers reported a crash that recurs once every few days. Cursory investigation hasn't been able to reproduce the issue
- Users on mobile should be able to remove items from their cart with intuitive swipe gestures
- Users should be able to favourite products they like
- The Cart button should be contained within the Navbar and visible on every page
- Once a customer checks out we need to display a receipt in PDF format that comes from from our third-party inventory management system


## Priority - user feedback & Feature backlog
Let's make an scale first
P0 - Production blocker / urgent work
P1 - Semi blocker / prevent user to use-app/place-an-order
P2 - No a blocker / not prevent user to use app / place an order
P3 - Nice to haves and enhancements

- [P1] There are not enough ways to filter products
  Considering it Semi-blocker as if user can't search as per the preferences they would'nt buy and it hurts the business.
  We can definitely narrow down the scope and add basic filters which supports our backend without much effort like a quick win:
  - Name
  - Price range
  - SKUs
  

- [P1/P3] There is no accessibility support for screen readers
  It completely depends on our target market and audience. And as per my knowledge most E-commerce does not supports that.
  As the shopping base consist of the Looks/image. How the product looks like. and it's a bit tuff to convey image message through readers. 
  So that decision is depends on our target audience.

- [P0] I can't search by product name
  If we just talk about search by product name. It seems a blocker to me as a normal user. It should be done as quick as possible.
  [Thinking out loud]. We can at-least search from the product list frontend has until the backend api is under-development or may take time.

- [P3/P2] I am seeing lot of products that are out of stock
  As we could just enhance the user-experience as a tech-team.
  Simply a feature to add value. 
  But may be critical if this data helps the business to add those items back in stock somehow. As we are dealing in Second-hand clothing. Giving that in consideration.
  Would be nice to add a `Add to Wishlist` button. So we could notify user when that item back in stock in future.
  It will helps us to get the trust of user on our services.

- [P2] I can't see my order history
  As it's not preventing user to place order. 
  It could impact the user-experience.
  Giving consideration that it's not needed much development effort and show the information we have in read-only state.
  It may also add value in our product to give option of re-order from the history page. 

- [P1] Some of our API integrations have the credentials hard-coded into our private repository
  I wouldn't consider it as P0 but yes it's critical and may cause to P0 issues.
  It should be done asap to avoid tech security concerns

- [P0] We need to display the product image in the cart
  With the customer centric mindset. I would suggest to take it on priority as cart is the final place on which user have a look before placing an order.

- [P0/P2] One of our testers reported a crash that recurs once every few days. Cursory investigation hasn't been able to reproduce the issue
  I would prefer the testers to spend a bit more time on this to identify the actual re-pro steps. Dev should have a quick session with them as sometimes small talk may helps to identify the issues.

- [P3]Users on mobile should be able to remove items from their cart with intuitive swipe gestures
  I consider it as a nice-to-have. As not blocking/prevent to place an order. Traffic keep using the application.

- [P3]Users should be able to favourite products they like
  Simply a feature which add value to the app.

- [P1] The Cart button should be contained within the Navbar and visible on every page
  It seems critical to me. As CTA buttons to place order should be prominent and accessible all the time in the application

- [P2/P3] Once a customer checks out we need to display a receipt in PDF format that comes from from our third-party inventory management system
   That could handle out of the system and team can email them after.
   No sure if it's needed to get the product delivered/picked to the user