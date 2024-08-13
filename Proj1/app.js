document.querySelector(".btn").addEventListener("click", () => {
  const getData = async () => {
    try {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        document.querySelector("#joke").textContent = data.joke;
      }
    } catch (err) {
      console.log(err);
    }
  };
  getData();
});
