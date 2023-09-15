export interface ITableInfos {
  derrotas: string;
  empates: string;
  jogos: string;
  pontos: string;
  posicao: string;
  saldo_gols: string;
  time: {
    escudo: string;
    nome: string;
  };
  vitorias: string;
}

export interface ITableInfosId extends ITableInfos {
  id: string;
}
