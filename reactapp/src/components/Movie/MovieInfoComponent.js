import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import UserNavigation from "../NavigationBar/UserNavigation";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 20px 30px;
	justify-content: center;
	border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
	height: 600px;
	width: 400%;
`;
const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
`;
const MovieName = styled.span`
	font-size: 22px;
	font-weight: 600;
	color: black;
	margin: 15px 0;
	white-space: nowrap;
	overflow: hidden;
	text-transform: capitalize;
	text-overflow: ellipsis;
	& span {
		opacity: 0.8;
	}
`;
const MovieInfo = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: black;
	overflow: hidden;
	margin: 4px 0;
	text-transform: capitalize;
	text-overflow: ellipsis;
	& span {
		opacity: 0.5;
	}
`;
const Close = styled.span`
	font-size: 16px;
	font-weight: 600;
	color: black;
	background: lightgray;
	height: fit-content;
	padding: 8px;
	border-radius: 50%;
	cursor: pointer;
	opacity: 0.8;
`;

const MovieInfoComponent = ({ userDetails, setUserDetails }) => {
	const [movieInfo, setMovieInfo] = useState();
	let { id } = useParams();

	const addLike = (event) => {
		console.log(userDetails)
		console.log(movieInfo)
		axios.post(
			`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/like/${movieInfo.movieId}`,
			userDetails
		).then(
			(response) => {console.log(response.data)}
		).catch(
			(error) => {console.log(error)}
		)
	}

	const addDisLike = (event) => {
		console.log(userDetails);
		console.log(movieInfo);
		axios
			.delete(
				`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/dislike/${movieInfo.movieId}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					data:  userDetails 
				}
			)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		axios
			.get(
				`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/movie/${id}`
			)
			.then((response) => setMovieInfo(response.data));
	}, [id]);

	return (
		<>
			<UserNavigation />
			<Container>
				{movieInfo ? (
					<>
						<CoverImage
							src={movieInfo.moviePosterUrl}
							alt={movieInfo.movieName}
						/>
						<InfoColumn>
							<MovieName>
								<h1>{movieInfo?.movieName}</h1>
							</MovieName>
							<MovieInfo>
								Year: <span>{movieInfo?.yearOfRelease}</span>
							</MovieInfo>
							<MovieInfo>
								Time: <span>{movieInfo?.duration}</span>
							</MovieInfo>
							<MovieInfo>
								Cast: <span>{movieInfo?.movieCast}</span>
							</MovieInfo>
							<br />
							<span>
								<i
									onClick={addLike}
									className="fa fa-2x fa-thumbs-up"
								></i>
								&nbsp;&nbsp;
								<i
									onClick={addDisLike}
									className="fa fa-2x fa-thumbs-down"
								></i>
							</span>
						</InfoColumn>
						<Link to="/movie">
							<Close>X</Close>
						</Link>
					</>
				) : (
					"Loading..."
				)}
			</Container>
		</>
	);
};
export default MovieInfoComponent;
