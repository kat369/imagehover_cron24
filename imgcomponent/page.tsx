import React from "react";
import styles from "./imgcomp.module.css";

function image() {
  const data = [
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_640.jpg",
    },
    {
      url: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    },
    {
      url: "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=0&k=20&c=kt8-RRzCDunpxgKFMBBjZ6jSteetNhhSxHZFvHQ0hNU=",
    },
    {
      url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    },
  ];

 

  return (
    <div className={styles.container}>
    <div className={styles.imgcontainer}>
    {data.map((img, i) => {
        return(
          <img src={img.url} className={styles[`img${i}`]} alt="React Image" />
        )
      })}
    </div>
    </div>
  );
}

export default image;
