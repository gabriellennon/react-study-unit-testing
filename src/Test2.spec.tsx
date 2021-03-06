import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Test2} from './Test2';

describe('Test2 Component', () => {
    it('should render list items', () => {
        const { getByText } = render(<Test2 />)

        //I expect that the the names in screen
        expect(getByText('Diego')).toBeInTheDocument();
        expect(getByText('Gabriel')).toBeInTheDocument();
        expect(getByText('Mayk')).toBeInTheDocument();
    });

    it('should be able to add new item to the list', async () => {
        const { getByText, debug, getByPlaceholderText, findByText } = render(<Test2 />)

        const inputElement = getByPlaceholderText('New Name')
        //Fire Event permite disparar ações dentro da minha interface da aplicação
        const addButton = getByText('Adicionar');
        // debug()

        userEvent.type(inputElement, 'New name')
        userEvent.click(addButton);

        // expect(getByText('New name')).toBeInTheDocument();

        //In this case , with api call, we use the findByText
        expect(await findByText('New name')).toBeInTheDocument();
        //We can to do 
        // await waitFor(async () => {
        //     expect(getByText('New name')).toBeInTheDocument()
        // })

        // debug()
    });

})