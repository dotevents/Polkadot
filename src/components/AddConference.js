import { Link } from "react-router-dom";
import logo from "../dotevent-logo-white.svg";
import { useState } from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./AddConference.css";
import Footer from "../Footer";


const AddConference = () => {
  const [showModal, setShowModal] = useState(false);

  const [input, setInput] = useState({
    topic: "",
    conferenceName: "",
    url: "",
    location: "",
    startDate: "",
    endDate: "",
    cpfUrl: "",
    cpfEndDate: "",
    confTwitterHandle: "",
    codeOfConductUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const createConf = {
      confName: input.conferenceName,
      url: input.url,
      location: input.location,
      startDate: input.startDate,
      endDate: input.endDate,
      cpfUrl: input.cpfUrl,
      cpfEndDate: input.cpfEndDate,
      confTwitterHandle: input.confTwitterHandle,
      codeOfConduct: input.codeOfConductUrl,
    };

    const res = await axios.post(
      "http://localhost:3001/api/addconference",
      createConf,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    // if successful  should work now.
    if (res.status === 200) setShowModal(!showModal);
  };

  // lets try it.  try it out. go hto brow  s ehorld on.

  return (
    <>
      <header className="App-header addConfPage">
        <Navbar collapseOnSelect expand="lg">
          <Container className="header-seperator">
            <div className="logo-container">
              <Navbar.Brand href="/">
                <img width="150" src={logo} alt="" />
              </Navbar.Brand>
            </div>

            <div class="otherContainer">
              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              <div>
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
            </div>
          </Container>
        </Navbar>
      </header>

      <section className="addFormSection">
        <div>
          <div className="addFormContainer">
            <div className="addFormImg">
              <img src="./vector1.png" alt="" />
            </div>

            <div className="addForm">
              <form onSubmit={handleSubmit}>
                <h1 className="formTitle">Add a conference</h1>
                <div className="d-flex">
                  <div>
                    {/* Topic */}

                    <label className="block m-2 font-semibold" htmlFor="topic">
                      Topic
                    </label>
                    <input
                      type="text"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      name="topic"
                      value={input.topic}
                      onChange={handleChange}
                      id=""
                    />
                  </div>

                  <div>
                    {/* Conference Name */}
                    <label
                      className="block m-2 font-semibold"
                      htmlFor="conferenceName"
                    >
                      Conference Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.conferenceName}
                      onChange={handleChange}
                      name="conferenceName"
                      id="conferenceName"
                      placeholder="Conference Name"
                    />
                  </div>
                </div>

                <div className="d-flex">
                  <div>
                    {/* Url */}
                    <label className="block m-2 font-semibold" htmlFor="url">
                      Url
                    </label>
                    <input
                      type="text"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      name="url"
                      id="url"
                      value={input.url}
                      onChange={handleChange}
                      placeholder="Eg: https://confs.tech"
                    />
                    <small>
                      Must be valid, up and running and specific for the
                      conference
                    </small>
                  </div>
                  <div>
                    {/* Locatiion */}
                    <label
                      className="block m-2 font-semibold"
                      htmlFor="location"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.location}
                      onChange={handleChange}
                      name="location"
                      id="location"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    {/* Start Date */}
                    <label
                      className="block m-2 font-semibold"
                      htmlFor="startDate"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.startDate}
                      onChange={handleChange}
                      name="startDate"
                      id="startDate"
                      placeholder="Start Date"
                    />
                  </div>

                  <div>
                    {/* End Date */}
                    <label
                      className="block m-2 font-semibold"
                      htmlFor="endDate"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.endDate}
                      onChange={handleChange}
                      name="endDate"
                      id="endDate"
                      placeholder="End Date"
                    />
                  </div>
                </div>

                <div className="d-flex">
                  <div>
                    {/* cpf Url */}
                    <label className="block m-2 font-semibold" htmlFor="cpfUrl">
                      CPF Url
                    </label>
                    <input
                      type="text"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.cpfUrl}
                      onChange={handleChange}
                      placeholder="cpf Url"
                      name="cpfUrl"
                      id="cpfUrl"
                    />
                  </div>

                  <div>
                    {/* cpf End Date */}
                    <label
                      className="block m-2 font-semibold"
                      htmlFor="cpfEndDate"
                    >
                      CPF End Date
                    </label>
                    <input
                      type="date"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.cpfEndDate}
                      onChange={handleChange}
                      placeholder="cpf End Date"
                      name="cpfEndDate"
                      id="cpfEndDate"
                    />
                  </div>
                </div>

                <div className="d-flex">
                  <div>
                    {/* Conference Twitter Handle */}
                    <label
                      className="block m-2 font-semibold"
                      htmlFor="confTwitterHandle"
                    >
                      Conference @ Twitter Handle
                    </label>
                    <input
                      type="text"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.confTwitterHandle}
                      onChange={handleChange}
                      placeholder="@"
                      name="confTwitterHandle"
                      id="confTwitterHandle"
                    />
                  </div>

                  <div>
                    <label
                      className="block m-2 font-semibold"
                      htmlFor="codeOfConductUrl"
                    >
                      Code of Conduct Url
                    </label>
                    <input
                      type="text"
                      className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
                      value={input.codeOfConductUrl}
                      onChange={handleChange}
                      placeholder=""
                      name="codeOfConductUrl"
                      id="codeOfConductUrl"
                    />
                  </div>
                </div>

                <div className="">
                  {/* Submit Button */}
                  <button type="submit" className="navCta">
                    Submit
                  </button>
                </div>
              </form>
              {/* </div> */}
              {showModal ? (
                <div
                  className={`absolute whitespace-nowrap top-5 right-5 bg-green-500 p-3 rounded-lg border border-green-200`}
                >
                  <div className="">
                    <AiFillCloseCircle
                      className="text-gray-50"
                      onClick={() => setShowModal(!showModal)}
                    />
                  </div>
                  <h4 className="font-medium  text-gray-50">
                    Created Successfully
                  </h4>
                </div>
              ) : null}
            </div>
          </div>
          {/* <div className="">
            <Link to="/">
              <BiArrowBack className="w-8 h-8 " />
            </Link>
          </div> */}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default AddConference;
