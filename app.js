// Initialize Blockly workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
        <xml>
            <category name="Logic" colour="%{BKY_LOGIC_HUE}">
                <block type="controls_if"></block>
                <block type="logic_boolean"></block>
                <block type="logic_compare"></block>
            </category>
            <category name="Loops" colour="%{BKY_LOOPS_HUE}">
                <block type="custom_loop"></block>
                <block type="controls_repeat_ext"></block>
                <block type="controls_whileUntil"></block>
            </category>
            <category name="Math" colour="%{BKY_MATH_HUE}">
                <block type="math_number"></block>
                <block type="math_arithmetic"></block>
            </category>
            <category name="Text" colour="%{BKY_TEXTS_HUE}">
                <block type="text"></block>
                <block type="text_print"></block>
                <block type="print_text"></block>
            </category>
            <category name="Variables" colour="%{BKY_VARIABLES_HUE}">
                <block type="variable_declaration"></block>
                <block type="variables_get"></block>
                <block type="variables_set"></block>
            </category>
        </xml>`,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    trashcan: true,
    move: {
        scrollbars: true,
        drag: true,
        wheel: true
    }
});

// Include blocks.js
const script = document.createElement('script');
script.src = 'blocks.js';
document.head.appendChild(script);

// Function to generate code based on selected language
function generateCode() {
    const language = document.getElementById('languageSelect').value;
    let code;
    if (language === 'javascript') {
        code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    } else if (language === 'python') {
        code = Blockly.Python.workspaceToCode(Blockly.getMainWorkspace());
    } else if (language === 'lua') {
        code = Blockly.Lua.workspaceToCode(Blockly.getMainWorkspace());
    } else if (language === 'dart') {
        code = Blockly.Dart.workspaceToCode(Blockly.getMainWorkspace());
    } else if (language === 'php') {
        code = Blockly.PHP.workspaceToCode(Blockly.getMainWorkspace());
    }
    document.getElementById('generatedCode').textContent = code;
}

// Function to download the generated code
function downloadCode() {
    const code = document.getElementById('generatedCode').textContent;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Function to save the workspace
function saveWorkspace() {
    const xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    const xmlText = Blockly.Xml.domToText(xml);
    localStorage.setItem('blocklyWorkspace', xmlText);
}

// Function to load the workspace
function loadWorkspace() {
    const xmlText = localStorage.getItem('blocklyWorkspace');
    if (xmlText) {
        const xml = Blockly.Xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
    }
}

// Add event listener for automatic code generation
workspace.addChangeListener(() => {
    generateCode();
});
