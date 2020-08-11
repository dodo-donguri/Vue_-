export const state = {
    channels: [
        {
            id: 'channel1',
            name: 'チャンネル1',
            messages: [ { id: 'mid_1', body: 'body1', date: '2020/8/11'}]
        },
        {
            id: 'channel2',
            name: 'チャンネル2',
            messages: [ { id: 'mid_2', body: 'body2', date: '2020/8/11'}]
        },
        {
            id: 'channel3',
            name: 'チャンネル3',
            messages: [ { id: 'mid_3', body: 'body3', date: '2020/8/11'}]
        },
    ],
    loading: {
        messages: false,
        channels: false,
        postMessages: false
    }
};