import "./App.css";
import { useState } from "react";

function App() {
  let breakfast = [
    ["Apple", 0],
    ["Orange", 0],
    ["Banana", 0],
  ];
  let lunch = [
    ["Apple", 0],
    ["Orange", 0],
    ["Banana", 0],
  ];
  let dinner = [
    ["Apple", 0],
    ["Orange", 0],
    ["Banana", 0],
  ];

  let currMeal = "Breakfast";
  let currFruit = "Apple";

  function updateKnowlege(e) {
    e.preventDefault();
    let toUpdate = [];
    switch (currMeal) {
      case "Breakfast":
        toUpdate = breakfast;
        break;
      case "Lunch":
        toUpdate = lunch;
        break;
      case "Dinner":
        toUpdate = dinner;
        break;
    }
    toUpdate.forEach((tuple) => {
      if (tuple[0] == currFruit) {
        tuple[1]++;
      }
    });
  }

  function sortOptions(list) {
    list.sort((a, b) => {
      if (a[1] === b[1]) {
        return 0;
      } else {
        return a[1] > b[1] ? -1 : 1;
      }
    });
    const options = Array.from(document.getElementById("Fruits"));

    for (var i = 0; i < 3; i++) {
      options[i].innerHTML = list[i][0];
      options[i].text = list[i][0];
      options[i].value = list[i][0];
    }

    console.log("for " + currMeal + ":");

    list.forEach((fruit) => {
      console.log(fruit[0] + "   " + fruit[1]);
    });
    console.log("");
    document.getElementById("Fruits").value = list[0][0];
  }

  function updateFruit(e) {
    let toUpdate = [];
    switch (currMeal) {
      case "Breakfast":
        toUpdate = breakfast;
        break;
      case "Lunch":
        toUpdate = lunch;
        break;
      case "Dinner":
        toUpdate = dinner;
        break;
    }

    sortOptions(toUpdate);
  }

  return (
    <div className="App">
      <header> Meal Planner </header>

      <form onSubmit={(e) => updateKnowlege(e)}>
        <div className="selection">
          <label htmlFor="meals">Choose Meal</label>
          <select
            name="meals"
            id="meals"
            onChange={(event) => {
              currMeal = event.target.value;
              updateFruit(event);
            }}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div className="selection">
          <label htmlFor="Fruits">Choose A Fruit</label>
          <select
            name="Fruits"
            id="Fruits"
            onChange={(event) => (currFruit = event.target.value)}
          >
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Banana">Banana</option>
          </select>
        </div>
        <button
          type="submit"
          value="Submit"
          onSubmit={(e) => updateKnowlege(e)}
        >
          Record Meal
        </button>
      </form>

      <hr></hr>
      <section className="description">
        <h2>Description</h2>
        <p>
          The app records the number of times a fruit is selected for a given
          meal and the options are ranked based on most frequently selected to
          least.
        </p>

        <p>
          To check the fruit selection count. Open the console in your browser
          and on every meal change, it should output the number of times a fruit
          has been selected
        </p>
      </section>
    </div>
  );
}

export default App;
