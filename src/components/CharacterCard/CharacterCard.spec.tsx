import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

describe('CharacterCard Component', () => {
  const defaultProps = {
    name: 'Harry Potter',
    image: 'harry-potter.jpg',
    dateOfBirth: '31-07-1980',
    house: 'Gryffindor',
    patronus: 'Stag',
    actor: 'Daniel Radcliffe',
    alive: true,
  };

  test('should render correctly with provided props', () => {
    render(<CharacterCard {...defaultProps} />);

    expect(screen.getByTestId('character-card')).toBeInTheDocument();
    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    expect(screen.getByAltText('Harry Potter')).toHaveAttribute('src', 'harry-potter.jpg');
    expect(screen.getByText(/Data de Nascimento:/)).toBeInTheDocument();
    expect(screen.getByText('31-07-1980')).toBeInTheDocument();
    expect(screen.getByText(/Casa:/)).toBeInTheDocument();
    expect(screen.getByText('Gryffindor')).toBeInTheDocument();
    expect(screen.getByText(/Patrono:/)).toBeInTheDocument();
    expect(screen.getByText('Stag')).toBeInTheDocument();
    expect(screen.getByText(/Ator:/)).toBeInTheDocument();
    expect(screen.getByText('Daniel Radcliffe')).toBeInTheDocument();
    expect(screen.getByText(/Status:/)).toBeInTheDocument();
    expect(screen.getByText('Vivo')).toBeInTheDocument();
  });

  it('should apply correct styles based on house', () => {
    render(<CharacterCard {...defaultProps} />);

    const cardFront = screen.getByTestId('character-card-front');
    // const cardBack = screen.getAllByTestId("character-card-back")

    expect(cardFront).toHaveStyle('background-color: #740001');
    expect(cardFront).toHaveStyle('color: #FFD700');
    // expect(cardBack).toHaveStyle('background-color: #740001');
    // expect(cardBack).toHaveStyle('color: #FFD700');
  });

  it('should use default image if no image is provided', () => {
    render(<CharacterCard {...defaultProps} image="" />);

    expect(screen.getByAltText('Harry Potter')).toHaveAttribute('src', './image-not-found.png');
  });

  it('should render a card with default styles if house is unknown', () => {
    render(<CharacterCard {...defaultProps} house="Unknown" />);

    const cardFront = screen.getByTestId('character-card-front');
    const cardBack = screen.getAllByTestId("character-card-back")

    expect(cardFront).toHaveStyle('background-color: #cccccc');
    expect(cardFront).toHaveStyle('color: #000000');
    // expect(cardBack).toHaveStyle('background-color: #cccccc');
    // expect(cardBack).toHaveStyle('color: #000000');
  });
});
