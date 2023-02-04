import React from "react";

interface TaskLineProps {
    data: any;
    title: string;
    color: string;
}

export function TasksLine({ data, title, color }: TaskLineProps) {
    const [value, setValue] = React.useState('')
    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    // const dataItems = [];
    // for (let i = 0; i <= data.length; i++) {
    //     dataItems.push(`
    //         <li key={data.id} className="rounded p-3 border cursor-pointer border-l-4 border-l-gray-200">
    //                 <input
    //                     value={value ? value : data.title}
    //                     className="border-2 outline-0 border-transparent hover:border-2 hover:border-gray-400 hover:border-dashed"
    //                     onInput={changeHandler}
    //                 />
    //             </li>`);
    // }



    return (
        <div data-name="open" className="flex flex-col gap-2 w-1/4">
            <h3 className="uppercase w-fit p-1 pl-4 pr-3 rounded" style={{backgroundColor: color}}>{title}</h3>
            <ul className="flex flex-col gap-2">
                <li className="rounded p-3 border cursor-pointer border-l-4" style={{borderLeftColor: color}}>
                    <input
                        value={value ? value : data[0].name}
                        className="border-2 outline-0 border-transparent hover:border-2 hover:border-gray-400 hover:border-dashed"
                        onInput={changeHandler}
                    />
                </li>
            </ul>

            {title === 'Bin' && <button
                className="uppercase w-100 p-3 pr-3 rounded hover:opacity-75"
                style={{backgroundColor: color}}
                type="button"
            >Clear</button>}
        </div>
    )
}