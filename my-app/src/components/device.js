const sizeDevices = { 
    tablet: "768px",
    laptop: "1024px",
    laptopLarge: "1440px",
    desktop: "1820px"
}

export const device = {
    tablet: `(min-width: ${sizeDevices.tablet})`,
    laptop: `(min-width: ${sizeDevices.laptop})`,
    laptopLarge: `(min-width: ${sizeDevices.laptopLarge})`,
    desktop: `(min-width: ${sizeDevices.desktop})`,
}
