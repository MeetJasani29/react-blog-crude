export const getLocalData = () => {
    return JSON.parse(localStorage.getItem('blog')) || [];
}

export const setLocalData = (data) => {
    return localStorage.setItem('blog', JSON.stringify(data));
}