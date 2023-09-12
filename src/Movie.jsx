import { useEffect, useState } from "react";

const Movie=()=> {
    let all = localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [];
  
    const [search, setSearch] = useState("");
    const [sortdata, setSortData] = useState("");
    const [record, setRecord] = useState(all); // Initialize with all data
    const [category, setCategory] = useState('all');
  
    const categoryClick = (category) => {
      setCategory(category);
    };
  
    useEffect(() => {
      let namesearch = all.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
      setRecord(namesearch);
    }, [search]);
    
    const filterData = category === 'all' ? Data : Data.filter((item) => item.category === category);
  
    return (
      <>
        <div className="container mt-5 ">
          <input type="text"
            placeholder="Search by name or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}></input>
          <br></br>
          <div className="text-center mb-4">
            <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('genras')}>Genras</button>
            <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('tranding')}>Tranding</button>
            <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('upcoming')}>Upcoming</button>
            <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('started')}>Favorites</button>
            <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('all')}>All</button>
          </div>
          <div className="row">
            {filterData.map((item) => (
              <div className="col-md-4 mb-4" key={item.name}>
                <div className="card">
                  <img src={item.img} className="card-img-top object-fit-cover shadow-sm p-3 mb-5 bg-white rounded" height={250} alt={item.name} />
                  <div className="card-body ">
                    <h5 className="card-title text-success">{item.name}</h5>
                    <p className="card-text text-primary">{item.description}</p>
                    <p className="card-text text-danger">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
  
  
    );
  }
  
  export default Movie;