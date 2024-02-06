import ProblemsTable from "./components/problems-table/ProblemsTable";

export default function Home() {
  return (
    <main className="flex justify-center items-center p-4 text-center">
        <div className="mx-auto">
          <h2 className="text-xl font-medium mb-4">&rdquo; QUALITY OVER QUANTITY &rdquo;</h2>
          <table className="w-full">
            <thead className="border-b-2 border-gray-400">
                <tr>
                  <th>STATUS</th>
                  <th>TITLE</th>
                  <th>DIFFICULTY</th>
                  <th>CATEGORY</th>
                  <th>SOLUTION</th>
                </tr>
            </thead>
            <ProblemsTable></ProblemsTable>
          </table>
        </div>
    </main>
  );
}
