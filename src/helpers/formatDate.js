

function formatDate(inputDate) {
    const splitDate = inputDate.split('-');
    return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
}

export default formatDate;