const { allCity } = require("./src/components/const")

exports.createPages = async ({
    actions: {
        createPage
    }
}) => {
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
}