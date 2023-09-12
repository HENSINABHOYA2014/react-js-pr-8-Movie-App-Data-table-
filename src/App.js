import React, { useEffect, useState } from 'react';
import './App.css';
import './Style.css';
// Replace the following import with your actual data source
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const [category, setCategory] = useState("");
  const [record, setRecord] = useState("");
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const categoryClick = (category) => {
    setCategory(category);
  };



  useEffect(() => {
    // Filter by category and search
    let filteredData = Data.filter(item =>
      (category === 'all' || item.category === category) &&
      (search === '' || item.name.toLowerCase().includes(search.toLowerCase()))
    );
    setFilterData(filteredData);
  }, [category, search]);

  return (
    <>
      <div className="container mt-5">
        <center><input
          type="text" className="form-control"
          placeholder="Search by movie name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /></center>
        <br />

        <div>

          <div>
            <button className="btn-2 " onClick={() => categoryClick('action')}>Action</button>
            <button className="btn-2" onClick={() => categoryClick('adventure')}>Adventure</button>
            <button className="btn-2" onClick={() => categoryClick('animation')}>Animation</button>
            <button className="btn-2" onClick={() => categoryClick('comedy')}>Comedy</button>
            <button className="btn-2" onClick={() => categoryClick('crime')}>Crime</button>
            <button className="btn-2 mt-4" onClick={() => categoryClick('documentary')}>Documentary</button>
            <button className="btn-2" onClick={() => categoryClick('drama')}>Drama</button>
            <button className="btn-2" onClick={() => categoryClick('family')}>Family</button>
            <button className="btn-2" onClick={() => categoryClick('fantasy')}>Fantasy</button>
            <button className="btn-2" onClick={() => categoryClick('history')}>History</button>
            <button className="btn-2 mt-4" onClick={() => categoryClick('horror')}>Horror</button>
            <button className="btn-2" onClick={() => categoryClick('music')}>Music</button>
            <button className="btn-2" onClick={() => categoryClick('mystery')}>Mystery</button>
            <button className="btn-2" onClick={() => categoryClick('romance')}>Romance</button>
            <button className="btn-2" onClick={() => categoryClick('science')}>Science Fiction</button>
            <button className="btn-2 mt-4" onClick={() => categoryClick('tv')}>TV Music</button>
            <button className="btn-2" onClick={() => categoryClick('thriller')}>Thriller</button>
            <button className="btn-2" onClick={() => categoryClick('war')}>War</button>
            <button className="btn-2" onClick={() => categoryClick('western')}>Western</button>
            <button className="btn-2" onClick={() => categoryClick('hollywood')}>Hollywood</button>
            <button className="btn-2 mt-4" onClick={() => categoryClick('bollywood')}>Bollywood</button>
            <button className="btn-2" onClick={() => categoryClick('hollywood-upcoming')}>Hollywood</button>
            <button className="btn-2" onClick={() => categoryClick('bollywood-upcoming')}>Bollywood</button>
            <button className="btn-2" onClick={() => categoryClick('gujarati')}>Gujarati</button>
            <button className="btn-2" onClick={() => categoryClick('hindi')}>Hindi</button>

          </div>
        </div>
        <div className="row">
           
          {filterData.map((item) => (
            <div className="col-md-4 mb-4" key={item.name}>
              <div className="card">
                <img src={item.img} className="card-img-top object-fit-cover shadow-sm p-3 mb-5 bg-white rounded" height={500} alt={item.name} />
                <div className="card-body ">
                  <h5 className="card-title text-success text-center">{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
