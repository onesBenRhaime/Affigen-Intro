function Navbar() {
	return (
		<>
			{/* Navbar Start */}
			<div className="container-fluid sticky-top">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-5">
						<a href="index.html" className="navbar-brand d-lg-none">
							<h1 className="text-primary m-0">
								Lab<span className="text-dark">sky</span>
							</h1>
						</a>
						<button
							type="button"
							className="navbar-toggler me-0"
							data-bs-toggle="collapse"
							data-bs-target="#navbarCollapse"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse" id="navbarCollapse">
							<div className="navbar-nav">
								<a href="index.html" className="nav-item nav-link active">
									Home
								</a>
								<a href="about.html" className="nav-item nav-link">
									Shop
								</a>
								<a href="service.html" className="nav-item nav-link">
									Services
								</a>
								<div className="nav-item dropdown">
									<a
										href="#"
										className="nav-link dropdown-toggle"
										data-bs-toggle="dropdown"
									>
										All products
									</a>
									<div className="dropdown-menu bg-light m-0">
										<a href="" className="dropdown-item">
											AFFIDYE®
										</a>
										<a href="" className="dropdown-item">
											AFFIDYE®
										</a>
										<a href="" className="dropdown-item">
											AlliASSAY®
										</a>
										<a href="" className="dropdown-item">
											AffIBIOTICS®
										</a>
										<a href="" className="dropdown-item">
											AttiCHECK®
										</a>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
			{/* Navbar End */}
		</>
	);
}

export default Navbar;
