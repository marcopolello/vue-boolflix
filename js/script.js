var app = new Vue({
  el: '#app',
  data: {
    url: 'https://api.themoviedb.org/3/search/movie/?api_key=',
    api_key: '295f81ea91a932d66a84c22c7c2f5ec6',
    listaFilm: [],
    inputSearch: '',
  },
  methods:{
    // chiamata API
    searchMovie: function () {
      axios.get(this.url + this.api_key + '&language=it_IT&query=' + this.inputSearch)
      .then(risposta => {
        this.listaFilm = risposta.data.results;
        //console.log(this.listaFilm);
      })
    },
    // voto / 2 e arrotondato per eccesso
    filmVote: function (i) {
      let voto = this.listaFilm[i].vote_average;
      return Math.round(voto / 2);
    }
  }
});
