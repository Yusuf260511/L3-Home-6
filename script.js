let body = document.body;
let now = new Date();
let sound = new Audio('audio/audio.mp3');
let sound2 = new Audio('audio/audio.mp3');
let time = document.createElement("div");
body.appendChild(time);
    let hours = document.createElement("div");
    time.appendChild(hours);
        let htp = document.createElement("text");
        hours.appendChild(htp);
            htp.textContent = `${now.getHours()}`;
        let htt = document.createElement("text");
        hours.appendChild(htt);
            htt.textContent = `Hours`;
    let minutes = document.createElement("div");
    time.appendChild(minutes);
        let mtp = document.createElement("text");
        minutes.appendChild(mtp);
            mtp.textContent = `${now.getMinutes()}`;
        let mtt = document.createElement("text");
        minutes.appendChild(mtt);
            mtt.textContent = `Minutes`;
    let seconds = document.createElement("div");
    time.appendChild(seconds);
        let stp = document.createElement("text");
        seconds.appendChild(stp);
            stp.textContent = `${now.getSeconds()}`;
        let stt = document.createElement("text");
        seconds.appendChild(stt);
stt.textContent = `Seconds`;

setInterval(() => {
    let now = new Date();
    htp.textContent = `${now.getHours()}`;
    htt.textContent = `Hours`;

    mtp.textContent = `${now.getMinutes()}`;
    mtt.textContent = `Minutes`;

    stp.textContent = `${now.getSeconds()}`;
    stt.textContent = `Seconds`;
}, 1000);

setInterval(() => {
    sound.play();
}, 25);

body.style.backgroundImage = "url('img/background.png')"
body.style.backgroundSize = '100%';
body.style.backgroundRepeat = 'no-repeat';
body.style.color = 'white';
body.style.fontFamily = '"Inter", serif'

time.style.width = '850px';
time.style.height = '300px';
time.style.backgroundImage = "url('img/bg2.png')";
time.style.boxShadow = "-2px 12px 12px 0px #00000040";
time.style.marginRight = 'auto';
time.style.marginLeft = 'auto';
time.style.marginTop = '200px';
time.style.boxSizing = 'border-box';
time.style.padding = '33px 36px 33px 36px';
time.style.display = 'flex';
time.style.justifyContent = 'space-between';

hours.style.width = '221px';
hours.style.height = '235px';
hours.style.backgroundColor = '#050505E5';
hours.style.boxShadow = '8px 9px 22px 1px #00000099';
hours.style.borderRadius = '9px';
hours.style.display = 'flex';
hours.style.justifyContent = 'center';
hours.style.alignItems = 'center';
hours.style.flexDirection = 'column';
hours.style.gap = '16px';

minutes.style.width = '221px';
minutes.style.height = '235px';
minutes.style.backgroundColor = '#050505E5';
minutes.style.boxShadow = '8px 9px 22px 1px #00000099';
minutes.style.borderRadius = '9px';
minutes.style.display = 'flex';
minutes.style.justifyContent = 'center';
minutes.style.alignItems = 'center';
minutes.style.flexDirection = 'column';
minutes.style.gap = '16px';

seconds.style.width = '221px';
seconds.style.height = '235px';
seconds.style.backgroundColor = '#050505E5';
seconds.style.boxShadow = '8px 9px 22px 1px #00000099';
seconds.style.borderRadius = '9px';
seconds.style.display = 'flex';
seconds.style.justifyContent = 'center';
seconds.style.alignItems = 'center';
seconds.style.flexDirection = 'column';
seconds.style.gap = '16px';seconds

htp.style.fontSize = '90px';
htp.style.fontWeight = '400';

htt.style.fontSize = '19px';
htt.style.fontWeight = '400';

mtp.style.fontSize = '90px';
mtp.style.fontWeight = '400';

mtt.style.fontSize = '19px';
mtt.style.fontWeight = '400';

stp.style.fontSize = '90px';
stp.style.fontWeight = '400';

stt.style.fontSize = '19px';
stt.style.fontWeight = '400';