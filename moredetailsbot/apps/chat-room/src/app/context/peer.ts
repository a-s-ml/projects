class PeerService {
  peer: any;
  constructor() {
    if (!this.peer) {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            // urls: [
            //   "stun:stun.l.google.com:19302",
            //   "stun:global.stun.twilio.com:3478",
            // ],
            urls: ['stun:freestun.net:5350', 'turns:freestun.tel:5350'],
            username: 'free',
            credential: 'free',
          },
        ],
      });
    }
  }

  async getAnswer(offer: RTCSessionDescriptionInit) {
    if (this.peer) {
      await this.peer.setRemoteDescription(offer);
      const ans = await this.peer.createAnswer();
      await this.peer.setLocalDescription(new RTCSessionDescription(ans));
      return ans;
    }
  }

  async setLocalDescription(ans: RTCSessionDescriptionInit) {
    if (this.peer) {
      await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
    }
  }

  async getOffer() {
    if (this.peer) {
      const offer = await this.peer.createOffer();
      await this.peer.setLocalDescription(new RTCSessionDescription(offer));
      return offer;
    }
  }
}

export default new PeerService();
