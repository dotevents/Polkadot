import React from "react";

function Contact() {
	return (
		<section className="flex items-center justify-between h-screen mx-24">
			<div>
				<h3 className="font-normal text-5xl mb-3">Get in Touch</h3>
				<h4 className="font-semibold text-2xl mb-2">
					Having questions or comments?
				</h4>
				<h4>
					Please drop a mail{" "}
					<a href="/doteventes@gmail.com" className="text-blue-500 ">
						doteventes@gmail.com
					</a>
				</h4>
				{/* bottom  link bro which one do you want to link? redirect to home page.
                the logo in the header should be a link back to homepage. okay bro put navbar in home wala okay not really. okay  change logo bro replace polkadot to event . where is the new logo?*/}
				<h4 className="absolute bottom-5 text-base">Contact</h4>
			</div>
			{/* image bro email is working like link so ouse a  tag okay. */}
			<div className="w-1/2 h-auto">
				<div className="w-full h-full">
					{/*Donate KSM: Cm6XMVBfvU83bd7EBURJqqeReL9nhAoGKgKiDPzZpdtXMyg okay */}
					<img src="./contact(1).svg" alt="image" />
				</div>
				<h4 className="whitespace-nowrap text-base absolute bottom-5">
					Donate KSM: Cm6XMVBfvU83bd7EBURJqqeReL9nhAoGKgKiDPzZpdtXMyg
				</h4>
			</div>
		</section>
	);
}

export default Contact;
