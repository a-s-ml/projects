import ChatPanel from 'libs/components/src/lib/ChatPanel';
import { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../../context/SocketProvider';
import ReactPlayer from 'react-player';
import peer from '../../context/peer';
import { useChatRoomSelector } from '@store/chat-room';
import { selectChatRoomChatId, selectdataChatRoomData } from '@slice/chat-room';

export interface VideoRoomMasterProps {
  accessToken: string;
}

export const VideoRoomMaster = ({ accessToken }: VideoRoomMasterProps) => {
  const chatid = useChatRoomSelector(selectChatRoomChatId);
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  const socket = useSocket(accessToken);
  const [states, setState] = useState<Event[]>([]);

  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState<MediaStream>();

  console.log('remoteSocketId', remoteSocketId);
  console.log('myStream', myStream);

  const handleUserJoined = useCallback(({ id }: any) => {
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    console.log('handleCallUser');
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit('user:call', { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }: any) => {
      console.log('handleIncommingCall');
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans: RTCSessionDescriptionInit = await peer.getAnswer(offer);
      socket.emit('call:accepted', { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    console.log('sendStreams');
    if (myStream) {
      for (const track of myStream.getTracks()) {
        peer.peer.addTrack(track, myStream);
      }
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }: any) => {
      console.log('handleCallAccepted');
      peer.setLocalDescription(ans);
      console.log('Call Accepted!');
      sendStreams();
    },
    [sendStreams]
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
    socket.emit('room:join', chatid);
  }, []);

  useEffect(() => {
    const listener = (args: Event) => {
      setState((prevState) => [...prevState, args]);
      console.log('args', args);
    };
    socket.on('chat_updated', listener);
    socket.on('user:joined', handleUserJoined);
    socket.on('incomming:call', handleIncommingCall);
    socket.on('call:accepted', handleCallAccepted);
    socket.on('peer:nego:needed', handleNegoNeedIncomming);
    socket.on('peer:nego:final', handleNegoNeedFinal);

    return () => {
      socket.off('user:joined', handleUserJoined);
      socket.off('incomming:call', handleIncommingCall);
      socket.off('call:accepted', handleCallAccepted);
      socket.off('peer:nego:needed', handleNegoNeedIncomming);
      socket.off('peer:nego:final', handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  const join = (email: string, room: number) => {
    socket.emit('room:join', { email, room });
  };

  return (
    <ChatPanel>
      <div>
        <h1>Стриммер</h1>
        <h4>{remoteSocketId ? 'Connected' : 'No one in room'}</h4>
        {myStream && <button onClick={sendStreams}>Send Stream</button>}
        {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}
        {myStream && (
          <>
            <h1>My Stream</h1>
            <ReactPlayer
              playing
              muted
              height="auto"
              width="100%"
              url={myStream}
            />
          </>
        )}
      </div>
    </ChatPanel>
  );
};

export default VideoRoomMaster;
