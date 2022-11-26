export const First: React.FC = () => {
    return (
        <div>
            текст
        </div>
    )
}
export const Second: React.FC = () => {
    const text = "текст"
    return (
        <div>
            {text}
        </div>
    )
}
export const Third: React.FC = () => {
    const text = "текст"
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}
export const Fourth: React.FC = () => {
    const text1 = "текст1"
    const text2 = "текст2"
    return (
        <div>
            <p>{text1}</p>
            <p>!!!</p>
            <p>{text2}</p>
        </div>
    )
}
export const Fifth: React.FC = () => {
    const text = "текст"
    const attr = "block"
    return (
        <div id={attr}>
            {text}
        </div>
    )
}
export const Sixth: React.FC = () => {
    const text = "текст"
    const attr = "block"
    return (
        <div className={attr}>
            {text}
        </div>
    )
}
export const Seventh: React.FC = () => {
    const text = "текст"
    const attr = "green-div"
    return (
        <div className={attr}>
            {text}
        </div>
    )
}
export const Eighth: React.FC = () => {
    const text1 = "текст1"
    const text2 = "текст2"
    const show = false
    return (
        <div>
            {show ? text1 : text2}
        </div>
    )
}
export const Nineth: React.FC = () => {
    const arr: string[] = ['a', 'b', 'c', 'd', 'e']
    return (
        <ul>
            {arr.map(el => <li>{el}</li>)}
        </ul>
    )
}
export const Tenth: React.FC = () => {
    const getText = () => <p>текст</p>
    return (
        <div>
            <p>{getText()}</p>
        </div>
    )
}
export const Eleventh: React.FC = () => {
    const getNum1 = () => 1
    const getNum2 = () => 2
    return (
        <div>
            текст {getNum1() + getNum2()}
        </div>
    )
}