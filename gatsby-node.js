const { allCity } = require("./src/components/const")

exports.createPages = ({ actions }) => {
    const { createPage, createRedirect } = actions

    Object.keys(allCity).map((page) => {
        const cityID = page === "All" ? "" : page
        createPage({
            path: `/scenicSpot/${ cityID }`,
            component: require.resolve('./src/templates/citySiteTemplate.jsx'),
            context: {
                cityID,
                cityName: allCity[page]
            },
        })
    })
    
    createRedirect({
        fromPath: '/',
        toPath: '/scenicSpot',
        isPermanent: true,
        redirectInBrowser: true,
     })
}