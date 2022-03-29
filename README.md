<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://culdo.github.io/tw-scenic-spot">
    <img alt="Gatsby" src="https://ptx.transportdata.tw/PTX/Content/Images/logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  台灣旅遊景點 Web APP
</h1>

![image](https://user-images.githubusercontent.com/26900749/160599866-14674565-16f3-443e-899f-86124c5c2fd9.png)

串接公共運輸整合資訊流通平台之旅遊景點API，呈現於React.js編寫之前端

You can try it on [the demo site](https://culdo.github.io/tw-scenic-spot)!

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the tw-scenic-spot repo.

    ```shell
    gatsby new my-scenic-app https://github.com/culdo/tw-scenic-spot
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-scenic-app/
    gatsby develop
    ```

## 🧐 What's inside?
    .
    ├── .github
    ├── src
        ├── components 
            ├── const.js
            ├── layout.js
        ├── pages
            ├── index.js
        ├── templates
            ├── citySiteTemplate.jsx
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/.github`**: This directory contains `Github Action` CI CD config file.
2.  **`/src`**: This directory contains all of the code develop using Gatsby Framework.
3.  **`const.js`**: This file contains a object of all city name of taiwan.
4.  **`layout.js`**: This file contains a common header of all pages.
6.  **`citySiteTemplate.jsx`**: This file is used to generate infinite scroll of all scenic spots.
3.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. I specify the site title and site prefix path.(Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).
4.  **`gatsby-node.js`**: This file is used to generate routes of all city and all-spot pages.
## 💫 Deploy
This site deployed on github page using `Github Action` CI CD.
