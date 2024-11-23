import React from "react";
function header() {
  return (
    <div>
      <div className=" cursor-pointer flex items-center justify-between px-10 py-4">
        <div>
          <img
            className="w-40 ml-14"
            src="data:image/png;base64,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"
          />
        </div>
        <div>
          <img
            className="lg:hidden block w-14 ml-60  "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8REREAAAAMDAzo6OgZGRnv7+8EBATr6+vQ0NA/Pz/W1tZnZ2fIyMgXFxfx8fE6Ojq0tLSFhYW9vb3h4eGkpKQcHBxOTk52dnZISEiBgYFtbW3Kysr4+PgoKCgpKSmXl5dfX1+2traNjY2fn5+SP9DdAAAB10lEQVR4nO3d3U4iQRCA0aYaQQEFFdRVEdR9/2fcmbs18WI3qWQq5pw3+NLMD0nXdGsAAAAAAAAAAAAAk1jM61jk5603Ucvs6To18DOiz0rpEb/meYHPMXXQd+JmmxV4XTJwSHzJKtwtp275Xp9d5gReFl3CYRHXOYVVf6RD4VVO4X3dwqQ1fK1a2G+SnvzHqoWxyQls7almYo99VmHbVUxcxm1aYNuOb6W9lIi3+7zAwfru8e2ikNPm9pgaCAAAAAAAAAAAAKUszrupp2S+uNjk7kxsh4hlqaGZHnF6TQw8V5sJGmXuoL2quEU4dRf0qmbhLN6TAudFA/OmggrPzCRNlBSemUmaCvr5a7ivWph2HbZe8Gk4SruXDm80U7d8K3Mq6LFiYo9DWmA7bsrNci8jc+xpcPX0MPXfia9WB1NBAAAAAAAAAAAA/GDbw/tp6m94/+Vt9XJIPGVm8HFT7Jvsy4h4TtydeKi2u3TUY5UWuK64RXgQd1mFJTdBD/pD0nFITtKZjpN0/lXZNew96ZlY9VY6i8ecwNYeip5KlnUZjhdiwQf+EPiZFdja73IjM+Mw9zkvsLX9XbGRmeGtNPfNe1TpHNJ52tmOAAAAAAAAAAAAAP/lD062L9KiPZuiAAAAAElFTkSuQmCC"
          />
        </div>
        <div className="flex space-x-10 lg:space-x-12">
          <span className="hidden lg:block lg:ml-44 hover:text-blue-500">
            Products
          </span>
          <span className="hidden lg:block lg:ml-10 hover:text-blue-500">
            Integrations
          </span>
          <span className="hidden lg:block lg:ml-10 hover:text-blue-500">
            Restaurant
          </span>
          <span className="hidden lg:block lg:ml-10 hover:text-blue-500">
            Types
          </span>
          <span className="hidden lg:block lg:ml-10 hover:text-blue-500">
            Pricing
          </span>
          <span className="hidden lg:block lg:ml-10 hover:text-blue-500">
            Resources
          </span>
        </div>
      </div>
      <div>
        <img
          className="sm:ml-16 sm:mb-10 sm:mt-5 sm:mr-20 lg:ml-[400px] lg:mr-64"
          src="https://www.touchbistro.com/wp-content/uploads/2021/04/best-restaurant-websites-thumbnail.jpg"
        />
      </div>
      <div className="sm:ml-12 sm:mr-10 sm:mb-5 lg:ml-96 lg:mr-96">
        The best restaurant websites all have one thing in common: they make it
        incredibly easy for online visitors to find what they’re looking for.
      </div>
      <div className="sm:ml-12 sm:mr-10 sm:mb-10 lg:ml-96 lg:mr-96">
        This is crucial because 77% of diners report visiting a restaurant’s
        website before they dine in or order takeout or delivery from an
        establishment. And of that group, nearly 70% have been discouraged from
        visiting a restaurant simply because of a bad website – yikes!{" "}
      </div>
      <div className="sm:ml-12 sm:mr-10 sm:mb-5 lg:ml-96 lg:mr-96">
        It’s clear that a well-designed restaurant website is key to getting
        customers in the door (or ordering online), but great restaurant website
        design is a lot harder to achieve than you might think.{" "}
      </div>
      <div className="sm:ml-12 sm:mr-10 sm:mb-5 lg:ml-96 lg:mr-96">
        To help you create a restaurant website that encourages guests to visit,
        order, and more, we’ve created a guide to the best restaurant websites
        of 2024, which includes:
      </div>
    </div>
  );
}
export default header;
