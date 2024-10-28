import { Poppins, Red_Hat_Display } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
})

export const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-red-hat-display",
})