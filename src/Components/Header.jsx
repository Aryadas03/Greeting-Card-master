import React from "react";

function Header() {
  return (
    <div>
      <header aria-label="Page Header">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold sm:text-3xl text-primary">
               BIRTHDAY CARD GENERATOR
              </h1>

              <p class="mt-1.5 text-sm text-gray-500 sm:mt-2 text-center sm:text-right">
               Celebrate Every Moment – Send Love with a Personalized Birthday Card! 🎉🎂💕
              </p>
            </div>

           
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
