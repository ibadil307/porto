<h1 align="center">
  Porto Gatsby Portfolio Theme
</h1>

<h2> By 
<a href="https://gatsbytemplates.io">
    gatsbytemplates.io
  </a>
  </h2>


Minimalistic Gatsby theme for digital creators

[Demo](https://porto.gatsbytemplates.io/) | 
[Buy](https://gum.co/gatsby-theme-porto)

## Features

- Minimal and elegant design
- Portfolio section and post type
- Blog section and post type
- Built-in social media icons
- MDX posts support
- Good SEO
- Styles using tailwind css inside styled-components powered by Emotion
- Contact form

## Installation


### Using Starter

This will generate a new themed site to use Gatsby Theme Porto with default content and pages.
Clone starter from [this repo](https://github.com/vse-volod/gatsby-starter-porto)

From current directory, run:

```sh
gatsby new project-name ./gatsby-starter-porto
```

Or if you have any issues with that, try this instead:

1. unzip archive
2. cd gatsby-starter-porto
3. yarn


## Usage

### Theme Options

| Key                 | Default Value | Description                                                                                                 |
| ------------------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| `basePath`          | `/`           | Root URL for this theme.                                                                                     |
| `contentPath`       | `content/blog`     | Location of markdown files used for the posts.      
| `projectsPath`       | `content/portfolio`     | Location of markdown files used for the portfolio section.                                                            |  |
| `assetsPath`       | `content/assets`     | Location of hero images, etc                                                              |  |
| `blogPathPrefix`       | -     | Path prefix for blog pages.                             |  
| `postsPerPage`      | `10`           | How much posts shown on each page of blog posts page template


### Additional Configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`.

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // site title, also displayed on hero component
    title: 'Porto',
    author:  {
      name: 'GatsbyTemplates',
      summary: 'premium portfolio theme',
    },
    // displayed on hero component 
    description: 'Hi! I’m Frank and I’ll tell you the story of my life',
    siteUrl: 'https://gatsbytemplates.io/',
  
    // link to your social network profiles on about page, supported all below:
    social: {
        twitter: 'gatsbytemplates',
        instagram: ' ',
        behance: ' ',
        github: ' ',
        linkedin: ' ',
    },
    // Defining menu links to your pages:
    menu: [
        {
          name: 'portfolio',
          url: '/#portfolio',
        },
        {
          name: 'blog',
          url: '/blog',
        },
    ],
  },
}

```
### Style customization

This theme using tailwind-ui inside of styled components powered by Emotion. Example:

```javascript
import tw from 'twin.macro';
import styled from '@emotion/styled';

const Date = styled.div`
  ${tw`
    uppercase px-6 font-body
  `}
`;

export default Date;
```

inside ${tw``} you define tailwind styles, and outside you can use ordinary styled components style, including ThemeUI pre-defined colors.

For tailwind classes customization, use tailwind.config.js* in root of your project. Refer to official [tailwind docs](https://tailwindcss.com/docs/configuration/). Don't forget to import gatsby-theme-california tailwind config. 

*changes of this file my require reload of gatsby development server(due to current twin.macro limitations)

### Components customization

Use component shadowing, following [official docs](https://www.gatsbyjs.org/docs/themes/shadowing/)

### Writing Content

Posts can be written in markdown / mdx format with either `.md` or `.mdx` and placed in the `content/blog` directory at the root of the site unless a different `contentPath` is defined in the theme options. There are four frontmatter variables used in the theme which are shown below.

```markdown
---
title: Hello World
date: 2020-02-02
image: image.jpg
posttype: "blog"
---
```
Portfolio projects must match following structure:
```markdown
---
title: My first project
subtitle: When your work becomes an art
date: "2019-05-01T22:12:03.284Z"
posttype: project
description: "project description"
images: 
  - ./first.jpg
  - ./second.jpg
  - ./third.jpg
---
```
notice the difference between blog and project posts - former has one image that used as post image, and latter have array of images that used in carousel on main page at portfolio section

### Have more questions?

Feel free to contact us on info@gatsbytemplates.io
