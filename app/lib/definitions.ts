export interface Pokemon {
    abilities: {
      ability: { name: string; url: string };
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    cries: { latest: string; legacy: string };
    forms: { name: string; url: string }[];
    game_indices: {
      game_index: number;
      version: { name: string; url: string };
    }[];
    height: number;
    held_items: any[]; 
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
      move: { name: string; url: string };
      version_group_details: any[];
    }[];
    name: string;
    order: number;
    past_abilities: any[]; 
    past_types: any[]; 
    species: { name: string; url: string };
    sprites: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
      other: {
        dream_world: any; 
        home: any; 
        "official-artwork": any; 
        showdown: any; 
      };
      versions: { [key: string]: any }; 
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: { name: string; url: string };
    }[];
    types: { slot: number; type: { name: string; url: string } }[];
    weight: number;
  }
  
  export const typeColors: Record<string, string> = {
    grass: "bg-green-100",
    fire: "bg-red-100",
    water: "bg-blue-100",
    electric: "bg-yellow-100",
  };