

export const calculatePrice = (count, price) => {

    if (!price) {
        return 'R$ 0,00'
    }

    var calculatedPrice = Number(price) * count
    var formatedPrice = calculatedPrice.toString().replace(".", ",");

    if (!formatedPrice.includes(",")) {
        formatedPrice += ",00";
    }

    // Adiciona o símbolo da moeda
    return "R$ " + formatedPrice

}