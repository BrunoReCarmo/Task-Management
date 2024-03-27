import { db } from "@/lib/db";

const OrganizationIdPage = () => {
    async function create(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;

        await db.board.create({
            data: {
                title,
            }
        });
    }

    return (
        <div>
            <form action={create}>
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Insira um título para seu quadro"
                    className="border-black border p-1 rounded-md"
                />
            </form>
        </div>
    );
};

export default OrganizationIdPage;