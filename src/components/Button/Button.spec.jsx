import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button/>", () => {
  /* verificar se esta chegando um text no conteudo do botao */

  it("should render the button whith text", () => {
    /*vai renderizar o botao na tela  e verificar se ta recebendo um texto qualquer*/
    render(<Button text="Load more" />);

    /*digamos que eu preciso renderizar um text especifico no botao
                    estamos buscando o butao atravez de acessibilidade
                     o getbyrole e como os leitores de tela audio visual*/

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  /* teste 2 =>  quando o botao for clicado verifique se chamou a funcao  */

  it("must call the function on click", () => {
    /*criando um mock para chamar um function */

    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });
    /* o fireEvent.click e quem vai disparar o evento no meu botao */
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  /* test 3 =>  verificando se o botao disabled esta sendo acionado */
  it("should be disabled when disabled is true", () => {
    render(<Button text="Load more" disabled={false} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeEnabled();
  });
});

/* para saber se tem mais coisas para ser testadas rode o comando
 npm test -- --covarge */
