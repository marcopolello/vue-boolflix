var app = new Vue({
  el: '#app',
  data: {
    urlmovie: 'https://api.themoviedb.org/3/search/movie/?api_key=',
    urltv: 'https://api.themoviedb.org/3/search/tv/?api_key=',
    api_key: '295f81ea91a932d66a84c22c7c2f5ec6',
    listaFilm: [],
    listaSerieTv: [],
    inputSearch: '',
  },
  methods:{
    // chiamata API
    search: function () {
      const requestOne = axios.get(this.urlmovie + this.api_key + '&language=it_IT&query=' + this.inputSearch);
      const requestTwo = axios.get(this.urltv + this.api_key + '&language=it_IT&query=' + this.inputSearch);
      // richiesta API x film
      requestOne.then(responseOne => {
      this.listaFilm = responseOne.data.results;
      })
      // richiesta API x serietv
      requestTwo.then(responseTwo => {
      this.listaSerieTv = responseTwo.data.results;
      })
    },
    // votoFilm / 2 e arrotondato per eccesso
    /* filmVote: function (i) {
      let voto = this.listaFilm[i].vote_average;
      return Math.round(voto / 2);
    },
    //votoSerieTV
    voteTv: function (i) {
      let voto = this.listaSerieTv[i].vote_average;
      return Math.round(voto / 2);
    }, */

    // funzione: arrotondare x eccesso e impostare voto  da 1 a 5
    vote: function (voto) {
      return Math.round(voto / 2);
    },
  }
});
