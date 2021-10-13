import React from 'react';
import Card from "./Card";
import Data from "./Data";
import './AdminMovie.css'
function ncards(val)
{
    return(
        <Card
            imgsrc={val.imgsrc}
            title={val.title}
            year={val.year}
            hours={val.hours}
            minutes={val.minutes}
            genres={val.genres}
        />
    );
}

function AdminMovie()
{
    return(
        <div className="">
            <div className="adminheading">
                Mr.Viewer
                    <button className="btn">Home</button>
                    <button className="btn">Movie</button>
                    <button className="btn">Logout</button> 
            </div>  
            <div className="mainitem">
                <div className="search">
                    <input className="typing" type="text" placeholder="Type here to search"/>
                    <button className="searchbtn">search</button>
                </div>
                <div className="ncards">
                    {Data.map(ncards)}
                </div>
                <div class="sideform">
                    <form><br></br>
                        <p className="updating">Update Movie</p><br></br><br></br>
                        <input type="text" className="forming" placeholder="Title"/>
                        <input type="text" className="forming" placeholder="year"/>
                        <input type="text" className="forming" placeholder="movieurl"/>
                        <input type="text" className="forming" placeholder="imageurl"/>
                        <input type="text" className="formingtime" placeholder="hrs"/>
                        <input type="text" className="formingtime" placeholder="min"/>
                        <textarea className="cast" rows="5" cols="0" placeholder="Cast"></textarea>
                        <button className="formsubmit">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminMovie;