export function FormAdd() {
    return (
        <form name="add-task" className="rounded-xl bg-white shadow w-2/4 pb-3 pt-3 pl-3 pr-3">
            <h2 className="text-black leading-3 text-lg font-bold mb-3">New task</h2>
            <input
                type="text"
                className="w-2/3 border-2 rounded p-1 placeholder-gray-300::placeholder mr-3"
                name="task-name"
                placeholder="Enter title here"
                required
                minLength={4}
            />
            <button className="bg-blue-400 hover:opacity-75 w-32 text-white rounded p-1 pr-5 pl-5 leading-7" type="submit">+ Add</button>
        </form>
    )
}