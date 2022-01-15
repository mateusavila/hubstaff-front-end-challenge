

# wordpress-coding-challenge - Hubstaff Front-end Challenge (front end)

### About this project
  
This test will have 2 repositories to work: the WP Rest API repository and the front-end repository. This documents talks only the front-end project.

### About the stack and my choices
This project runs blazing fast with vite + vue 3 with composition api + typescript + sass. 

You can access here: https://hubstaff-mateus.surge.sh/

#### A few words before you continue

I have a lot of experience to work with wordpress themes, at least 8 years always building then from scratch. The problem of this approach is the Developer Experience is limited, because they still uses jquery and the front-end world runs fast with ES6 technologies. 

I don't see myself as a Wordpress developer, but much more close to front-end developer. I loved the challenges to create experiences using components instead of importing template_parts. Because of this, I've experimented with developing using vue on the frontend, consuming Wordpress routes via REST API. 

The guys from wordpress made magic with the WP Rest API, it's easy and very pleasure to work with.

In this test I've used Static Generated project. This is amazing for performance, but for SEO is not that great. I know this issue, and when it's necessary to work in a real project, I've got to convert the file to SSR. I made this in the https://a55.tech project that I worked last year, and we made a lot of great things in SEO for this project.

I used to work more with vue 2, but I really wanted to challenge my skills to work with vue 3 + composition api. I really liked this iniciative from Evan You to revive the dogma *write less, do more*, like react and svelte did recently.

### Typed everything
Typescript makes my job faster when I type everything. If you wanted to look at all the typings of this project, you can look at the folder `/src/types/types.ts`

### I've just copied the styles, but I did it differently
After read the challenge a few times, I copied the base style of hubstaff project, but re-do the CSS using SASS.

## FAQ (just to be faster)

### Why you didn't create a child theme?
Because I never ever create one. I always build theme from scratch. I prefer use my time to learn more about WP itself. If you asked me which commercial Wordpress Theme I recommend, my answer will be: IDK.

### Why you're not using prettier or eslint?
Because I'm lazy. This is not a real project. In a real project, eslint will be applied. I personally didn't like prettier. 

### Which media queries you decided that the page will run in tablet or mobile?
| Media Query | Device |
|--|--|
| Above 1200px  | desktop |
| Between 900px and 1200px  | tablet |
| Between 600px and 900px  | big mobile and small tablets |
| Below 600px  | mobile |

### This project is a Static Generated, not Server Side Rendering. Why did you decide to go for this way?

Because vite is faster to work. If I decided to use nuxt without vite, the development server is much slower to work. And this is a Challenge, not a real project. This will take consideration when I've working in real project.

### Why you host your test in surge.sh?
Because it's faster, just deploy in my terminal and it's done! I know that they still offers HTTP 1/1 to process the page, and this can be faster if I uses the AWS or other structure. 

### Why you used composition api? 
I wanted to learn more about it. And this small challenge is the perfect opportunity to learn more. I wanted to use more this approach in next project in the future.

### Is there anything you think it's missing in this project?
Yeah, of course. I wanted to gave support to webp and avif files, but the import.xml project is broken. I've to use one plugin just to add the images randomly. I capture all the images from hubstaff blog, because they're beautiful.

Other thing I really wanted to do is the blog internal page and search. 
