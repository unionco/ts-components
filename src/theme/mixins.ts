export const objectFit = (fit?:string, position?:string) => {
    return `
        font-family: 'object-fit: ${fit ? fit : 'cover'};';
        object-fit: ${fit ? fit : 'cover'};
        ${position ? `object-position: ${position};` : ''}
    `;
}