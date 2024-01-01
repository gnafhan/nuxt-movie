<template>
    <div class=" mt-5 flex-1 flex flex-row justify-center lg:justify-between text-white items-center">
        <div class="flex">
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor" fillRule="evenodd" />
          </svg>
          <p class="font-medium text-2xl">Movie</p>
        </div>
        <div class=" flex-initial flex-row hidden gap-x-9 md:flex">
          <a :class="{'text-red-500 font-medium cursor-default' : $route.path == '/', 'hover:text-gray-300 active:text-white': $route.path != '/'}" ><NuxtLink to="/">Home</NuxtLink></a>
          <a :class="{'text-red-500 font-medium cursor-default' : $route.path == '/trending', 'hover:text-gray-300 active:text-white': $route.path != '/trending'}"><NuxtLink to="/trending">Trending</NuxtLink></a>
          <a :class="{'text-red-500 font-medium cursor-default' : $route.path == '/movies', 'hover:text-gray-300 active:text-white': $route.path != '/movies'}" ><NuxtLink to="/movies">Movies</NuxtLink></a>
          <a :class="{'text-red-500 font-medium cursor-default' : $route.path == '/tv-show', 'hover:text-gray-300 active:text-white': $route.path != '/tv-show'}"><NuxtLink to="/tv-show">Tv Shows</NuxtLink></a>
        </div>
      </div>
</template>