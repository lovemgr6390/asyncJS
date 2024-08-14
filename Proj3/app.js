const getData = async (inputval) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputval}`);
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      document.querySelector(".name").innerHTML = data.name;
      document.querySelector(
        ".imgcont"
      ).innerHTML = `<img src=${data.sprites.front_shiny} class='imgone' alt='Img' />`;
      document.querySelector("#input").value = "";
    }
  } catch (err) {
    alert("No pokemon found with that name");
  }
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputval = document.querySelector("#input").value;

  if (inputval !== "") {
    getData(inputval);
  } else {
    alert("Please enter pokemon name");
  }
});
