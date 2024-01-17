import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
    const { userId, orgId } = auth();

    return (
        <div>
            Organization: {orgId}
        </div>
    );
};

export default OrganizationIdPage;