import { useState } from 'react';

type Props = {
    direction: string;
}

const ChannelDirectionButton: React.FC<Props> = props => {
    const [isLoading, setIsLoading] = useState(false);
    const sendChannelRequest = async (direction: string) => {
        setIsLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/channel?direction=${direction}`, { method: 'GET' });
            const resJson = await res.json();
            if (resJson['status'] === 'error') {
                throw new Error('Error occured!');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <button onClick={() => sendChannelRequest(props.direction)} className={`rounded-md ${isLoading ? 'bg-red-400' : 'bg-blue-300'} text-white font-bold py-2 px-4 hover:opacity-75`}>
            {props.direction === 'up' ? '△' : '▽'}
        </button>
    )
}

export default ChannelDirectionButton;