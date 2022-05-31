function startCounter() {
  let input = document.getElementById("userText").value.toLowerCase();
  let split = input.split("");
  let total = 0;
  let a = 0;
  let e = 0;
  let i = 0;
  let o = 0;
  let u = 0;
  let y = 0;

  if (split.includes("y")) {
    const answer = prompt(
      "The program has detected a Y in your text. Do you want to consider it a vowel? (Y/N)"
    ).toUpperCase();
    if (answer === "Y") {
      function countVowelsY() {
        for (var z = 0; z < split.length; ++z) {
          if (
            split[z] === "a" ||
            split[z] === "e" ||
            split[z] === "i" ||
            split[z] === "o" ||
            split[z] === "u" ||
            split[z] === "y"
          ) {
            total++;
            if (split[z] === "a") {
              a++;
            } else if (split[z] === "e") {
              e++;
            } else if (split[z] === "i") {
              i++;
            } else if (split[z] === "o") {
              o++;
            } else if (split[z] === "u") {
              u++;
            } else if (split[z] === "y") {
              y++;
            }
          }
        }
        document.getElementById("total").innerHTML = "Total Vowels: " + total;
        document.getElementById("totalA").innerHTML = "Total A: " + a;
        document.getElementById("totalE").innerHTML = "Total E: " + e;
        document.getElementById("totalI").innerHTML = "Total I: " + i;
        document.getElementById("totalO").innerHTML = "Total O: " + o;
        document.getElementById("totalU").innerHTML = "Total U: " + u;
        document.getElementById("totalY").innerHTML = "Total Y: " + y;
      }
      countVowelsY();
    } else if (answer === "N") {
      countVowels();
    } else if (answer === null) {
      alert("An error occured. Please try again.");
    } else {
      alert("An error occured. Please try again.");
    }
  }

  function countVowels() {
    for (var z = 0; z < split.length; ++z) {
      if (
        split[z] === "a" ||
        split[z] === "e" ||
        split[z] === "i" ||
        split[z] === "o" ||
        split[z] === "u"
      ) {
        total++;
        if (split[z] === "a") {
          a++;
        } else if (split[z] === "e") {
          e++;
        } else if (split[z] === "i") {
          i++;
        } else if (split[z] === "o") {
          o++;
        } else if (split[z] === "u") {
          u++;
        }
      }
    }
    document.getElementById("total").innerHTML = "Total Vowels: " + total;
    document.getElementById("totalA").innerHTML = "Total A: " + a;
    document.getElementById("totalE").innerHTML = "Total E: " + e;
    document.getElementById("totalI").innerHTML = "Total I: " + i;
    document.getElementById("totalO").innerHTML = "Total O: " + o;
    document.getElementById("totalU").innerHTML = "Total U: " + u;
    document.getElementById("totalY").innerHTML = "Total Y: " + y;
  }
  countVowels();
}