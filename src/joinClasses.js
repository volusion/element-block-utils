export const joinClasses = (...classes) => {
    const validClasses = classes.filter(className =>
        className ? className : ''
    );
    const whitespace = /\s+/g;
    return validClasses
        .join(' ')
        .replace(whitespace, ' ')
        .trim();
};
