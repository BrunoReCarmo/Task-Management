import { db } from "@/lib/db";

import { Form } from "./form";
import { Board } from "./board";

const OrganizationIdPage = async () => {
    const boards = await db.board.findMany();

    return (
        <div className="flex flex-col space-y-4">
        <Form />
        <div className="space-y-2">
          {boards.map((board) => (
            <Board key={board.id} title={board.title} id={board.id} />
          ))}
        </div>
      </div>
    );
};

export default OrganizationIdPage;