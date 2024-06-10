let demo = document.getElementById("demo");

function calc() {
  demo.innerHTML = "";

  let one = maxdd.value;
  let two = maxds.value;
  let demo2 = "";

  let type = document.getElementById("type");
  let selectedOption = type.options[type.selectedIndex].value;

  if (selectedOption === "add") {
    for (i = 1; i <= one; i++) {
      demo2 += `<tr></tr>`;

      for (j = 1; j <= two; j++) {
        demo2 += `<td style="border:1px solid green; padding: 6px;">${i} + ${j} = ${
          i + j
        }</td>`;
      }
    }
  } else if (selectedOption === "minus") {
    for (i = 1; i <= one; i++) {
      demo2 += `<tr></tr>`;

      for (j = 1; j <= two; j++) {
        demo2 += `<td style="border:1px solid green; padding: 6px;">${i} - ${j} = ${
          i - j
        }</td>`;
      }
    }
  } else if (selectedOption === "times") {
    for (i = 1; i <= one; i++) {
      demo2 += `<tr></tr>`;

      for (j = 1; j <= two; j++) {
        demo2 += `<td style="border:1px solid green; padding: 6px;">${i} * ${j} = ${
          i * j
        }</td>`;
      }
    }
  } else if (selectedOption === "divide") {
    for (i = 1; i <= one; i++) {
      demo2 += `<tr></tr>`;

      for (j = 1; j <= two; j++) {
        demo2 += `<td style="border:1px solid green; padding: 6px;">${i} / ${j} = ${
          i / j
        }</td>`;
      }
    }
  }
  demo.innerHTML = `<table>${demo2}</table>`;
}
