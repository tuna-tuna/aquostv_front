import React from 'react';
import { useState } from 'react';
import './App.css';
import ChannelButton from './components/ChannelButton';
import VolumeButton from './components/VolumeButton';
import ChannelDirectionButton from './components/ChannelDirectionButton';
import PowerButton from './components/PowerButton';
import ErrorModal from './components/ErrorModal';

function App() {
    //const [showModal, setShowModal] = useState(false);
    const [errorMessage, setError] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const channelList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const channelElement = channelList.map((channelName) => 
        <ChannelButton key={channelName.toString()} channelNumber={channelName.toString()} setError={setError} setIsError={setIsError} />
    );
    return (
        <>
            <div className='container mx-auto py-3 px-3 max-w-2xl'>
                <PowerButton setError={setError} setIsError={setIsError}/>
                <div className='grid grid-cols-3 gap-5'>
                    {channelElement}
                </div>
                <div className='grid grid-cols-2'>
                    <div className='grid grid-cols-1 px-20'>
                        <h3 className='mx-auto'>Volume</h3>
                        <VolumeButton direction='up' setError={setError} setIsError={setIsError}/>
                        <VolumeButton direction='down' setError={setError} setIsError={setIsError}/>
                    </div>
                    <div className='grid grid-cols-1 px-20'>
                        <h3 className='mx-auto'>Channel</h3>
                        <ChannelDirectionButton direction='up' setError={setError} setIsError={setIsError}/>
                        <ChannelDirectionButton direction='down' setError={setError} setIsError={setIsError}/>
                    </div>
                </div>
                <ErrorModal errorMessage={errorMessage} isError={isError} setIsError={setIsError} /> 
            </div>
        </>
    );
}

export default App;
