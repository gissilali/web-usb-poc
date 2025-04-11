export function detectUsb() {
  navigator.usb.getDevices().then((devices) => {
    console.log({ devices });
    devices.forEach((device) => {
      console.log(device.productName); // "Arduino Micro"
      console.log(device.manufacturerName); // "Arduino LLC"
    });
  });
  navigator.usb.addEventListener("connect", (event) => {
    console.log("device connected", event);
  });

  navigator.usb.addEventListener("disconnect", (event) => {
    console.log("device disconnected", event);
  });
}
