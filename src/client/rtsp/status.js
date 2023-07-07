export const RTSPStatus = {
    STATE_INITIAL: 1 << 0,
    STATE_OPTIONS: 1 << 1,
    STATE_DESCRIBE: 1 << 2,
    STATE_SETUP: 1 << 3,
    STATE_STREAMS: 1 << 4,
    STATE_TEARDOWN: 1 << 5,
    STATE_PLAY: 1 << 6,
    STATE_PLAYING: 1 << 7,
    STATE_PAUSE: 1 << 8,
    STATE_PAUSED: 1 << 9,
};

export class RTSPError extends Error {
    constructor(data) {
        super(data.msg);
        this.data = data;
    }
};
