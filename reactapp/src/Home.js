import { stuff } from "./utils";
import Card from "./Card";
const Home = () => {
	return (
		<>
			<form action="GET">
				<input type="text" />
				<input type="submit" />
			</form>
			{Object.keys(stuff).map((element) => (
				<Card key = {element['id']} {...element} />
			))}
            {/* <Card {...stuff[0]}/> */}
			{/* <Card /> */}
		</>
	);
};
export default Home;
