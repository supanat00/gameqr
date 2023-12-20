import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullscreen: true,
    };
  }

  componentDidMount() {
    // ตั้งค่าโหมด fullscreen อัติโนมัติ
    document.documentElement.requestFullscreen();
  }

  handleExitClick = () => {
    // ออกจากโหมด fullscreen เมื่อคลิกปุ่ม
    document.exitFullscreen();
  
    // ปิดเว็บแอพ
    window.close();
  };
  

  render() {
    const { isFullscreen } = this.state;
    return (
      <div className="App" style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 100,
      }}>
        {isFullscreen && (
          <button className="btn-exit"
            onClick={this.handleExitClick}
            style={{
              position: "fixed",
              top: '20px',
              left: '20px',
              zIndex: 101,
              background: "rgba(255, 0, 0, 0.3)",
              borderRadius: '50%',
              padding: '10px , 20px',
              cursor: 'pointer',
            }}
          >
            ออกจากโหมด fullscreen
          </button>
        )}
      </div>
    );
  }
}

export default App;
