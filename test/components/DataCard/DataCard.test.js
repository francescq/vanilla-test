import DataCard from '../../../src/components/DataCard/DataCard';
import { exportAllDeclaration } from '@babel/types';

describe('DataCard', () => {

    test('should add id', () => {
        const dataCard = new DataCard({id:'foo'});

        expect(dataCard.id).toBe('foo');
    });
    test('should add a theme class', () => {
        const dataCard = new DataCard({type:'foo'});

        expect(dataCard.innerHTML).toMatch('theme-foo');
    });
    
    describe('render a report', () => {
        test('should render the title', () => {
            const dataCard = new DataCard({title:'foo'});

            expect(dataCard.innerHTML).toMatch('foo');
        });

        test('should render the value', () => {
            const dataCard = new DataCard({value:'foo'});

            expect(dataCard.innerHTML).toMatch('foo');
        });

        describe('tablet', () => {
            test('should render the percentage', () => {
                const dataCard = new DataCard({tablet: {percentage:'foo'}});
    
                expect(dataCard.innerHTML).toMatch('foo %');
            });
    
            test('should render the value', () => {
                const dataCard = new DataCard({tablet: {value:'foo'}});
    
                expect(dataCard.innerHTML).toMatch('foo');
            });
        });

        describe('phone', () => {
            test('should render the percentage', () => {
                const dataCard = new DataCard({phone: {percentage:'foo'}});
    
                expect(dataCard.innerHTML).toMatch('foo %');
            });
    
            test('should render the value', () => {
                const dataCard = new DataCard({phone: {value:'foo'}});
    
                expect(dataCard.innerHTML).toMatch('foo');
            });
        });
    });
});