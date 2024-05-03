import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			{/* Carousel Start */}
			<div className="container-fluid header-carousel px-0 mb-5">
				<div
					id="header-carousel"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="w-100" src="img/home1.PNG" alt="Image" />
							<div className="carousel-caption">
								<div className="container">
									<div className="row justify-content-start">
										<div className="col-lg-7 text-start">
											<h1 className="display-1 text-white animated slideInRight mb-3">
												Life Science Supply Chain
											</h1>
											<p className="mb-5 animated slideInRight">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Curabitur tellus augue, iaculis id elit eget, ultrices
												pulvinar tortor. Quisque vel lorem porttitor, malesuada
												arcu quis, fringilla risus.
											</p>
											<a
												href=""
												className="btn btn-primary py-3 px-5 animated slideInRight"
											>
												Order Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img className="w-100" src="img/home2.PNG" alt="Image" />
							<div className="carousel-caption">
								<div className="container">
									<div className="row justify-content-end">
										<div className="col-lg-7 text-end">
											<h1 className="display-1 text-white animated slideInLeft mb-3">
												AffiASSAY® CCK-8
											</h1>{" "}
											<br />
											<p className="mb-5 animated slideInLeft ">
												{" "}
												AffiASSAY® Cell Counting Kit 8 (WST-8 / CCK-8)
											</p>
											<a
												href=""
												className="btn btn-primary py-3 px-5 animated slideInLeft"
											>
												Order Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
			{/* Carousel End */}
			{/* About Start */}
			<div className="container-fluid py-5">
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="row g-0">
								<div className="col-6">
									{" "}
									<img className="img-fluid" src="img/produit6.PNG" />
								</div>
								<div className="col-6">
									<img className="img-fluid" src="img/produit7.PNG" />
								</div>
								<div className="col-6  me-5">
									<img className="img-fluid " src="img/produit9.PNG" />
								</div>

								<div className="ms-n150 col-3 ms-5">
									<div className=" ms-5 mt-5 btn btn-primary py-3 px-5 animated  mt-n150 ms-n5 d-flex flex-column align-items-center ">
										<small className="fs-5 text-white">Order Now</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
							<h1 className="display-6 mb-4">AAffiDYE® DL </h1>
							<p className="mb-4">
								The AffiDYE® DL 5000 DNA Marker consists of nine double-stranded
								DNA fragments (100, 250, 500, 750, 1, 000, 1, 500, 2, 000, 3,
								000, 5, 000 bp) . Since this product is premixed with 1×loading
								dyes, it can be used in agarose gel electrophoresis directly.
								The concentration of 500 and 1, 500 bp fragments is 125 ng/5 μL,
								and the concentration of other fragments is 50 ng/5μL.
							</p>
							<div className="row g-4 g-sm-5 justify-content-center">
								<div className="col-sm-6">
									<div className="about-fact btn-square flex-column rounded-circle  ms-sm-auto">
										<img
											className="img-fluid rounded-circle "
											src="img/produit7.PNG"
										/>
									</div>
								</div>
								<div className="col-sm-6 text-start">
									<div className="about-fact btn-square flex-column rounded-circle  me-sm-auto">
										<img
											className="img-fluid rounded-circle "
											src="img/produit8.PNG"
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="about-fact mt-n132 btn-square flex-column rounded-circle mx-sm-auto">
										<img
											className="img-fluid rounded-circle "
											src="img/produit9.PNG"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* About End */}
		</>
	);
}

export default App;
