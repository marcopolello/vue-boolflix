var app = new Vue({
  el: '#app',
  data: {
    urlmovie: 'https://api.themoviedb.org/3/search/movie/?api_key=',
    urltv: 'https://api.themoviedb.org/3/search/tv/?api_key=',
    api_key: '295f81ea91a932d66a84c22c7c2f5ec6',
    listaFilm: [],
    listaSerieTv: [],
    inputSearch: '',
    stella: 'fas fa-star',
    votoBasso: 'fas fa-star-half'
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
    vote: function (voto) {
      let stelle = []; //andrà a contenere il numero esatto di stelle ad ogni ciclo
      let length = Math.round(voto / 2); //voto corrisponde al voto dall'API
      for (let i = 0; i < length; i++) {
        stelle.push('stella'); //pusho elemento segna posto x stella
      }
      return stelle //mi torna sempre un array
    },
  }
});
