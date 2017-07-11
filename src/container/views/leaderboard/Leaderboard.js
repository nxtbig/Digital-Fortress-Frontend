import { mapActions } from 'vuex'
export default {
  created: function () {
    this.setToolbarTitle('Leaderboard')
  },
  methods: {
    ...mapActions(['setToolbarTitle'])
  },
  data () {
    return {
      search: '',
      pagination: {},
      headers: [
        {
          text: 'Name',
          left: true,
          value: 'name'
        },
        { text: 'Email', value: 'email' },
        { text: 'Round', value: 'round' },
        { text: 'Last Solved on', value: 'last_solved' }
      ],
      items: [
        {
          value: false,
          name: 'Adarsh Singh',
          email: 'singhadarsh31@gmail.com',
          round: 2,
          last_solved: 'XYZ'
        },
        {
          value: false,
          name: 'Arka Roy',
          email: 'arkaroy@gmail.com',
          round: 1,
          last_solved: 'XYZ'
        }
      ]
    }
  }
}
