import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

/* Criar um mock dos dados como se fosse alguns dados falsos para 
rerenderizar e vamos usar essa variavel desestruturada no render 
olhar o mock js que e um obj  que estamos exportando
ele e como o dado falso que vamos usar para fazer tests*/

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    /* para criar um debug desse jsx podemos atribuir o render a uma 
       variavel desestruturada de debug e depois chamar o 'metodo' debug do test */

    const { debug } = render(<PostCard {...props} />);

    debug();

    /* ele meio que mostra o seu jsx como um console no test  */
  });

  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/title 1/i)).toHaveAttribute(
      "src",
      "img/img.png"
    );
    expect(
      screen.getByRole("heading", { name: "title 1 1" })
    ).toBeInTheDocument();
    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
