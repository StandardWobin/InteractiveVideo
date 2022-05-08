<template>
  <div>
    <Player :plan="plan"></Player>
  </div>
</template>

<script>
import Player from './components/Player.vue'

export default {
  name: 'App',

    computed: {
    plan() {
      return {
        _src: "/videos/intro.mp4",
        _mime: "video/mp4",
        _amount : 3,
        _trigger: 1000,
        a: {
          _src: "/videos/a.mp4",
          _mime: "video/mp4",
          _amount : 2,
          _trigger: 1000,
          a: {
            _src: "/videos/a.mp4",
            _mime: "video/mp4",
            _amount : 1,
            _trigger: 1000,
            a: {
                _src: "/videos/a.mp4",
                _mime: "video/mp4",
                _amount : 0,
                _trigger: 1000,
              },
            },
          b: {
            _src: "/videos/b.mp4",
            _mime: "video/mp4",
            _amount : 1,
            _trigger: 1000,
            a: {
                _src: "/videos/a.mp4",
                _mime: "video/mp4",
                _amount : 0,
                _trigger: 1000,
              },
          },
        },
        b: {
          _src: "/videos/b.mp4",
          _mime: "video/mp4",
          _amount : 2,
          _trigger: 1000,
          a: {
              _src: "/videos/a.mp4",
              _mime: "video/mp4",
              _amount : 1,
              _trigger: 1000,
              a: {
                _src: "/videos/a.mp4",
                _mime: "video/mp4",
                _amount : 0,
                _trigger: 1000,
              },
            },
          b: {
            _src: "/videos/b.mp4",
            _mime: "video/mp4",
            _amount : 1,
            _trigger: 1000,
            a: {
                _src: "/videos/a.mp4",
                _mime: "video/mp4",
                _amount : 0,
                _trigger: 1000,
              },
          },
        },
        c: {
          _src: "/videos/c.mp4",
          _mime: "video/mp4",
          _amount : 2,
          _trigger: 1000,
          a: {
              _src: "/videos/a.mp4",
              _mime: "video/mp4",
              _amount : 1,
              _trigger: 1000,
              a: {
                _src: "/videos/a.mp4",
                _mime: "video/mp4",
                _amount : 0,
                _trigger: 1000,
              },
            },
          b: {
            _src: "/videos/b.mp4",
            _mime: "video/mp4",
            _amount : 1,
            _trigger: 1000,
            a: {
              _src: "/videos/a.mp4",
              _mime: "video/mp4",
              _amount : 0,
              _trigger: 1000,
            },
          },
        }
      };
    },
  },


  components: {
    Player
  }
}
</script>

<style>

</style>
