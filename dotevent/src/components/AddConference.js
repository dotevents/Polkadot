import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

import "./AddConference.css";

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
		<div className="flex items-center justify-between w-full overflow-hidden">
			<div className="reative w-80 h-screen bg-gray-700 flex items-center justify-center px-5">
				{/* logo yes   */}
				<div className="absolute top-5 w-40">
					<img src="./dotevent-logo.png" alt="" />
				</div>
				<div className="relative w-64 h-72">
					<img src="./vector1.png" alt="" />
				</div>
			</div>
			{/* form */}

			<div className="relative w-full bg-gray-200 flex flex-col items-center justify-center h-screen">
				<div className="absolute left-10 top-5 cursor-pointer">
					<Link to="/">
						<BiArrowBack className="w-8 h-8 " />
					</Link>
				</div>
				<form onSubmit={handleSubmit} className=" ">
					<h1>Add a conference</h1>
					<div className="flex items-center gap-4">
						{/* Topic */}

						<div>
							<label
								className="block m-2 font-semibold"
								htmlFor="topic"
							>
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
					<div className="flex items-center gap-4">
						<div>
							{/* Url */}
							<label
								className="block m-2 font-semibold"
								htmlFor="url"
							>
								Url
							</label>
							<input
								type="text"
								className="bg-gray-300 w-96 text-gray-900 border border-gray-300 p-2 rounded-lg outline-none"
								name="url"
								id="url"
								value={input.url}
								onChange={handleChange}
								placeholder="Url"
							/>
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
					<div className="flex items-center gap-4">
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
					<div className="flex items-center gap-4">
						<div>
							{/* cpf Url */}
							<label
								className="block m-2 font-semibold"
								htmlFor="cpfUrl"
							>
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
						{/* cpf End Date */}
						<div>
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

					<div className="w-full flex items-center gap-4">
						{/* Conference Twitter Handle */}
						<div>
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

					<div className="w-full flex items-center justify-center mt-3">
						{/* Submit Button */}
						<button
							type="submit"
							className="w-40 self-center  flex items-center justify-center font-semibold text-gray-50 bg-red-500 py-2 px-10 rounded-lg"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
			{showModal ? (
				<div
					className={`absolute whitespace-nowrap top-5 right-5 bg-green-500 p-3 rounded-lg border border-green-200`}
				>
					<div className="">
						<AiFillCloseCircle
							className="text-gray-50"
							onClick={()=>setShowModal(!showModal)}
						/>
					</div>
					<h4 className="font-medium  text-gray-50">
						Created Successfully
					</h4>
				</div>
			) : null}
		</div>
	);
};

export default AddConference;
