export const formatDate = (dateString: string) => {
    const date = new Date(dateString);


    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();


    return `${day} ${month} ${year}`;
};

export const formatDateToYear = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}`;
}