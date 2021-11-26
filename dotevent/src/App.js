import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddConference from './components/AddConference'
import General from './components/General';
import Meet from './components/Meet';
import AMA from './components/AMA';
import Event from './components/Event';
import Learn from './components/Learn';
import Contact from './components/Contact';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/General" element={<General />} />
				<Route path="/Meet" element={<Meet />} />
				<Route path="/AMA" element={<AMA />} />
				<Route path="/Event" element={<Event />} />
				<Route path="/Learn" element={<Learn />} />
				<Route path="/contact" element={<Contact />} />

				<Route path="/add-conference" element={<AddConference />} />
			</Routes>
		</div>
	);
}

export default App
