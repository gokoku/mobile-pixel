<script lang="ts">
  // @ts-ignore
  import _ from "lodash"
  // @ts-ignore
  import { deviceData } from "./data"
  import type { DeviceData, DeviceInfo } from "./data"

  class Device {

    static deviceInfo(deviceData: DeviceData, device: string) {
      const deviceInfo = {
        "name": _.get(deviceData, ["device", device, "name"]),
        "size": _.get(deviceData, ["device", device, "size"]),
        "pixel": _.get(deviceData, ["device", device, "pixel"]),
        "aspect": _.get(deviceData, ["device", device, "aspect"])
      }
      return deviceInfo
    }

    static deviceList(deviceData: DeviceData) {
      const allDevices = _.keys(_.get(deviceData, "device")) // ["iphone_7", "iphone_8"...] device id の配列
      const deviceInfos = _.map(allDevices, (device: string) => Device.deviceInfo(deviceData, device))
      return deviceInfos
    }
    static sizeList(deviceData: DeviceData) {
      const allDevices = _.get(deviceData, "device")
      const sizeList = _.map(allDevices, (device: DeviceInfo) => _.get(device, "size"))
      const uniqueSizeList = [... new Set(sizeList)]
      return uniqueSizeList
    }

    static searchDeviceByInch(deviceData: DeviceData, query: string) {
      const allDevices = _.get(deviceData, "device")
      const matchingDevices = _.filter(allDevices, (device: DeviceInfo) => _.get(device, "size").includes(query))
      return matchingDevices
    }

    static handleSelect(event: Event) {
      const query = (event.target as HTMLSelectElement)?.value
      devices = Device.searchDeviceByInch(deviceData, query)
    }
  }

  let devices = Device.deviceList(deviceData)

</script>




<main>
  <h1 class="text-3xl font-bold underline">Apple Device inch - pixel</h1>

  <select
    id="select-inch"
    class="mt-3 mb-2 p-2 bg-slate-200 rounded"
    on:change={Device.handleSelect}
    >
    <option value="" >inchを選択してください</option>
    {#each Device.sizeList(deviceData) as inch}
      <option value={inch}>{inch}inch</option>
    {/each}
  </select>

  <article class="grid-container mt-4">
  {#each devices as device}
    <section class="grid-item bg-yellow-300 rounded-lg p-4">
      <h2 class="text-xl font-bold mb-2">{_.get(device, ["name"])}</h2>
      <ul>
        <li class="bg-slate-50 rounded-full mt-1">{_.get(device, ["size"])}inch</li>
        <li class="bg-slate-50 rounded-full mt-1">{_.get(device, ["pixel"])}px</li>
        <li class="bg-slate-50 rounded-full mt-1">{_.get(device, ["aspect"])}</li>
      </ul>
    </section>
  {/each}
  </article>
</main>

<style>
  article.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }
  .grid-item li {
    text-align: center;
  }
</style>