/*
var chessClock = {
    canvas: {
        ctx: {},
        width: {},
        height: {},
        create: {},
        delete: {},
        coords: {
            //different's elements coords
            calc_7Seg_Coords: function(){}
        }
    },
    draw: {
        shape: {
            //for drawing shape
        },
        rect: {
            //for drawing rect
        },
        clearRect: {
            //to clear rect district
        },
        genView: {
            //start to draw
        },
        drawNumber: {
            //draw that number which we need
        },
        displayTime: {
            //function which display the time
        }
    }
};
*/

var chessClock = {
    canvas: {
        ctx : (function () {
            "use strict";
            var innerVar = 0;
            return function (par) {
                innerVar = par || innerVar;
                return innerVar;
            };
        }()),
        width : (function () {
            "use strict";
            var innerVar = 0;
            return function (par) {
                innerVar = par || innerVar;
                return innerVar;
            };
        }()),
        height : (function () {
            "use strict";
            var innerVar = 0;
            return function (par) {
                innerVar = par || innerVar;
                return innerVar;
            };
        }()),
        create: function () {
            "use strict";
            var canvas = document.createElement("canvas");
            canvas.id = "clock";
            canvas.width = Math.round(0.75 * window.innerWidth);
            canvas.height = Math.round(0.612 * 0.75 * window.innerWidth);
            document.querySelector("#content").appendChild(canvas);
            this.ctx(canvas.getContext('2d'));
            this.width(canvas.width);
            this.height(canvas.height);
            return 0;
        },
        deleteCanvas: function () {
            "use strict";
            document.querySelector("#content").removeChild(document.querySelector("#clock"));
        },
        coords: {
            outerBox: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    width = chessClock.canvas.width(),
                    outerBox = [ //This is coords for outer rect
				        [ 0, height * 0.07865 ],
				        [ width, height * 0.07865 ],
				        [ width, height],
				        [ 0, height]
				    ];
                return outerBox;
            },
            leftButtonBig: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    leftButtonBig = [ //This is coords for big left button
                        [ 0.2476 * height, 0 ],
				        [ 0.3912 * height, 0.08519 * height ]
				    ];
                return leftButtonBig;
            },
            leftButtonSmall: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    leftButtonSmall = [ //This is coords for small left button
				        [ 0.2476 * height, 0.042598 * height ],
				        [ 0.3912 * height, 0.042598 * height ]
				    ];
                return leftButtonSmall;
            },
            rightButtonBig: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    width = chessClock.canvas.width(),
                    rightButtonBig = [ //This is coords for big right button
				        [ width - 0.63 * height, 0 ],
				        [ 0.3912 * height, 0.08519 * height ]
				    ];
                return rightButtonBig;
            },
            rightButtonSmall: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    width = chessClock.canvas.width(),
                    rightButtonSmall = [ //This is coords for small right button
				        [ width - 0.63 * height, 0.042598 * height ],
				        [ 0.3912 * height, 0.042598 * height ]
				    ];
                return rightButtonSmall;
            },
            statusLine: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    statusLine = [ //This is coords for status line
				        [ 0.04 * height, 0.111368 * height ],
				        [ 1.545 * height, 0.154471 * height ]
				    ];
                return statusLine;
            },
            leftPanel: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    leftPanel = [ //This is coords for left panel
				        [ 0.04 * height, 0.294302 * height ],
				        [ 0.77 * height, 0.494308 * height ]
				    ];
                return leftPanel;
            },
            rightPanel: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    rightPanel = [ //This is coords for right panel
				        [ 0.818 * height, 0.294302 * height ],
				        [ 0.77 * height, 0.494308 * height ]
				    ];
                return rightPanel;
            },
            ctrlLeftPanel: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    ctrlLeftPanel = [
				        [ 0.04 * height, 0.82 * height ],
				        [ 0.60569 * height, 0.15447 * height ]
				    ];
                return ctrlLeftPanel;
            },
            ctrlRightPanel: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    ctrlRightPanel = [
				        [ 0.979 * height, 0.82 * height ],
				        [ 0.60569 * height, 0.15447 * height ]
				    ];
                return ctrlRightPanel;
            },
            ctrlLeftPanelLines: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    ctrlLeftPanelLines = [
				        //Upper line
				        [ [ 0.04 * height, 0.86 * height ],
				            [ 0.646 * height, 0.86 * height ]
				            ],
				        //Down line
				        [
				            [ 0.04 * height, 0.88 * height ],
				            [ 0.646 * height, 0.88 * height ]
				        ]
				    ];
                return ctrlLeftPanelLines;
            },
            ctrlLeftPanelAxis: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    ctrlLeftPanelAxis = [
				        [ 0.041 * height, 0.86 * height ],
				        [ 0.604 * height, 0.028 * height ]
				    ];
                return ctrlLeftPanelAxis;
            },
            ctrlRightPanelAxis: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    ctrlRightPanelAxis = [
				        [ 0.981 * height, 0.86 * height ],
				        [ 0.602 * height, 0.028 * height ]
				    ];
                return ctrlRightPanelAxis;
            },
            placeForDigit_1: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_1 = [
				        [ 0.060 * height, 0.33024 * height],
				        [ 0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_1;
            },
            placeForDigit_2: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_2 = [
				        [ 0.234 * height, 0.33024 * height],
				        [ 0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_2;
            },
            placeForDigit_3: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_3 = [
				        [ 0.44 * height, 0.33024 * height],
				        [ 0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_3;
            },
            placeForDigit_4: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_4 = [
				        [ 0.632 * height, 0.33024 * height],
				        [ 0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_4;
            },
            placeForDigit_5: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_5 = [
				        [ 0.84 * height, 0.33024 * height ],
				        [  0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_5;
            },
            placeForDigit_6: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_6 = [
				        [ 1.02 * height, 0.33024 * height ],
				        [  0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_6;
            },
            placeForDigit_7: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_7 = [
				        [ 1.24 * height, 0.33024 * height ],
				        [  0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_7;
            },
            placeForDigit_8: function () {
                "use strict";
                var height = chessClock.canvas.height(),
                    placeForDigit_8 = [
				        [ 1.4113 * height, 0.33024 * height ],
				        [  0.165 * height, 0.2675 * height ]
				    ];
                return placeForDigit_8;
            },
            calc_7Seg_Coords: function (digitPos) {
                "use strict";
                var startPoint,
                    startPointsVertSegments = [],
                    allSegmentCoords = [],
                    i,
                    k,
                    coords = [];
                switch (digitPos) {
                case 1:
                    startPoint = chessClock.canvas.coords.placeForDigit_1()[0];
                    break;
                case 2:
                    startPoint = chessClock.canvas.coords.placeForDigit_2()[0];
                    break;
                case 3:
                    startPoint = chessClock.canvas.coords.placeForDigit_3()[0];
                    break;
                case 4:
                    startPoint = chessClock.canvas.coords.placeForDigit_4()[0];
                    break;
                case 5:
                    startPoint = chessClock.canvas.coords.placeForDigit_5()[0];
                    break;
                case 6:
                    startPoint = chessClock.canvas.coords.placeForDigit_6()[0];
                    break;
                case 7:
                    startPoint = chessClock.canvas.coords.placeForDigit_7()[0];
                    break;
                case 8:
                    startPoint = chessClock.canvas.coords.placeForDigit_8()[0];
                    break;
                default:
                    window.alert("Error in calc_7Seg_Coords func -> switch operator!");
                }
                var c = chessClock.canvas.width() * 0.1,
                    startPointsHorSegments = [ startPoint, [startPoint[0], startPoint[1] + c * 0.6908 ], [startPoint[0], startPoint[1] + c * 1.3816 ] ];
                //Here we draw 3 horizontal bars on 7-segment display
                for (i = 0, k = startPointsHorSegments.length; i < k; i = i + 1) {
                    startPoint = startPointsHorSegments[i];
                    if (startPoint.length === 2) {
                        coords = [
                            [ startPoint[0] + 0.125 * c, startPoint[1] + 0.125 * c],
                            [ startPoint[0] + 2 * 0.125 * c, startPoint[1] ],
                            [ startPoint[0] + 0.75 * c, startPoint[1] ],
                            [ startPoint[0] + 0.875 * c, startPoint[1] + 0.125 * c ],
                            [ startPoint[0] + 0.75 * c, startPoint[1] + 0.25 * c ],
                            [ startPoint[0] + 0.25 * c, startPoint[1] + 0.25 * c ]
                        ];
                        allSegmentCoords.push(coords);
                        //This points we are need for horizontal bar drawing
                        if (i !== 2) {
                            startPointsVertSegments.push(coords[0]);
                            startPointsVertSegments.push(coords[3]);
                        }
                    }
                }
                //Here we draw 4 vertical bars on 7-segment display
                for (i = 0, k = startPointsVertSegments.length; i < k; i = i + 1) {
                    startPoint = startPointsVertSegments[i];
                    if (startPoint.length === 2) {
                        coords = [
                            [ startPoint[0], startPoint[1] ],
                            [ startPoint[0] + 0.125 * c, startPoint[1] + 0.125 * c ],
                            [ startPoint[0] + 0.125 * c, startPoint[1] + 0.5658 * c],
                            [ startPoint[0], startPoint[1] + 0.6908 * c],
                            [ startPoint[0] - 0.125 * c, startPoint[1] + 0.5658 * c ],
                            [ startPoint[0] - 0.125 * c, startPoint[1] + 0.125 * c]
                        ];
                        allSegmentCoords.push(coords);
                    }
                }
                return allSegmentCoords;
            }
        }
    },
    draw: {
        shape: function (arrayOfPoints, style, flag) {
            "use strict";
            var ctx = chessClock.canvas.ctx(),
                i,
                k;
            if (ctx && arrayOfPoints.length) {
                ctx.beginPath();
                ctx.moveTo(arrayOfPoints[0][0], arrayOfPoints[0][1]);
                
                for (i = 1, k = arrayOfPoints.length; i < k; i = i + 1) {
                    ctx.lineTo(arrayOfPoints[i][0], arrayOfPoints[i][1]);
                }
                
                ctx.lineTo(arrayOfPoints[0][0], arrayOfPoints[0][1]);
                
                if (flag === "stroke") {
                    ctx.strokeStyle = style;
                    ctx.stroke(); // обводим фигуры
                    ctx.closePath(); // закончили рисовать
                } else if (flag === "fill") {
                    ctx.fillStyle = style;
                    ctx.fill();
                    ctx.closePath();
                }
            }
        },
        rect: function (arrayOfPoints, style, flag) {
            "use strict";
            var ctx = chessClock.canvas.ctx();
	        if (arguments.length === 3 && arrayOfPoints.length === 2) {
                //ctx.fillStyle = style;
                //ctx.strokeStyle = style;
                ctx.beginPath();
                if (flag === "stroke") {
                    ctx.strokeStyle = style;
                    ctx.strokeRect(
                        arrayOfPoints[0][0],
                        arrayOfPoints[0][1],
                        arrayOfPoints[1][0],
                        arrayOfPoints[1][1]
                    );
                } else if (flag === "fill") {
                    ctx.fillStyle = style;
                    ctx.fillRect(
                        arrayOfPoints[0][0],
                        arrayOfPoints[0][1],
                        arrayOfPoints[1][0],
                        arrayOfPoints[1][1]
                    );
	            }
                ctx.closePath();
        
            }
        },
        clearRect: function (coords) {
            "use strict";
            if (coords.length === 2) {
                chessClock.canvas.ctx().
                    clearRect(coords[0][0], coords[0][1], coords[1][0], coords[1][1]);
            } else {
                window.alert("Error in clearRect function!");
            }
        },
        genView: function () {
            "use strict";
            var rect = chessClock.draw.rect,
                shape = chessClock.draw.shape,
                coords = chessClock.canvas.coords;
            shape(coords.outerBox(), "#FF6E8B", "stroke");
            rect(coords.statusLine(), "#5D4BFF", "stroke");
            rect(coords.leftButtonSmall(), "#FFDD00", "fill");
            rect(coords.rightButtonSmall(), "#FFDD00", "fill");
            rect(coords.leftPanel(), "#82B2FF", "fill");
            rect(coords.rightPanel(), "#F3FF87", "fill");
            rect(coords.ctrlLeftPanel(), "#5328FF", "stroke");
            rect(coords.ctrlRightPanel(), "#5328FF", "stroke");
            rect(coords.ctrlLeftPanelAxis(), "#82B2FF", "fill");
            rect(coords.ctrlRightPanelAxis(), "#F3FF87", "fill");

           //Digits on the left panel
            rect(coords.placeForDigit_1(), "#FFDCFD", "fill");
            rect(coords.placeForDigit_2(), "#FFDCFD", "fill");
            rect(coords.placeForDigit_3(), "#FFDCFD", "fill");
            rect(coords.placeForDigit_4(), "#FFDCFD", "fill");

           //Digits on the right panel
            rect(coords.placeForDigit_5(), "#FFC75F", "fill");
            rect(coords.placeForDigit_6(), "#FFC75F", "fill");
            rect(coords.placeForDigit_7(), "#FFC75F", "fill");
            rect(coords.placeForDigit_8(), "#FFC75F", "fill");
        },
        drawNumber: function (coords, number) {
            "use strict";
            var whichSegFill = [
            //Each array contains flags for drawing numbers in next order:
         /* => 0 */ [ "fill", "stroke", "fill", "fill", "fill", "fill", "fill" ],
         /* => 1 */ [ "stroke", "stroke", "stroke", "stroke", "fill", "stroke", "fill" ],
         /* => 2 */ [ "fill", "fill", "fill", "stroke", "fill", "fill", "stroke" ],
         /* => 3 */ [ "fill", "fill", "fill", "stroke", "fill", "stroke", "fill" ],
         /* => 4 */ [ "stroke", "fill", "stroke", "fill", "fill", "stroke", "fill" ],
         /* => 5 */ [ "fill", "fill", "fill", "fill", "stroke", "stroke", "fill" ],
         /* => 6 */ [ "fill", "fill", "fill", "fill", "stroke", "fill", "fill" ],
         /* => 7 */ [ "fill", "stroke", "stroke", "stroke", "fill", "stroke", "fill" ],
         /* => 8 */ [ "fill", "fill", "fill", "fill", "fill", "fill", "fill" ],
         /* => 9 */ [ "fill", "fill", "fill", "fill", "fill", "stroke", "fill" ]
                ],
                i,
                k;
    
            for (i = 0, k = coords.length; i < k; i = i + 1) {
                chessClock.draw.shape(coords[i], "#FF3741", whichSegFill[number][i]);
            }
        },
        displayTime: function (coords, numWhichDisplay) {
            "use strict";
            var i,
                k;
            for (i = 0, k = numWhichDisplay.length; i < k; i = i + 1) {
                chessClock.draw.drawNumber(coords[i], numWhichDisplay[i]);
            }
        }
    },
    something: 1
};

function Player(name, time) {
    "use strict";
    this.name = name;
    this.time = time;
}

Player.prototype.play = function () {
    "use strict";
    this.time -= 1;
};

Player.prototype.convertTime = function (timeInSec) {
    "use strict";
    var min = Math.floor(timeInSec / 60),
        sec = timeInSec % 60;
    return [
        Math.floor(min / 10),
        min % 10,
        Math.floor(sec / 10),
        sec % 10
    ];
};

var mediator = {
    mySetTimeout: (function () {
        "use strict";
        var index = 0;
        return function (variable) {
            index = variable || index;
            return index;
        };
    }()),
    counter: (function () {
        "use strict";
        var flag = false;
        return function () {
            flag = !flag;
            return flag;
        };
    }()),
    flag: true,
    players: [],
    time:  function () {
        "use strict";
        var result = window.parseInt(window.prompt("Input chess party time duration in minutes: 1 - 199")) / 2;
        if (result > 0 && result <= 199) {
            return result * 60;
        } else {
            mediator.time();
        }
    },
    load: function () {
        "use strict";
        if (!this.players.length) {
            var time = this.time();
            this.players.push(new Player("White", time));
            this.players.push(new Player("Black", time));
        }
    },
    onkeypress: function (event) {
        "use strict";
        if (event.keyCode === 32) {
            var listener = function funcForSetTimeout() {
                    if (mediator.players[0].time > 0 && mediator.players[1].time > 0) {
                    //console.log("1 sec passed!");
                        if (mediator.flag) {
                            mediator.players[0].play();
                            displayTimeP1(mediator.players[0].time);
                        } else if (!mediator.flag) {
                            mediator.players[1].play();
                            displayTimeP2(mediator.players[1].time);
                        }
                        clearTimeout(mediator.mySetTimeout());
                        mediator.mySetTimeout(setTimeout(funcForSetTimeout, 1000));
                    } else {
                        clearTimeout(mediator.mySetTimeout());
                    }
                };
            mediator.mySetTimeout(setTimeout(listener, 1000));
          //console.log("Start %d",  mediator.mySetTimeout());

        }
    },
    onkeypress2: function (event) {
        "use strict";
        if (event.keyCode === 32) {
        //change buttons state
            if (mediator.flag) {
                rightButtonOn();
            } else {
                leftButtonOn();
            }
            mediator.flag = !mediator.flag;
        }
    }
};
function displayTimeP1(time) {
    "use strict";
   //clear the position for digits
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_1());
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_2());
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_3());
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_4());
   //draw the places for digits
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_1(), "#FFDCFD", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_2(), "#FFDCFD", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_3(), "#FFDCFD", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_4(), "#FFDCFD", "fill");
   //show the time
    chessClock.draw.displayTime([chessClock.canvas.coords.calc_7Seg_Coords(1),
                              chessClock.canvas.coords.calc_7Seg_Coords(2),
                              chessClock.canvas.coords.calc_7Seg_Coords(3),
                              chessClock.canvas.coords.calc_7Seg_Coords(4)],
                              Player.prototype.convertTime.call(null, time));
}
function displayTimeP2(time) {
    "use strict";
   //clear the position for digits
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_5());
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_6());
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_7());
    chessClock.draw.clearRect(chessClock.canvas.coords.placeForDigit_8());
   //draw the places for digits
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_5(), "#FFC75F", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_6(), "#FFC75F", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_7(), "#FFC75F", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.placeForDigit_8(), "#FFC75F", "fill");
   //show the time
    chessClock.draw.displayTime([chessClock.canvas.coords.calc_7Seg_Coords(5),
                              chessClock.canvas.coords.calc_7Seg_Coords(6),
                              chessClock.canvas.coords.calc_7Seg_Coords(7),
                              chessClock.canvas.coords.calc_7Seg_Coords(8)],
                              Player.prototype.convertTime.call(null, time));
}

function rightButtonOn() {
    "use strict";
    chessClock.draw.clearRect(chessClock.canvas.coords.leftButtonBig(), "#FFDD00", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.leftButtonSmall(), "#FFDD00", "fill");
    chessClock.draw.clearRect(chessClock.canvas.coords.rightButtonBig(), "#FFDD00", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.rightButtonBig(), "#FFDD00", "fill");
}

function leftButtonOn() {
    "use strict";
    chessClock.draw.clearRect(chessClock.canvas.coords.rightButtonBig(), "#FFDD00", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.rightButtonSmall(), "#FFDD00", "fill");
    chessClock.draw.clearRect(chessClock.canvas.coords.leftButtonBig(), "#FFDD00", "fill");
    chessClock.draw.rect(chessClock.canvas.coords.leftButtonBig(), "#FFDD00", "fill");
}

window.onload = function () {
    "use strict";
    mediator.load();
    chessClock.canvas.create();
    chessClock.draw.genView();
    chessClock.draw.displayTime([chessClock.canvas.coords.calc_7Seg_Coords(1),
                                 chessClock.canvas.coords.calc_7Seg_Coords(2),
                                 chessClock.canvas.coords.calc_7Seg_Coords(3),
                                 chessClock.canvas.coords.calc_7Seg_Coords(4)],
                                 Player.prototype.convertTime.call(
            null,
            mediator.players[0].time
        ));
    chessClock.draw.displayTime([chessClock.canvas.coords.calc_7Seg_Coords(5),
                                 chessClock.canvas.coords.calc_7Seg_Coords(6),
                                 chessClock.canvas.coords.calc_7Seg_Coords(7),
                                 chessClock.canvas.coords.calc_7Seg_Coords(8)],
                                 Player.prototype.convertTime.call(
            null,
            mediator.players[1].time
        ));

    document.addEventListener("keydown", mediator.onkeypress);
    document.addEventListener("keydown", mediator.onkeypress2);
};