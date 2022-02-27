import { render } from '@testing-library/react';
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

    it('should be able to add new item to the list', () => {
        const { getByText, debug } = render(<Test2 />)

        //Fire Event permite disparar ações dentro da minha interface da aplicação
        const addButton = getByText('Adicionar');
        // debug()

        userEvent.click(addButton);
        expect(getByText('New name')).toBeInTheDocument();
        // debug()
    });

})