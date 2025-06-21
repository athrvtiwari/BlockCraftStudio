// Custom block definitions
Blockly.defineBlocksWithJsonArray([
    {
        "type": "print_text",
        "message0": "print %1",
        "args0": [
            {
                "type": "input_value",
                "name": "TEXT",
                "check": "String"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Print text to console",
        "helpUrl": ""
    },
    {
        "type": "custom_loop",
        "message0": "repeat %1 times %2",
        "args0": [
            {
                "type": "field_number",
                "name": "TIMES",
                "value": 10,
                "min": 0
            },
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Repeat a block of code",
        "helpUrl": ""
    },
    {
        "type": "variable_declaration",
        "message0": "create variable %1 = %2",
        "args0": [
            {
                "type": "field_input",
                "name": "VAR_NAME",
                "text": "myVar"
            },
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Create a new variable",
        "helpUrl": ""
    },
    {
        "type": "example_block",
        "message0": "example %1",
        "args0": [
            {
                "type": "field_input",
                "name": "NAME",
                "text": "default"
            }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Blocks['custom_loop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("custom loop");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['print_text'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("print text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['variable_declaration'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("declare variable")
            .appendField(new Blockly.FieldTextInput("variable_name"), "VAR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

// Add more block definitions here as needed

// JavaScript generator configurations
Blockly.JavaScript['print_text'] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    return `console.log(${text});\n`;
};

Blockly.JavaScript['custom_loop'] = function(block) {
    const times = block.getFieldValue('TIMES');
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `for (let i = 0; i < ${times}; i++) {\n${statements}}\n`;
};

Blockly.JavaScript['variable_declaration'] = function(block) {
    const varName = block.getFieldValue('VAR_NAME');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    return `let ${varName} = ${value};\n`;
};

// Lua generator configurations
Blockly.Lua['print_text'] = function(block) {
    const text = Blockly.Lua.valueToCode(block, 'TEXT', Blockly.Lua.ORDER_ATOMIC) || "''";
    return `print(${text})\n`;
};

Blockly.Lua['custom_loop'] = function(block) {
    const times = block.getFieldValue('TIMES');
    const statements = Blockly.Lua.statementToCode(block, 'DO');
    return `for i = 1, ${times} do\n${statements}end\n`;
};

Blockly.Lua['variable_declaration'] = function(block) {
    const varName = block.getFieldValue('VAR_NAME');
    const value = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_ASSIGNMENT) || '0';
    return `${varName} = ${value}\n`;
};

// Dart generator configurations
Blockly.Dart['print_text'] = function(block) {
    const text = Blockly.Dart.valueToCode(block, 'TEXT', Blockly.Dart.ORDER_ATOMIC) || "''";
    return `print(${text});\n`;
};

Blockly.Dart['custom_loop'] = function(block) {
    const times = block.getFieldValue('TIMES');
    const statements = Blockly.Dart.statementToCode(block, 'DO');
    return `for (int i = 0; i < ${times}; i++) {\n${statements}}\n`;
};

Blockly.Dart['variable_declaration'] = function(block) {
    const varName = block.getFieldValue('VAR_NAME');
    const value = Blockly.Dart.valueToCode(block, 'VALUE', Blockly.Dart.ORDER_ASSIGNMENT) || '0';
    return `var ${varName} = ${value};\n`;
};

// PHP generator configurations
Blockly.PHP['print_text'] = function(block) {
    const text = Blockly.PHP.valueToCode(block, 'TEXT', Blockly.PHP.ORDER_ATOMIC) || "''";
    return `echo ${text};\n`;
};

Blockly.PHP['custom_loop'] = function(block) {
    const times = block.getFieldValue('TIMES');
    const statements = Blockly.PHP.statementToCode(block, 'DO');
    return `for ($i = 0; $i < ${times}; $i++) {\n${statements}}\n`;
};

Blockly.PHP['variable_declaration'] = function(block) {
    const varName = block.getFieldValue('VAR_NAME');
    const value = Blockly.PHP.valueToCode(block, 'VALUE', Blockly.PHP.ORDER_ASSIGNMENT) || '0';
    return `$${varName} = ${value};\n`;
};
