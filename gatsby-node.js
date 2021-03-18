const allCity = [
    "Taipei",
    "NewTaipei",
    "Taoyuan",
    "Taichung",
    "Tainan",
    "Kaohsiung",
    "Keelung",
    "Hsinchu",
    "HsinchuCounty",
    "MiaoliCounty",
    "ChanghuaCounty",
    "NantouCounty",
    "YunlinCounty",
    "ChiayiCounty",
    "Chiayi",
    "PingtungCounty",
    "YilanCounty",
    "HualienCounty",
    "TaitungCounty",
    "KinmenCounty",
    "PenghuCounty",
    "LienchiangCounty"
];
exports.allCity = allCity;

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