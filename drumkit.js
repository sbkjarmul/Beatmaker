class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    //SOUNDS
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.percAudio = document.querySelector(".perc-sound");
    this.tomAudio = document.querySelector(".tom-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    //SOUNDS NAMES
    this.kickName = document.querySelector(".kick-track .track-name");
    this.snareName = document.querySelector(".snare-track .track-name");
    this.percName = document.querySelector(".perc-track .track-name");
    this.tomName = document.querySelector(".tom-track .track-name");
    this.hihatName = document.querySelector(".hihat-track .track-name");

    this.playBtn = document.querySelector(".play");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
    this.sliderValue = document.querySelector("#tempo-value");

    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
  }

  repeat() {
    let step = this.index % 4;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over the bars

    activeBars.forEach((bar) => {
      if (bar.classList.contains("active")) {
        bar.classList.add("music");
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("perc-pad")) {
          this.percAudio.currentTime = 0;
          this.percAudio.play();
        }
        if (bar.classList.contains("tom-pad")) {
          this.tomAudio.currentTime = 0;
          this.tomAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });

    activeBars.forEach((bar) => {});
    this.index++;
  }

  start() {
    const interval = (60 / this.bpm) * 1000;
    if (this.isPlaying) {
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }

  //UPDATE BUTTON
  updateBtn() {
    if (this.isPlaying) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    }
  }
  //Update Slider
  changeTempo(e) {
    this.sliderValue.innerText = e.target.value;
  }
  changeValue(e) {
    this.bpm = e.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    const playBtn = document.querySelector(".play");

    if (playBtn.classList.contains("active")) {
      this.start();
    }
  }

  //ACTIVE PAD
  activePad() {
    this.classList.toggle("active");
  }

  //CHANGE KICK SOUND
  changeKick(e) {
    const sound = e.value;
    switch (sound) {
      case 1:
        this.kickAudio.src = "./sounds/kick-808.wav";
        this.kickName.innerText = "808";
        break;
      case 2:
        this.kickAudio.src = "./sounds/kick-acoustic01.wav";
        this.kickName.innerText = "Acoustic 01";
        break;
      case 3:
        this.kickAudio.src = "./sounds/kick-acoustic02.wav";
        this.kickName.innerText = "Acoustic 02";
        break;
      case 4:
        this.kickAudio.src = "./sounds/kick-big.wav";
        this.kickName.innerText = "Big";
        break;
      case 5:
        this.kickAudio.src = "./sounds/kick-classic.wav";
        this.kickName.innerText = "Classic";
        break;
      case 6:
        this.kickAudio.src = "./sounds/kick-cultivator.wav";
        this.kickName.innerText = "Cultivator";
        break;
      case 7:
        this.kickAudio.src = "./sounds/kick-deep.wav";
        this.kickName.innerText = "Deep";
        break;
      case 8:
        this.kickAudio.src = "./sounds/kick-dry.wav";
        this.kickName.innerText = "Dry";
        break;
      case 9:
        this.kickAudio.src = "./sounds/kick-electro01.wav";
        this.kickName.innerText = "Electro 01";
        break;
      case 10:
        this.kickAudio.src = "./sounds/kick-electro02.wav";
        this.kickName.innerText = "Electro 02";
        break;
      case 11:
        this.kickAudio.src = "./sounds/kick-floppy.wav";
        this.kickName.innerText = "Floppy";
        break;
      case 12:
        this.kickAudio.src = "./sounds/kick-gritty.wav";
        this.kickName.innerText = "Gritty";
        break;
      case 13:
        this.kickAudio.src = "./sounds/kick-heavy.wav";
        this.kickName.innerText = "Heavy";
        break;
      case 14:
        this.kickAudio.src = "./sounds/kick-newwave.wav";
        this.kickName.innerText = "New Wave";
        break;
      case 15:
        this.kickAudio.src = "./sounds/kick-oldschool.wav";
        this.kickName.innerText = "Old School";
        break;
      case 16:
        this.kickAudio.src = "./sounds/kick-plain.wav";
        this.kickName.innerText = "Plain";
        break;
      case 17:
        this.kickAudio.src = "./sounds/kick-slapback.wav";
        this.kickName.innerText = "Slapback";
        break;
      case 18:
        this.kickAudio.src = "./sounds/kick-softy.wav";
        this.kickName.innerText = "Softy";
        break;
      case 19:
        this.kickAudio.src = "./sounds/kick-stomp.wav";
        this.kickName.innerText = "Stomp";
        break;
      case 20:
        this.kickAudio.src = "./sounds/kick-tape.wav";
        this.kickName.innerText = "Tape";
        break;
      case 21:
        this.kickAudio.src = "./sounds/kick-thump.wav";
        this.kickName.innerText = "Thump";
        break;
      case 22:
        this.kickAudio.src = "./sounds/kick-tight.wav";
        this.kickName.innerText = "Tight";
        break;
      case 23:
        this.kickAudio.src = "./sounds/kick-tron.wav";
        this.kickName.innerText = "Tron";
        break;
      case 24:
        this.kickAudio.src = "./sounds/kick-vinyl01.wav";
        this.kickName.innerText = "Vinyl 01";
        break;
      case 25:
        this.kickAudio.src = "./sounds/kick-vinyl02.wav";
        this.kickName.innerText = "Vinyl 02";
        break;
      case 26:
        this.kickAudio.src = "./sounds/kick-zapper.wav";
        this.kickName.innerText = "Zapper";
        break;
    }
  }
  changeSnare(e) {
    const sound = e.value;
    console.log(this.snareName);
    switch (sound) {
      case 1:
        this.snareAudio.src = "./sounds/snare-808.wav";
        this.snareName.innerText = "808";
        break;
      case 2:
        this.snareAudio.src = "./sounds/snare-acoustic01.wav";
        this.snareName.innerText = "Acoustic 01";
        break;
      case 3:
        this.snareAudio.src = "./sounds/snare-acoustic02.wav";
        this.snareName.innerText = "Acoustic 02";
        break;
      case 4:
        this.snareAudio.src = "./sounds/snare-big.wav";
        this.snareName.innerText = "Big";
        break;
      case 5:
        this.snareAudio.src = "./sounds/snare-block.wav";
        this.snareName.innerText = "Block";
        break;
      case 6:
        this.snareAudio.src = "./sounds/snare-brute.wav";
        this.snareName.innerText = "Brute";
        break;
      case 7:
        this.snareAudio.src = "./sounds/snare-dist01.wav";
        this.snareName.innerText = "Dist 01";
        break;
      case 8:
        this.snareAudio.src = "./sounds/snare-dist02.wav";
        this.snareName.innerText = "Dist 02";
        break;
      case 9:
        this.snareAudio.src = "./sounds/snare-dist03.wav";
        this.snareName.innerText = "Dist 03";
        break;
      case 10:
        this.snareAudio.src = "./sounds/snare-electro.wav";
        this.snareName.innerText = "Electro";
        break;
      case 11:
        this.snareAudio.src = "./sounds/snare-lofi01.wav";
        this.snareName.innerText = "LoFi 01";
        break;
      case 12:
        this.snareAudio.src = "./sounds/snare-lofi02.wav";
        this.snareName.innerText = "LoFi 02";
        break;
      case 13:
        this.snareAudio.src = "./sounds/snare-modular.wav";
        this.snareName.innerText = "Modular";
        break;
      case 14:
        this.snareAudio.src = "./sounds/snare-noise.wav";
        this.snareName.innerText = "Noise";
        break;
      case 15:
        this.snareAudio.src = "./sounds/snare-pinch.wav";
        this.snareName.innerText = "Pinch";
        break;
      case 16:
        this.snareAudio.src = "./sounds/snare-punch.wav";
        this.snareName.innerText = "Punch";
        break;
      case 17:
        this.snareAudio.src = "./sounds/snare-smasher.wav";
        this.snareName.innerText = "Smasher";
        break;
      case 18:
        this.snareAudio.src = "./sounds/snare-sumo.wav";
        this.snareName.innerText = "Sumo";
        break;
      case 19:
        this.snareAudio.src = "./sounds/snare-tape.wav";
        this.snareName.innerText = "Tape";
        break;
      case 20:
        this.snareAudio.src = "./sounds/snare-vinyl01.wav";
        this.snareName.innerText = "Vinyl 01";
        break;
      case 21:
        this.snareAudio.src = "./sounds/snare-vinyl02.wav";
        this.snareName.innerText = "Vinyl 02";
        break;
    }
  }
  changePerc(e) {
    const sound = e.value;
    console.log(this.percName);
    switch (sound) {
      case 1:
        this.percAudio.src = "./sounds/perc-808.wav";
        this.percName.innerText = "808";
        break;
      case 2:
        this.percAudio.src = "./sounds/perc-chirpy.wav";
        this.percName.innerText = "Chirpy";
        break;
      case 3:
        this.percAudio.src = "./sounds/perc-hollow.wav";
        this.percName.innerText = "Hollow";
        break;
      case 4:
        this.percAudio.src = "./sounds/perc-laser.wav";
        this.percName.innerText = "Laser";
        break;
      case 5:
        this.percAudio.src = "./sounds/perc-metal.wav";
        this.percName.innerText = "Meat";
        break;
      case 6:
        this.percAudio.src = "./sounds/perc-nasty.wav";
        this.percName.innerText = "Nasty";
        break;
      case 7:
        this.percAudio.src = "./sounds/perc-short.wav";
        this.percName.innerText = "Short";
        break;
      case 8:
        this.percAudio.src = "./sounds/perc-tambo.wav";
        this.percName.innerText = "Tambo";
        break;
      case 9:
        this.percAudio.src = "./sounds/perc-tribal.wav";
        this.percName.innerText = "Tribal";
        break;
      case 10:
        this.perceAudio.src = "./sounds/perc-weirdo.wav";
        this.percName.innerText = "Weirdo";
        break;
    }
  }
  changeTom(e) {
    const sound = e.value;
    console.log(this.tomName);
    switch (sound) {
      case 1:
        this.tomAudio.src = "./sounds/tom-808.wav";
        this.tomName.innerText = "808";
        break;
      case 2:
        this.tomAudio.src = "./sounds/tom-acoustic01.wav";
        this.tomName.innerText = "Acoustic 01";
        break;
      case 3:
        this.tomAudio.src = "./sounds/tom-acoustic02.wav";
        this.tomName.innerText = "Acoustic 02";
        break;
      case 4:
        this.tomAudio.src = "./sounds/tom-analog.wav";
        this.tomName.innerText = "Analog";
        break;
      case 5:
        this.tomAudio.src = "./sounds/tom-chiptune.wav";
        this.tomName.innerText = "Chiptune";
        break;
      case 6:
        this.tomAudio.src = "./sounds/tom-fm.wav";
        this.tomName.innerText = "FM";
        break;
      case 7:
        this.tomAudio.src = "./sounds/tom-lofi.wav";
        this.tomName.innerText = "LoFi";
        break;
      case 8:
        this.tomAudio.src = "./sounds/tom-rototom.wav";
        this.tomName.innerText = "Rototom";
        break;
      case 9:
        this.tomAudio.src = "./sounds/tom-short.wav";
        this.tomName.innerText = "Short";
        break;
    }
  }
  changeHihat(e) {
    const sound = e.value;
    console.log(this.hihatName);
    switch (sound) {
      case 1:
        this.hihatAudio.src = "./sounds/hihat-808.wav";
        this.hihatName.innerText = "808";
        break;
      case 2:
        this.hihatAudio.src = "./sounds/hihat-acoustic01.wav";
        this.hihatName.innerText = "Acoustic 01";
        break;
      case 3:
        this.hihatAudio.src = "./sounds/hihat-acoustic02.wav";
        this.hihatName.innerText = "Acoustic 02";
        break;
      case 4:
        this.hihatAudio.src = "./sounds/hihat-analog.wav";
        this.hihatName.innerText = "Analog";
        break;
      case 5:
        this.hihatAudio.src = "./sounds/hihat-digital.wav";
        this.hihatName.innerText = "Digital";
        break;
      case 6:
        this.hihatAudio.src = "./sounds/hihat-dist01.wav";
        this.hihatName.innerText = "Dist 01";
        break;
      case 7:
        this.hihatAudio.src = "./sounds/hihat-dist02.wav";
        this.hihatName.innerText = "Dist 02";
        break;
      case 8:
        this.hihatAudio.src = "./sounds/hihat-electro.wav";
        this.hihatName.innerText = "Electro";
        break;
      case 9:
        this.hihatAudio.src = "./sounds/hihat-plain.wav";
        this.hihatName.innerText = "Plain";
        break;
      case 10:
        this.hihatAudio.src = "./sounds/hihat-reso.wav";
        this.hihatName.innerText = "Reso";
        break;
      case 11:
        this.hihatAudio.src = "./sounds/hihat-ring.wav";
        this.hihatName.innerText = "Ring";
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("on");
    if (e.target.classList.contains("on")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.percAudio.volume = 0;
          break;
        case "3":
          this.tomAudio.volume = 0;
          break;
        case "4":
          this.hihatAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.percAudio.volume = 1;
          break;
        case "3":
          this.tomAudio.volume = 1;
          break;
        case "4":
          this.hihatAudio.volume = 1;
          break;
      }
    }
  }
}

$(document).ready(function () {
  const drumKit = new DrumKit();

  //EVENT LISTENERS

  drumKit.pads.forEach((pad) => {
    pad.addEventListener("click", drumKit.activePad);
    pad.addEventListener("animationend", function () {
      this.classList.remove("music");
    });
  });

  drumKit.playBtn.addEventListener("click", () => {
    drumKit.start();
    drumKit.updateBtn();
  });

  drumKit.muteBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      drumKit.mute(e);
    });
  });

  drumKit.tempoSlider.addEventListener("input", function (e) {
    drumKit.changeTempo(e);
  });

  drumKit.tempoSlider.addEventListener("change", function (e) {
    drumKit.changeValue(e);
  });

  $("#kick-slider").roundSlider({
    change: function (e) {
      drumKit.changeKick(e);
    },
  });
  $("#snare-slider").roundSlider({
    change: function (e) {
      drumKit.changeSnare(e);
    },
  });
  $("#perc-slider").roundSlider({
    change: function (e) {
      drumKit.changePerc(e);
    },
  });
  $("#tom-slider").roundSlider({
    change: function (e) {
      drumKit.changeTom(e);
    },
  });
  $("#hihat-slider").roundSlider({
    change: function (e) {
      drumKit.changeHihat(e);
    },
  });
});
