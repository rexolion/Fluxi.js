export class Dispatcher {
    public events: any;

    constructor() {
        this.events = {};
    }

    public addListener(event: string, callback: (data?: any) => any) {

        // Check and push event to listeners array
        if (this.events[event] === undefined) {
            this.events[event] = {
                listeners: [],
            };
        }

        this.events[event].listeners.push(callback);
    }

    public removeListener(event: string, callback: (data?: any) => any) {

        // Check for existing
        if (this.events[event] === undefined) { throw Error; }

        this.events[event].listeners = this.events[event].listeners.filter((listener: string) => {
            return listener.toString() !== callback.toString();
        });
    }

    public dispatch(event: string, data?: any) {

        if (this.events[event] === undefined) { throw Error; }

        this.events[event].listeners.forEach((listener: any) => {
            listener(data);

        });

    }
}

