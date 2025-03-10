const person = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: '/path/to/avatar.jpg'
};

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>,
    link: 'https://your-medium-link.com' // Add the link here!
};

const baseURL = 'https://www.mydigitalport.xyz';

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
};

const routes = {
    '/': true,
    '/about': true,
    '/work': true,
    '/blog': true,
    '/store': true,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    // Add routes you want to protect here
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
};

const effects = {
    gradient: true,
    dots: true,
    lines: false,
};

const style = {
    theme: 'dark',         // dark | light
    neutral: 'gray',       // sand | gray | slate
    brand: 'aqua',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: 'yellow',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: 'contrast',     // color | contrast
    solidStyle: 'flat',         // flat | plastic
    border: 'playful',      // rounded | playful | conservative
    surface: 'translucent',  // filled | translucent
    transition: 'all'           // all | micro | macro
};

const display = {
    location: true,
    time: true
};

export { routes, protectedRoutes, effects, style, newsletter, display, baseURL, i18n, i18nOptions, person };