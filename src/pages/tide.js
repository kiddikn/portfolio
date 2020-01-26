import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TideDatePicker from "../components/datePicker"

class Tide extends React.Component {
    constructor() {
        super();
        this.state = {
          hasError: false,
          isLoading: false,
          data: "test",
          tideImage:""
        }
        this.setTideImg = this.setTideImg.bind(this);
    }

    fetchData(url) {
        this.setState({ isLoading: true });
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            this.setState({ isLoading: false });
            this.setState({data:response});
            return response;
          })
          .then((response) => response.json())
          .catch(() => this.setState({ hasErrored: true }));
    }

    setTideImg(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const tideParam = "yr="+year+"&mn="+month+"&dy=" + day;
        const tideBaseURL = "https://api.tide736.net/tide_image.php?pc=8&hc=5&rg=day&w=768&h=512&lc=blue&gcs=cyan&gcf=blue&ld=on&ttd=on&tsmd=on&";
        this.setState({
            tideImage : tideBaseURL + tideParam
        });
    }

    componentDidMount() {
        //this.fetchData('https://api.tide736.net/get_tide.php');
        // 初期表示時は表示日付でグラフを初期化する　
        this.setTideImg(new Date());
    }

    render() {
        // if (this.state.isLoading) {
        //     tideGraph = <p>loading . . . </p>;
        // } else {
            
        // }
        return (
            <Layout location="">
                <SEO title="tide" />
                <section id="one">
                    <h1>■潮汐グラフ■</h1>
                    <p>こちらの<a href="https://tide736.net/">潮汐API</a>を利用しています。</p>

                    <h1>対象日の設定</h1>
                    <TideDatePicker setTideImg={this.setTideImg} />
                    <img src={this.state.tideImage} alt="潮汐グラフ" style={{margin: "10px"}} />
                </section>
            </Layout>
        )
    }
}

export default Tide