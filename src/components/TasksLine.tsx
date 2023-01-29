export function TasksLine() {
    return (
        <div data-name="open" className="flex flex-col gap-2 w-1/4">
            <h3 className="bg-gray-200 uppercase w-fit p-1 pl-4 pr-3 rounded">Open</h3>
            <ul className="flex flex-col gap-2">
                <li className="rounded p-3 border cursor-pointer border-l-4 border-l-gray-200">
                    <span className="border-2 border-transparent hover:border-2 hover:border-gray-400 hover:border-dashed">Task name 1</span>
                </li>
                <li className="rounded p-3 border cursor-pointer border-l-4 border-l-gray-200">
                    <span className="border-2 border-transparent hover:border-2 hover:border-gray-400 hover:border-dashed">Task name 1</span>
                </li>
                <li className="rounded p-3 border cursor-pointer border-l-4 border-l-gray-200">
                    <span className="border-2 border-transparent hover:border-2 hover:border-gray-400 hover:border-dashed">Task name 1</span>
                </li>
            </ul>
        </div>
    )
}