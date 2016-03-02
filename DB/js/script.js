var dataStorage = new Array();
var aims = new Array();
var formCorrectFilled = false;
var previousRowNumber, rowNumber; // in which row we are clicked...
var flagForChoosingAddOrEdit = false;
var findTextInput;

function returnDataStorage() {
    return dataStorage;
}

var Person = function(name, age, occupation, operationalExperience, salary) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.operationalExperience = operationalExperience;
    this.salary = salary;
};

var pBob = new Person("Bob", 23, "tailor", 3, 600);
dataStorage.push(pBob);
var pNancy = new Person("Nancy", 20, "dancer", 1, 1000);
dataStorage.push(pNancy);
var pEllie = new Person("Ellie", 23, "musician", 5, 1000);
dataStorage.push(pEllie);
var pDan = new Person("Dan", 24, "programmer", 2, 800);
dataStorage.push(pDan);

var pBob = new Person("Samuel", 27, "tailor", 7, 2000);
dataStorage.push(pBob);
var pNancy = new Person("Molly", 22, "dancer", 3, 1500);
dataStorage.push(pNancy);
var pDan = new Person("Bruce", 32, "programmer", 10, 4000);
dataStorage.push(pDan);
var pEllie = new Person("Katie", 25, "musician", 5, 1100);
dataStorage.push(pEllie);
var pDan = new Person("Alex", 32, "programmer", 11, 3800);
dataStorage.push(pDan);

var pBob = new Person("Donny", 40, "tailor", 20, 3000);
dataStorage.push(pBob);
var pNancy = new Person("Lisa", 34, "dancer", 15, 1000);
dataStorage.push(pNancy);
var pEllie = new Person("Mark", 29, "musician", 9, 1300);
dataStorage.push(pEllie);
var pDan = new Person("John", 24, "programmer", 2, 1000);
dataStorage.push(pDan);

var pBob = new Person("Edward", 46, "tailor", 25, 2900);
dataStorage.push(pBob);
var pNancy = new Person("Mike", 20, "dancer", 1, 1000);
dataStorage.push(pNancy);
var pEllie = new Person("Doroty", 23, "musician", 6, 1300);
dataStorage.push(pEllie);
var pDan = new Person("John", 24, "programmer", 4, 1500);
dataStorage.push(pDan);
var pDan = new Person("Steve", 28, "programmer", 8, 3500);
dataStorage.push(pDan);

function setID(array) {
    for (var i = 0; i < array.length; i++) {
        array[i]["id"] = i + 1;
    }
}

function getData(index) {
    if (index === 0) {
        index = index;
    } else {
        index = index || dataStorage.length;
    }
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var occupation = document.getElementById("occupation").value;
    var operationalExperience = document.getElementById("operationalExperience").value;
    var salary = document.getElementById("salary").value;

    if (isNaN(parseInt(age)) === true || isNaN(parseFloat(operationalExperience)) === true || isNaN(parseFloat(salary)) === true || name.length == 0 || occupation.length == 0) {
        alert("Enter correct data, please!..");
    } else {
        if (age > 0 && age < 120) {
            dataStorage[index] = new Person(name, age, occupation, operationalExperience, salary);
            setID(dataStorage);
            deleteTableRows(); // Clear all table rows for redrawing
            tableCreate(dataStorage, "personsInfo");
            addListenersToTableIDs();
            formCorrectFilled = true;
        } else {
            alert("Enter correct age [0 - 120 years old], please!..");
        }
    }

}

function tRowCreator(tdQuantity, obj, table) {
    var tr = document.createElement("tr");
    tr.className = "forControl";
    for (var i = 0; i < tdQuantity; i++) {
        var td = document.createElement("td");
        switch (i) {
            case 0:
                var txt = document.createTextNode(obj["id"]);
                td.appendChild(txt);
                td.className = "event";
                tr.appendChild(td);
                break;
            case 1:
                var txt = document.createTextNode(obj["name"]);
                td.appendChild(txt);
                tr.appendChild(td);
                break;
            case 2:
                var txt = document.createTextNode(obj["age"]);
                td.appendChild(txt);
                tr.appendChild(td);
                break;
            case 3:
                var txt = document.createTextNode(obj["occupation"]);
                td.appendChild(txt);
                tr.appendChild(td);
                break;
            case 4:
                var txt = document.createTextNode(obj["operationalExperience"]);
                td.appendChild(txt);
                tr.appendChild(td);
                break;
            case 5:
                var txt = document.createTextNode(obj["salary"]);
                td.appendChild(txt);
                tr.appendChild(td);
                break;
            default:
                alert("Something wrong with it!..");
                break;
        }
    }
    table.appendChild(tr);
}

function tableCreate(objects, hereToAppendTable) {
    var table = document.getElementById(hereToAppendTable);
    for (var j = 0; j < objects.length; j++) {
        tRowCreator(6, objects[j], table);
    } // index 6 means 6 point of td
}
//--------------------------------------------------------------------
function deleteTableRows() {
    var trs = getAllTableRows();
    for (var i = trs.length - 1; i > 0; i--) {
        trs[i].remove();
    }
}
//---------------------------------------------------------------------
function showPopUp(state) {
    var wrap = document.getElementById("wrap");
    var popUp = document.getElementById("popUp");
    return function() {
        wrap.style.display = state;
        popUp.style.display = state;
    }
}

function eventForButtonOK_2() {
    if (formCorrectFilled === true) {
        showPopUp("none")();
        formCorrectFilled = false;
    }
}

// Adding eventListeners:
//-----------------------

function addListenersForOK() {
    //For edit branch
    if (flagForChoosingAddOrEdit === false) {
        getData(rowNumber);
        eventForButtonOK_2();
        buttonsEdit_and_DeleteView("hidden");
    }
    //For add branch
    else if (flagForChoosingAddOrEdit === true) {
        getData();
        eventForButtonOK_2();
    }

}

function addListenersForCancel() {
    //For edit branch
    writeEditContent();
    showPopUp("none")();
    changeTRowColor(rowNumber, "white");
    buttonsEdit_and_DeleteView("hidden");

}

function changeflagForChoosingAddOrEdit() {
    flagForChoosingAddOrEdit = true;
}

//------------------------------Buttons----------------------------------------

var viewAll = document.getElementById("viewAll");
viewAll.addEventListener("click", function() {
    deleteTableRows();
    startView();
});

var addPerson = document.getElementById("addPerson");
addPerson.addEventListener("click", showPopUp("block"));
addPerson.addEventListener("click", writeEditContent(0));
addPerson.addEventListener("click", changeflagForChoosingAddOrEdit);

var editPerson = document.getElementById("editPerson");
editPerson.addEventListener("click", showPopUp("block"));

var deletePerson = document.getElementById("deletePerson");
deletePerson.addEventListener("click", function() {
    dataStorage.splice(rowNumber, 1);
    setID(dataStorage);
    deleteTableRows();
    tableCreate(dataStorage, "personsInfo");
    addListenersToTableIDs();

});

var OK = document.getElementById("OK");
OK.addEventListener("click", addListenersForOK);

var cancel = document.getElementById("cancel");
cancel.addEventListener("click", addListenersForCancel);

var findText = document.getElementById("find");
var findBtn = document.getElementById("findPerson");

findBtn.addEventListener("click", function() {
    findTextInput = findText.value;
    findPersons(findTextInput);
    deleteTableRows();

    setID(aims);
    tableCreate(aims, "personsInfo");

    addListenersToTableIDs();
});

function findPersons(key) {
    aims.length = 0;
    for (var i = 0; i < dataStorage.length; i++) {
        for (var prop in dataStorage[i]) {
            if (key == dataStorage[i][prop]) {
                aims.push(dataStorage[i]);
            }
        }
    }
    if (aims.length === 0) {
        alert("Нет записей в базе!");
    }
}

function buttonsEdit_and_DeleteView(visibility) {
    editPerson.style.visibility = visibility;
    deletePerson.style.visibility = visibility;
}

function startView(data) {
    //Function forms start view of persons on WEB-page
    dataStorage = data || dataStorage;
    setID(dataStorage);
    tableCreate(dataStorage, "personsInfo");
    addListenersToTableIDs();
    buttonsEdit_and_DeleteView("hidden");
}

function getSelectedItemInSortList() {
    var selectList = document.getElementById("menu");
    return selectList.options[selectList.selectedIndex].value;
}

function sortBy(data) {
    var sortOption = getSelectedItemInSortList();
    var sortedData = returnDataStorage();

    if (sortOption === "age") {
        sortedData.sort(function(a, b) {
            return a[sortOption] - b[sortOption];
        });

    } else if (sortOption === "name") {
        sortedData.sort(function(a, b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });

    } else if (sortOption === "occupation") {
        sortedData.sort(function(a, b) {
            var x = a.occupation.toLowerCase();
            var y = b.occupation.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
    } else if (sortOption === "operationalExperience") {
        sortedData.sort(function(a, b) {
            return a[sortOption] - b[sortOption];
        });
    } else if (sortOption === "salary") {
        sortedData.sort(function(a, b) {
            return a[sortOption] - b[sortOption];
        });
    } else {

    }
    deleteTableRows();
    startView(sortedData);

}

var sortBtn = document.getElementById("sort");
sortBtn.addEventListener("click", sortBy);

//----------------------------Buttons end here----------------------------------

function getAllTableIDs() {
    var IDs = document.getElementsByClassName("event");
    return IDs;
}

function getAllTableRows() {
    var trs = document.getElementsByTagName("tr");
    return trs;
}

function changeTRowColor(tRowNumber, color) {
    getAllTableRows()[tRowNumber].style.background = color;
}

function writeEditContent(number) {

    var name = document.getElementById("name").value = "";
    var age = document.getElementById("age").value = "";
    var occupation = document.getElementById("occupation").value = "";
    var operationalExperience = document.getElementById("operationalExperience").value = "";
    var salary = document.getElementById("salary").value = "";
    if (!isNaN(number)) {
        name = document.getElementById("name").value = dataStorage[number]["name"];
        age = document.getElementById("age").value = dataStorage[number]["age"];
        occupation = document.getElementById("occupation").value = dataStorage[number]["occupation"];
        operationalExperience = document.getElementById("operationalExperience").value = dataStorage[number]["operationalExperience"];
        salary = document.getElementById("salary").value = dataStorage[number]["salary"];
    }
}

function addListenersToTableIDs() {
    var trs = getAllTableRows();
    for (var i = 1; i < trs.length; i++) {
        trs[i].addEventListener("click", function() {
            flagForChoosingAddOrEdit = false;
            var number = parseInt(this.getElementsByTagName("td")[0].innerHTML);
            writeEditContent(number - 1);

            rowNumber = number;
            if (previousRowNumber !== undefined && rowNumber !== previousRowNumber) {
                changeTRowColor(previousRowNumber, "white");
            }
            changeTRowColor(rowNumber, "#F2F2F2");

            buttonsEdit_and_DeleteView("visible");
            previousRowNumber = number;
        });
    }
    return true;
}

window.onload = function() {
    startView();
}