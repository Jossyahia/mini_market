"use client";
import { categories } from "@data";
import { useState, useEffect } from "react";
import "@styles/Categories.scss";
import Loader from "./Loader";
import WorkList from "./WorkList";

export default function Feed() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [workList, setWorkList] = useState([]);

  useEffect(() => {
    getWorkList();
  }, [selectedCategory]);

  const getWorkList = async () => {
    const response = await fetch(`/api/work/list/${selectedCategory}`);
    const data = await response.json();
    setWorkList(data);
    setLoading(false);
  };

  return (
    <>
      <div className="categories">
        {categories?.map((item) => (
          <p
            key={item}
            className={item === selectedCategory ? "selected" : ""}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </p>
        ))}
      </div>

      {loading ? <Loader /> : <WorkList data={workList} />}
    </>
  );
}


//"use client";
import "@styles/Logo.scss";

const Logo = () => {
  return (
    <div className="logo-holder logo-3">
      <h2>Mimarket</h2>
      <p>Delivering Dreams</p>
    </div>
  );
};

export default Logo;



@import url("https://fonts.googleapis.com/css?family=Bangers|Cinzel:400,700,900|Lato:100,300,400,700,900|Lobster|Lora:400,700|Mansalva|Muli:200,300,400,600,700,800,900|Open+Sans:300,400,600,700,800|Oswald:200,300,400,500,600,700|Roboto:100,300,400,500,700,900&display=swap");
* {
  margin: 0;
  padding: 0;
}
.logo-3 h2 {
  color: #e74c3c;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  font-size: 50px;
  line-height: 1.3;
}
.logo-3 p {
  font-size: 14px;
  letter-spacing: 7px;
  text-transform: uppercase;
  background: #34495e;
  font-weight: 400;
  color: #fff;
  padding-left: 5px;
}

@-webkit-keyframes ring {
  0% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  2% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  4% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }
  6% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }
  8% {
    -webkit-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }
  10% {
    -webkit-transform: rotate(22deg);
    transform: rotate(22deg);
  }
  12% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }
  14% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }
  18% {
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }
  100%,
  20% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
}
@keyframes ring {
  0% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  2% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  4% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }
  6% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }
  8% {
    -webkit-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }
  10% {
    -webkit-transform: rotate(22deg);
    transform: rotate(22deg);
  }
  12% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }
  14% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }
  18% {
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }
  100%,
  20% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
}
