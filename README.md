# Conversor de moedas

Você deverá implementar uma API Rest que seja capaz de realizar a convers�o entre duas moedas
utilizando taxas de convers�es atualizadas de um servi�o externo.

Para realiza��o da convers�o � necess�rio o ID do usu�rio que deseja realizar a convers�o.

A API dever� registrar cada transa��o de convers�o com todas as informa��es relacionadas e tamb�m
disponibilizar um endpoint para consulta das transa��es realizadas por um usu�rio.

O projeto dever� ser feito em Node.js com TypeScript.

1. Deve ser poss�vel realizar a convers�o entre 4 moedas no m�nimo (BRL, USD, EUR, JPY);
1. As taxas de convers�o devem ser obtidas de [https://api.exchangeratesapi.io/latest?base=EUR] 
  (Usar a API Free - Tem limita��o de requisi��es, e apenas convers�o com base na moeda EUR);
1. As transa��es de convers�o devem ser persistidas no banco de dados (embedded) contendo:
    * ID do usu�rio;
    * Moeda origem;
    * Valor origem;
    * Moeda destino;
    * Taxa de convers�o utilizada;
    * Data/Hora UTC;
1. Uma transa��o com sucesso deve retornar:
    * ID da transa��o
    * ID do usu�rio;
    * Moeda origem;
    * Valor origem;
    * Moeda destino;
    * Valor destino;
    * Taxa de convers�o utilizada;
    * Data/Hora UTC;
1. Os casos de falha devem retornar com status code pertinente e descri��o no corpo;
1. Dever� existir um endpoint para listagem de todas as transa��es realizadas por usu�rio;
1. Deve haver uma cobertura satisfat�ria de testes;
1. Deve-se adicionar a esse arquivo explica��es sobre como rodar a aplica��o, e uma apresenta��o sobre o
projeto: prop�sito, features, motiva��o das principais escolhas de tecnologias, e separa��o das camadas;
1. Todo o c�digo deve ser em ingl�s;
1. Disponibilizar o c�digo apenas nesse reposit�rio, sem nenhuma c�pia p�blica, para evitar pl�gio;

## Itens desej�veis
* Logs
* Tratamento de exce��es
* Documenta��o
* Coes�o de commits
* Mensagens de commits claras
* Configura��o de lint
* Testes unit�rios
* Testes de integra��o
* Documenta��o dos endpoints
* Estar rodando e dispon�vel (Ex: Heroku, ou similar)
* CI/CD
