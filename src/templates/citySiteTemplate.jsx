import React from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../components/layout";

class CityListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            hasMore: true,
            top: 30,
            skip: 0
        };
    }

    // get motc data
    fetchMoreData = () => {
        axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${this.props.twCity}?$top=${this.state.top}&$skip=${this.state.skip}&$format=JSON
        `).then(
            (response) => {
                if (response.data.length === 0) {
                    this.setState({ hasMore: false });
                    return;
                }
                this.setState({
                    items: this.state.items.concat(response.data),
                    top: this.state.top + 30,
                    skip: this.state.skip + 30
                });
            }
        ).catch((error) => {
            if (error.response.status===429) { 
                this.setState({ hasMore: false })
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
                <h1>
                    {this.props.twCity}
                </h1>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>

                    {this.state.items.map((item) => (
                        <div className="row">
                            <h2>
                                {item.Name}
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
export default function CityList({ pageContext: { city } }) {
    return <CityListComponent twCity={city} />
}