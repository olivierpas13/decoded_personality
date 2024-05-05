export const determineBackgroundMBTI = (family) => {
    switch (family) {
        case "Analyst":
            return "bg-purple-100";
        case "Explorer":
            return "bg-orange-100";
        case "Realist":
            return "bg-blue-100";
        case "Idealist":
            return "bg-green-100";
        default:
            return "bg-gray-100";
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