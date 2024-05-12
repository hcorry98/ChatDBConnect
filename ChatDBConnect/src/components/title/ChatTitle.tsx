import { FC } from 'react';

import './ChatTitle.css';

interface ChatTitleProps {
    title: string;
}

const ChatTitle: FC<ChatTitleProps> = ({ title }) => {
    return (
        <div id='chat-title'>
            <span>{ title }</span>
        </div>
    );
}

export default ChatTitle;