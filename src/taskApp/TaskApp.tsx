import { useState } from "react"

type FormElement = React.FormEvent<HTMLFormElement>

interface ITasks {
    name: string,
    done: boolean
}

export const TaskApp = ():JSX.Element => {

    const [newTask, setNewTask] = useState<string>('')
    const [tasks, setTasks] = useState<ITasks[]>([{
        name: '',
        done: false
    }])

    const handleSubmit = (e: FormElement) => {
        e.preventDefault()

        addTask(newTask)
        setNewTask('')
        console.log(tasks)
    }

    const addTask = (name: string) => {
        setTasks([{
            ...tasks,
            name,
            done: false
        }])
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    onChange={e=> setNewTask(e.target.value)}
                    value={newTask}
                    className="form-control"
                    autoFocus
                />
                <button className="btn btn-outline-primary mt-2">
                    Save
                </button>
            </form>

            {
                tasks.map((t: ITasks, i: number) => (
                    <h1 key={i}>{t.name}</h1>
                ))
            }

        </>
    )
}
