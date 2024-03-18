import ChatPanel from 'libs/components/src/lib/ChatPanel';
import { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../../context/SocketProvider';
import ReactPlayer from 'react-player';
import peer from '../../context/peer';
import { useChatRoomSelector } from '@store/chat-room';
import { selectChatRoomChatId, selectdataChatRoomData } from '@slice/chat-room';

export interface VideoRoomGuestProps {
  accessToken: string;
}

export const VideoRoomGuest = ({ accessToken }: VideoRoomGuestProps) => {
  const chatid = useChatRoomSelector(selectChatRoomChatId);
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  const socket = useSocket(accessToken);
  const [states, setState] = useState<Event[]>([]);

  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream>();

  console.log('remoteSocketId', remoteSocketId);
  console.log('remoteStream', remoteStream);

  const handleUserJoined = useCallback(({ email, id }: any) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    console.log('handleCallUser');
    const offer = await peer.getOffer();
    socket.emit('user:call', { to: remoteSocketId, offer });
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }: any) => {
      console.log('handleIncommingCall');
      setRemoteSocketId(from);
      console.log(`Incoming Call`, from, offer);
      const ans: RTCSessionDescriptionInit = await peer.getAnswer(offer);
      socket.emit('call:accepted', { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeeded = useCallback(async () => {
    console.log('handleNegoNeeded');
    const offer = await peer.getOffer();
    socket.emit('peer:nego:needed', { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener('negotiationneeded', handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener('negotiationneeded', handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }: any) => {
      console.log('handleNegoNeedIncomming');
      const ans: RTCSessionDescriptionInit = await peer.getAnswer(offer);
      socket.emit('peer:nego:done', { to: from, ans });
    },
    [socket]
  );

  type handleNegoNeedFinalType = {
    ans: RTCSessionDescriptionInit;
  };

  const handleNegoNeedFinal = useCallback(
    async ({ ans }: handleNegoNeedFinalType) => {
      console.log('handleNegoNeedFinal');
      await peer.setLocalDescription(ans);
    },
    []
  );

  useEffect(() => {
    peer.peer.addEventListener('track', async (ev: any) => {
      const remoteStream = ev.streams;
      console.log('GOT TRACKS!!');
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    const listener = (args: Event) => {
      setState((prevState) => [...prevState, args]);
      console.log('args', args);
    };
    socket.on('chat_updated', listener);
    socket.on('user:joined', handleUserJoined);
    socket.on('incomming:call', handleIncommingCall);
    socket.on('peer:nego:needed', handleNegoNeedIncomming);
    socket.on('peer:nego:final', handleNegoNeedFinal);

    return () => {
      socket.off('user:joined', handleUserJoined);
      socket.off('incomming:call', handleIncommingCall);
      socket.off('peer:nego:needed', handleNegoNeedIncomming);
      socket.off('peer:nego:final', handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  const join = (email: string, room: number) => {
    socket.emit('room:join', { email, room });
  };

  return (
    <ChatPanel>
      <div>
        <h1>Room Page</h1>
        {dataUser && (
          <button
            className="m-4 p-2 bg-slate-300 text-blue-800"
            onClick={() => join(String(dataUser.UserData.user.id), chatid)}
          >
            Click JOIN
          </button>
        )}
        <h4>{remoteSocketId ? 'Connected' : 'No one in room'}</h4>
        {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}
        {remoteStream && (
          <>
            <h1>Remote Stream</h1>
            <ReactPlayer
              playing
              muted
              height="auto"
              width="100%"
              url={remoteStream}
            />
          </>
        )}
      </div>
    </ChatPanel>
  );
};

export default VideoRoomGuest;
