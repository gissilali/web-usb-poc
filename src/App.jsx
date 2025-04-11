import './App.css'
import {useWorker} from "@koale/useworker";
import {detectUsb} from "./usb/index.js";

function App() {
  const [usbWorker] = useWorker(detectUsb)

  const fetchUsb = async () => {
    const _ = await usbWorker()
  }

  return (
    <>
      <h1>Usb Detector</h1>
      <button onClick={fetchUsb}>Click</button>
    </>
  )
}

export default App
