import { useState } from 'react';

function App() {
  const [devices, setDevices] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchUsb = async () => {
    setIsFetching(true);
    try {
      const device = await navigator.usb.requestDevice({
        filters: [],
      });

      if (!devices.some((d) => d.vendorId === device.vendorId)) {
        setDevices([...devices, device]);
      }

    } catch (e) {
      alert(`Error fetching device: ${e.message}`);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className={'flex justify-center items-center h-screen'}>
      <div className="border p-4 w-1/2">
        <button className={'bg-slate-700 text-white py-2 px-4'}
                onClick={fetchUsb}>{isFetching ? 'Fetching...' : 'Request Devices'}</button>
        <hr className={'my-4'} />
        <table className={'w-full'}>
          <thead>
          <tr align={'left'}>
            <th>Product</th>
            <th>Manufacturer</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {devices.map((device, index) => (
            <tr className={'text-sm border-b  border-slate-500'} key={index}>
              <td className={'pr-4 py-2'}>{device.productName.trim()}</td>
              <td className={'pr-4 py-2'}>{device.manufacturerName.trim()}</td>
              <td className={'pr-4 py-2'}></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
