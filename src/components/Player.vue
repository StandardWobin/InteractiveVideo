<template>
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
      <button
        v-if="showbutton && actual_plan.a !== undefined"
        class="abutton"
        @click="changevideo('a')"
      >
        
      </button>
      <button
        v-if="showbutton && actual_plan.b !== undefined"
        class="bbutton"
        @click="changevideo('b')"
      >
        
      </button>
      <button
        v-if="showbutton && actual_plan.c !== undefined"
        class="cbutton"
        @click="changevideo('c')"
      >
        
      </button>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";

export default {
  name: "Player",
  props: {
    videoPlayer,
    plan: Object,
  },
  data() {
    return {
      actual_plan: {},
      showbutton: true,

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
    (this.actual_plan = this.plan),
      this.player.src({
        type: this.actual_plan._mime,
        src: this.actual_plan._src,
      });
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
      // triggered after video finished, auto loads next video if it was defined
      console.log(event);
      if (this.actual_plan._forceNext !== undefined) {
        if (
          this.actual_plan._forceNext == "a" ||
          this.actual_plan._forceNext == "b" ||
          this.actual_plan._forceNext == "c"
        ) {
          this.changevideo(this.actual_plan._forceNext);
        }
      }
    },
    onPlayerWaiting(event) {
      console.log(event);
    },

    changevideo(option) {
      // changes the player to a deeper level
      if (option === "a") {
        this.actual_plan = this.actual_plan.a;
      } else if (option === "b") {
        this.actual_plan = this.actual_plan.b;
      } else if (option === "c") {
        this.actual_plan = this.actual_plan.c;
      }
      console.log("change video to " + this.actual_plan._src);
      this.player.pause();
      this.player.src({
        type: this.actual_plan._mime,
        src: this.actual_plan._src,
      });
      this.player.load();
      this.showbutton = false;
      this.player.play();
    },
    // listen event
    onPlayerPlay() {
      console.log();
    },
    onPlayerPause() {
      console.log();
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    onPlayerLoadeddata() {
      console.log();
    },
    onPlayerPlaying() {
      console.log();
    },

    onPlayerCanplay() {
      console.log();
    },
    onPlayerTimeupdate() {
      // console.log("player current update state", event);
      if (this.getTime() * 100 >= this.plan._trigger) {
        this.showbutton = true;
      } else {
        this.showbutton = false;
      }
    },

    onPlayerCanplaythrough() {
      console.log("play run finished");
    },

    // player is ready
    playerReadied() {
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
  position: relative;
}

.playerbox > .abutton {
  position: absolute; /* Sit on top of the page content */
  background-repeat: no-repeat;
  border: none;
  top: 38%;
  left: 25%;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 15%;
  height: 20%;
  z-index: 9999;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0);
}


.playerbox > .bbutton {
  position: absolute; /* Sit on top of the page content */
  background-repeat: no-repeat;
  border: none;
  top: 38%;
  left: 45%;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 15%;
  height: 20%;
  z-index: 9999;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0);
}

.playerbox > .cbutton {
  position: absolute; /* Sit on top of the page content */
  background-repeat: no-repeat;
  border: none;
  top: 38%;
  left: 65%;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 15%;
  height: 20%;
  z-index: 9999;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0);
}



.playerbox > .abutton:hover {
  position: absolute; /* Sit on top of the page content */
  background-repeat: no-repeat;
  border: none;
  top: 38%;
  left: 25%;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 15%;
  height: 20%;
  z-index: 9999;
  border-radius: 12px;
  background-color: rgba(128, 0, 0, 0.74);
}


.playerbox > .bbutton:hover {
  position: absolute; /* Sit on top of the page content */
  background-repeat: no-repeat;
  border: none;
  top: 38%;
  left: 45%;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 15%;
  height: 20%;
  z-index: 9999;
  border-radius: 12px;
  background-color: rgba(128, 0, 0, 0.74);
}

.playerbox > .cbutton:hover {
  position: absolute; /* Sit on top of the page content */
  background-repeat: no-repeat;
  border: none;
  top: 38%;
  left: 65%;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 15%;
  height: 20%;
  z-index: 9999;
  border-radius: 12px;
  background-color: rgba(128, 0, 0, 0.74);
}



</style>
