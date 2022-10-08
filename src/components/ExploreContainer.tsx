import {   IonCard, IonCardContent, IonCardHeader,  IonCol,  IonFooter,  IonIcon, IonRow,  IonSpinner, IonTitle } from '@ionic/react';
import useFetchPokemon from '../hooks/useFetchPokemon';
import './ExploreContainer.css';
import {statsChartOutline ,heartOutline, diamondOutline} from 'ionicons/icons'

interface Pokemon { 
  name:string,
  sprites:{
    other:{
      dream_world:{
        front_default:string
      }
    }
  }
  id:number
  types:Types[]
  stats:Stats[]
}

interface Types{
  type:{
    name:string
  }
}

interface Stats {
  base_stat:number,
}

const ExploreContainer: React.FC = () => {

  const arrPokemons = useFetchPokemon();
  return (
     <>
        {
          arrPokemons.length > 0 ? (
            arrPokemons.map((pokemon:Pokemon) => (
              <IonCard button className='card'>
              <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="imgPokeCard" />
              <IonCardHeader className='pokeTitle'>
                <IonTitle >{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</IonTitle>
              </IonCardHeader>
              <IonCardContent>
                  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. <span className='info'>Ver mas...</span> </p>
              </IonCardContent>

              <IonFooter>
                <IonRow className='card_footer'>
                  <IonCol>
                      <IonIcon icon={heartOutline} size="large"/>
                      <p>HP: {pokemon.stats[0].base_stat}</p>
                  </IonCol>
                  <IonCol>
                      <IonIcon icon={statsChartOutline} size="large"/>
                      <p>Attack: {pokemon.stats[1].base_stat}</p>
                  </IonCol>
                  <IonCol>
                      <IonIcon icon={diamondOutline} size="large"/>
                      <p>Defense: {pokemon.stats[2].base_stat}</p>
                  </IonCol>
                </IonRow>
              </IonFooter>
              
            </IonCard>
            ))
          ): <IonSpinner/>
        }
     </>
  );
};

export default ExploreContainer;
