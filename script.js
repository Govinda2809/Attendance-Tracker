let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

function save() {
  localStorage.setItem("subjects", JSON.stringify(subjects));
}

function addSubject() {
  let input = document.getElementById("subjectInput");

  if (input.value.trim() === "") return;

  subjects.push({
    name: input.value,
    present: 0,
    total: 0
  });

  input.value = "";
  save();
  render();
}

function markPresent(index) {
  subjects[index].present++;
  subjects[index].total++;
  save();
  render();
}

function markAbsent(index) {
  subjects[index].total++;
  save();
  render();
}

function deleteSubject(index) {
  subjects.splice(index, 1);
  save();
  render();
}

function render() {
  let list = document.getElementById("subjectList");
  list.innerHTML = "";

  subjects.forEach((sub, i) => {
    let percent = sub.total === 0 
      ? 0 
      : ((sub.present / sub.total) * 100).toFixed(1);

    let warning = percent < 75 
      ? "⚠️ Low Attendance" 
      : "✅ Good";

    list.innerHTML += `
      <li>
        <b>${sub.name}</b><br>
        Present: ${sub.present} / ${sub.total} <br>
        Attendance: ${percent}% <br>
        ${warning} <br>

        <div class="progress">
          <div class="progress-bar" style="width:${percent}%"></div>
        </div>

        <button onclick="markPresent(${i})">Present</button>
        <button onclick="markAbsent(${i})">Absent</button>
        <button onclick="deleteSubject(${i})">Delete</button>
      </li>
    `;
  });
}

render();