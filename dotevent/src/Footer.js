import React from "react";
import Nav from "react-bootstrap/Nav";

function Footer() {
	
	return (
		<section className="footer text-base">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-10 mx-auto ">
						<div className="row">
							<div className="col-3 col-lg-3">
								<Nav.Link href="/add-conference">
									<h4 className="cnt-1">Add a conference</h4>
								</Nav.Link>
								{/* <h4>Add a conference</h4> */}
							</div>
							<div className="col-3 col-lg-3">
								<Nav.Link href="https://github.com/dotevents?tab=repositories">
									<h4 className="cnt-1">Connect on GitHub</h4>
								</Nav.Link>
							</div>
							<div className="col-3 col-lg-3">
								<Nav.Link href="https://twitter.com/home">
									<h4 className="cnt-1">
										Follow us on Twitter
									</h4>
								</Nav.Link>
							</div>
							<div className="col-3 col-lg-3">
								<Nav.Link href="/Contact">
									<h4 className="cnt-1">
										Contact
									</h4>
								</Nav.Link>
								{/* is that okay? no add conferece add is up and conference is so same line okay. */}
							</div>
						</div>
						<hr />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
