import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/core/styles.scss";

import "../styles/Home.css";

const sliderImage = [
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_1.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_2.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_3.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_4.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_5.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_6.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_7.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_8.png" },
	{ src: "https://theme.hstatic.net/1000360516/1000609234/14/slideshow_9.png" },
];

const catalogImage1 = [
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x1.jpg?v=428",
		name: "GHẾ SOFA",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x2.jpg?v=428",
		name: "GIƯỜNG",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x3.jpg?v=428",
		name: "BÀN ĂN",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x4.jpg?v=428",
		name: "BÀN LÀM VIỆC",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x55.jpg?v=428",
		name: "BÀN TRÀ",
	},
];

const catalogImage2 = [
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x6.jpg?v=428",
		name: "BÀN TRANG ĐIỂM	",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x7.jpg?v=428",
		name: "TỦ TRANG TRÍ",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x8.jpg?v=428",
		name: "KỆ TRANG TRÍ",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x9.jpg?v=428",
		name: "TỦ ĐẦU GIƯỜNG",
	},
	{
		src: "https://theme.hstatic.net/1000360516/1000609234/14/x100.jpg?v=428",
		name: "GIÁ TREO QUẦN ÁO",
	},
];

function Home__carousel() {
	return (
		<div className="Home__carousel">
			<AwesomeSlider cssModule={AwsSliderStyles}>
				{sliderImage.map((item, index) => (
					<div data-src={item.src} key={index} />
				))}
			</AwesomeSlider>
		</div>
	);
}

function Home__catalog() {
	return (
		<div className="Home__catalog">
			<div className="content">
				<h1>DANH MỤC NỔI BẬT</h1>
				<p>
					Danh mục sản phẩm bán tốt nhất trong tháng và được lựa chọn nhiều
					nhất.
				</p>
			</div>
			<div className="banner">
				{catalogImage1.map((item, index) => (
					<div className="banner__item" key={index}>
						<img src={item.src} />
						<h4>{item.name}</h4>
					</div>
				))}
			</div>
			<div className="banner">
				{catalogImage2.map((item, index) => (
					<div className="banner__item" key={index}>
						<img src={item.src} />
						<h4>{item.name}</h4>
					</div>
				))}
			</div>
		</div>
	);
}

function Home(props) {
	return (
		<div className="Home">
			<Home__carousel />
			<Home__catalog />
		</div>
	);
}

export default Home;