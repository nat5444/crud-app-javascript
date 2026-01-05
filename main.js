let selectedRow = null;

/* ---------- Tailwind Alert ---------- */
function showAlert(message, type = "success") {
  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500",
  };
  const alert = document.createElement("div");

  alert.className = `
    ${colors[type]}
    text-white
    px-4
    py-3
    rounded-md
    mb-4
    max-w-5xl
    mx-auto
    text-center
    transition-opacity
    duration-500
    opacity-100
  `;
  alert.textContent = message;

  document.getElementById("alert-container").appendChild(alert);

  setTimeout(() => {
    alert.classList.remove("opacity-100");
    alert.classList.add("opacity-0");
  }, 3000);

  alert.addEventListener("transitionend", () => {
    alert.remove();
  });
}

/* ---------- Clear Inputs ---------- */
function clearFields() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("rollNumber").value = "";
}

/* ---------- Add Student ---------- */
document.getElementById("student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const rollNumber = document.getElementById("rollNumber").value.trim();

  if (!firstName || !lastName || !rollNumber) {
    showAlert("Please fill in all fields", "error");
    return;
  } else {
    if (selectedRow == null) {
      const row = document.createElement("tr");
      row.className = "even:bg-gray-700 odd:bg-gray-600";

      row.innerHTML = `
    <td class="border px-4 py-2">${firstName}</td>
    <td class="border px-4 py-2">${lastName}</td>
    <td class="border px-4 py-2">${rollNumber}</td>
    <td class="px-4 py-2">
      <div class="space-x-2">
        <button class="edit bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">
          Edit
        </button>
        <button class="delete bg-red-500 px-4 py-2 rounded hover:bg-red-400">
          Delete
        </button>
      </div>
    </td>
  `;

      document.getElementById("student-list").appendChild(row);
      clearFields();
      showAlert("Student added successfully", "success");
    } else if (selectedRow != null) {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = rollNumber;
      selectedRow = null;
      clearFields();
      showAlert("Student info edited", "success");
    }
  }
});

/* ---------- Edit Student ---------- */
document.getElementById("student-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    selectedRow = e.target.parentElement.parentElement.parentElement;
    document.getElementById("firstName").value =
      selectedRow.children[0].textContent;
    document.getElementById("lastName").value =
      selectedRow.children[1].textContent;
    document.getElementById("rollNumber").value =
      selectedRow.children[2].textContent;
  }
});

/* ---------- Delete Student ---------- */
document.getElementById("student-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
    showAlert("Student deleted", "error");
  }
});
