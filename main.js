const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const unitLoad = document.querySelector("#unit-load");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");
let gpArray = [];
const tfoot = document.querySelector("#tfoot");

add.addEventListener("click", () => {
    if (
        courseCode.value === "" ||
        unitLoad.value <= 0 ||
        grade.selectedIndex === "0"
    ) {
        alert("Check your values dear and try again");
    } else {
        const tr = document.createElement("tr");
        const tdCourseCode = document.createElement("td");
        tdCourseCode.innerHTML = courseCode.value;
        const tdUnitLoad = document.createElement("td");
        tdUnitLoad.innerHTML = unitLoad.value;
        const tdGrade = document.createElement("td");
        tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
        tr.appendChild(tdCourseCode);
        tr.appendChild(tdUnitLoad);
        tr.appendChild(tdGrade);
        tbody.appendChild(tr);
        table.classList.remove("display-none");
        calcGp.classList.remove("display-none");
        clear.classList.remove("display-none");
        gpArray.push({
            unitLoad: unitLoad.value,
            grade: grade.options[grade.selectedIndex].value,
        });
        courseCode.value = "";
        unitLoad.value = "";
        grade.selectedIndex = "0";
    }
});

calcGp.addEventListener("click", () => {
    let unitLoads = 0,
        productOfUnitLoadsAndGrades = 0,
        sumOfproductOfUnitLoadsAndGrades = 0;
    gpArray.forEach((result) => {
        unitLoads += parseInt(result.unitLoad);
        //  the above blocl of code adds all the unit loads together
        productOfUnitLoadsAndGrades =
            parseInt(result.unitLoad) * parseInt(result.grade);
        sumOfproductOfUnitLoadsAndGrades += productOfUnitLoadsAndGrades;
    });
    const tr = document.createElement('tr');
    tdTotalUnitLoad = document.createElement('td');
    tdTotalUnitLoad.innerHTML = `your total unit load is ${unitLoads}`;

    tdGpa = document.createElement('td');
    tdGpa.setAttribute('colspan', '2');
    tdGpa.style.textAlign = 'center';
    tdGpa.innerHTML = `your GPA is ${(sumOfproductOfUnitLoadsAndGrades / unitLoads).toFixed(2)}`;
    tr.appendChild(tdTotalUnitLoad);
    tr.appendChild(tdGpa);
    if (tfoot.querySelector('tr') === !null) {
        tfoot.querySelector('tr').remove();
    }
    tfoot.appendChild(tr);
});

clear.addEventListener('click', () => {
    gpArray = [];
    tbody.querySelectorAll('*').forEach(child => child.remove());
    if (tfoot.querySelector('tr') === !null) {
        tfoot.querySelector('tr').remove();
    }

    table.classList.add('display-none');
    calcGp.classList.add("display-none");
    clear.classList.add("display-none");
})