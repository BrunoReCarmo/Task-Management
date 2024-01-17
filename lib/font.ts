import { Poppins } from "next/font/google";
import LocalFont from "next/font/local";

export const headlineFont = LocalFont({
    src: "../public/fonts/font.woff2",
});

export const contentFont = Poppins({
    subsets: ["latin"],
    weight:[
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "800",
        "900"
    ],
});
