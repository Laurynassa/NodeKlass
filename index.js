console.log("hi");
const getProducts = async () => {
  await fetch(`http://localhost:5000/cia/yra/mano/routas`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server respondet with ${response.status}`);
      }
      return response.json();
    })
    .then((prod) => {
      console.log(prod);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  //   console.log(result);

  //   const data = await result.json();
  //   console.log(data);
};
getProducts();
