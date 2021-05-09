import React, { useEffect, useState } from "react";
import './App.scss';
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="responsive">
        {items.map(item => (
          <div className="gallery">
            <a href="{item.thumbnail.small}">
            <img src={item.thumbnail.small} alt="" className="image"></img>
            </a>
            <div className="desc">
            <h2>A Simple guide to design thinking</h2>
            <div className="data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Ornare aenean euismod elementum nisi quis eleifend quam. Cras semper auctor neque vitae tempus. Viverra vitae congue eu consequat.</div>
        </div>
        <div class="middle">
          <div class="text">Learn more</div>
        </div>
          </div>
        ))}
        </div>
    );
  }
}
export default App;