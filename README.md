<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://culdo.github.io/tw-scenic-spot">
    <img alt="Gatsby" src="https://ptx.transportdata.tw/PTX/Content/Images/logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  Taiwan Scenic Spot Web APP
</h1>

You can try it on [the demo site](https://culdo.github.io/tw-scenic-spot)!

## π Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the tw-scenic-spot repo.

    ```shell
    gatsby new my-scenic-app https://github.com/culdo/tw-scenic-spot
    ```

1.  **Start developing.**

    Navigate into your new siteβs directory and start it up.

    ```shell
    cd my-scenic-app/
    gatsby develop
    ```

## π§ What's inside?
    .
    βββ .github
    βββ src
        βββ components 
            βββ const.js
            βββ layout.js
        βββ pages
            βββ index.js
        βββ templates
            βββ citySiteTemplate.jsx
    βββ .gitignore
    βββ .prettierrc
    βββ gatsby-config.js
    βββ gatsby-node.js
    βββ LICENSE
    βββ package-lock.json
    βββ package.json
    βββ README.md

1.  **`/.github`**: This directory contains `Github Action` CI CD config file.
2.  **`/src`**: This directory contains all of the code develop using Gatsby Framework.
3.  **`const.js`**: This file contains a object of all city name of taiwan.
4.  **`layout.js`**: This file contains a common header of all pages.
6.  **`citySiteTemplate.jsx`**: This file is used to generate infinite scroll of all scenic spots.
3.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. I specify the site title and site prefix path.(Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).
4.  **`gatsby-node.js`**: This file is used to generate routes of all city and all-spot pages.
## π« Deploy
This site deployed on github page using `Github Action` CI CD.
