var app = new Vue({
  el: '#app',
  data: {
    url: 'https://api.themoviedb.org/3/search/movie/?api_key=',
    api_key: '295f81ea91a932d66a84c22c7c2f5ec6',
    listaFilm: [],
    ricercaInput: '',
  },
  mounted: function () {
    axios.get(this.url + this.api_key + '&query=ritorno+al+futuro')
    .then(risposta => {
      //console.log(risposta);
      this.listaFilm = risposta.data.results;
      console.log(this.listaFilm);
    });
  },
  methods:{

  }
});
