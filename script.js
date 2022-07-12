document.querySelector(".circle1").addEventListener("click", () => {
  // console.log("click");
  if (document.querySelector(".circle1").style.backgroundColor === "red") {
    document.querySelector(".circle1").style.backgroundColor = "pink";
  } else {
    document.querySelector(".circle1").style.backgroundColor = "red";
  }
});

document.querySelector(".circle2").addEventListener("click", () => {
  // console.log("click");
  if (document.querySelector(".circle2").style.backgroundColor === "blue") {
    document.querySelector(".circle2").style.backgroundColor = "green";
  } else {
    document.querySelector(".circle2").style.backgroundColor = "blue";
  }
});

document.querySelector(".circle3").addEventListener("click", () => {
  // console.log("click");
  if (document.querySelector(".circle3").style.backgroundColor === "yellow") {
    document.querySelector(".circle3").style.backgroundColor = "brown";
  } else {
    document.querySelector(".circle3").style.backgroundColor = "yellow";
  }
});

document.querySelector(".reset").addEventListener("click", () => {
  
  if (document.querySelector(".reset").style.backgroundColor === "red") {
    document.querySelector(".circle1").style.backgroundColor = "pink";
  } else {
    document.querySelector(".circle1").style.backgroundColor = "red";
  }
});