const { allCity } = require("./src/components/const")

exports.createPages = async ({
    actions: {
        createPage
    }
}) => {
    Object.keys(allCity).map((page) => {
        createPage({
            path: `/scenicSpot/${ page === "All" ? "" : page}`,
            component: require.resolve('./src/templates/citySiteTemplate.jsx'),
            context: {
                city: allCity[page]
            },

        })
    })
}