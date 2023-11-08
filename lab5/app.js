// 1
const textOne = document.querySelector(".navbar").textContent;
const textSix = document.querySelector(".div-6-p").textContent;

document.querySelector(".navbar").textContent = textSix;
document.querySelector(".div-6-p").textContent = textOne;
// 2

function calculateCircleArea(radius) {
  if (radius >= 0) {
    const area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
  } else {
    return "Радіус повинен бути додатнім";
  }
}

const radius = 5;
const circleArea = calculateCircleArea(radius);
document.querySelector(
  ".div-5-p"
).textContent += ` (${circleArea} - площа кола з радіусом ${radius})`;

// 3
const numberInput = document.querySelector(".number-input");

numberInput.addEventListener("change", () => {
  const numbers = numberInput.value.split("");
  const res = Math.min(...numbers);
  alert("Найменша цифра у введеному числі " + res);
  document.cookie = `number=${res}; max-age=1800`;
});

if (
  confirm(
    "Дані cookies: " + document.cookie + ". Потрібно зберегти дані cookies?"
  )
) {
  alert("Cookies збережено, оновіть сторінку.");
  document.querySelector("label").style.display = "none";
  numberInput.style.display = "none";
} else {
  document.cookie = `number=${res}; max-age=0`;
  numberInput.style.display = "block";
  document.querySelector("label").style.display = "block";
}

// 4
const colorSelect = document.querySelector(".color-select");
const options = document.querySelectorAll("option");

colorSelect.addEventListener("change", () => {
  document.querySelector(".div-6-p").style.color = colorSelect.value;
  window.localStorage.setItem("colorSix", colorSelect.value);
});

if (window.localStorage.getItem("colorSix")) {
  document.querySelector(".div-6-p").style.color =
    window.localStorage.getItem("colorSix");
  options.forEach((option) => {
    if (option.value === window.localStorage.getItem("colorSix")) {
      option.selected = true;
    }
  });
}

// 5

window.onload = function () {
  localStorage.removeItem("table");
};

function showTable() {
  document.querySelector("#table").style.display = "block";
}

function generateInputFields() {
  var numColumns = document.getElementById("numColumns").value;
  var inputFields = document.getElementById("inputFields");
  inputFields.innerHTML = "";

  for (var i = 0; i < numColumns; i++) {
    var columnNameInput = document.createElement("input");
    columnNameInput.type = "text";
    columnNameInput.placeholder = "Введіть назву для рядка " + (i + 1);

    var columnDataInput = document.createElement("input");
    columnDataInput.type = "text";
    columnDataInput.placeholder = "Введіть дані для рядка " + (i + 1);

    inputFields.appendChild(columnNameInput);
    inputFields.appendChild(columnDataInput);
  }
}

function createTable() {
  var numColumns = document.getElementById("numColumns").value;
  var columnNames = [];
  var tableData = [];

  for (var i = 0; i < numColumns; i++) {
    columnNames.push(
      document.getElementById("inputFields").children[i * 2].value
    );
    tableData.push(
      document
        .getElementById("inputFields")
        .children[i * 2 + 1].value.split(",")
    );
  }

  var table = document.createElement("table");
  var thead = table.createTHead();
  var tbody = table.createTBody();

  var headerRow = thead.insertRow();
  for (var i = 0; i < numColumns; i++) {
    var th = document.createElement("th");
    th.textContent = columnNames[i];
    headerRow.appendChild(th);
  }

  for (var i = 0; i < tableData[0].length; i++) {
    var dataRow = tbody.insertRow();
    for (var j = 0; j < numColumns; j++) {
      var cell = dataRow.insertCell();
      cell.textContent = tableData[j][i];
    }
  }

  var tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);

  localStorage.setItem("table", table.outerHTML);
}
