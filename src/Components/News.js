import React, { useState, useEffect } from "react";

const News = () => {
  const [mynews, setmynews] = useState([]);

  const fetchData = async () => {
    let resp = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=154712a1aa724a9f8bae99294fba7454"
    );
    let data = await resp.json();
    setmynews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        {mynews.map((ele) => {
          console.log(ele);
          return (
            <>
              <div className="col-4">
                <div className="container">
                  <div className="card my-3" style={{ width: "300px" }}>
                    <img
                      src={
                        ele.urlToImage == null
                          ? "https://media.cnn.com/api/v1/images/stellar/prod/230913101934-europe-china-electric-car-subsidies.jpg?c=16x9&q=w_800,c_fill"
                          : ele.urlToImage
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{ele.author}</h5>
                      <p className="card-text">{ele.title}</p>
                      <a href={ele.url} className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
