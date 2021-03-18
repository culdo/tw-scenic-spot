const { allCity } = require("./src/components/const")

exports.createPages = async ({
    actions: {
        createPage
    }
}) => {
    
    createPage({
        path: `/scenicSpot`,
        component: require.resolve('./src/templates/citySiteTemplate.jsx'),
        context: {
            city: "",
        },

    })
    allCity.forEach((city) => {
        createPage({
            path: `/scenicSpot/${city}`,
            component: require.resolve('./src/templates/citySiteTemplate.jsx'),
            context: {
                city
            },

        })
    })
}