import React, {useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const Index = () => {
	const [userDetails, setUserDetails] = useState(
        {
			email: "",
			username: "",
			mobileNumber: "",
			password: "",
			role: "user",
			active: false,
		}
    );
	return <App userDetails={userDetails} setUserDetails={setUserDetails} />;
};

ReactDOM.render(
	<>
		<BrowserRouter>
			<Index />
		</BrowserRouter>
	</>,
	document.getElementById("root")
);
