import React from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../components/layout";
import { API_ITEM_LIMIT } from "../components/const"
import { Helmet } from "react-helmet"

class CityListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            hasMore: true,
            errorMsg: "",
            top: API_ITEM_LIMIT,
            skip: 0
        };
    }

    // get motc data
    fetchMoreData = () => {
        axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${this.props.cityID}?$top=${this.state.top}&$skip=${this.state.skip}&$format=JSON
        `).then(
            (response) => {
                if (response.data.length === 0) {
                    this.setState({ hasMore: false });
                    return;
                }
                this.setState({
                    items: this.state.items.concat(response.data),
                    top: this.state.top + API_ITEM_LIMIT,
                    skip: this.state.skip + API_ITEM_LIMIT
                });
            }
        ).catch((error) => {
            this.setState({ hasMore: false})
            if (error.response) {
                this.setState({ errorMsg: error.response.statusText })
            } else {
                this.setState({ errorMsg: error.toString() })
            }
        })
    };

    componentDidMount() {
        this.fetchMoreData();
        return this.state;
    }

    render() {
        return (
            <Layout>
                <div className="application">
                    <Helmet>
                    <meta charSet="utf-8" />
                    <title>旅遊景點APP：{this.props.cityName}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    </Helmet>
                </div>
                <h1>
                    {this.props.cityName}
                </h1>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>{this.state.errorMsg ? this.state.errorMsg : "Yay! You have seen it all"}</b>
                        </p>
                    }>

                    {this.state.items.map((item, i) => (
                        <div key={i} className="row">
                            <img src={item.Picture.PictureUrl1}></img>
                            <h2>
                                {item.ScenicSpotName}
                            </h2>
                            <p>
                                簡介：
                                <br />
                                {item.Description ? item.Description : '無'}
                            </p>
                        </div>
                    ))}
                </InfiniteScroll>
            </Layout>
        )

    }
}
export default function CityList({ pageContext: { cityID, cityName } }) {
    return <CityListComponent cityID={cityID} cityName={cityName} />
}