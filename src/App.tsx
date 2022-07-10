import React from 'react';
import './App.css';
import ChannelButton from './ChannelButton';
import VolumeButton from './VolumeButton';
import ChannelDirectionButton from './ChannelDirectionButton';
import PowerButton from './PowerButton';

function App() {
    const channelList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const channelElement = channelList.map((channelName) => 
        <ChannelButton key={channelName.toString()} channelNumber={channelName.toString()} />
    );
    return (
        <>
            <div className='container mx-auto py-3 px-3 max-w-2xl'>
                <PowerButton />
                <div className='grid grid-cols-3 gap-5'>
                    {channelElement}
                </div>
                <div className='grid grid-cols-2'>
                    <div className='grid grid-cols-1 px-20'>
                        <h3 className='mx-auto'>Volume</h3>
                        <VolumeButton direction='up' />
                        <VolumeButton direction='down' />
                    </div>
                    <div className='grid grid-cols-1 px-20'>
                        <h3 className='mx-auto'>Channel</h3>
                        <ChannelDirectionButton direction='up' />
                        <ChannelDirectionButton direction='down' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
