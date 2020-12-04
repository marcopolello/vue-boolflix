var app = new Vue({
  el: '#app',
  data: {
    urlmovie: 'https://api.themoviedb.org/3/search/movie/?api_key=',
    urltv: 'https://api.themoviedb.org/3/search/tv/?api_key=',
    api_key: '295f81ea91a932d66a84c22c7c2f5ec6',
    listaFilm: [],
    listaSerieTv: [],
    arrayUnico: [],
    inputSearch: '',
    stella: 'fas fa-star',
    votoBasso: 'fas fa-star-half',
    urlImg: 'https://image.tmdb.org/t/p/w185/', //dimensione già inserita
    no_path: `background-image: url('https://www.nerdoverdose.com/thumbs/1200x1200%3E-0751/462924_1200x1200%3E-0751_Keep_Calm_force.jpg')`
  },
  methods:{
    // chiamata API
    search: function () {
      const requestOne = axios.get(this.urlmovie + this.api_key + '&language=it_IT&query=' + this.inputSearch);
      const requestTwo = axios.get(this.urltv + this.api_key + '&language=it_IT&query=' + this.inputSearch);
      // richiesta API x film
      requestOne.then(responseOne => {
      this.listaFilm = responseOne.data.results;
      this.arrayUnico = responseOne.data.results;
      })
      // richiesta API x serietv
      requestTwo.then(responseTwo => {
      this.listaSerieTv = responseTwo.data.results;
      this.arrayUnico.concat(this.listaSerieTv)
      console.log(this.arrayUnico);
      })
    },
    vote: function (voto) {
      let stelle = []; //andrà a contenere il numero esatto di stelle ad ogni ciclo
      let length = Math.round(voto / 2); //voto corrisponde al voto dall'API
      for (let i = 0; i < length; i++) {
        stelle.push('stella'); //pusho elemento segna posto x stella
      }
      return stelle // !!mi torna sempre un array
    },
    poster: function (i) {
      let select = this.listaFilm[i].poster_path;
      let stringa = this.urlImg + select;
      // console.log(stringa);
      if (select == null) {
        return this.no_path
      }
      return `background-image: url(${stringa})`
    },
    posterTv: function (i) {
      let select = this.listaSerieTv[i].poster_path;
      let stringa = this.urlImg + select;
      // console.log(stringa);
      if (select == null) {
        return this.no_path
      }
      return `background-image: url(${stringa})`
    },
    bandiera: function (index) {
      let language = this.listaFilm[index].original_language;
      // console.log(typeof(language), language);
      switch (language) {
        case "fr":
          return 'https://www.countryflags.io/FR/shiny/64.png'
          break;
        case "it":
          return 'https://www.countryflags.io/IT/shiny/64.png'
          break;
        case "en":
          return 'https://www.countryflags.io/GB/shiny/64.png'
          break;
        case "es":
          return 'https://www.countryflags.io/ES/shiny/64.png'
          break;
        case "pt":
          return 'https://www.countryflags.io/PT/shiny/64.png'
          break;
        case "de":
          return 'https://www.countryflags.io/DE/shiny/64.png'
          break;
        case "jp":
          return 'https://www.countryflags.io/JP/shiny/64.png'
          break;
        case "sv":
          return 'https://www.countryflags.io/SV/shiny/64.png'
          break;
        case "sv":
          return 'https://www.countryflags.io/SV/shiny/64.png'
          break;
        default: return 'https://www.countryflags.io/EU/shiny/64.png'
      }
    },
    bandieraTv: function (index) {
      let language = this.listaSerieTv[index].original_language;
      // console.log(typeof(language), language);
      switch (language) {
        case "fr":
          return 'https://www.countryflags.io/FR/shiny/64.png'
          break;
        case "it":
          return 'https://www.countryflags.io/IT/shiny/64.png'
          break;
        case "en":
          return 'https://www.countryflags.io/GB/shiny/64.png'
          break;
        case "es":
          return 'https://www.countryflags.io/ES/shiny/64.png'
          break;
        case "pt":
          return 'https://www.countryflags.io/PT/shiny/64.png'
          break;
        case "de":
          return 'https://www.countryflags.io/DE/shiny/64.png'
          break;
        case "jp":
          return 'https://www.countryflags.io/JP/shiny/64.png'
          break;
        case "sv":
          return 'https://www.countryflags.io/SV/shiny/64.png'
          break;
        case "sv":
          return 'https://www.countryflags.io/SV/shiny/64.png'
          break;
        default: return 'https://www.countryflags.io/EU/shiny/64.png'
      }
    }
  }
});
