import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text input:")
        .appendField(new Blockly.FieldTextInput('default text'),
            'FIELDNAME');
    this.setPreviousStatement(true);
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};

Blockly.JavaScript['string_length'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_input + '.length';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['simple_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Perform simple action");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("This block performs a simple action.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['simple_action'] = function(block) {
  const code = 'console.log("Simple action performed!");\n';
  return code;
};
