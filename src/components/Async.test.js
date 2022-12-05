import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    test('Renders posts if request succeeds.', async () => {
        //Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        });
        render(<Async />);

        //Assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});