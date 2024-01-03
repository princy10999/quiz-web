

var getColorFromAPI = new Promise((resolve) => {
        resolve('red')
});


async function main() {
    console.log("The Existing Color is: ", getComputedStyle(document.documentElement).getPropertyValue('--bgColor'))
    console.log('Getting the Color from the API... ')
    let newColor = await getColorFromAPI // Get the color from API
    console.log('The New Color is: ', newColor)
    document.documentElement.style.setProperty('--bgColor', newColor) // Changing the color of the CSS variable
}


main()