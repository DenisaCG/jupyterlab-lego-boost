/*
This extension uses the pylgbst library, which is under the following license:

MIT License

Copyright (c) 2017 Andrey Pokhilko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import * as Blockly from 'blockly';
import BlocklyPy from 'blockly/python';
import Vernie from 'vernie.py';

var lego_boost_color = '#550a8a';

/*
 * Block definitions
 */

// MoveHub

Blockly.Blocks['lego_boost_connect'] = {
  init: function () {
    this.appendValueInput('BLUETOOTH_ADDRESS')
      .setCheck('String')
      .appendField('Connect to MoveHub on address');
    // this.appendStatementInput('DO');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Connect to Lego Boost given its Bluetooth address.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_a_timed'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Move motor A for time');
    this.appendValueInput('SPEED').setCheck('Number').appendField('and speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move motor A for time and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_b_timed'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Move motor B for time');
    this.appendValueInput('SPEED').setCheck('Number').appendField('and speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move motor B for time and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_a_angled'] = {
  init: function () {
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('Move motor A at angle');
    this.appendValueInput('SPEED').setCheck('Number').appendField('and speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move motor A at a certain angle and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_b_angled'] = {
  init: function () {
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('Move motor B at angle');
    this.appendValueInput('SPEED').setCheck('Number').appendField('and speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move motor B at a certain angle and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_ab_timed'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Move group motors AB for time');
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('and speeds for motor A');
    this.appendValueInput('SPEED_B').setCheck('Number').appendField('and B');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move motors AB for a certain time and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_ab_angled'] = {
  init: function () {
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('Move group motors AB at angle');
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('with speeds for motor A');
    this.appendValueInput('SPEED_B').setCheck('Number').appendField('and B');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move group motors AB at a certain angle and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_start_speed'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Start motors with speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Enables motor with specified speed forever.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_stop_motors'] = {
  init: function () {
    this.appendDummyInput().appendField('Stop motors');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Stop motor.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_disconnect'] = {
  init: function () {
    this.appendDummyInput().appendField('Disconnect from MoveHub');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Disconnect from Lego Boost.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_sleep'] = {
  init: function () {
    this.appendValueInput('SECONDS').setCheck('Number').appendField('Wait for');
    this.appendDummyInput('minutes');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Wait for a given time.');
    this.setHelpUrl('');
  }
};

// Vernie

Blockly.Blocks['lego_boost_vernie_connect'] = {
  init: function () {
    // this.appendDummyInput().appendField('Connect to Vernie');
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    // this.setColour(lego_boost_color);
    // this.setTooltip('Connect to the Vernie robot.');
    // this.setHelpUrl('');
    this.appendValueInput('BLUETOOTH_ADDRESS')
      .setCheck('String')
      .appendField('Connect to Vernie on address');
    // this.appendStatementInput('DO');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Connect to Vernie given its Bluetooth address.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_vernie_say'] = {
  init: function () {
    this.appendValueInput('TEXT').setCheck('String').appendField('Vernie says');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Give Vernie a sentance to say.');
    this.setHelpUrl('');
  }
};

/*
 * Generators
 */

// MoveHub

Blockly.Python['lego_boost_connect'] = function (block) {
  var value_bluetooth_address = Blockly.Python.valueToCode(
    block,
    'BLUETOOTH_ADDRESS',
    Blockly.Python.ORDER_ATOMIC
  );

  var code =
    'conn = get_connection_bleak(hub_mac=' +
    value_bluetooth_address +
    ', hub_name=MoveHub.DEFAULT_NAME)\nhub = MoveHub(conn)\n';
  return code;
};

Blockly.Blocks['lego_boost_connect'].toplevel_init = `
from pylgbst.hub import MoveHub
from pylgbst import get_connection_bleak
`;

Blockly.Python['lego_boost_move_motor_a_timed'] = function (block) {
  var value_time = Blockly.Python.valueToCode(
    block,
    'TIME',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed = Blockly.Python.valueToCode(
    block,
    'SPEED',
    Blockly.Python.ORDER_ATOMIC
  );

  var code = 'hub.motor_A.timed(' + value_time + ', ' + value_speed + ')\n';
  return code;
};

Blockly.Blocks['lego_boost_move_motor_a_timed'].toplevel_init = `
import time
`;

Blockly.Python['lego_boost_move_motor_b_timed'] = function (block) {
  var value_time = Blockly.Python.valueToCode(
    block,
    'TIME',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed = Blockly.Python.valueToCode(
    block,
    'SPEED',
    Blockly.Python.ORDER_ATOMIC
  );

  var code = 'hub.motor_B.timed(' + value_time + ', ' + value_speed + ')\n';
  return code;
};

Blockly.Blocks['lego_boost_move_motor_b_timed'].toplevel_init = `
import time
`;

Blockly.Python['lego_boost_move_motor_a_angled'] = function (block) {
  var value_angle = Blockly.Python.valueToCode(
    block,
    'ANGLE',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed = Blockly.Python.valueToCode(
    block,
    'SPEED',
    Blockly.Python.ORDER_ATOMIC
  );

  var code = 'hub.motor_A.angled(' + value_angle + ', ' + value_speed + ')\n';
  return code;
};

Blockly.Python['lego_boost_move_motor_b_angled'] = function (block) {
  var value_angle = Blockly.Python.valueToCode(
    block,
    'ANGLE',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed = Blockly.Python.valueToCode(
    block,
    'SPEED',
    Blockly.Python.ORDER_ATOMIC
  );

  var code = 'hub.motor_B.angled(' + value_angle + ', ' + value_speed + ')\n';
  return code;
};

Blockly.Python['lego_boost_move_motor_ab_timed'] = function (block) {
  var value_time = Blockly.Python.valueToCode(
    block,
    'TIME',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed_a = Blockly.Python.valueToCode(
    block,
    'SPEED_A',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed_b = Blockly.Python.valueToCode(
    block,
    'SPEED_B',
    Blockly.Python.ORDER_ATOMIC
  );

  var code =
    'hub.motor_AB.timed(' +
    value_time +
    ', ' +
    value_speed_a +
    ', ' +
    value_speed_b +
    ')\n';
  return code;
};

Blockly.Blocks['lego_boost_move_motor_ab_timed'].toplevel_init = `
import time
`;

Blockly.Python['lego_boost_move_motor_ab_angled'] = function (block) {
  var value_angle = Blockly.Python.valueToCode(
    block,
    'ANGLE',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed_a = Blockly.Python.valueToCode(
    block,
    'SPEED_A',
    Blockly.Python.ORDER_ATOMIC
  );

  var value_speed_b = Blockly.Python.valueToCode(
    block,
    'SPEED_B',
    Blockly.Python.ORDER_ATOMIC
  );

  var code =
    'hub.motor_AB.angled(' +
    value_angle +
    ', ' +
    value_speed_a * ', ' +
    value_speed_b +
    ')\n';
  return code;
};

Blockly.Python['lego_boost_start_speed'] = function (block) {
  var value_speed = Blockly.Python.valueToCode(
    block,
    'SPEED',
    Blockly.Python.ORDER_ATOMIC
  );

  var code = 'hub.motor_external.start_speed(' + value_speed + ')\n';
  return code;
};

Blockly.Python['lego_boost_stop_motors'] = function (block) {
  var code = 'hub.motor_external.stop()\n';
  return code;
};

Blockly.Python['lego_boost_disconnect'] = function (block) {
  var code = 'hub.disconnect()\n';
  return code;
};

Blockly.Python['lego_boost_sleep'] = function (block) {
  var value_seconds = Blockly.Python.valueToCode(
    block,
    'SECONDS',
    Blockly.Python.ORDER_ATOMIC
  );

  var code = 'time.sleep(' + value_seconds + ')\n';
  return code;
};

Blockly.Blocks['lego_boost_sleep'].toplevel_init = `
import time

`;

// Vernie 

Blockly.Python['lego_boost_vernie_connect'] = function (block) {
  // var code = 'robot = Vernie(MoveHub)\n';
  // return code;

  var value_bluetooth_address = Blockly.Python.valueToCode(
    block,
    'BLUETOOTH_ADDRESS',
    Blockly.Python.ORDER_ATOMIC
  );

  var code =
    'conn = get_connection_bleak(hub_mac=' +
    value_bluetooth_address +
    ', hub_name=MoveHub.DEFAULT_NAME)\nrobot = Vernie(MoveHub(conn))\n';
  return code;
};

Blockly.Blocks['lego_boost_vernie_connect'].toplevel_init = `
# defining the Vernie class
# coding=utf-8
import hashlib
import os
import re
import subprocess
import time

from pylgbst import *
from pylgbst.hub import MoveHub

try:
    import gtts


    def say(text):
        print("%s" % text)
        if isinstance(text, str):
            text = text.decode("utf-8")
        md5 = hashlib.md5(text.encode('utf-8')).hexdigest()
        fname = "/tmp/%s.mp3" % md5
        if not os.path.exists(fname):
            myre = re.compile('[[A-Za-z]', re.UNICODE)
            lang = 'en' if myre.match(text) else 'ru'

            logging.getLogger('requests').setLevel(logging.getLogger('').getEffectiveLevel())
            tts = gtts.gTTS(text=text, lang=lang, slow=False)
            tts.save(fname)

        with open(os.devnull, 'w') as fnull:
            subprocess.call("mplayer %s" % fname, shell=True, stderr=fnull, stdout=fnull)
except BaseException:
    def say(text):
        print("%s" % text)

forward = FORWARD = right = RIGHT = 1
backward = BACKWARD = left = LEFT = -1
straight = STRAIGHT = 0

SPEECH_LANG_MAP = {
    'en': {
        'ready': "Vernie the Robot is ready.",
        "commands help": "Available commands are: "
                         "forward, backward, turn left, turn right, "
                         "head left, head right, head straight, shot and say",
        "finished": "Thank you! Robot is now turning off",
        "text is empty": "Please, enter not empty text to say!"
    }
}

VERNIE_TO_MOTOR_DEGREES = 2.6
VERNIE_SINGLE_MOVE = 430


class Vernie(MoveHub):
    def __init__(self, language='en'):
        super(Vernie, self).__init__()
        self.language = language

        while True:
            required_devices = (self.vision_sensor, self.motor_external)
            if None not in required_devices:
                break
            log.debug("Waiting for required devices to appear: %s", required_devices)
            time.sleep(1)

        self._head_position = 0
        self.motor_external.subscribe(self._external_motor_data)

        self._reset_head()
        self.say("ready")
        time.sleep(1)

    def say(self, phrase):
        if phrase in SPEECH_LANG_MAP[self.language]:
            phrase = SPEECH_LANG_MAP[self.language][phrase]
        say(phrase)

    def _external_motor_data(self, data):
        log.debug("External motor position: %s", data)
        self._head_position = data

    def _reset_head(self):
        self.motor_external.timed(1, -0.2)
        self.head(RIGHT, angle=45)

    def head(self, direction=RIGHT, angle=25, speed=0.1):
        if direction == STRAIGHT:
            angle = -self._head_position
            direction = 1

        self.motor_external.angled(direction * angle, speed)

    def turn(self, direction, degrees=90, speed=0.3):
        self.head(STRAIGHT, speed=0.5)
        self.head(direction, 35, 1)
        self.motor_AB.angled(int(VERNIE_TO_MOTOR_DEGREES * degrees), speed * direction, -speed * direction)
        self.head(STRAIGHT, speed=0.5)

    def move(self, direction, distance=1, speed=0.2):
        self.head(STRAIGHT, speed=0.5)
        self.motor_AB.angled(distance * VERNIE_SINGLE_MOVE, speed * direction, speed * direction)

    def shot(self):
        self.motor_external.timed(0.5)
        self.head(STRAIGHT)
        self.head(STRAIGHT)

    def interpret_command(self, cmd, confirm):
        cmd = cmd.strip().lower().split(' ')
        if cmd[0] in ("head", "голова", "голову"):
            if cmd[-1] in ("right", "вправо", "направо"):
                confirm(cmd)
                self.head(RIGHT)
            elif cmd[-1] in ("left", "влево", "налево"):
                confirm(cmd)
                self.head(LEFT)
            else:
                confirm(cmd)
                self.head(STRAIGHT)
        elif cmd[0] in ("say", "скажи", "сказать"):
            if not cmd[1:]:
                self.say("text is empty")
                return
            say(' '.join(cmd[1:]))
        elif cmd[0] in ("fire", "shot", "огонь", "выстрел"):
            say("fire")
            self.shot()
        elif cmd[0] in ("end", "finish", "конец", "стоп"):
            self.say("finished")
            raise KeyboardInterrupt()
        elif cmd[0] in ("forward", "вперёд", "вперед"):
            try:
                dist = int(cmd[-1])
            except BaseException:
                dist = 1
            confirm(cmd)
            self.move(FORWARD, distance=dist)
        elif cmd[0] in ("backward", "назад"):
            try:
                dist = int(cmd[-1])
            except BaseException:
                dist = 1
            confirm(cmd)
            self.move(BACKWARD, distance=dist)
        elif cmd[0] in ("turn", "поворот", 'повернуть'):
            if cmd[-1] in ("right", "вправо", "направо"):
                confirm(cmd)
                self.turn(RIGHT)
            elif cmd[-1] in ("left", "влево", "налево"):
                confirm(cmd)
                self.turn(LEFT)
            else:
                confirm(cmd)
                self.turn(RIGHT, degrees=180)
        elif cmd[0] in ("right", "вправо", "направо"):
            confirm(cmd)
            self.turn(RIGHT)
        elif cmd[0] in ("left", "влево", "налево"):
            confirm(cmd)
            self.turn(LEFT)
        elif cmd[0]:
            self.say("Unknown command")
            self.say("commands help")

`;

Blockly.Python['lego_boost_vernie_say'] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    'TEXT',
    Blockly.Python.ORDER_ATOMIC
  );

  var code = 'robot.say(' + value_text + ')\n';
  return code;
};

// Creating a toolbox containing all the main blocks
// and adding the lego boost catgory.
const TOOLBOX = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      colour: '210',
      contents: [
        {
          kind: 'block',
          type: 'controls_if'
        },
        {
          kind: 'BLOCK',
          type: 'logic_compare'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_operation"></block>',
          type: 'logic_operation'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_negate"></block>',
          type: 'logic_negate'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_boolean"></block>',
          type: 'logic_boolean'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_null"></block>',
          type: 'logic_null'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_ternary"></block>',
          type: 'logic_ternary'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      colour: '120',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_repeat_ext">\n          <value name="TIMES">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_repeat_ext'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_whileUntil"></block>',
          type: 'controls_whileUntil'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_for">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n          <value name="BY">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_for'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_forEach"></block>',
          type: 'controls_forEach'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_flow_statements"></block>',
          type: 'controls_flow_statements'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Math',
      colour: '230',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_number"></block>',
          type: 'math_number'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_arithmetic">\n          <value name="A">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="B">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_arithmetic'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_single">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">9</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_single'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_trig">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">45</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_trig'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_constant"></block>',
          type: 'math_constant'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_number_property">\n          <value name="NUMBER_TO_CHECK">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_number_property'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_change">\n          <value name="DELTA">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_change'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_round">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">3.1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_round'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_on_list"></block>',
          type: 'math_on_list'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_modulo">\n          <value name="DIVIDEND">\n            <shadow type="math_number">\n              <field name="NUM">64</field>\n            </shadow>\n          </value>\n          <value name="DIVISOR">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_modulo'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_constrain">\n          <value name="VALUE">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="LOW">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="HIGH">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_constrain'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_random_int">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_random_int'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_random_float"></block>',
          type: 'math_random_float'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Text',
      colour: '160',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="text"></block>',
          type: 'text'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="text_join"></block>',
          type: 'text_join'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_append">\n          <value name="TEXT">\n            <shadow type="text"></shadow>\n          </value>\n        </block>',
          type: 'text_append'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_length">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_length'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_isEmpty">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT"></field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n          <value name="FIND">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_charAt">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_charAt'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_getSubstring">\n          <value name="STRING">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_getSubstring'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_changeCase">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_changeCase'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_trim">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_trim'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_print">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_print'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_prompt_ext">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_prompt_ext'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Lists',
      colour: '260',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_create_with">\n          <mutation items="0"></mutation>\n        </block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_create_with"></block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_repeat">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_repeat'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_length"></block>',
          type: 'lists_length'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_isEmpty"></block>',
          type: 'lists_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getIndex">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_setIndex">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_setIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getSublist">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getSublist'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_split">\n          <value name="DELIM">\n            <shadow type="text">\n              <field name="TEXT">,</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_split'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_sort"></block>',
          type: 'lists_sort'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Color',
      colour: '20',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_picker"></block>',
          type: 'colour_picker'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_random"></block>',
          type: 'colour_random'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_rgb">\n          <value name="RED">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n          <value name="GREEN">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="BLUE">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_rgb'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_blend">\n          <value name="COLOUR1">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#ff0000</field>\n            </shadow>\n          </value>\n          <value name="COLOUR2">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#3333ff</field>\n            </shadow>\n          </value>\n          <value name="RATIO">\n            <shadow type="math_number">\n              <field name="NUM">0.5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_blend'
        }
      ]
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: '330',
      custom: 'VARIABLE',
      name: 'Variables'
    },
    {
      kind: 'CATEGORY',
      colour: '290',
      custom: 'PROCEDURE',
      name: 'Functions'
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: lego_boost_color,
      name: 'Lego Boost',
      contents: [
        {
          kind: 'BLOCK',
          type: 'lego_boost_connect'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_a_timed'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_b_timed'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_a_angled'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_b_angled'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_ab_timed'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_ab_angled'
        },
        // {
        //   kind: 'BLOCK',
        //   type: 'lego_boost_start_speed'
        // },
        {
          kind: 'BLOCK',
          type: 'lego_boost_stop_motors'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_disconnect'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_sleep'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_vernie_connect'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_vernie_say'
        }
      ]
    }
  ]
};

const BlocklyBoost = {
  Blocks: Blockly.Blocks,
  Generator: BlocklyPy,
  Toolbox: TOOLBOX
};

export default BlocklyBoost;
