Page({
  data: {
    item: 0,
    tab: 0,
    playIndex: 0,
    playList: [
    {
      id: '1',
      songName: 'song1',
      singer: 'singer1',
      poster: '../../assets/prototype.png',
      song: 'http://127.0.0.1:2080/uploads/upload_452bfb26abe382b2db964dad7e9934d5.mp3'
    },
    {
      id: '1',
      songName: 'song1',
      singer: 'singer1',
      poster: '../../assets/prototype.png',
      song: 'http://127.0.0.1:2080/uploads/upload_452bfb26abe382b2db964dad7e9934d5.mp3'
    },
    {
      id: '1',
      songName: 'song1',
      singer: 'singer1',
      poster: '../../assets/prototype.png',
      song: 'http://127.0.0.1:2080/uploads/upload_452bfb26abe382b2db964dad7e9934d5.mp3'
    },
    {
      id: '1',
      songName: 'song1',
      singer: 'singer1',
      poster: '../../assets/prototype.png',
      song: 'http://127.0.0.1:2080/uploads/upload_452bfb26abe382b2db964dad7e9934d5.mp3'
    },
    ],
    play: {
      songName: '',
      singer: '',
      poster: '',
      song: '',
      percent: 0,
      currentTime: '00:00',
      duration: 240,
    }
  },
  tabChangeHandle (e) {
    this.setData({
      item: e.target.dataset.item
    })
  },
  swiperChangeHandle (e) {
    this.setData({
      tab: e.detail.current
    })
  },
  // 调用音频API
  audioCtx: null,
  onReady: function () {
    this.audioCtx=wx.createIneerAudioContext()
    this.setMusic(0)
  },
  setMusic: function (index) {
    var music = this.data.playList[index]
    this.audioCtx = music.src
    this.setData({
      playIndex: index,
      'play.songName': music.songName,
      'play.singer': music.singer,
      'play.poster': music.poster,
      'play.percent': 0,
      'play.currentTime': '00:00',
      'play.duration': '00:00'
    })
    this.audioCtx.play()
  },
  onReady: function () {
    var audioCtx = wx.createIneerAudioContext()
    audioCtx.src='http://127.0.0.1:2080/uploads/upload_452bfb26abe382b2db964dad7e9934d5.mp3'
    audioCtx.onPlay( function () {
      console.log("开始播放");
    })

    audio.onError( function (res) {
      console.log(res.errCode);
      console.log(res.errMsg);
    })
    audio.play()
  }
})