import { useState } from 'react';

type Props = {
    setError: (error: string) => void;
    setIsError: (flag: boolean) => void;
}

const PowerButton: React.FC<Props> = props => {
    const [isLoading, setIsLoading] = useState(false);
    const sendChannelRequest = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/power`, { method: 'GET' });
            const resJson = await res.json();
            if (resJson['status'] === 'error') {
                throw new Error('Error occured!');
            }
        } catch (error) {
            props.setIsError(true);
            if (error instanceof Error) {
                props.setError(error.message);
            }
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <button onClick={() => sendChannelRequest()} className={`rounded-md ${isLoading ? 'bg-red-400' : 'bg-green-400'} text-white font-bold py-2 px-4 hover:opacity-75`}>
            <img src="power.png" alt="" />
        </button>
    );
}

export default PowerButton;