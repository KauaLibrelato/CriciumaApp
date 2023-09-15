export interface ILastMatches {
  campeonato: string;
  data: string;
  placar: string;
  time_mandante: {
    escudo: string;
    nome: string;
  };
  time_visitante: {
    escudo: string;
    nome: string;
  };
}

export interface ILastMatchesId extends ILastMatches {
  id: string;
}
