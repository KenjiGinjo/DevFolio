const portraitRelatedFuntion = {
  init() {
    this.avatarHandle();
    this.programmingTimeHandle();
  },
  programmingTimeHandle() {
    const timeContainer = document.getElementById("time-container");
    const StartProgrammingDate = new Date("2015-07-01").getTime();

    const formatDuration = (seconds) => {
      const time = {
          year: 31536000,
          day: 86400,
          hour: 3600,
          minute: 60,
          second: 1,
        },
        res = [];
      if (seconds === 0) return "now";

      for (let key in time) {
        if (seconds >= time[key]) {
          let val = Math.floor(seconds / time[key]);
          res.push((val += val > 1 ? " " + key + "s" : " " + key));
          seconds = seconds % time[key];
        }
      }
      return res.length > 1
        ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
        : res[0];
    };
    setInterval(() => {
      timeContainer.innerText = formatDuration(
        Math.floor((new Date().getTime() - StartProgrammingDate) / 1000)
      );
    }, 1000);
  },
  avatarHandle() {
    const avatars = [
      "./images/avatar_01.png",
      "./images/avatar_02.png",
      "./images/avatar_03.png",
    ];
    const avatarRandom = () =>
      avatars[Math.floor(Math.random() * avatars.length)];
    const portraitEle = document.getElementById("portrait");
    portraitEle.src = avatarRandom();
    portraitEle.onclick = function (even) {
      let src = avatarRandom();
      while (even.target.src.search(src) !== -1) {
        src = avatarRandom();
      }
      even.target.src = src;
    };
  },
};
portraitRelatedFuntion.init();
