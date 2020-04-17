# element-block-utils

## What are the utils?

#### `joinClasses`

This util is provided as an alternative to using the `joinClasses` prop passed to blocks by the SDK on some block contracts. Read more about what this helper does and why you should use it [here](<https://volusion.github.io/element/references/styling-your-block-with-css#'joinclasses()'>). It can be imported from `@volusion/element-block-utils`.

##### Usage at the block level.

```jsx
import React from 'react';
import { joinClasses } from '@volusion/element-block-utils';
import { css, StyleSheet } from 'aphrodite';
import { getStyles } from './getStyles';

export const YourBlock = props => {
    const classes = StyleSheet.create(getStyles(props));
    return (
        <div className={joinClasses('w-100 center', css(classes.wrapper))}>
            {/* Your content */}
        </div>
    );
};
```

If your block is using the `joinClasses` prop provided by the SDK, you can simplify your imports into your test files by importing it from `@volusion/element-block-utils/test-utils`. If your block is importing `joinClasses`, you do not need to add it to your tests.

```jsx
import React from 'react';
import { joinClasses } from '@volusion/element-block-utils/test-utils';

let props;
describe('The block', () => {
    beforeEach(() => {
        props = {
            joinClasses
        };
    });
    it('should match the snapshot', () => {
        const wrapper = mount(<Block {...props} />);
        expect(wrapper.render()).toMatchSnapshot();
    });
});
```

#### `mockUtils`

This util provides a full jest mock of the SDK utils that are passed to your block as the `util` prop. It can be imported from `@volusion/element-block-utils/test-utils`;

##### Usage example:

```jsx
import React from 'react';
import { mockUtils as utils } from '@volusion/element-block-utils/test-utils';

let props;
describe('The block', () => {
    beforeEach(() => {
        props = {
            utils
        };
    });
    it('should match the snapshot', () => {
        const wrapper = mount(<Block {...props} />);
        expect(wrapper.render()).toMatchSnapshot();
    });
});
```

## Deprecated utils

The following utils have been deprecated and should no longer be used. They are only provided here as a knowledge resource for blocks built on older contracts.

#### `createFactory`

This util wraps old blocks in a React factory function required by older block contracts.
