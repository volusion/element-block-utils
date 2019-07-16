import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';
import { createFactory } from 'src/index.js';

describe('createFactory()', () => {
    it('should run without errors', () => {
        const blockFactory = React => () => <div />;
        const styles = jest.fn();
        const configSchema = jest.fn();
        createFactory(blockFactory, styles, configSchema);
    });

    it('should return a working React component', () => {
        const blockFactory = React => () => <div />;
        const styles = jest.fn(() => ({}));
        const configSchema = jest.fn();
        const factory = createFactory(blockFactory, styles, configSchema);
        const TestBlock = factory(
            { React, Components: {} },
            {},
            { StyleSheet, css }
        ).block;
        const div = document.createElement('div');
        ReactDOM.render(<TestBlock />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
