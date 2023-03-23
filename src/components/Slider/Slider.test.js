import { render } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider component", () => {
  let component;
  let mockImages;

  beforeEach(() => {
    component = render(
      <Slider />
    );
  });

  mockImages = jest.fn();

  test("renders without crashing", () => {
    expect(component).not.toBeNull();
    expect(console.error).not.toHaveBeenCalled();

  });

  test("displays the first image on initial render", () => {
    //const firstImage = component.container.querySelector('.slider__image');
  });

  test('changes the displayed image when the "Siguiente" button is clicked', () => {
    // TODO
  });

  test('changes the displayed image when the "Anterior" button is clicked', () => {
    // TODO
  });

  test("displays images with the correct src", () => {
    // TODO
  });
});
