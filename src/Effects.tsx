import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';
export function Effects(props: { sourceId: string }) {
    const [mesg, setMesg] = useState(-1);
    function mesage(msg: number) {
        return setMesg(msg);
    }
    useEffect(() => {
        subscribe(props.sourceId, mesage);
        return function cleanup() {
            unsubscribe(props.sourceId, mesage);
            setMesg(-1);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {mesg}
        </div>
    );
}
