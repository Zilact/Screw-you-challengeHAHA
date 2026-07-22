const app = document.getElementById("app");

loadAccess();

function loadAccess() {

    app.innerHTML = Stages.access();

    document
        .getElementById("accessButton")
        .addEventListener("click", checkAccess);

    document
        .getElementById("accessInput")
        .addEventListener("keydown", function (e) {

            if (e.key === "Enter")
                checkAccess();

        });

}

function checkAccess() {

    const input =
        document.getElementById("accessInput").value.trim();

    const response =
        document.getElementById("response");

    if (input === CONFIG.accessCode) {

        response.textContent = "Access Granted.";

        setTimeout(loadStage1, 900);

        return;

    }

    response.textContent =
        CONFIG.wrongMessages[
            Math.floor(
                Math.random() *
                CONFIG.wrongMessages.length
            )
        ];

}

function loadStage1() {

    app.innerHTML = Stages.stage1();

    //-----------------------------------
    // Autofocus
    //-----------------------------------

    const input = document.getElementById("stage1Input");

    input.focus();

    //-----------------------------------
    // Smiley animation
    //-----------------------------------

    const faces = [
        ":)",
        ";)",
        ":|",
        ":("
    ];

    let faceIndex = 0;

    document
        .getElementById("fakeCode")
        .addEventListener("mouseenter", () => {

            faceIndex++;

            if(faceIndex >= faces.length)
                faceIndex = 0;

            document.getElementById("smiley").textContent =
                faces[faceIndex];

        });

    //-----------------------------------
    // Password Button
    //-----------------------------------

    document
        .getElementById("stage1Button")
        .addEventListener("click", checkStage1);

    //-----------------------------------
    // Enter Key
    //-----------------------------------

    input.addEventListener("keydown", function(e){

        if(e.key === "Enter")
            checkStage1();

    });

}
function checkStage1(){

    const answer =
        document.getElementById("stage1Input")
        .value
        .trim();

    const response =
        document.getElementById("stage1Response");

    //---------------------------------
    // Correct Answer
    //---------------------------------

    if(answer.toLowerCase() === "jarona"){

        response.textContent =
            "Correct.";

        setTimeout(()=>{

            alert("Stage 2 Coming Next Version!");

        },700);

        return;

    }

    //---------------------------------
    // Wrong Answer
    //---------------------------------

    response.textContent =
        CONFIG.wrongMessages[
            Math.floor(
                Math.random() *
                CONFIG.wrongMessages.length
            )
        ];

}