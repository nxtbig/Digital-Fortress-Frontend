import { mapActions } from 'vuex'
var Wheenav = require('wheelnav')
var colorpalette = require('colorpalette');
var icon = require('raphael')
export default {
  created: function () {
    this.setToolbarTitle('Round Overview')
  },
  methods: {
    ...mapActions(['setToolbarTitle']),
    lol: function (data) {
      console.log('FFFFFFFFFFFF', data)
    }
  },
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
         position: {lat: 10.0, lng: 10.0}
       }, {
         position: {lat: 11.0, lng: 11.0}
       }],
       paths: [
         [ {lat: 1.380, lng: 103.800}, {lat:1.380, lng: 103.810}, {lat: 1.390, lng: 103.810}, {lat: 1.390, lng: 103.800}, {lat: 1.390, lng: 103.700} ]
       ],
       e2: 1
    }
  }
}
