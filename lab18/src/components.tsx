import { useState } from "react"

export const First: React.FC = () => {
    const [name, setName] = useState<string>("Іван")
    const [age, setAge] = useState<number>(25)

    return (
        <div>
            Ім'я: {name}, вік: {age}
        </div>
    )
}
export const Second: React.FC = () => {
    const handler = {
        clickShowMessage: () => {
            alert("hello")
        }
    }
    return (
        <div>
            <button onClick={handler.clickShowMessage}>
                showMessage
            </button>
        </div>
    )
}
export const Third: React.FC = () => {
    const [name, setName] = useState<string>("Іван")
    const [age, setAge] = useState<number>(25)
    const handler = {
        clickShowName: () => {
            alert(name)
        }
    }
    return (
        <div>
            Ім'я: {name}, вік: {age}
            <button onClick={handler.clickShowName}>
                ShowName
            </button>

        </div>
    )
}
export const Fourth: React.FC = () => {
    const [name, setName] = useState<string>("Іван")
    const [age, setAge] = useState<number>(25)

    const handler = {
        clickChangeState: () => {
            setName("Коля")
            setAge(30)
        }
    }

    return (
        <div>
            Ім'я: {name}, вік: {age}
            <button onClick={handler.clickChangeState}>
                ChangeState
            </button>

        </div>
    )
}
export const Fifth: React.FC = () => {
    const [name, setName] = useState<string>("Іван")
    const [show, setShow] = useState<boolean>(true)

    return (
        <div>
            <p>{show ? "Привіт" : "Пока"}, {name}!</p>
        </div>
    )
}
export const SixthAndSeventhAndEighth: React.FC = () => {
    const [name, setName] = useState<string>("Іван")
    const [age, setAge] = useState<number>(25)
    const [show, setShow] = useState<boolean>(true)


    const handler = {
        click: () => {
            setShow(!show)
        }
    }

    return (
        <div>
            {show || `Ім'я: ${name}, вік: ${age}`}
            <button onClick={handler.click}>
                {show ? "показати" : "сховати"}
            </button>
        </div>
    )
}
export const Tenth: React.FC = () => {
    const [names, setNames] = useState<string[]>(["Коля", "Вася", "Петя"])

    return (
        <ul>
            {names.map(name => <li>{name}</li>)}
        </ul>
    )
}
export const Eleventh: React.FC = () => {
    const [links, setLinks] = useState<{ href: string, text: string }[]>(
        [
            { href: "1.html", text: "посиляння 1" },
            { href: "2.html", text: "посиляння 2" },
            { href: "3.html", text: "посиляння 3" },
        ]
    )

    return (
        <ul>
            {links.map(link => <li>
                <a href={link.href}>{link.text}</a>
            </li>)}
        </ul>
    )
}