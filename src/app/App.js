import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters([
    'toolbarTitle'
  ]),
  methods: {
    ...mapActions(['setToolbarTitle']),
    handleMenuClick: function (item) {
      this.$router.push(item.url)
      this.setToolbarTitle(item.title)
    }
  },
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'dashboard', url: '/' },
          { title: 'Round Overview', icon: 'lock', url: 'round' },
          { title: 'Hints', icon: 'live_help', url: 'hints' },
          { title: 'Rules and Regulation', icon: 'gavel', url: 'rules' },
          { title: 'Leaderboard', icon: 'format_list_numbered', url: 'leaderboard' }
        ],
        mini: false,
        right: null
      }
    }
}
