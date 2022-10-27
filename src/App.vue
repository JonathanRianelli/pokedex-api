<template>
  <main>
    <h1 :style="{ marginTop: margin()}">Pokédex</h1>

    <input type="search" placeholder="Search Pokémon..." id="search" v-model="search">

    <section id="pokemons" v-if="search !== ''">
      <div class="pokemon-card" v-for="pokemon in filter.slice(0, 5)" :key="pokemon.nome">
        <img class="poke-img"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId(pokemon)}.png`">

        <span class="id">#{{pokemonId(pokemon)}}</span>

        <h3>{{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}</h3>

        <button @click="show(pokemon, pokemonId(pokemon))" class="open-btn">Select</button>

        <div class="info" v-if="active == pokemon.name">
          <div class="pokemon-info">
            <button @click="active = ''" class="close-btn"><svg @click="show(pokemon, pokemonId(pokemon))"
                xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path fill="#fff" fill-rule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
              </svg></button>

            <h2>{{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}</h2>

            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId(pokemon)}.png`">

            <div class="types-container">
              <div class="types">
                <div v-for="type in pokeInfo.types" :class="type.type.name" :key="type.slot">
                  {{type.type.name}}
                </div>
              </div>
            </div>

            <div class="stats-moves">
              <div class="stats">

                <h3>Stats</h3>

                <div class="stat">
                  <p>Hp:</p>
                  <p>{{pokeInfo.stats[0].base_stat}}</p>
                </div>

                <div class="stat">
                  <p>Attack:</p>
                  <p>{{pokeInfo.stats[1].base_stat}}</p>
                </div>

                <div class="stat">
                  <p>Defense:</p>
                  <p>{{pokeInfo.stats[2].base_stat}}</p>
                </div>

                <div class="stat">
                  <p>Special-attack:</p>
                  <p>{{pokeInfo.stats[3].base_stat}}</p>
                </div>

                <div class="stat">
                  <p>Special-defense:</p>
                  <p>{{pokeInfo.stats[4].base_stat}}</p>
                </div>

                <div class="stat">
                  <p>Speed:</p>
                  <p>{{pokeInfo.stats[5].base_stat}}</p>
                </div>

              </div>

              <div class="moves">
                <h3>Moves</h3>

                <p class="move">{{pokeInfo.moves[0].move.name}}</p>
                <p class="move">{{pokeInfo.moves[1].move.name}}</p>
                <p class="move">{{pokeInfo.moves[2].move.name}}</p>
                <p class="move m4">{{pokeInfo.moves[3].move.name}}</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  components: {

  },

  data() {
    return {
      pokemons: [],
      pokeInfo: [],
      search: "",
      active: "",
      mt: "100px"
    }
  },

  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      this.pokemons = res.data.results
    })
  },

  methods: {
    pokemonId(pokemon) {
      return pokemon.url.split("/")[6]
    },

    show(pokemon, id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
        this.pokeInfo = res.data
      })
      this.active = pokemon.name
    },

    margin() {
      if (this.search === '') {
        return '150px'
      }
    }
  },

  computed: {
    filter() {
      return this.pokemons.filter((item) => {
        return item.name.includes(this.search.toLowerCase())
      })
    },
  },
}

</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #191916;
  text-align: center;
}

h1 {
  text-align: center;
  color: #fff;
  font-size: 45px;
}

#search {
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.507);
  padding: 10px;
  outline: none;
  font-size: 20px;
  height: 50px;
  width: 400px;
  margin-bottom: 10px;
}

#pokemons {
  display: flex;
  flex-direction: column;

  .pokemon-card {
    position: relative;
    display: flex;
    border-radius: 7px;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.651);
    width: 400px;
    height: 70px;
    margin: 4px auto;

    .poke-img {
      background-color: rgba(255, 255, 255, 0);
      border-radius: 7px;
      width: 70px;
      justify-self: end;
    }

    .id {
      margin-left: 10px;
    }

    h3 {
      margin: 0 0 0 10px;
      text-align: center;
      font-weight: normal;
    }

    .open-btn {
      position: absolute;
      right: 30px;
      border: none;
      background-color: rgba(117, 117, 117, 0.507);
      border: none;
      border-radius: 5px;
      color: rgb(0, 0, 0);
      cursor: pointer;
      padding: 10px;

      &:active {
        background-color: rgba(102, 102, 102, 0.671);
      }
    }
  }
}

.info {
  background-color: rgba(3, 3, 3, 0.603);
  backdrop-filter: blur(1.5px);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;

  .pokemon-info {
    position: relative;
    height: 530px;
    width: 700px;
    background-color: #191916;
    padding: 1px 0;
    margin: 50px auto;
    border-radius: 7px;

    .close-btn {
      position: absolute;
      right: 20px;
      top: 10px;
      background-color: transparent;
      border: none;
      padding: 10px;
      cursor: pointer;
    }

    h2 {
      color: #fff;
      font-weight: normal;
      font-size: 40px;
      margin: 15px 0 0;
    }

    img {
      width: 100px;
      background: url('./assets/img/pokebola.png') top center /100% no-repeat;
      margin: 10px 0 20px;
    }

    .types-container {
      width: 150px;
      margin: 0 auto 30px;

      .types {
        display: flex;
        gap: 10px;
        justify-content: center;
        width: 100%;

        div {
          width: 100%;
          border: 2px solid;
          padding: 2px;
          border-radius: 20px;
        }

        .normal {
          color: #A8A77A;
          border-color: #A8A77A;
        }

        .fire {
          color: #EE8130;
          border-color: #EE8130;
        }

        .water {
          color: #6390F0;
          border-color: #6390F0;
        }

        .grass {
          color: #7AC74C;
          border-color: #7AC74C;
        }

        .flying {
          color: #A98FF3;
          border-color: #A98FF3;
        }

        .fighting {
          color: #C22E28;
          border-color: #C22E28;
        }

        .poison {
          color: #A33EA1;
          border-color: #A33EA1;
        }

        .electric {
          color: #F7D02C;
          border-color: #F7D02C;
        }

        .ground {
          color: #E2BF65;
          border-color: #E2BF65;
        }

        .rock {
          color: #B6A136;
          border-color: #B6A136;
        }

        .psychic {
          color: #F95587;
          border-color: #F95587;
        }

        .ice {
          color: #96D9D6;
          border-color: #96D9D6;
        }

        .bug {
          color: #A6B91A;
          border-color: #A6B91A;
        }

        .ghost {
          color: #735797;
          border-color: #735797;
        }

        .steel {
          color: #B7B7CE;
          border-color: #B7B7CE;
        }

        .dragon {
          color: #6F35FC;
          border-color: #6F35FC;
        }

        .dark {
          color: #705746;
          border-color: #705746;
        }

        .fairy {
          color: #D685AD;
          border-color: #D685AD;
        }
      }
    }

    .stats-moves {
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      padding: 20px;
      border-radius: 15px;
      height: 200px;
      width: 500px;

      .stats {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 2px solid rgb(65, 65, 65);
        padding: 0 15px 10px;

        .stat {
          display: flex;
          justify-content: space-between;

          p {
            margin: 0px;
          }
        }
      }

      .moves {
        width: 50%;
        padding: 0 15px;

        .move {
          margin: 10px auto 0;
          padding-bottom: 10px;
          border-bottom: 1px solid rgb(65, 65, 65);
        }

        .m4 {
          border: none;
        }
      }
    }
  }
}

@media (max-width: 770px) {
  .info .pokemon-info {
    width: 340px;

    h2 {
      font-size: 30px;
    }

    .stats-moves {
      width: 270px;
      padding: 10px;

      p {
        font-size: 13px;
      }

      .stats {
        padding: 0 10px 10px 0;
      }
    }
  }

}

@media (max-width: 450px) {
  #search {
    width: 300px;
  }

  #pokemons .pokemon-card {
    width: 300px;

    .id {
      margin-left: 2px;
    }

    h3 {
      margin: 0 0 0 5px;
      font-size: 16px;
    }
  }

}
</style>
