import logo from "../dotevent-logo.png";
import searchIcon from "../search.svg";
import calenderIcon from "../calender-icon.svg";
import twitterLogo from "../twitter-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HeroImage from "../Frame.png";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import "../App.css";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
  HitsPerPage,
  connectRefinementList,
} from "react-instantsearch-dom";

function Home() {
  const [locations, setlocations] = useState([]);
  const [names, setNames] = useState(["name1", "name2", "name3"]);

  const [confs, setConfs] = useState([]);

  // are you there?

  useEffect(() => {
    // axios.get("http://localhost:3200/locations").then(function (response) {
    // 	setlocations(response.data.data);
    // });
    // axios.get("").then(function (res) {
    // 	setNames(res.data);
    // });
    // axios.get("http://localhost:3200/cards").then(function (response) {
    // 	setcards(response.data.data);
    // });
    axios
      .get("http://localhost:3001/api/getConf")
      .then((res) => {
        const data = JSON.stringify(res.data);

        setConfs(data);
        console.log("Data retrieved.", data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const searchClient = algoliasearch(
    "Q0QUEJ989A",
    "48ae55ae7804911bb0859e59567cc993"
  );

  // const showConf = () => {
  // 	if (confs.length !== 0)
  // 		return confs.map((conf, index) => (
  // 			<p key={index}>{conf.confTwitterHandle}</p>
  // 		));
  // 	return null;
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg">
          <Container md>
            <Navbar.Brand href="/home">
              <img width="150" src={logo} alt="" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <div id="responsive-navbar-nav">
              <Nav className="customNav">
                {/* <Nav.Link href="/General" style={{ fontWeight: "bold" }}>
                  General
                </Nav.Link>
                <Nav.Link href="/meet" style={{ fontWeight: "bold" }}>
                  Meetup
                </Nav.Link>
                <Nav.Link href="/AMA" style={{ fontWeight: "bold" }}>
                  AMA
                </Nav.Link>
                <Nav.Link href="/Event" style={{ fontWeight: "bold" }}>
                  Event
                </Nav.Link>
                <Nav.Link href="/Learn" style={{ fontWeight: "bold" }}>
                  Learning
                </Nav.Link> */}
                <Nav.Link className="navCta" href="/add-conference">
                  Add Conference
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </header>
      {/* hello bro are you here? */}
      <section className="heroSection">
        <Container md>
          <Row>
            <Col md={6}>
              <h1>Find your next tech conference in the Polkadot ecosystem</h1>
              <p>
                Open-source and crowd-sourced list of<br></br> meetup around
                Polkadot ecosystem
              </p>
              {/* <button></button> */}
              <a className="navCta" href="/add-conference">
              Get Started
                </a>
            </Col>
            <Col md={6}>
              <img src={HeroImage} alt="" width="100%" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* which page are we working on?  yes show me where the cards are. */}
      <section className="searchBar">
        <InstantSearch searchClient={searchClient} indexName="prod_conferences">
          <Container md>
            <CustomSearchBox />
            <Row>
              {/* <Col md={4}>
                <div className="filterCard">
                  <div className="filterLocation">
                    <div className="filterTitle">Location</div> */}
                    {/* <div className="searchbarCont">
											<input
												type="search"
												placeholder="Enter location"
											/>
											<span>
												<img src={searchIcon} alt="" />
											</span>
										</div> */}
                    {/* <CustomRefinementList attribute="country" />

                    {locations.map((item, index) => {
                      return (
                        <div className="cityName">
                          {item.name} <span className="cityCount">1</span>
                        </div>
                      );
                    })}
                  </div> */}

                  {/* sidebar */}
                  {/* <div className="filterName">
										<div className="filterTitle">Name{Hits.names}</div>
										<div className="searchbarCont">
											<input
												type="search"
												placeholder="Enter Name"
											/>

											<span>
												<img src={searchIcon} />
											</span>
											{names.map((item, index) => {
												return (
													<div className="cityName">
														{item}{" "}
														<span className="cityCount">
															
														</span>
													</div>
												);
											})}
										</div>
									</div> */}
                {/* </div>
              </Col> */}
              <Col md={8}>
                {/* <Row>
									<Col xs={12}>
										<p className="w-full flex items-center justify-between whitespace-nowrap">
											<em> </em>
											<span>
												<form className="inline-block space-x-2 text-right">
													<input
														type="radio"
														className=""
														name="status"
														value="online"
														id="online"
													/>

													<label for="online">
														Online
													</label>
													<input
														type="radio"
														className="text-red-500 ring-red-500"
														name="status"
														value="offline"
														id="offline"
													/>
													<label for="offline">
														Offline
													</label>
												</form>
											</span>
										</p>
									</Col>

									<Col
										xs={6}
										className="d-flex d-none justify-content-end"
									>
										<Form.Check
											inline
											type="radio"
											name="group1"
											aria-label="radio 1"
											label="In person"
										/>
										<Form.Check
											inline
											type="radio"
											name="group1"
											aria-label="radio 2"
											label="Online"
										/>
									</Col>
								</Row> */}

                <Row>
                  <CustomHits />
                </Row>
              </Col>
            </Row>
          </Container>
        </InstantSearch>
      </section>
      <Footer />
    </div>
  );
}

const SearchBox = ({ currentRefinement, refine }) => (
  <Row>
    <Col md={12}>
      <div className="searchbarContainer">
        <input
          type="search"
          placeholder="Find conferences by name or location"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
        />
        <span>
          <img src={searchIcon} alt="" />
        </span>
      </div>
    </Col>
  </Row>
);

const CustomSearchBox = connectSearchBox(SearchBox);

const Hits = ({ hits }) => {
  return (
    <div>
      {/* <HitsPerPage
  items={hits}
  defaultRefinement={20}
/> */}
      {hits.map((hit) => (
        <Col md={12} key={hit.ObjectID}>
          {/* {setNames(names[hit.name])} */}
          <a href="" className="eventCard">
            <span className="tag">{hit.online ? "Online" : "In person"}</span>
            <div className="displayFlex">
              <div className="eventTitle">{hit.name}</div>
              <div className="eventDate">
                <p className="flex items-center gap-2 whitespace-nowrap">
                  <img src={calenderIcon} alt="" />
                  {/* parse date */}

                  <span>{`${hit.startDate.slice()} to ${hit.endDate}`}</span>
                </p>
              </div>
            </div>
            <div className="eventDescription">{hit.topic}</div>
            {hit.twitter === "@" ? (
              <div />
            ) : (
              <div className="twitterUsserName flex items-center">
                <img src={twitterLogo} alt="" className="mr-4" />
                <span>{hit.twitter} .</span>
                <span className="codeConduct">
                  <Nav.Link href="/Polkadot.net">code of conduct</Nav.Link>
                </span>
              </div>
            )}

            <button className="hashTag">@ {hit.name}</button>
          </a>
        </Col>
      ))}
    </div>
  );
};

// show me algolia

const CustomHits = connectHits(Hits);

const RefinementList = ({ items, refine }) => (
  <div>
    <ul>
      {items.map((item) => (
        <li key={item.label} style={{ listStyle: "none" }}>
          <Form.Check
            inline
            type="radio"
            name="group1"
            aria-label="radio 1"
            label={`${item.label} (${item.count})`}
            onClick={(event) => {
              refine(item.value);
            }}
            //will get back to you. I have to go now. ho
          />
        </li>
      ))}
    </ul>
  </div>
);

// 2. Connect the component using the connector
const CustomRefinementList = connectRefinementList(RefinementList);

export default Home;
