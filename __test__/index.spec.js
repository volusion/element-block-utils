import { createFactory } from 'src/index.js';

describe('createFactory()', () => {
    it('should run without errors', () => {
        const blockFactory = React => () => <div />;
        const styles = jest.fn();
        const configSchema = jest.fn();
        createFactory(blockFactory, styles, configSchema);
    });
});
