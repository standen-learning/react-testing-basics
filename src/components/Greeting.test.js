import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting Component', () => {
    test('Renders "Hello World" as text', () => {
        //Arrange
        render(<Greeting />);
    
        //Act
        //..nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('Renders "It\'s good to see you!" as text if the button WAS NOT clicked.', () => {
        //Arrange
        render(<Greeting />);

        //Assert
        const paragraphElement = screen.getByText('It\'s good to see you!');

        //Could also do it this way:
        // const paragraphElement = screen.getByText('good to see you!', { exact: false });
        expect(paragraphElement).toBeInTheDocument();
    });

    test('Renders "Changed!" if the button WAS clicked.', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const paragraphElement = screen.getByText('Changed!');
        expect(paragraphElement).toBeInTheDocument();
    });

    test('Does not render "It\'s good to see you!" as text if the button WAS clicked.', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const paragraphElement = screen.queryByText('It\'s good to see you!');

        expect(paragraphElement).toBeNull();
    });
});
