const getUpdatedCountyName = (selectedCounty) => {

    selectedCounty = selectedCounty.replace(" County", "");
    selectedCounty = selectedCounty.replace(" Parish", "");
    selectedCounty = selectedCounty.split(" ").join(" ");
    selectedCounty = selectedCounty.trim();

    return selectedCounty;
}

export default getUpdatedCountyName;