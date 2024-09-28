<html lang="en"><head>
  <meta charset="UTF-8">
  
  
  

  <title>CodePen - Blockly Template Tiny</title>

    <link rel="canonical" href="https://codepen.io/lukeplays33/pen/NWQqVbw">
  
  
  
  
<style>
body, html {
  hieght:100%;
  
  margin:0px;
}
</style>

  
  
  
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/prettify.css"><style>.blocklyDraggable {}
.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;
display: block;
}
.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;
}
.injectionDiv {
height: 100%;
position: relative;
}
.blocklyNonSelectable {
user-select: none;
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
}
.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font-family: sans-serif;
font-size: 9pt;
opacity: 0.9;
padding: 2px;
position: absolute;
z-index: 100000;
}
.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}
.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}
.blocklyResizeLine {
stroke: #888;
stroke-width: 1;
}
.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}
.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}
.blocklySelected>.blocklyPath {
stroke: #fc3;
stroke-width: 3px;
}
.blocklySelected>.blocklyPathLight {
display: none;
}
.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}
.blocklyDragging>.blocklyPathDark {
display: none;
}
.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}
.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}
.blocklyText {
cursor: default;
fill: #fff;
font-family: sans-serif;
font-size: 11pt;
}
.blocklyNonEditableText>text {
pointer-events: none;
}
.blocklyNonEditableText>rect,
.blocklyEditableText>rect {
fill: #fff;
fill-opacity: .6;
}
.blocklyNonEditableText>text,
.blocklyEditableText>text {
fill: #000;
}
.blocklyEditableText:hover>rect {
stroke: #fff;
stroke-width: 2;
}
.blocklyBubbleText {
fill: #000;
}
.blocklyFlyoutButton {
fill: #888;
cursor: default;
}
.blocklyFlyoutButtonShadow {
fill: #444;
}
.blocklyFlyoutButton:hover {
fill: #aaa;
}
.blocklySvg text {
user-select: none;
-moz-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}
.blocklyHidden {
display: none;
}
.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}
.blocklyIconGroup {
cursor: default;
}
.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}
.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}
.blocklyIconSymbol {
fill: #fff;
}
.blocklyMinimalBody {
margin: 0;
padding: 0;
}
.blocklyCommentTextarea {
background-color: #ffc;
border: 0;
margin: 0;
padding: 2px;
resize: none;
}
.blocklyHtmlInput {
border: none;
border-radius: 4px;
font-family: sans-serif;
height: 100%;
margin: 0;
outline: none;
padding: 0 1px;
width: 100%
}
.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;
}
.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}
.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}
.blocklyScrollbarBackground {
opacity: 0;
}
.blocklyScrollbarHandle {
fill: #ccc;
}
.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}
.blocklyZoom>image {
opacity: .4;
}
.blocklyZoom>image:hover {
opacity: .6;
}
.blocklyZoom>image:active {
opacity: .8;
}
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}
.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}
.blocklyInvalidInput {
background: #faa;
}
.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: .8;
}
.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}
.blocklyAngleGauge {
fill: #f88;
fill-opacity: .8;
}
.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
}
.blocklyContextMenu {
border-radius: 4px;
}
.blocklyDropdownMenu {
padding: 0 !important;
}
.blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,
.blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px !important;
}
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
position: absolute;
}
.blocklyTreeRoot {
padding: 4px 0;
}
.blocklyTreeRoot:focus {
outline: none;
}
.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}
.blocklyHorizontalTree {
float: left;
margin: 1px 5px 8px 0;
}
.blocklyHorizontalTreeRtl {
float: right;
margin: 1px 0 8px 5px;
}
.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
}
.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: #e4e4e4;
}
.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}
.blocklyTreeSeparatorHorizontal {
border-right: solid #e5e5e5 1px;
width: 0;
padding: 5px 0;
margin: 0 5px;
}
.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
width: 16px;
}
.blocklyTreeIconClosedLtr {
background-position: -32px -1px;
}
.blocklyTreeIconClosedRtl {
background-position: 0px -1px;
}
.blocklyTreeIconOpen {
background-position: -16px -1px;
}
.blocklyTreeSelected>.blocklyTreeIconClosedLtr {
background-position: -32px -17px;
}
.blocklyTreeSelected>.blocklyTreeIconClosedRtl {
background-position: 0px -17px;
}
.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}
.blocklyTreeIconNone,
.blocklyTreeSelected>.blocklyTreeIconNone {
background-position: -48px -1px;
}
.blocklyTreeLabel {
cursor: default;
font-family: sans-serif;
font-size: 16px;
padding: 0 3px;
vertical-align: middle;
}
.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}
.blocklyWidgetDiv .goog-palette {
outline: none;
cursor: default;
}
.blocklyWidgetDiv .goog-palette-table {
border: 1px solid #666;
border-collapse: collapse;
}
.blocklyWidgetDiv .goog-palette-cell {
height: 13px;
width: 15px;
margin: 0;
border: 0;
text-align: center;
vertical-align: middle;
border-right: 1px solid #666;
font-size: 1px;
}
.blocklyWidgetDiv .goog-palette-colorswatch {
position: relative;
height: 13px;
width: 15px;
border: 1px solid #666;
}
.blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {
border: 1px solid #FFF;
}
.blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {
border: 1px solid #000;
color: #fff;
}
.blocklyWidgetDiv .goog-menu {
background: #fff;
border-color: #ccc #666 #666 #ccc;
border-style: solid;
border-width: 1px;
cursor: default;
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;
}
.blocklyWidgetDiv .goog-menuitem {
color: #000;
font: normal 13px Arial, sans-serif;
list-style: none;
margin: 0;
padding: 4px 7em 4px 28px;
white-space: nowrap;
}
.blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {
padding-left: 7em;
padding-right: 28px;
}
.blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,
.blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {
padding-left: 12px;
}
.blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {
padding-right: 20px;
}
.blocklyWidgetDiv .goog-menuitem-content {
color: #000;
font: normal 13px Arial, sans-serif;
}
.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,
.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {
color: #ccc !important;
}
.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {
opacity: 0.3;
-moz-opacity: 0.3;
filter: alpha(opacity=30);
}
.blocklyWidgetDiv .goog-menuitem-highlight,
.blocklyWidgetDiv .goog-menuitem-hover {
background-color: #d6e9f8;
border-color: #d6e9f8;
border-style: dotted;
border-width: 1px 0;
padding-bottom: 3px;
padding-top: 3px;
}
.blocklyWidgetDiv .goog-menuitem-checkbox,
.blocklyWidgetDiv .goog-menuitem-icon {
background-repeat: no-repeat;
height: 16px;
left: 6px;
position: absolute;
right: auto;
vertical-align: middle;
width: 16px;
}
.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,
.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {
left: auto;
right: 6px;
}
.blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,
.blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {
background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;
}
.blocklyWidgetDiv .goog-menuitem-accel {
color: #999;
direction: ltr;
left: auto;
padding: 0 6px;
position: absolute;
right: 0;
text-align: right;
}
.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {
left: 0;
right: auto;
text-align: left;
}
.blocklyWidgetDiv .goog-menuitem-mnemonic-hint {
text-decoration: underline;
}
.blocklyWidgetDiv .goog-menuitem-mnemonic-separator {
color: #999;
font-size: 12px;
padding-left: 4px;
}
.blocklyWidgetDiv .goog-menuseparator {
border-top: 1px solid #ccc;
margin: 4px 0;
padding: 0;
}
</style></head>

<body>
  <div id="content" style="display:flex;">
  <div id="blocklyDiv" style="height: 100%; width: 100%;"><div class="injectionDiv" dir="LTR"><svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" width="1425px" height="150px"><defs><filter id="blocklyEmbossFilter8317961149494759"><feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"></feGaussianBlur><feSpecularLighting in="blur" surfaceScale="1" specularConstant="0.5" specularExponent="10" lighting-color="white" result="specOut"><fePointLight x="-5000" y="-10000" z="20000"></fePointLight></feSpecularLighting><feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"></feComposite><feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"></feComposite></filter><pattern id="blocklyDisabledPattern8317961149494759" patternUnits="userSpaceOnUse" width="10" height="10"><rect width="10" height="10" fill="#aaa"></rect><path d="M 0 0 L 10 10 M 10 0 L 0 10" stroke="#cc0"></path></pattern><pattern id="blocklyGridPattern8317961149494759" patternUnits="userSpaceOnUse" width="100" height="100"></pattern></defs><g class="blocklyWorkspace"><rect height="100%" width="100%" class="blocklyMainBackground" style="fill: url(&quot;#blocklyGridPattern8317961149494759&quot;);"></rect><g class="blocklyBlockCanvas" transform="translate(0,0) scale(1)"><g transform="translate(35,21)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#498470" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 56.53125 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" fill="#5ba58c" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 56.53125 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#8cc0af" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 56.03125 M 56.03125,0.5 M 51.53125,19.3 l 3.68,-2.1 M 2.6966991411008934,22.303300858899107 A 7.5,7.5 0 0,1 0.5,17 V 8
"></path><g transform="translate(57.53125,0)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#bddbd1" d="m 0,0 H 143.578125 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z
"></path><path class="blocklyPath" fill="#bddbd1" d="m 0,0 H 143.578125 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z
"></path><path class="blocklyPathLight" d="m 0.5,0.5 H 143.078125 M 143.078125,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1
" style="display: none;"></path><g transform="translate(10,5)"><image height="12px" width="12px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC"></image></g><g class="blocklyNonEditableText" transform="translate(32,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="89.578125"></rect><text class="blocklyText" y="12.5">Hello,&nbsp;World</text></g><g transform="translate(121.578125,5)"><image height="12px" width="12px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg=="></image></g></g><text class="blocklyText" y="12.5" transform="translate(10,5)">print</text></g></g><g class="blocklyBubbleCanvas" transform="translate(0,0) scale(1)"></g></g></svg></div></div>
</div>

<!-- <xml id="toolbox" style="display: none">
  <category name="Logic" colour="210">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_boolean"></block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
  </category>
  <category name="Loops" colour="120">
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="controls_whileUntil"></block>
    <block type="controls_for">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="BY">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="controls_forEach"></block>
    <block type="controls_flow_statements"></block>
  </category>
  <category name="Math" colour="230">
    <block type="math_number">
      <field name="NUM">123</field>
    </block>
    <block type="math_arithmetic">
      <value name="A">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="math_single">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">9</field>
        </shadow>
      </value>
    </block>
    <block type="math_trig">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">45</field>
        </shadow>
      </value>
    </block>
    <block type="math_constant"></block>
    <block type="math_number_property">
      <value name="NUMBER_TO_CHECK">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="math_round">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">3.1</field>
        </shadow>
      </value>
    </block>
    <block type="math_on_list"></block>
    <block type="math_modulo">
      <value name="DIVIDEND">
        <shadow type="math_number">
          <field name="NUM">64</field>
        </shadow>
      </value>
      <value name="DIVISOR">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="math_constrain">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="LOW">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="HIGH">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_float"></block>
  </category>
  <category name="Text" colour="160">
    <block type="text"></block>
    <block type="text_join"></block>
    <block type="text_append">
      <value name="TEXT">
        <shadow type="text"></shadow>
      </value>
    </block>
    <block type="text_length">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_isEmpty">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_indexOf">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">{textVariable}</field>
        </block>
      </value>
      <value name="FIND">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_charAt">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">{textVariable}</field>
        </block>
      </value>
    </block>
    <block type="text_getSubstring">
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR">{textVariable}</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_trim">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_prompt_ext">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Lists" colour="260">
    <block type="lists_create_with">
      <mutation items="0"></mutation>
    </block>
    <block type="lists_create_with"></block>
    <block type="lists_repeat">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">5</field>
        </shadow>
      </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">{listVariable}</field>
        </block>
      </value>
    </block>
    <block type="lists_getIndex">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">{listVariable}</field>
        </block>
      </value>
    </block>
    <block type="lists_setIndex">
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR">{listVariable}</field>
        </block>
      </value>
    </block>
    <block type="lists_getSublist">
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR">{listVariable}</field>
        </block>
      </value>
    </block>
    <block type="lists_split">
      <value name="DELIM">
        <shadow type="text">
          <field name="TEXT">,</field>
        </shadow>
      </value>
    </block>
    <block type="lists_sort"></block>
  </category>
  <category name="Colour" colour="20">
    <block type="colour_picker"></block>
    <block type="colour_random"></block>
    <block type="colour_rgb">
      <value name="RED">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
      <value name="GREEN">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="BLUE">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="colour_blend">
      <value name="COLOUR1">
        <shadow type="colour_picker">
          <field name="COLOUR">#ff0000</field>
        </shadow>
      </value>
      <value name="COLOUR2">
        <shadow type="colour_picker">
          <field name="COLOUR">#3333ff</field>
        </shadow>
      </value>
      <value name="RATIO">
        <shadow type="math_number">
          <field name="NUM">0.5</field>
        </shadow>
      </value>
    </block>
  </category>
  <sep></sep>
  <category name="Variables" colour="330" custom="VARIABLE"></category>
  <category name="Functions" colour="290" custom="PROCEDURE"></category>
</xml>
-->
<xml id="startBlocks" style="display: none">
  <block type="text_print" id="0@)u5QVs/@*zX^XXw%Lp" x="35" y="21">
    <value name="TEXT">
      <shadow type="text" id="=[)BkyD!BK*AF%PcBi9;">
        <field name="TEXT">Hello, World</field>
      </shadow>
    </value>
  </block>
</xml>
  <script src="https://cdn.jsdelivr.net/npm/blockly@1.0.0/blockly_compressed.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/blockly@1.0.0/blocks_compressed.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/blockly@1.0.0/msg/js/en.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/blockly@1.0.0/javascript_compressed.min.js"></script>

<script src="https://thunkable.github.io/webviewer-extension/thunkableWebviewerExtension.js"></script>
      <script id="rendered-js">

  javascript.javascriptGenerator.forBlock['themeswapped'] = function(block, generator) {
  var dropdown_v = block.getFieldValue('v');
  var dropdown_name = block.getFieldValue('NAME');
  var value_s = generator.valueToCode(block, 's', javascript.Order.ATOMIC);
  var value_v = generator.valueToCode(block, 'v', javascript.Order.ATOMIC);
  var statements_st = generator.statementToCode(block, 'st');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  trashcan: false,
  readOnly : true, 
});

 Blockly.Xml.domToWorkspace(document.querySelector('#startBlocks'), workspace);

function loadBlocks(file) {
    var xml = Blockly.Xml.textToDom(file);
    Blockly.Xml.domToWorkspace(xml, workspace);
}

ThunkableWebviewerExtension.receiveMessage(function(message) {
  // Do something with your message
  loadBlocks(message);
});
    </script><div class="blocklyWidgetDiv"></div><div class="blocklyTooltipDiv"></div>

  



</body></html>
