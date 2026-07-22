const Stages = {

    access() {

        return `
        <div class="access">

            <h1>Back to School Challenge</h1>

            <p>Enter the access code.</p>

            <input id="accessInput" autocomplete="off">

            <button id="accessButton">→</button>

            <p id="response"></p>

        </div>
        `;

    },

    stage1() {

        return `
        <div class="stage1 fade">

            <div id="fakeCode">

                <span id="smiley">:)</span>

                <span> school2026</span>

            </div>

            <div class="stageCenter">

                <input
                    id="stage1Input"
                    type="text"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder=""
                >

                <button id="stage1Button">→</button>

                <div id="stage1Response" class="message"></div>

            </div>

        </div>
        `;

    }

};