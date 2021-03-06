//$('document').ready(() => { //unnecessary for now
// popup control functions
let nameInputDiv = $('#name-input');
let nameinput = $('form > input');
let submitName = $('#name-input form button');
let nameFeed = $('.nameFeed');
const logs = console.log;

// Selected DOM gameboard items & items needed to feed to the gameboard buttons
const items = $('.item');
const icons1 = ['☺','☺','☆','★','♡','❤'];
const icons2 = ['1','2','3','4','5','6'];
const icons = icons2;

const slotsLngth = items.length;
var gfxLngth = icons.length;
logs(slotsLngth + ':All slots.' + gfxLngth + ':Icons(gfx)count');
// const icons = icons1.concat(icons2);

// variables for the for loop to get a range of random numbers
var z = gfxLngth;
const randValue = () => {
    let x = Math.floor((Math.random() * z) + 0);
    return x;

};
let randValueNi = (high, low) => {
    let xx = Math.floor((Math.random() * high) + low);
        return xx;

};

const togameboard = []; //for use in generating gameboard on each load
const firstZero = []; // *** I used this arr to limit 0 index from pushing more than once, it still did not work 100% with the randomValue ...
const playLog = []; //for player in-game only
const randomLog = []; //used for randomization checking
const timerLog = []; //to accurately account for clicks similar to timestamp
const totalPoints = [];

nameInputDiv.toggleClass('hidden');
nameInputDiv.toggleClass('popup');

// both actions should return name input and remove popup
nameinput.change(() => {
//    nameInputDiv.toggleClass('hidden');
    nameInputDiv.toggleClass('popup');
    nameFeed[1].html(nameinput.val());

});

/* standard BUTTONS */
// the submit button behaviour
submitName.click((event) => {
    nameInputDiv.toggleClass('popup');
    event.preventDefault();

});

// the style options buttons
$('#s1').click(() => {
    $('#gamearea').removeClass('style2');
    $('#gamearea > div').removeClass('style2');
    $('#gamearea > div > div').removeClass('style3');

});

$('#s2').click(() => {
    $('#gamearea > div > div').removeClass('style3');
    $('#gamearea').addClass('style2');
    $('#gamearea > div').addClass('style2');

});

$('#s3').click(() => {
    $('#gamearea').addClass('style2');
    $('#gamearea').removeClass('style2');
    $('#gamearea > div').removeClass('style2');
    $('#gamearea > div > div').addClass('style3');

});

// reset gameboard
$('#reset').click(() => {
    items.removeClass('newPlay');
    clearInterval(setTimer);

    $('#timer').text(0);
    $('#score').text(0);
//    setTimer;

    while (playLog.length > 0) {
        playLog.pop();

    }

});

/*  set a timer after first click which resets to 0 on the second click && set the action & scoring logic for each two clicks */

/*    let scoreCount = ScoreTrack. (timer) {
        return .1 * this.moveTimespan();

    }*/

let startTimer = () => {
    //  const d = new Date();
    //  const n = d.getSeconds();
    let x = document.getElementById('timer');
    let y = x.innerHTML;
    let z = parseInt(y);
    z+=1;
    //   logs(y + ' is this giving me the 0?');
    x.innerHTML= z;
    //    x = parseInt(x);

};

// add the onlcick function to the gameBoard elements
for (let i= 0; i <= items.length; i++) {
        $('#'+i).click(() => {
            newPlay(i);

        });

    }

//feed input name to display size as typing
nameinput.on('keyup', () => {
    nameFeed.html(nameinput.val());

});

/*let tgbcheck = togameboard.find(1);
logs(tgbcheck + 'find togameboard');*/

// to attempt to eliminate duplicate random numbers before pushing to the gameBoard
const getGameboard = togameboard.forEach((ret) => {
            logs(ret + " frm getGameboard");
                if (togameboard > 0 && ret == randValue()) {
                    return ret;
                }
            return false;
        });

const setTimer = setInterval(startTimer, 1000);

const newPlay = (x) => { // the play controls and points function

    let item = $('#'+x);
    let moves = playLog.length;

    if (moves < 1 || moves % 2 == 0) {
        //restart timer for each play
        $('#timer').html(0);

        // mark this play as recorded
        item.addClass('newPlay');
        playLog.push(item);
        setTimer;
        logs(item['0'].id + ' console feed id# frm key data.');

      }
      else {
          clearInterval(setTimer);

    }

    if (moves < 1 /*2 && moves % 2 != 0*/) {
        logs('First move now played...')

        }
      else {
        while (moves < items.length && (item.hasClass('newPlay') === false)) {
                  playLog.forEach((i) => {
                      logs(i['0'].id, item);

                      if (item['0'].id === i['0'].id || item['0'].innerHTML != i['0'].innerHTML) {
                        alert('invalid play');
                        item.removeClass('newPlay');
                      }
                      else {
                        if (moves % 2 != 0) {
                          clearInterval(setTimer);

                          alert('Two Matched *!');

                          playLog.push(item);
                          item.addClass('newPlay');

                          logs(scoreTrack + ' is what scoreTrack returned');
                          let x = document.getElementById('timer').innerText;
                          x = x.value;
                          logs(`The current value of timer... is ${x}`);
                          let playPoints = $('#score').text(1000 - x*2);
                          playPoints;
                          totalPoints.push(1000-x*2);
                          logs(`${totalPoints} is total point `);

                        }
                      }


                  });

                  break;

              };

          }

    };

//timer is to start the count from the click and moveTimeSpan picks up after the second click to push time to the scoreCount calculator
class Get {
    constructor(timer, points) {
        this.timer = timer;
        this.points = points;
    }

}

var scoreTrack = new Get('',''); // for to $('#timer').html()

//$(document).ready(() => { // unnecessary for now

// append each of the given icons to a button on the gameboard twice in random sequence. The random return can only be controlled by a range starting from 0. So, it is not absolutely possible to limit the reccurences with this Javascript method unless maybe I limit the range from 0 to 2 and restart the loop every 2 pushes while pushing them all to an array and popping the two that already pushed. I attempted to push a random number from [0 to desired length] to an array replace any additional copy until it is complete. It didn't work because it kept looping and crashed so I had to just let it go without stressin for unique returns only. A good way may be to generate a first half randomly, and then pull values from a duplicate array to randomize the remaining half using the original values

let halfBoard = slotsLngth/2;
for (let x = 0; x < halfBoard; x++) { // ***I have simplified this without need for the longer code I had before. It still does not give a perfect variety of random options between a set range, but I suppose this is something I cannot evaluate with this method.
    let w = randValue();
    randomLog.push(w); logs(randomLog + " random generated log.");

    if (togameboard.length == 0) {
        togameboard.push(w);
        items[x].append(icons[w]);
        continue;
    } // *** it worked perfectly one time but not consistently

    if (togameboard.length > 0 && getGameboard === false ) {
        continue;
      } else {
          togameboard.push(w);
          logs(togameboard + " all made it to the gameboard.");
          items[x].append(icons[w]);

          //duplicate the values of the first half of the gameboard to create matches for the game to wor
          while (x == (slotsLngth/2 - 1) && togameboard.length != slotsLngth) {
             togameboard.forEach((i) => {
                 togameboard.push(i);
             });
          }
    }

}

// to create second half of gameboard and randomize I will pull from the previous for loop which this will be dependent on because the values were already duplicated for use in the gameboard
for (let x = halfBoard; x < slotsLngth; x++) {
    let getRandom = randValueNi(x,(slotsLngth - slotsLngth));
    logs(getRandom + ' current random from togameboard'); // since this random value return does not work well I may have to feed the values from the ones already pushed to the DOM

//    items[x].append(togameboard[getRandom] + 'temp');
//    logs(getRandom);

}

// use DOM instead of Math.Random to create matching items
for (let i = 0; i < halfBoard; i++) {
    let x = halfBoard;
    items[i+x].append(items[i].innerText);
}
