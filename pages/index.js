import {useRef} from "react";

export default function Home() {
    const emailIn = useRef()
    const messageRf = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const email = emailIn.current.value;
        const message = messageRf.current.value;
        const reqBody = {
            email,
            message
        }
        fetch('/api/feedback',
            {
                method: 'POST',
                body: JSON.stringify(reqBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <h1>Home</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={emailIn} type="email" placeholder={'Email'} id={'email'}/>
                </div>
                <div>
                    <textarea ref={messageRf} placeholder={'feedback'} id={'feedback'}/>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

