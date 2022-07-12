input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_SendMessage(convertToText(pins.analogReadPin(AnalogPin.P0)), microIoT.TOPIC.topic_0)
    microIoT.microIoT_initDisplay()
    microIoT.microIoT_showUserText(0, "Light value:" + convertToText(pins.analogReadPin(AnalogPin.P0)))
})
function publish (num: number, text: string) {
    microIoT.microIoT_SendMessage(text, microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(num, "Send... " + text)
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "lmZB9bXGR"
let iot_pwd = "liWfrxXMgz"
let topic_0 = "qwPmNL37g"
microIoT.microIoT_initDisplay()
microIoT.microIoT_showUserText(0, "INIT DEVICE")
microIoT.microIoT_showUserText(1, "SETUP WIFI")
microIoT.microIoT_WIFI(wifi_name, password)
microIoT.microIoT_showUserText(2, "DEFINE MQTT")
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
publish(4, convertToText(randint(0, 20)))
publish(5, convertToText(randint(0, 20)))
publish(6, convertToText(randint(0, 20)))
