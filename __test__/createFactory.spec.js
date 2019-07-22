import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';
import { createFactory } from 'src/index.js';

describe('createFactory()', () => {
    it('should return a working React component', () => {
        const blockFactory = React => () => <div />;
        const getStyles = () => ({});
        const getConfigSchema = () => {};
        const factory = createFactory(blockFactory, {
            getStyles,
            getConfigSchema
        });

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
