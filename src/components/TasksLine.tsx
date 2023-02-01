import React from "react";
export function TasksLine() {
    const [value, setValue] = React.useState('')
    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    const dataStr: string = 'Open'

    return (
        <div data-name="open" className="flex flex-col gap-2 w-1/4">
            <h3 className="bg-gray-200 uppercase w-fit p-1 pl-4 pr-3 rounded">{dataStr}</h3>
            <ul className="flex flex-col gap-2">
                <li className="rounded p-3 border cursor-pointer border-l-4 border-l-gray-200">
                    <input
                        value={value ? value : dataStr}
                        className="border-2 outline-0 border-transparent hover:border-2 hover:border-gray-400 hover:border-dashed"
                        onInput={changeHandler}
                    />
                </li>
            </ul>
        </div>
    )
}