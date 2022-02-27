import { render } from '@testing-library/react';
import App from './App';

test('sum', () => {
    const { getByText } = render(<App />)

    expect(getByText('Hello World')).toBeTruthy();
    //Verificando se está no meu html
    expect(getByText('Hello World')).toBeInTheDocument();
    //Verificando se tem uma classe especifica
    expect(getByText('Hello World')).toHaveAttribute('class','test');
})