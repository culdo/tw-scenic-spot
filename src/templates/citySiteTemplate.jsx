import React from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../components/layout";
import { API_ITEM_LIMIT } from "../components/const"
import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

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
            <Layout cityName={this.props.cityName}>
                <div className="container">
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>{this.state.errorMsg ? this.state.errorMsg : "Yay! You have seen it all"}</b>
                        </p>
                    }
                >
                    {this.state.items.map((item, i) => (
                        <div key={i} className="card text-white bg-primary border-primary mb-3 mycard">
                            <img className="card-img-top" src={item.Picture.PictureUrl1}></img>
                            <div className="card-body">
                            <h2 className="card-title">
                                {item.ScenicSpotName}
                            </h2>
                            <p className="card-text">
                                {item.Description ? item.Description : '無'}
                            </p>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
                </div>
            </Layout>
        )

    }
}
export default function CityList({ pageContext: { cityID, cityName } }) {
    return <CityListComponent cityID={cityID} cityName={cityName} />
}