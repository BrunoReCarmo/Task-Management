import { ClerkProvider } from "@clerk/nextjs";
import { localization } from "@/lib/localization";

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <ClerkProvider localization={localization}>
            {children}
        </ClerkProvider>
    );
};

export default PlatformLayout;