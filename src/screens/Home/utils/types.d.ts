export interface INextMatches {
  campeonato: string;
  data: string;
  estadio: string;
  horario: string;
  time_mandante: {
    escudo: string;
    nome: string;
  };
  time_visitante: {
    escudo: string;
    nome: string;
  };
}

export interface INextMatchesId extends INextMatches {
  id: string;
}
