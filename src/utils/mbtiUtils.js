export const determineBackgroundMBTI = (family) => {
    switch (family) {
        case "Analyst":
            return "bg-purple-50";
        case "Explorer":
            return "bg-orange-50";
        case "Realist":
            return "bg-blue-50";
        case "Idealist":
            return "bg-green-50";
        default:
            return "bg-gray-50";
    }
}

export const determineTitleColor = (family) => {
    switch (family) {
        case "Analyst":
            return "text-purple-800";
        case "Explorer":
            return "text-orange-800";
        case "Realist":
            return "text-blue-800";
        case "Idealist":
            return "text-green-800";
        default:
            return "text-gray-800";
    }
}

export const determineFunctionColor = (functionName) => {
    switch (functionName) {
        case "NI":
        case "NE":
            return "text-purple-800";
        case "SE":
        case "SI":
            return "text-orange-800";
        case "TE":
        case "TI":
            return "text-blue-800";
        case "FE":
        case "FI":
            return "text-green-800";
        default:
            return "text-gray-800";
    }
}