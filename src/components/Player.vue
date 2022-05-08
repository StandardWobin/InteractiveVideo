<template>
  <div>
    <div class="playerbox">
      <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied"
      >
      </video-player>
    <button v-if="showbutton && (actual_plan.a !== undefined)" class="abutton" @click="changevideo('a')">+</button>
    <button v-if="showbutton && (actual_plan.b !== undefined)" class="bbutton" @click="changevideo('b')">+</button>
    <button v-if="showbutton && (actual_plan.c !== undefined)" class="cbutton" @click="changevideo('c')">+</button>
    </div>
    <button @click="play()">play</button>
    <button @click="pause()">pause</button>

  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";

export default {
  name: "Player",
  props: {
    videoPlayer,
    plan : Object,
  },
  data() {
    return {
      actual_plan : {},
      showbutton: false,

      playerOptions: {
        // videojs options
        muted: true,
        language: "en",
        fluid: true,

        // playbackRates: [0.7, 1.0, 1.5, 2.0],
     
        poster: "images/intro.png",
      },
    };
  },
  mounted() {
    console.log("this is current player instance object", this.player);
    this.actual_plan = this.plan,
    this.player.src({type: this.actual_plan._mime, src:  this.actual_plan._src});
    this.player.loop(false);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    getTime() {
      return this.player.currentTime(); 
    },
    paused() {
      this.player.paused(); 
    },

    play() {
      this.player.play();
    },

    pause() {
      this.player.pause();
    },

    onPlayerEnded(event) {
      console.log(event);
    },
    onPlayerWaiting(event) {
      console.log(event);
    },
    changevideo(option) {

      if(option === "a") {
        this.actual_plan = this.actual_plan.a;
      } else if(option === "b") {
        this.actual_plan = this.actual_plan.b;
      } else if(option === "c") {
        this.actual_plan = this.actual_plan.c;
      }
      console.log("change video to " + this.actual_plan._src);
      this.player.pause();
      this.player.src({type: this.actual_plan._mime, src: this.actual_plan._src});
      this.player.load();
      this.showbutton = false;
      this.player.play();
    },
    // listen event
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    onPlayerLoadeddata(event) {
      console.log(event);
    },
    onPlayerPlaying(event) {
      console.log(event);
    },

    onPlayerCanplay(event) {
      console.log(event);
    },
    onPlayerTimeupdate(event) {
      console.log("player current update state", event);
      console.log(this.getTime()*100);
      console.log(this.actual_plan._trigger);
      if(this.getTime()*100 >= this.plan._trigger) {
        console.log("show butoons");
        this.showbutton = true;
      }
    },

    onPlayerCanplaythrough(event) {
      console.log(event);
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playerbox {
  width: 100%;
    height: 100%;

}

.abutton {
  position: fixed; /* Sit on top of the page content */
  width: 10%;
  top: 10%;
  left: 10%;
  height: 10%;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: green;
}

.abutton:hover {
  position: fixed; /* Sit on top of the page content */
  background-color: red;
  background-repeat: no-repeat;
  width: 10%;
  height: 10%;
  top: 10%;
  left: 10%;
  color: green;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
.bbutton {
  position: fixed; /* Sit on top of the page content */
  background-repeat: no-repeat;
  border: none;
  top: 10%;
  left: 20%;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 10%;
  height: 10%;
  color: green;
}

.bbutton:hover {
  position: fixed; /* Sit on top of the page content */
  background-color: red;
  top: 10%;
  left: 20%;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
.cbutton {
  position: fixed; /* Sit on top of the page content */
  top: 10%;
  left: 30%;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 10%;
  height: 10%;
  color: green;
}

.cbutton:hover {
  position: fixed; /* Sit on top of the page content */
  background-color: red;
  background-repeat: no-repeat;
  top: 10%;
  left: 30%;

  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 10%;
  height: 10%;
  color: green;
}
</style>
