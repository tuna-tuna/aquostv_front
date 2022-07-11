import { useState } from 'react';

type Props = {
    channelNumber: string;
    setError: (error: string) => void;
    setIsError: (flag: boolean) => void;
}

const ChannelButton: React.FC<Props> = props => {
    const [isLoading, setIsLoading] = useState(false);
    const sendChannelRequest = async (channelNumber: string) => {
        setIsLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/channel?number=${channelNumber}`, { method: 'GET' });
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
        <button onClick={() => sendChannelRequest(props.channelNumber)} className={`rounded-md ${isLoading ? 'bg-red-400' : 'bg-blue-300'} text-white font-bold py-2 px-4 hover:opacity-75`}>
            {props.channelNumber}
        </button>
    )
}

export default ChannelButton;